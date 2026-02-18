# Pelias Geocoder

[![](<../../.gitbook/assets/image (46)>)](https://raw.githubusercontent.com/pelias/design/master/logo/pelias_github/Github_markdown_hero.png)

[**hashtag**](./#a-modular-open-source-search-engine-for-our-world) **A modular, open-source search engine for our world.**

Pelias is a geocoder powered completely by open data, available freely to everyone.

[![](https://devthedev.gitbook.io/guides/~gitbook/image?url=https%3A%2F%2Fcamo.githubusercontent.com%2F74cadc0f6e1f2b9d0386d40e4dfa47a73184b33bbcac8987ec027455e2238d52%2F68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f70656c6961732f6170693f7374796c653d666c617426636f6c6f723d6f72616e6765\&width=300\&dpr=3\&quality=100\&sign=eb2f9569\&sv=2)](https://en.wikipedia.org/wiki/MIT_License) [![](https://devthedev.gitbook.io/guides/~gitbook/image?url=https%3A%2F%2Fcamo.githubusercontent.com%2Ffc6e5009dc1c4a8aa73ba3b7b2ef1c591ed6036f5d6294d2549ec04cbbd2c4f7%2F68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f70756c6c732f70656c6961732f6170693f7374796c653d666c617426636f6c6f723d696e666f726d6174696f6e616c\&width=300\&dpr=3\&quality=100\&sign=5052da16\&sv=2)](https://hub.docker.com/u/pelias) [![](https://devthedev.gitbook.io/guides/~gitbook/image?url=https%3A%2F%2Fcamo.githubusercontent.com%2F7db7ba842eb3e6673459b555286f6222f396849704d97a24c59bae3468cfe4e0%2F68747470733a2f2f696d672e736869656c64732e696f2f6769747465722f726f6f6d2f70656c6961732f70656c6961733f7374796c653d666c617426636f6c6f723d79656c6c6f77\&width=300\&dpr=3\&quality=100\&sign=f2fda1e8\&sv=2)](https://gitter.im/pelias/pelias)

Local Installation: https://github.com/pelias/docker · Cloud Webservice: https://geocode.earth/ · Documentation: https://github.com/pelias/documentation · Community Chat: https://gitter.im/pelias/pelias

What is Pelias?

Pelias is a search engine for places worldwide, powered by open data. It turns addresses and place names into geographic coordinates, and turns geographic coordinates into places and addresses. With Pelias, you’re able to turn your users’ place searches into actionable geodata and transform your geodata into real places.

We think open data, open source, and open strategy win over proprietary solutions at any part of the stack and we want to ensure the services we offer are in line with that vision. We believe that an open geocoder improves over the long-term only if the community can incorporate truly representative local knowledge.

### Pelias Documentation

Here is where you can find all documentation for the [Pelias geocoder](https://github.com/pelias/pelias/).

### Core Features and API Documentation

Endpoint descriptions

* [Forward geocoding](https://github.com/pelias/documentation/blob/master/search.md) (/v1/search) — find a place by searching for an address or name
* [Reverse geocoding](https://github.com/pelias/documentation/blob/master/reverse.md) (/v1/reverse) — find what is located at a certain coordinate location
* [Autocomplete](https://github.com/pelias/documentation/blob/master/autocomplete.md) (/v1/autocomplete) — give real-time result suggestions without having to type the whole location
* [Structured Geocoding](https://github.com/pelias/documentation/blob/master/structured-geocoding.md) (/v1/search/structured) (beta) — find a place with data already separated into housenumber, street, city, etc
* [Place endpoint](https://github.com/pelias/documentation/blob/master/place.md) (/v1/place) — details on a place returned from a previous query

_Not sure which Endpoint to use? We have a_ [page](https://github.com/pelias/documentation/blob/master/search-workflows.md) _for that_

Query parameters and options

* [Global coverage with prioritized local results](https://github.com/pelias/documentation/blob/master/search.md#prioritize-results-by-proximity)
* [Language support](https://github.com/pelias/documentation/blob/master/language-codes.md) — see results in different languages

Response Properties

* [Full list of response properties](https://github.com/pelias/documentation/blob/master/response.md)
* [Confidence scores, match\_types and other tools for determining result quality](https://github.com/pelias/documentation/blob/master/result_quality.md)

### Data Sources

* [Pelias data sources](https://github.com/pelias/documentation/blob/master/data-sources.md)

### Running your own Pelias

* [Getting started](https://github.com/pelias/documentation/blob/master/getting_started_install.md) — Start here if you're looking to install Pelias
* [Pelias from scratch](https://github.com/pelias/documentation/blob/master/pelias_from_scratch.md) — More in-depth instructions for installing Pelias
* [Full planet build considerations](https://github.com/pelias/documentation/blob/master/full_planet_considerations.md) — Special information on running a full planet Pelias build
* [Service descriptions](https://github.com/pelias/documentation/blob/master/services.md) — A description of all the Pelias services, and when they are used
* [Software Requirements](https://github.com/pelias/documentation/blob/master/requirements.md) — A list of all software requirements for Pelias

### Pelias project development

* [Release notes](https://github.com/pelias/documentation/blob/master/release-notes.md) — See notable changes in Pelias over time
* [Development roadmap](https://github.com/pelias/documentation/blob/master/development/roadmap.md) — Plans for future improvements to Pelias

### Misc

* [Glossary of common terms](https://github.com/pelias/documentation/blob/master/glossary.md)

Last updated 3 years ago
