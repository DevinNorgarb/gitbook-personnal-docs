# Pelias From Scratch

These instructions will help you set up the Pelias geocoder from scratch. We strongly recommend using our Docker tools for your first Pelias installation: http://github.com/pelias/docker/

However, for more in-depth usage, or to learn more about the internals of Pelias, use this guide.

It assumes some knowledge of the command line and Node.js. If anything is confusing, please reach out — we'll help and improve the documentation.

## Installation Overview

These are the steps for fully installing Pelias:

{% stepper %}
{% step %}
### Check requirements

Verify that the hardware and software requirements are met:

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#system-requirements
{% endstep %}

{% step %}
### Decide which datasets to use and download them

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#choose-your-datasets
{% endstep %}

{% step %}
### Download the Pelias code

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#download-the-pelias-repositories
{% endstep %}

{% step %}
### Customize Pelias configuration file `~/pelias.json`

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#customize-pelias-config
{% endstep %}

{% step %}
### Install the Elasticsearch schema using pelias-schema

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#set-up-the-elasticsearch-schema
{% endstep %}

{% step %}
### Use one or more importers to load data into Elasticsearch

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#run-the-importers
{% endstep %}

{% step %}
### Install and start the Pelias services

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#install-and-start-the-pelias-services
{% endstep %}

{% step %}
### Start the API server to begin handling queries

https://github.com/pelias/documentation/blob/master/pelias\_from\_scratch.md#start-the-api
{% endstep %}
{% endstepper %}

***

## System Requirements

See the software requirements and ensure all of them are installed before moving forward:

https://github.com/pelias/documentation/blob/master/requirements.md

### Hardware recommendations

* At a minimum 50GB disk space to download, extract, and process data.
* 8GB RAM for a local build, 16GB+ for a full planet build. Pelias needs a little RAM for Elasticsearch, but much more for storing administrative data during import (https://github.com/pelias/wof-admin-lookup).
* As many CPUs as you can provide. Builds are highly parallelizable.

***

## Choose your datasets

Pelias can currently import data from four different sources, using five different importers. Only one dataset is required: Who's on First. This dataset is used to enrich all data imported into Pelias with administrative information. For more on this process, see the wof-admin-lookup documentation.

Note: You don't have to run the `whosonfirst` importer, but you do have to have Who's on First data available on disk for use by the other importers.

Overview of how to download each dataset:

### Who's on First

The Who's on First importer can download all the Who's on First data quickly and easily.

https://github.com/pelias/whosonfirst#downloading-the-data

### Geonames

The pelias/geonames importer contains code and instructions for downloading Geonames data automatically. Individual countries, or the entire planet (1.3GB compressed) can be specified.

https://github.com/pelias/geonames/#installation

### OpenAddresses

The Pelias OpenAddresses importer can download specific files from OpenAddresses:

https://github.com/pelias/openaddresses/#data-download

Additionally, the OpenAddresses project includes numerous download options:

https://results.openaddresses.io/

The full dataset is just over 6GB compressed (extracted ≈30GB), with numerous subdivision options.

### OpenStreetMap

OpenStreetMap (OSM) files should be in PBF format (.osm.pbf). Good sources:

* http://download.geofabrik.de/
* https://metro-extracts.nextzen.org/
* https://www.interline.io/osm/extracts/
* http://wiki.openstreetmap.org/wiki/Planet.osm

A full planet PBF file is about 41GB.

Street data (polylines): To download and import street data from OSM, a separate importer is used that operates on a preprocessed dataset derived from the OSM planet file.

***

## Installation

### Download the Pelias repositories

At a minimum, you'll need the following repositories:

{% stepper %}
{% step %}
### pelias/schema

https://github.com/pelias/schema/
{% endstep %}

{% step %}
### pelias/api and other Pelias services

https://github.com/pelias/api/
{% endstep %}

{% step %}
### Importer(s)

(e.g. whosonfirst, geonames, openaddresses, openstreetmap, polylines)
{% endstep %}
{% endstepper %}

Here's a bash snippet that will download all the repositories and install node module dependencies:

{% code title="clone-and-install.sh" %}
```
```
{% endcode %}

***

### Customize Pelias Config

Nearly all configuration for Pelias is driven through a single config file: `pelias.json`. By default, Pelias looks for this file in your home directory. For more details, see the pelias-config repository:

https://github.com/pelias/config

Where on the network to find Elasticsearch

Pelias defaults to Elasticsearch at `localhost:9200`. See the default config:

https://github.com/pelias/config/blob/master/config/defaults.json#L2

Example snippet:

{% code title="esclient example" %}
```
... // rest of config
```
{% endcode %}

You can change `localhost` and specify multiple hosts. The entire `esclient` section is sent to the elasticsearch-js module, so its options are valid.

Where to find the downloaded data files

The `imports` section defines settings for each importer. `adminLookup` has its own section and its value applies to all importers. Defaults:

{% code title="imports defaults" %}
```
```
{% endcode %}

Note: The datapath must be an absolute path. Change the defaults as needed.

***

### Install Elasticsearch

Refer to the official Elasticsearch install docs:

https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html

Be sure to modify the Elasticsearch heap size as appropriate:

https://www.elastic.co/guide/en/elasticsearch/guide/master/heap-sizing.html

Make sure Elasticsearch is running and connectable before continuing. Monitoring tools that can help:

* https://github.com/bleskes/sense (Sense)
* https://mobz.github.io/elasticsearch-head/ (head)
* https://www.elastic.co/products/marvel (Marvel)

***

### Set up the Elasticsearch Schema

Pelias requires specific configuration settings in Elasticsearch. With `pelias.json` configured, the schema repository can create the Pelias index.

Run:

{% code title="create index" %}
```
```
{% endcode %}

The Elasticsearch schema is analogous to a table layout in a relational DB. Pelias requires specific schema settings.

***

### Run the importers

Now that the schema is set up, begin importing data. For each importer:

{% code title="run importer" %}
```
```
{% endcode %}

Depending on how much data you've imported, this can take a while. You can expect up to \~7000 records per second per importer.

Imports can be run in any order and in parallel. Importers operate independently of what is already in Elasticsearch.

Aside: When to delete the data already in Elasticsearch

If you have previously run a build and want to start another, it's generally a good idea to delete the existing Pelias index and re-create it:

{% code title="drop and recreate index" %}
```
```
{% endcode %}

When in doubt, delete the index, re-create it, and start fresh.

The only time when restarting importers without deleting is recommended is if all the following are true:

{% stepper %}
{% step %}
### You are trying to re-import the exact same data again

For example, because the build failed, or you are testing changes to an importer. Pelias importers will not create duplicate records if importing the same data, however, they can't account for changes in the data itself.
{% endstep %}

{% step %}
### The Pelias schema has not changed

Elasticsearch has no concept similar to a schema migration; any schema changes require deleting and re-importing all data.
{% endstep %}

{% step %}
### You are not concerned with ensuring maximum performance

Elasticsearch internally deletes old versions of a record and creates a new one. Re-writing the same or similar documents repeatedly can create a larger Elasticsearch index with slightly worse performance.
{% endstep %}
{% endstepper %}

***

## Install and start the Pelias Services

Pelias is made up of several different services, each providing specific functionality.

The list of Pelias services describes each service and links to setup instructions:

https://github.com/pelias/documentation/blob/master/services.md

When in doubt, install everything except the interpolation engine (it requires a long download and build).

### Configure `pelias.json` for services

The Pelias API needs to know about each of the other services. Configure in `pelias.json`. Example to use all services running locally on default ports:

{% code title="api services in pelias.json" %}
```
```
{% endcode %}

### Start the API

Start the API:

{% code title="start api" %}
```
```
{% endcode %}

***

## Geocode with Pelias

Pelias should now be up and running and will respond to queries.

A request to http://localhost:3100 should display a link to the documentation.

Here are some queries to try:

* http://localhost:3100/v1/search?text=london — search for the city of London.
* http://localhost:3100/v1/autocomplete?text=londo — autocomplete for London (partial match).
* http://localhost:3100/v1/reverse?point.lon=-73.986027\&point.lat=40.748517 — reverse geocode near the Empire State Building.

For more information, see the documentation index:

https://github.com/pelias/documentation/blob/master/README.md

Happy geocoding!
