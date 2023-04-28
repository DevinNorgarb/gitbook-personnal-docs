---
description: >-
  https://docs.mapbox.com/help/getting-started/geocoding/#result-prioritization-in-reverse-geocoding
---

# Useful Mapbox Geocoding API Info

The [Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding) performs two main tasks: _forward geocoding_ and _reverse geocoding_. Forward geocoding converts text into geographic coordinates, for example, turning `2 Lincoln Memorial Circle NW` into `-77.050,38.889`. Reverse geocoding converts geographic coordinates into a text description, for example, turning `-77.050,38.889` into `2 Lincoln Memorial Circle NW`.

All geocoding requests require you to submit a _query_, or what you're trying to find. When you make a query, you get a _response_, a JSON-formatted document of the most relevant results from your query. This guide provides an overview of how the Geocoding API works, how to use it, how to provide feedback, and links to relevant documentation to get you started.

### Geocoding demo <a href="#geocoding-demo" id="geocoding-demo"></a>

In the demo below, you can type in a location to make a Geocoding API query view then view the response as raw JSON:

The demo uses the [Mapbox GL geocoder plugin](https://github.com/mapbox/mapbox-gl-geocoder) to add forward geocoding to a web app built with Mapbox GL JS.

Geocoding results are returned in [Carmen GeoJSON](https://github.com/mapbox/carmen/blob/master/carmen-geojson.md) format and contain both descriptive location information and geographic information.

You can use the geographic information returned in the JSON response to show your query on a map, like in this example, or do additional spatial analysis.

### How geocoding works <a href="#how-geocoding-works" id="how-geocoding-works"></a>

The [Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding) has two distinct parts: the **source data** we use to define locations and the **tools** we use to search for and return those locations.

#### Source data <a href="#source-data" id="source-data"></a>

The Mapbox Geocoding API contains [data sources](https://www.mapbox.com/about/maps/#data-sources) from governments, open data projects, and private companies. In some cases, results from the Geocoding API may differ from [Mapbox Streets](https://docs.mapbox.com/data/tilesets/reference/mapbox-streets-v8/) or OpenStreetMap data.

The Mapbox Geocoding API source data contains the following types of geographic information, ordered from the most granular to the largest:

* **Points of interest (POI):** A named place including commercial businesses, public buildings, monuments, and parks, among other features.
* **Address:** A specific mailing address, including the address number if applicable.
* **Neighborhood:** A colloquial name for a smaller area within a place. Neighborhoods do not necessarily have specific, legally defined boundaries. Only present in some countries.
* **Locality:** An administrative unit that is smaller than a place. Only present in some countries.
* **Postcode:** A geographic area of the address component used for sorting mail.
* **Place:** Cities, towns, and villages. Note that some large cities (such as Tokyo and Istanbul) may be categorized as regions rather than places.
* **District:** An administrative unit that is larger than a place but smaller than a region. Only present in some countries.
* **Region:** States, provinces, and prefectures. This is typically the largest sub-national administrative unit of a country. Note that some large cities (such as Tokyo and Istanbul) may be categorized as regions rather than places.
* **Country:** Generally recognized countries or, in some cases like Hong Kong, an area of quasi-national administrative status that has been given a designated country code under ISO 3166-1.

This hierarchy of feature types is also used to determine what will be returned as the encompassing parent features in a Geocoding API response object's [`context` property](https://docs.mapbox.com/api/search/#geocoding-response-object). For example, if the returned feature is a `place` (like Detroit), then the encompassing parent features in the `context` property will be the `region` (the state of Michigan) and the `country` (United States).

#### Tools <a href="#tools" id="tools"></a>

The Mapbox Geocoding API uses [Carmen](https://github.com/mapbox/carmen), an open source project for Mapnik vector tile-based geocoding. For more on Carmen, see [How does Carmen work?](https://github.com/mapbox/carmen#how-does-carmen-work).

#### Customizing your queries <a href="#customizing-your-queries" id="customizing-your-queries"></a>

The Mapbox Geocoding API accepts many optional parameters. You can use these optional parameters to customize your queries so that the most relevant results are returned. These parameters can be specified using URL query parameters, or they can be specified as options with one of our client-side libraries or plugins. These parameters allow you to view results as you type, filter results by geographic feature type, and limit or bias results to a specified area. For example, to limit your search results to addresses in the Washington DC Metro area, you could set the `type` parameter to `address` and the `bbox` parameter to `-77.08,38.90,-76.99,38.95`. With those parameters set, your query for `Constitution Ave` will only return street addresses in the DC Metro area, and will not include features you're not interested in (like `Constitution Ave, El Paso, Texas 79908, United States`).

Read the [Geocoding API documentation](https://docs.mapbox.com/api/search/#geocoding) for more information on available features.

#### Language support <a href="#language-support" id="language-support"></a>

The Mapbox Geocoding API accepts a `language` query parameter, which allows you to specify the language in which you would like to search. One or more languages can be specified using [ISO 639-1 codes](https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes). Translation availability varies by language and region, and you can expect more consistent results for areas where the specified language is most widely used. Language support has three different levels:

* **Global coverage.** These languages are almost always present for `country`, `region`, and prominent `place` features.
* **Local coverage.** These languages may lack global coverage, but they are almost always present for `country`, `region`, and prominent `place` features where they are widely used.
* **Limited coverage.** These languages are sometimes present, but coverage tends to be inconsistent or geographically constrained.

For a current list of the languages covered at each level, see the [Geocoding API documentation](https://docs.mapbox.com/api/search/#language-coverage).

#### Search result prioritization <a href="#search-result-prioritization" id="search-result-prioritization"></a>

Results from geocoding queries are prioritized differently depending on whether the request was a _forward geocode_ or a _reverse geocode_.

**Result prioritization in forward geocoding**

When a forward geocoding query (human-readable text like “San Francisco”) is submitted to the Mapbox Geocoding API, the geocoder uses Carmen, a text search engine, to search our spatial indexes for features that match the user’s query. (For a more detailed description of how the Carmen text search engine works, read the [Carmen documentation](https://github.com/mapbox/carmen/blob/master/docs/how-carmen-works.md).) The geocoder applies filters on the backend to sort the results that match, or partially match, the searched text. These filters are _textual relevance_ and _prominence score_.

**Textual relevance**

When the geocoder sorts and prioritizes results, the first filter that is applied is `relevance`. `relevance` is a value that indicates how well a feature in our dataset matches the query. This property is surfaced in the Geocoding API response, and is a numerical score from `0` (the result does not match the queried text at all) to `1` (the result matches the queried text most completely). You can use the `relevance` property to remove results that don't fully match the query.

In this example query for the address “515 15th St NW, Washington, DC 20004”, the expected result is first in the response with a `relevance` of `0.875`. Other results in other cities, since they don’t match the search text as closely, have a `relevance` score of `0.2`.

```
https://api.mapbox.com/geocoding/v5/mapbox.places/515%2015th%20St%20NW%2C%20Washington%2C%20DC%2020004.json?types=address&access_token=YOUR_MAPBOX_ACCESS_TOKEN
```

**Prominence score**

In the case that multiple features have the same `relevance` score, a second filter called `score` is applied. This is based on the popularity or prominence of a feature. For example, a search for “Paris” will equally match “Paris, France” and “Paris, Texas” — they’ll have the same `relevance` score. The `score` filter helps break this tie on the backend, and surfaces “Paris, France” first since it is a more popular feature:

```
https://api.mapbox.com/geocoding/v5/mapbox.places/paris.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN
```

[**Result prioritization in reverse geocoding**](broken-reference)

For reverse geocodes, results at a given set of coordinates are sorted by order of **spatial hierarchy**. For example, a more granular feature such as an `address`, `poi`, or `postcode` will return first in the response before feature types like `region` or `country`. The full spatial hierarchy, ordered from the most granular to the largest, is: _point of interest (POI)_, _address_, _neighborhood_, _locality_, _postcode_, _place_, _district_, _region_, and _country_. (For more details about these geographic information types, see the Source data section.)

This reverse geocoding query example returns features closest to the query point (in the case of point features like `address` and `poi`) and features that contain the query point (in the case of polygon features like `place` or `region`), in order of hierarchy from the most granular (address or POI) to the largest feature (country):

```
https://api.mapbox.com/geocoding/v5/mapbox.places/-122.463%2C%2037.7648.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN
```

### Access Mapbox geocoding services <a href="#access-mapbox-geocoding-services" id="access-mapbox-geocoding-services"></a>

You can access the Mapbox Geocoding API directly, through Mapbox Studio, or using one of several wrapper libraries to integrate it into applications across platforms.

#### Use the Mapbox Geocoding API <a href="#use-the-mapbox-geocoding-api" id="use-the-mapbox-geocoding-api"></a>

You can send requests to the Mapbox Geocoding API via many Mapbox mapping tools and plugins, but you can also make calls to the API directly using your preferred HTTP client. If you would like to make calls directly, read the [Geocoding API documentation](https://docs.mapbox.com/api/search/geocoding/). If you want to use one of our other tools, see the Libraries and plugins section of this guide.

#### Test the Geocoding API <a href="#test-the-geocoding-api" id="test-the-geocoding-api"></a>

If you would like to get a feel for how the Mapbox Geocoding API works without building a whole application, we also provide the [Geocoding API Playground](https://docs.mapbox.com/playground/geocoding/). Besides providing a convenient user interface to test queries, the API playground allows you to test the API's URL and query parameters, such as `autocomplete` or `proximity`.

[Visit the Search Playground](https://docs.mapbox.com/search-playground/)

#### Geocoding in Mapbox Studio <a href="#geocoding-in-mapbox-studio" id="geocoding-in-mapbox-studio"></a>

Mapbox Studio uses geocoding in the [dataset editor](https://studio.mapbox.com/datasets/). When you search for places in the dataset editor's toolbar, you're using the Mapbox Geocoding API to find data to add to your custom dataset. Within the dataset editor, you can search for and add countries, regions, districts, postcodes, places, localities, neighborhoods, and addresses, but not POIs.

#### Libraries and plugins <a href="#libraries-and-plugins" id="libraries-and-plugins"></a>

If you would like to add a search tool to your application to find addresses, POIs, or features near your user's location, we have several wrapper libraries that allow you to integrate the Mapbox Geocoding API into your existing application seamlessly:

* [Mapbox Search SDK for Android](https://docs.mapbox.com/android/search/guides/)
* [Mapbox Search SDK for iOS](https://docs.mapbox.com/ios/search/guides/)
* [Mapbox GL Geocoder](https://docs.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-geocoder) for Mapbox GL JS

Here's an example of the [Mapbox GL Geocoder](https://docs.mapbox.com/mapbox-gl-js/plugins/#mapbox-gl-geocoder) in a map created with Mapbox GL JS with the query parameter `autocomplete=true`:

To build a similar web application using Mapbox GL JS, explore the [Set a point after geocoder result](https://docs.mapbox.com/mapbox-gl-js/example/point-from-geocoder-result/) example.

#### Pricing <a href="#pricing" id="pricing"></a>

Use of the Geocoding API is billed by API requests. For more details, see the [Geocoding API pricing page](https://docs.mapbox.com/api/search/geocoding/#geocoding-api-pricing).

### Providing geocoding feedback <a href="#providing-geocoding-feedback" id="providing-geocoding-feedback"></a>

If you find an error or want to contribute map data, you can use our [Improve the map](https://www.mapbox.com/contribute/) tool.
