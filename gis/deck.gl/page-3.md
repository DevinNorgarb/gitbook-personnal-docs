# Deck GL Time Frame Animations

##

### Introduction

In my previous article, I covered a few different examples of using DeckGL with static data. In this article, I will demonstrate creating an animated visualization of NYC Taxi trip data.

### The Data

We will use a pre-formatted version of the NYC Taxi Trip data from the VisGL team. A single record in the dataset contains three fields: `vendor`, `path`, and `timestamps`.

```json
{
  "vendor": 0,
  "path": [
    [-74.20986, 40.81773],
    [-74.20987, 40.81765],
    ...
  ],
  "timestamps": [1191, 1193.803, ...]
}
```

### Analysis of the Data

* The `vendor` field will be used for color differentiation.
* The `path` and `timestamp` fields are crucial for the TripsLayer to know which point to draw based on the map's current time.

### Trips Layer

We'll use the TripsLayer from DeckGL, defined as follows:

```javascript
new TripsLayer({
  id: 'trips',
  data: '/data/detailed-trips.json',
  getPath: d => d.path,
  getTimestamps: d => d.timestamps,
  getColor: d => (d.vendor === 0 ? [253, 128, 93] : [23, 184, 190]),
  opacity: 0.5,
  widthMinPixels: 3,
  rounded: true,
  trailLength: 150,
  currentTime: 0,
})
```

### Animate Trips

To automate the stepping through time, we can use a `setInterval` or `window.requestAnimationFrame`.

#### Using `setInterval`

```javascript
const [time, setTime] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setTime(t => (t + step) % loopLength);
  }, intervalMS);
  return () => clearInterval(interval);
}, []);
```

#### Using `window.requestAnimationFrame`

This method provides smoother animations and is more efficient for complex visualizations.

```javascript
const [animation] = useState({});
const animate = () => {
  setTime(t => (t + step) % loopLength);
  animation.id = window.requestAnimationFrame(animate);
};
useEffect(() => {
  if (!running) {
    window.cancelAnimationFrame(animation.id);
    return;
  }
  animation.id = window.requestAnimationFrame(animate);
  return () => window.cancelAnimationFrame(animation.id);
}, [running]);
```

### React Component Implementation

```javascript
import React, { useState, useEffect } from 'react';
import DeckGL from 'deck.gl';
import { TripsLayer } from '@deck.gl/geo-layers';
import { StaticMap } from 'react-map-gl';
const { assign } = Object;
import { isMobile } from '../util/mobile';
import config from '../config';

const mapStyle = 'mapbox://styles/mapbox/light-v9';
const mapboxApiAccessToken = config('mapboxApiAccessToken');

const initialStyle = {
    position: "relative",
    width: "100%",
    height: "550px",
    border: "1px solid black",
};

const mobileStyle = {
    height: "300px",
}

// Viewport settings
const initialViewState = {
    latitude: 40.71460213064598,
    longitude: -73.97744746237277,
    zoom: 11.5,
    minZoom: 2,
    maxZoom: 15,
    pitch: 0,
    bearing: 0,
};

const mobileViewState = {
    latitude: 40.72491632450353,
    longitude: -73.98669446445103,
    zoom: 11.38228886864759,
};

const BLUE = [23, 184, 190];
const RED = [253, 128, 93];

// variables
const step = 1;
const loopLength = 2500;
let loopRunning = false;

const DeckGLTripsAnimateMap = ({ running }) => {
    const [style, setStyle] = useState(assign({}, initialStyle));
    const [viewState, setViewState] = useState(initialViewState);
    const [time, setTime] = useState(0);
    const [animation] = useState({});

    useEffect(() => {
        if (isMobile()) {
            setStyle(assign({}, initialStyle, mobileStyle))
            setViewState(assign({}, initialViewState, mobileViewState))
        }
    }, []);

    const animate = () => {
        if (loopRunning) {
            // use variable outside of closure to allow toggle
            setTime(t => (t + step) % loopLength);
            animation.id = window.requestAnimationFrame(animate); // draw next frame
        }
    };

    useEffect(() => {
        if (!running) {
            loopRunning = false;
            window.cancelAnimationFrame(animation.id);
            return;
        }
        loopRunning = true;
        animation.id = window.requestAnimationFrame(animate); // start animation
        return () => {
            loopRunning = false;
            window.cancelAnimationFrame(animation.id);
        };
    }, [running]);

    const layers = [
        new TripsLayer({
            id: 'trips',
            data: '/data/detailed-trips.json',
            getPath: d => d.path,
            getTimestamps: d => d.timestamps,
            getColor: d => (d.vendor === 0 ? RED : BLUE),
            opacity: 0.5,
            widthMinPixels: 3,
            rounded: true,
            trailLength: 180,
            currentTime: time,
        }),
    ];

    return (
        <DeckGL
            controller
            viewState={viewState}
            layers={layers}
            style={style}
            onViewStateChange={
                (nextViewState) => {
                    setViewState(nextViewState.viewState);
                }
            }
        >
            <StaticMap mapboxApiAccessToken={mapboxApiAccessToken} mapStyle={mapStyle}>
                <div style={{ margin: "0.5rem", fontFamily: "monospace", fontSize: "18px" }}>
                    Current Time: {time}
                </div>
            </StaticMap>
        </DeckGL>
    );
}

export default DeckGLTripsAnimateMap;

```

<br>
