# Modern FOSS Spatial Stack

At NYC Planning Labs, just about every project we take on involves some sort of [web mapping](https://en.wikipedia.org/wiki/Web_mapping). We’ve arrived at a [FOSS](https://wiki.osgeo.org/wiki/FOSS4G) Mapping stack that combines tried and true FOSS spatial technologies (PostGIS, Leaflet), with those on the cutting edge (Vector Tiles, GL Rendering). Read on to learn a bit more about our mapping stack, and how we use the various tools in our toolkit to produce world-class mapping applications.

Frontend

Most of our applications are [Ember](https://emberjs.com/) or [React](https://reactjs.org/) Single-Page Applications (SPAs). SPA architecture allows us to write client-facing applications that consume several backend services. We echo this approach in our spatial stack, using the open source mapping library mapboxGL to consume spatial data APIs, keeping presentation logic and configuration in the client.

[MapboxGL](https://www.mapbox.com/mapbox-gl-js/example/simple-map/) is a cutting-edge open source web mapping library that uses WebGL to render the map instead of the arrangements of images, divs, and SVGs found in traditional web mapping. There are numerous benefits of drawing everything on the map client-side using WebGL, the most important of which (to us, anyway) include:

![](../.gitbook/assets/image)

* Continuous/Incremental Zooming — Traditional web maps require a fixed zoom level, and usually need to re-render vectors and fetch new raster tiles when the user zooms in and out. Because it renders individual features continuously using WebGL, MapboxGL allows for smooth scrolling with the scroll wheel, and smooth fly-to animations.
* Camera Control & 3D — The map can be tilted and rotated, allowing users to come up with various [non-north-up views](https://chriswhong.github.io/doitt-tiles-mapboxgl/#14.04/40.7823/-73.9661/-61/27) that may better fit their needs. Features can be extruded and visualized as 3D objects (You can [see these in action in ZoLa’s 3d Buildings Layer](https://zola.planninglabs.nyc/?threed-buildings=true#15.33/40.6915/-73.9867/-13.6/60)).
* Granular Control of Style/Symbology — With MapboxGL , everything on the map is (usually) a vector, even the basemap. Layers are all defined with JSON objects that define things like opacity & color, and even include the ability to add zoom-dependent styles, filtering criteria, etc.

Packages have been built to get mapboxGL to play well with popular frontend frameworks. We’ve used and extended ember-mapbox-gl and react-mapbox-gl in our projects. In simpler projects we just use mapboxGL’s APIs natively.

Emberjs and LayerGroup Configs

In our more complex mapping applications, we end up needing to group many mapboxGL layers together, so that they can be shown and hidden together, or can have other UI built around them.

In [ZoLa](https://zola.planning.nyc.gov/), an emberjs app, our mapboxGL style configs live as part of a broader configuration object we’ve called a LayerGroup. Since they are just JSON, they are easy to compose and manipulate. The LayerGroup configuration can also contain:

* Metadata, for display on the About page
* Default Visibility
* Interactivity (tooltip definition and hover functionality)

We’ve built our own framework around MapboxGL and Ember, allowing us to build the complex layer palette you see in ZoLa, including custom UI for some layergroups, config-driven metadata, etc. (it’s baked into ZoLa, but someday we hope to split it out into its own open source package for others to use)

Here’s a layergroup config for NYC tax lots, including a categorical symbol layer for land use types:

{% code title="layergroup.js" %}
```javascript
export default {
  id: 'pluto',
  title: 'Tax Lots',
  titleTooltip: 'A tax lot is a parcel of land identified with a unique borough, block and lot number for property tax purposes.',
  meta: {
    description: 'MapPLUTO™ v17v1.1, Bytes of the Big Apple',
    url: ['https://www1.nyc.gov/site/planning/data-maps/open-data.page'],
    updated_at: '5 March 2018',
  },
  layers: [
    {
      layer: {
        id: 'pluto-fill',
        type: 'fill',
        source: 'pluto',
        minzoom: 15,
        'source-layer': 'pluto',
        paint: {
          'fill-outline-color': '#cdcdcd',
          'fill-color': {
            property: 'landuse',
            type: 'categorical',
            stops: [
              ['01', '#FEFFA8'],
              ['02', '#FCB842'],
              ['03', '#B16E00'],
              ['04', '#ff8341'],
              ['05', '#fc2929'],
              ['06', '#E362FB'],
              ['07', '#E0BEEB'],
              ['08', '#44A3D5'],
              ['09', '#78D271'],
              ['10', '#BAB8B6'],
              ['11', '#555555'],
            ],
            default: '#EEEEEE',
          },
          'fill-opacity': 0,
        },
      },
      highlightable: true,
      clickable: true,
      tooltipTemplate: '{{address}}',
    },
    {
      layer: {
        id: 'pluto-line',
        type: 'line',
        source: 'pluto',
        minzoom: 15,
        'source-layer': 'pluto',
        paint: {
          'line-width': 0.5,
          'line-color': 'rgba(130, 130, 130, 1)',
          'line-opacity': {
            stops: [
              [15, 0],
              [16, 1],
            ],
          },
        },
      },
    },
    {
      layer: {
        id: 'pluto-labels',
        type: 'symbol',
        source: 'pluto',
        'source-layer': 'pluto',
        minzoom: 15,
        layout: {
          'text-field': '{lot}',
          'text-font': [
            'Open Sans Regular',
            'Arial Unicode MS Regular',
          ],
          'text-size': 11,
        },
        paint: {
          'text-opacity': {
            stops: [
              [
                16.5,
                0,
              ],
              [
                17.5,
                1,
              ],
            ],
          },
          'icon-color': 'rgba(193, 193, 193, 1)',
          'text-color': 'rgba(154, 154, 154, 1)',
          'text-halo-color': 'rgba(152, 152, 152, 0)',
        },
      },
    },
  ],
};
```
{% endcode %}

Backend

MapboxGL is designed to work with [Vector Tiles](https://www.mapbox.com/vector-tiles/specification/), an open spec for encoding vector data into the same geographic quadrangles (tiles) used to create traditional raster tilesets. Vector tiles allow you to get vector data into the browser in smaller chunks, and they also allow for simplifying vector geometries when they are more detailed than is relevant for the current zoom level.

Of course, geoJSON is also supported, but when working with large NYC-scale datasets, our default approach is to turn them into vector tile services.

Anatomy of a Vector Tile

Vector tiles are defined using an xyz tile template: https://{domain}/{path}/{z}/{x}/{y}.mvt This template is used by MapboxGL to request the appropriate tiles for whatever is currently in view of the map pane.

The vector tiles are usually encoded using [protocol buffers](https://developers.google.com/protocol-buffers/), so their contents aren’t human-inspectable in the developer console. (We use maputnik to inspect vector tiles… see below)

A vector tile can contain many named layers. This is what allows Mapbox to serve all of the data used in the basemaps in a single “composite” vector tile service. One tile gets you many discrete datasets, each of which can be styled independently.

Carto

We use [Carto](https://carto.com/) as a bulk, read-only spatial database to power our apps. One of Carto’s strengths is instantly turning any shapefile into a web API-queryable PostGIS table (aka our “instant spatial backend”). The SQL and Maps APIs make it very easy to get both spatial and tabular data out of the database and into an application.

![](<../.gitbook/assets/image (1)>)

Carto recently added support for vector tiles to the Maps API, so we can now pull vector tiles from any table in carto and style them in MapboxGL. (Carto, a paid service, [is also open source](https://github.com/CartoDB/cartodb), and [can be built and run locally](https://github.com/chriswhong/docker-cartodb) if you’re brave enough to take on the challenge).

Mapbox OSM Vectors

So Carto helps us create vector tile services for our own NYC datasets, but how do we get the basemap? Mapbox provides a vector tile service with data from [OpenStreetMap](https://www.openstreetmap.org/), which includes all of the features you expect on a basemap: roads, highways, parks, neighborhood labels, political boundaries, waterways, building footprints, etc. (we even had the opportunity to [edit OSM and see the resulting change appear in Mapbox’s vector tile service a few days later](https://medium.com/nycplanninglabs/an-erroneous-basemap-label-and-how-openstreetmap-and-the-community-helped-us-fix-it-b2934e6d04fc))

Mapbox’s services also allow you to load your own data, and use their editor to style it, hosting ready-to-consume vector tile services and style configs.

![](<../.gitbook/assets/image (2)>)

Maputnik Dev Server

After spending a lot of time manually building mapboxGL styles, which can get quite complex, we yearned for a style editor that would provide a GUI for instantly trying color and opacity settings, rearranging layers, etc. Maputnik exists, and does exactly this for any mapboxGL-compatible style.

![](<../.gitbook/assets/image (3)>)

We took it a step further and created maputnik-dev-server, which allows us to bring up any mapboxGL map from our development environment in Maputnik (it saves the manual step of exporting the style to a JSON file and importing it into maputnik). This addition to our workflow has saved hours of work, and allows us to get into the weeds on zoom-specific symbology.

OpenMapTiles

We’ve recently been experimenting with hosting our own [OpenStreetMap](https://www.openstreetmap.org/) vector tiles for NYC and vicinity, and coming up with our own custom style that we use in our apps. [Klokan Technologies](https://klokantech.com/) has made it painless to quickly stand up a vector tile service for a small chunk of the world with the [OpenMapTiles project](https://openmaptiles.org/). OpenMapTiles is both a source of OSM data, and [a docker-friendly, simple tile hosting webserver](https://openmaptiles.com/server/?_ga=2.265445004.2017088398.1522432375-1830367770.1521742039).

Static Vector Tiles

Over the months, we’ve also experimented with cutting static vector tiles (instead of a web service building the tile on-demand from source data, tiles can be “cut” ahead of time and hosted in a directory structure on a plain old web server). We built [geojson2mvt](https://github.com/NYCPlanning/geojson2mvt) to help with the creation of static vector tiles from a geojson file, and have also used the tilelive node server. Many flavors abound, check out the [awesome vector tiles](https://github.com/mapbox/awesome-vector-tiles) repo for more FOSS vector tile projects.

Aerial Rasters

The good people over at the [DoITT GIS team](https://www1.nyc.gov/site/doitt/residents/gis-mapping.page) have [published aerial raster services in xyz format](https://maps.nyc.gov/tiles/), so they are easily consumable in modern web mapping libraries. They have aerial rasters dating back to 1924, all of which we recently made available in ZoLa.

![](<../.gitbook/assets/image (4)>)

Geocoding

We had been using Mapzen Search to power autocomplete address searching in our apps, but still had some issues based on the unique characteristics of NYC addresses. Our agency maintains an authoritative dataset of addresses, so we embarked on a project to create an autocomplete-compatible geocoder that used our own authoritative address data.

The result is [GeoSearch](https://geosearch.planninglabs.nyc/), which makes use of the open source [Pelias project](http://pelias.io/) (the technology behind Mapzen Search). GeoSearch is now in place in all of our apps, providing authoritative NYC address results.

![](<../.gitbook/assets/image (5)>)

(The Pelias project lives on! After Mapzen shut down at the end of 2017, the Pelias developers stood up [geocode.earth](https://geocode.earth/) to continue providing high-quality, open geocoding services)

Drawing

We use [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) to quickly add a drawing mode to our maps. We’ve customized it to build the linear and area measurement tools you see in [ZoLa](https://zola.planning.nyc.gov/), and [the radius selection tool in Population Factfinder](https://medium.com/nycplanninglabs/building-a-custom-draw-mode-for-mapbox-gl-draw-1dab71d143ee). It’s got great documentation, a plethora of events to tap into, and is easy to extend.

![](<../.gitbook/assets/image (6)>)

Open Source FTW!

Of course, every section in this post could be its own detailed deep dive. You can poke around [our repos on github](https://github.com/NYCPlanning?utf8=%E2%9C%93\&q=labs\&type=\&language=) to see more about how we put these tools to work in our apps. If you’re curious about any part of our open source spatial stack and want to know more, give us a yell on twitter [@nycplanninglabs](https://twitter.com/nycplanninglabs).

Thanks to Jonathan Pichot and Amanda Doyle

Last updated 3 years ago
