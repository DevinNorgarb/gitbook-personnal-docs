# Page 3

## Deck GL Time Frame Animations

In my [previous article](https://ckochis.com/deck-gl-layers), I cover a few different examples of using DeckGL with static data. But what if we want to see how data on a map will change over time?

In this article, I'm going to walk through creating an animated visualization of NYC Taxi trip data, similar to the example shown [here](https://deck.gl/examples/trips-layer/).

[**The Data**](https://ckochis.com/deck-gl-time-frame-animations#the-data)

The data we'll be using for this comes from the [NYC Tax Trip data](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page), but we'll be using a pre-formatted version from the VisGL team that can be found [here](https://github.com/visgl/deck.gl-data/tree/master/examples/trips).

Let's take a look at a single record from the dataset, which has three fields: vendor, path, and timestamps.

`{ "vendor": 0, "path": [ [ -74.20986, 40.81773 ], [ -74.20987, 40.81765 ], [ -74.20998, 40.81746 ], [ -74.21062, 40.81682 ], [ -74.21002, 40.81644 ], [ -74.21084, 40.81536 ], [ -74.21142, 40.8146 ], [ -74.20965, 40.81354 ], [ -74.21166, 40.81158 ], ... ], "timestamps": [ 1191, 1193.803, 1205.321, 1249.883, 1277.923, 1333.85, 1373.257, 1451.769, ... ] }`

The vendor field in this case is what we'll be using to key off of for color. More interestingly are the path and timestamp fields. In our dataset, there should be a corresponding timestamp for path entry. This is how the TripsLayer knows which point to draw, based on the current time of the map.

Another useful piece of information to know is the range of timestamp values in the dataset. For this example, we can see the range of timestamps in the trips data goes from 6..2486.

`const timestamps = trips.reduce( (ts, trip) => ts.concat(trip.timestamps), [] ); console.log('Min:', Math.min(...timestamps)); // 6 console.log('Max:', Math.max(...timestamps)); // 2486.511`

Knowing this range will be useful for figuring out how we'll step through the data.

[**Trips Layer**](https://ckochis.com/deck-gl-time-frame-animations#trips-layer)

For this visualization, we'll be using the [TripsLayer](https://deck.gl/docs/api-reference/geo-layers/trips-layer). It's a pretty standard DeckGL layer, with properties for accessing and styling the data. Let's take a look at a simple example.

`new TripsLayer({ id: 'trips', data: '/data/detailed-trips.json', getPath: d => d.path, getTimestamps: d => d.timestamps, getColor: d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]), opacity: 0.5, widthMinPixels: 3, rounded: true, trailLength: 150, currentTime: 0, }),`

However, if you were to render this Layer, you'd probably just see an empty map. The key in all of this is the currentTime variable. This variable tells DeckGL which path coordinate to render, based on the the corresponding timestamp.

See what happens in the example below as we adjust the time within the range we previously found from the data.

[© Mapbox](https://www.mapbox.com/about/maps/) [© OpenStreetMap](https://www.openstreetmap.org/about/) [Improve this map](https://apps.mapbox.com/feedback/?owner=mapbox\&id=light-v9\&access\_token=pk.eyJ1IjoiY2prb2NoaXMiLCJhIjoiY2tpbHprZGR5MG9rczJycW00ejR1NDE5MiJ9.1tDMOARjy02pYDsIirVJGg)Current Time: 0+ Show code

As we can see, even from the discrete coordinates of our path data, we get these nice smooth lines that run along each trip. The TripsLayer is doing some smoothing and extrapolating of the data along the path as we move through the timestamps, which makes for a more appealing visualization rather than just plotting the points.

[**Animate Trips**](https://ckochis.com/deck-gl-time-frame-animations#animate-trips)

If you don't want to your users to move sliders around all day, we can automate the stepping through time. A pretty simple approach would be to just use a setInterval to increment the current time.

`// variables const step = 1; const intervalMS = 20; const loopLength = 2500; const [time, setTime] = useState(0); useEffect(() => { const interval = setInterval(() => { setTime(t => (t + step) % loopLength); }, intervalMS); return () => clearInterval(interval); }, []);`[© Mapbox](https://www.mapbox.com/about/maps/) [© OpenStreetMap](https://www.openstreetmap.org/about/) [Improve this map](https://apps.mapbox.com/feedback/?owner=mapbox\&id=light-v9\&access\_token=pk.eyJ1IjoiY2prb2NoaXMiLCJhIjoiY2tpbHprZGR5MG9rczJycW00ejR1NDE5MiJ9.1tDMOARjy02pYDsIirVJGg)Current Time: 172+ Show code► Start

[**Using window.requestAnimationFrame**](https://ckochis.com/deck-gl-time-frame-animations#using-window.requestanimationframe)

Using setInterval works pretty well for most use cases, but if we're performing a lot of work, doing some very heavy visualizations during each interval, the animation will likely start to break down and become "choppy". This generally tends to happen if it takes longer to execute the loop than the interval (intervals will start getting backed up).

A better approach is to use the newer [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) function. I won't go into too much detail here since there's already a ton of [great resources](https://css-tricks.com/using-requestanimationframe/) available online, but essentially, it allows the browser to request the interval when it's ready (based on how long the previous loop took to render).

It's simple enough to convert our previous interval loop to use requestAnimationFrame, we just need make our animate function to re-call itself on the next animation frame, and kick off the call to animate in useEffect.

`1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 const [animation] = useState({}); const animate = () => { setTime(t => (t + step) % loopLength); animation.id = window.requestAnimationFrame(animate); // draw next frame }; useEffect(() => { if (!running) { window.cancelAnimationFrame(animation.id); return; } animation.id = window.requestAnimationFrame(animate); // start animation return () => window.cancelAnimationFrame(animation.id); }, [running]);`[© Mapbox](https://www.mapbox.com/about/maps/) [© OpenStreetMap](https://www.openstreetmap.org/about/) [Improve this map](https://apps.mapbox.com/feedback/?owner=mapbox\&id=light-v9\&access\_token=pk.eyJ1IjoiY2prb2NoaXMiLCJhIjoiY2tpbHprZGR5MG9rczJycW00ejR1NDE5MiJ9.1tDMOARjy02pYDsIirVJGg)Current Time: 649- Hide code`1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 import React, { useState, useEffect } from 'react'; import DeckGL from 'deck.gl'; import { TripsLayer } from '@deck.gl/geo-layers'; import { StaticMap } from 'react-map-gl'; const { assign } = Object; import { isMobile } from '../util/mobile'; import config from '../config'; const mapStyle = 'mapbox://styles/mapbox/light-v9'; const mapboxApiAccessToken = config('mapboxApiAccessToken'); const initialStyle = { position: "relative", width: "100%", height: "550px", border: "1px solid black", }; const mobileStyle = { height: "300px", } // Viewport settings const initialViewState = { latitude: 40.71460213064598, longitude: -73.97744746237277, zoom: 11.5, minZoom: 2, maxZoom: 15, pitch: 0, bearing: 0, }; const mobileViewState = { latitude: 40.72491632450353, longitude: -73.98669446445103, zoom: 11.38228886864759, }; const BLUE = [23, 184, 190]; const RED = [253, 128, 93]; // variables const step = 1; const loopLength = 2500; let loopRunning = false; const DeckGLTripsAnimateMap = ({ running }) => { const [style, setStyle] = useState(assign({}, initialStyle)); const [viewState, setViewState] = useState(initialViewState); const [time, setTime] = useState(0); const [animation] = useState({}); useEffect(() => { if (isMobile()) { setStyle(assign({}, initialStyle, mobileStyle)) setViewState(assign({}, initialViewState, mobileViewState)) } }, []); const animate = () => { if (loopRunning) { // use variable outside of closure to allow toggle setTime(t => (t + step) % loopLength); animation.id = window.requestAnimationFrame(animate); // draw next frame } }; useEffect(() => { if (!running) { loopRunning = false; window.cancelAnimationFrame(animation.id); return; } loopRunning = true; animation.id = window.requestAnimationFrame(animate); // start animation return () => { loopRunning = false; window.cancelAnimationFrame(animation.id); }; }, [running]); const layers = [ new TripsLayer({ id: 'trips', data: '/data/detailed-trips.json', getPath: d => d.path, getTimestamps: d => d.timestamps, getColor: d => (d.vendor === 0 ? RED : BLUE), opacity: 0.5, widthMinPixels: 3, rounded: true, trailLength: 180, currentTime: time, }), ]; return ( <DeckGL controller viewState={viewState} layers={layers} style={style} onViewStateChange={ (nextViewState) => { setViewState(nextViewState.viewState); } } > <StaticMap mapboxApiAccessToken={mapboxApiAccessToken} mapStyle={mapStyle}> <div style={{ margin: "0.5rem", fontFamily: "monospace", fontSize: "18px" }}> Current Time: {time} </div> </StaticMap> </DeckGL> ); } export default DeckGLTripsAnimateMap;`
