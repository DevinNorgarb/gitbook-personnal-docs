# pelias

![](<../../.gitbook/assets/image (9)>)

Pelias is a geocoder powered completely by open data, available freely to everyone.

[![](https://devthedev.gitbook.io/guides/~gitbook/image?url=https%3A%2F%2Fimg.shields.io%2Fgithub%2Flicense%2Fpelias%2Fapi%3Fstyle%3Dflat%26color%3Dorange\&width=300\&dpr=3\&quality=100\&sign=21ed443d\&sv=2)](https://en.wikipedia.org/wiki/MIT_License) [![](https://devthedev.gitbook.io/guides/~gitbook/image?url=https%3A%2F%2Fimg.shields.io%2Fdocker%2Fpulls%2Fpelias%2Fapi%3Fstyle%3Dflat%26color%3Dinformational\&width=300\&dpr=3\&quality=100\&sign=d054882e\&sv=2)](https://hub.docker.com/u/pelias) [![](https://devthedev.gitbook.io/guides/~gitbook/image?url=https%3A%2F%2Fimg.shields.io%2Fgitter%2Froom%2Fpelias%2Fpelias%3Fstyle%3Dflat%26color%3Dyellow\&width=300\&dpr=3\&quality=100\&sign=7ef5f381\&sv=2)](https://gitter.im/pelias/pelias)

Links:

* Local Installation: https://github.com/pelias/docker
* Cloud Webservice: https://geocode.earth/
* Documentation: https://github.com/pelias/documentation
* Community Chat: https://gitter.im/pelias/pelias

> A modular, open-source geocoder built on top of Elasticsearch for fast and accurate global search.

<details>

<summary>What is Pelias?</summary>

Pelias is a search engine for places worldwide, powered by open data. It turns addresses and place names into geographic coordinates, and turns geographic coordinates into places and addresses. With Pelias, you’re able to turn your users’ place searches into actionable geodata and transform your geodata into real places.

We think open data, open source, and open strategy win over proprietary solutions at any part of the stack and we want to ensure the services we offer are in line with that vision. We believe that an open geocoder improves over the long-term only if the community can incorporate truly representative local knowledge.

</details>

<details>

<summary>What’s a geocoder do anyway?</summary>

Geocoding is the process of taking input text, such as an address or the name of a place, and returning a latitude/longitude location on the Earth’s surface for that place.

![](<../../.gitbook/assets/image (10)>)

</details>

<details>

<summary>… and a reverse geocoder, what’s that?</summary>

Reverse geocoding is the opposite: returning a list of places near a given latitude/longitude point.

![](<../../.gitbook/assets/image (11)>)

</details>

<details>

<summary>What are the most interesting features of Pelias?</summary>

* Completely open-source and MIT licensed
* A powerful data import architecture: Pelias supports many open-data projects out of the box but also works great with private data
* Support for searching and displaying results in many languages
* Fast and accurate autocomplete for user-facing geocoding
* Support for many result types: addresses, venues, cities, countries, and more
* Modular design, so you don’t need to be an expert in everything to make changes
* Easy installation with minimal external dependencies

</details>

<details>

<summary>What are the main goals of the Pelias project?</summary>

* Provide accurate search results
* Work equally well for a small city and the entire planet
* Be highly configurable, so different use cases can be handled easily and efficiently
* Provide a friendly, welcoming, helpful community that takes input from people all over the world

</details>

<details>

<summary>Where did Pelias come from?</summary>

Pelias was created in 2014 as an early project at Mapzen (https://mapzen.com/). After Mapzen’s shutdown in 2017, Pelias is now part of the Linux Foundation (https://www.linuxfoundation.org/press-release/2019/01/mapzen-open-source-data-and-software-for-real-time-mapping-applications-to-become-a-linux-foundation-project/).

</details>

<details>

<summary>How does it work?</summary>

Like any geocoder, Pelias combines full text search techniques with geographic knowledge to quickly search over many millions of records, each representing some sort of location on Earth.

The Pelias architecture has three main components and several smaller pieces.

Data importers

* The importers filter, normalize, and ingest geographic datasets into the Pelias database. Currently there are six officially supported importers:
  * OpenStreetMap: https://github.com/pelias/openstreetmap/ — supports importing nodes and ways from OpenStreetMap (http://openstreetmap.org/)
  * OpenAddresses: https://github.com/pelias/openaddresses/ — supports importing global addresses from OpenAddresses (https://openaddresses.io/)
  * Who’s on First: https://github.com/pelias/whosonfirst/ — supports importing admin areas and venues from Who’s on First (https://www.whosonfirst.org/)
  * Geonames: https://github.com/pelias/geonames/ — supports importing admin records and venues from Geonames (http://www.geonames.org/)
  * Polylines: https://github.com/pelias/polylines — supports data in Google Polyline format (used to import roads from OSM)
  * CSV: https://github.com/pelias/csv-importer — supports importing any data in CSV format (good for custom/proprietary data)

You can also write custom importers. There is ongoing discussion about supporting additional datasets: https://github.com/pelias/pelias/issues/254

Database

* The underlying datastore is Elasticsearch (https://www.elastic.co/). Currently versions 6 and 7 are supported.
* pelias-schema: https://github.com/pelias/schema/ sets up Elasticsearch indices properly for Pelias.

Frontend services

* API: https://github.com/pelias/api — defines the Pelias API and talks to Elasticsearch or other services as needed.
* Placeholder: https://github.com/pelias/placeholder — captures relationships between administrative areas.
* PIP (point-in-polygon) service: https://github.com/pelias/pip-service — quickly determines which admin area polygons a point lies in.
* Libpostal service: https://github.com/pelias/libpostal-service — uses libpostal (https://github.com/openvenues/libpostal) for parsing addresses. Uses a Go service: https://github.com/whosonfirst/go-whosonfirst-libpostal.
* Interpolation: https://github.com/pelias/interpolation/ — supplements known addresses with estimated address results.

Dependencies

* model: https://github.com/pelias/model — library for creating documents that fit the Pelias Elasticsearch schema.
* wof-admin-lookup: https://github.com/pelias/wof-admin-lookup — admin lookup using point-in-polygon math.
* query: https://github.com/pelias/query — Elasticsearch query generation.
* config: https://github.com/pelias/config — reading and validating pelias.json configuration.
* dbclient: https://github.com/pelias/dbclient — Node.js stream library for importing records into Elasticsearch.

Helpful tools (not part of Pelias core)

* acceptance-tests: https://github.com/pelias/acceptance-tests — Node.js CLI for testing a full-planet build of Pelias.
* compare: https://github.com/pelias/compare — web tool for comparing different Pelias instances (reference: http://pelias.github.io/compare).
* dashboard: https://github.com/pelias/dashboard — web tool for providing statistics about a Pelias Elasticsearch index.

</details>

<details>

<summary>Documentation</summary>

The main documentation lives in the pelias/documentation repository: https://github.com/pelias/documentation

Additionally, the README file in each component repository provides more detail on that piece.

</details>

<details>

<summary>Here's an example API response for a reverse geocoding query</summary>

```javascript
$ curl -s "search.mapzen.com/v1/reverse?size=1&point.lat=40.74358294846026&point.lon=-73.99047374725342&api_key={YOUR_API_KEY}" | json

{
  "geocoding": {
    "attribution": "https://search.mapzen.com/v1/attribution",
    "engine": { "author": "Mapzen", "name": "Pelias", "version": "1.0" },
    "query": {
      "boundary.circle.lat": 40.74358294846026,
      "boundary.circle.lon": -73.99047374725342,
      "boundary.circle.radius": 500,
      "point.lat": 40.74358294846026,
      "point.lon": -73.99047374725342,
      "private": false,
      "querySize": 1,
      "size": 1
    },
    "timestamp": 1460736907438,
    "version": "0.1"
  },
  "type": "FeatureCollection",
  "features": [
    {
      "geometry": { "coordinates": [ -73.99051, 40.74361 ], "type": "Point" },
      "properties": {
        "borough": "Manhattan",
        "borough_gid": "whosonfirst:borough:421205771",
        "confidence": 0.9,
        "country": "United States",
        "country_a": "USA",
        "country_gid": "whosonfirst:country:85633793",
        "county": "New York County",
        "county_gid": "whosonfirst:county:102081863",
        "distance": 0.004,
        "gid": "geonames:venue:9851011",
        "id": "9851011",
        "label": "Arlington, Manhattan, NY, USA",
        "layer": "venue",
        "locality": "New York",
        "locality_gid": "whosonfirst:locality:85977539",
        "name": "Arlington",
        "neighbourhood": "Flatiron District",
        "neighbourhood_gid": "whosonfirst:neighbourhood:85869245",
        "region": "New York",
        "region_a": "NY",
        "region_gid": "whosonfirst:region:85688543",
        "source": "geonames"
      },
      "type": "Feature"
    }
  ],
  "bbox": [ -73.99051, 40.74361, -73.99051, 40.74361 ]
}
```

</details>

<details>

<summary>How can I install my own instance of Pelias?</summary>

To try out Pelias quickly, use the Docker setup: https://github.com/pelias/docker. It uses Docker and docker-compose to set up a Pelias instance for a small area (by default Portland, Oregon) in under 30 minutes.

</details>

<details>

<summary>Do you offer a free geocoding API?</summary>

You can sign up for a trial API key at Geocode Earth: https://geocode.earth/. A commercial service has been operated by the core development team behind Pelias since 2014 (previously at search.mapzen.com). Discounts and free plans are available for free and open-source software projects.

</details>

<details>

<summary>What’s it built with?</summary>

Pelias itself (import pipelines and API) is written in Node.js (https://nodejs.org/), making it accessible for developers and performant under heavy I/O. Some performance-critical components are written in Go (https://golang.org/), e.g., pbf2json: https://github.com/pelias/pbf2json.

Elasticsearch is used as the datastore for full text search, scalability, and geospatial support.

</details>

<details>

<summary>Contributing</summary>

We built Pelias as an open source project to involve the community. Reach out via:

* GitHub issues (component repos)
* Gitter: https://gitter.im/pelias/pelias
* Email: mailto:team@pelias.io
* Twitter: https://twitter.com/pelias\_geocoder

Good First Issues: https://github.com/search?q=org%3Apelias+label%3A%22good+first+issue%22\&type=issues

Meta repo issues: https://github.com/pelias/pelias/issues\
API service issues: https://github.com/pelias/api/issues\
Documentation issues: https://github.com/pelias/documentation

Current Pelias team on GitHub:

* https://github.com/missinglink
* https://github.com/orangejulius

Members emeritus:

* https://github.com/trescube
* https://github.com/dianashk
* https://github.com/randyme
* https://github.com/seejohnrun
* http://github.com/fdansv
* https://github.com/sevko
* https://github.com/hkrishna
* https://github.com/riordan
* https://github.com/avulfson17
* https://github.com/tigerlily-he

</details>
