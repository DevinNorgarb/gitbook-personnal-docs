---
title: "Scrapers"
description: "Notes on Scrapers."
---

# Scrapers

Reference list of tools for extracting structured data from websites — from single-page fetch to large-scale crawl pipelines.

## Source

- [cassidoo/scrapers](https://github.com/cassidoo/scrapers) — original curated collection

## Python

| Library | Notes |
|---------|--------|
| [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/) | HTML/XML parsing; pairs with `requests` |
| [Scrapy](https://scrapy.org/) | Full crawl framework, pipelines, middlewares |
| [Playwright](https://playwright.dev/python/) | Headless browser automation |
| [Selenium](https://www.selenium.dev/) | Browser automation (heavier, widely used) |
| [httpx](https://www.python-httpx.org/) | Async HTTP client |
| [lxml](https://lxml.de/) | Fast XML/HTML parsing |

## Node.js

| Library | Notes |
|---------|--------|
| [Cheerio](https://cheerio.js.org/) | jQuery-like server-side HTML |
| [Puppeteer](https://pptr.dev/) | Chrome DevTools Protocol automation |
| [Playwright](https://playwright.dev/) | Cross-browser automation |

## Other

| Tool | Notes |
|------|--------|
| [Colly](https://go-colly.org/) | Go crawling framework |
| [Mechanize](https://github.com/sparklemotion/mechanize) | Ruby stateful browsing |
| [wget / curl](https://curl.se/) | Simple fetch and mirror |

## Practices

- Respect `robots.txt` and site Terms of Service
- Rate-limit and identify your bot with a contact User-Agent
- Prefer APIs and official feeds when available
- Cache responses; use incremental crawls for large sites

## Related

- [Web Scraping](./README.md)
