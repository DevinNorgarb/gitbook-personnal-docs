# Using the new MVT function in PostGIS

We ❤️ [vector tilesarrow-up-right](https://github.com/mapbox/awesome-vector-tiles). They’re a key part of our [modern open source spatial stackarrow-up-right](https://medium.com/nycplanninglabs/our-modern-foss-spatial-stack-9ff2e68a9f8f), and we’ve played around with several ways to generate them over the months. We’ve pulled them out of [Carto’s Maps APIarrow-up-right](https://carto.com/docs/carto-engine/maps-api/), even before they were a documented feature. We’ve built [simple tools cut them from geojsonarrow-up-right](https://github.com/NYCPlanning/geojson2mvt), and used [tilestrata to create them from shapefilesarrow-up-right](https://github.com/naturalatlas/tilestrata). We host our own [openmaptiles serverarrow-up-right](https://openmaptiles.org/) to serve up vector tiles with [openstreetmap dataarrow-up-right](https://www.openstreetmap.org/#map=5/38.007/-95.844).

We recently found ourselves setting up a new PostGIS-based data service, and trying to figure out the best way to serve vector tiles from it. In the past, vector tiles have involved some other layer of code to process and compress the raw spatial data that comes from the database.

![](<../../.gitbook/assets/image (7)>)

Prior to ST\_AsMVT(), you needed middleware or some other package to clip, build, and compress a vector tile from raw data

As of PostGIS 2.4.0, [`ST_AsMVT()`arrow-up-right](https://postgis.net/docs/ST_AsMVT.html) is a thing! 🎉 Now you can get a ready-to-consume vector tile right from the database, without another layer on top. What’s also great is that this works seamlessly with express, our technology of choice for building web APIs. This means we can build out a custom vector tile endpoint with just a few lines of JavaScript! (We found several great tutorials on using the new features, but none that specifically paired them with express and pg-promise, so here’s our contribution for others who may be using this stack). The new PostGIS feature cuts out the middle man!

![](<../../.gitbook/assets/image (8)>)

With ST\_AsMVT(), you can get ready-to-consume vector tiles right out of PostGIS!

Here’s a dirt-simple vector tile route. You hit the endpoint with your z/x/y tile ids, and get back a tile.

A few things to note:

* `ST_AsMVT()` works hand-in-hand with [`ST_AsMVTGeom()`arrow-up-right](https://postgis.net/docs/ST_AsMVTGeom.html), which clips the geometries at the tile edge—plus a tile buffer in the same units as the extent (see below).
* The subquery above gets us multiple rows of tile-ready geometries and their properties (or attributes for the GIS-minded), the the wrapping query uses `ST_AsMVT()`, which bundles it all up in a nice compressed tile in protocol buffer format.
* We must get the corners of the tile before we can call `ST_AsMVTGeom();` this is done in node using the [@mapbox/sphericalmercatorarrow-up-right](https://github.com/mapbox/sphericalmercator) package. The resulting coordinates are added to the SQL query as a bounding polygon using `ST_MakeEnvelope();`
* The `4096` you see in both `ST_AsMVT()` and `ST_AsMVTGeom()` is the tile’s extent, or the internal coordinate system of the tile. For more on why 4096 is the default for this, see this [github issue thread about itarrow-up-right](https://github.com/mapbox/vector-tiles/issues/45).
* We’re using pg-promise and async-await to run the query. If all goes well, we get a nice vector tile blob back, and can send it right out the door with `res.send()`. All that’s necessary is to set the response `Content-Type` header to `application/x-protobuf`.
* If the query yields no results because there are no geometries within the bounds of the requested tile, we return an HTTP 204 (no data). This prevents console warnings/errors in the client that’s consuming the vector tiles.

We were surprised at how quickly this approach “just worked”, and that the data returned from the database could just be sent back in the express response without any additional work. We had mapboxGL consuming our new tile endpoint in minutes!

Some things to keep tinkering with:

* So far we’ve only used this method to produce vector tiles with a single internal layer. Our next step will be to pack several internal layers into the same tile.
* There may be some efficiency gained if we can pipe/stream the data from the database into the response, especially for larger multi-layer tiles.

Thanks for reading! Have you used `ST_AsMVT()`? If you have pointers, pitfalls, or general comments, let us know on twitter at @nycplanninglabs.

Last updated 3 years ago
