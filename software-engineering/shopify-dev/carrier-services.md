---
title: Carrier Services
description: Shopify carrier-calculated shipping rates via app callback URL.
---

# Carrier Services

A **CarrierService** lets your Shopify app provide **real-time shipping rates** at checkout by responding to rate requests at a public `callback_url`.

## Source

- [CarrierService (REST Admin API)](https://shopify.dev/docs/api/admin-rest/latest/resources/carrierservice)
- Prefer **GraphQL Admin API** for new apps (REST legacy from Oct 2024)

## How it works

1. App registers a carrier service with `name`, `callback_url`, and `service_discovery`
2. At checkout Shopify **POSTs** cart origin, destination, items, and currency to your URL
3. Your server returns JSON `{ "rates": [ … ] }` with `service_name`, `service_code`, `total_price` (subunits), `currency`, optional delivery dates
4. Empty `rates` + 2xx = “cannot ship”; 4xx/5xx triggers backup rates

## Access requirements

- App scope: `write_shipping`
- Store must be Advanced Shopify+, Shopify annual with carrier feature, or a **development store**

## Rate limits & caching

- Dynamic timeouts: **10s / 5s / 3s** based on requests per minute per shop-app pair
- Shopify caches identical rate requests ~**15 minutes** (variant IDs, addresses, weights, box dimensions)

## Create example

```bash
curl -d '{"carrier_service":{"name":"My Rates","callback_url":"https://shipping.example.com/rates","service_discovery":true}}' \
  -X POST "https://{shop}.myshopify.com/admin/api/2026-01/carrier_services.json" \
  -H "X-Shopify-Access-Token: {token}" -H "Content-Type: application/json"
```

## Related

- [Shopify Dev](./README.md)
- [Fulfillment Orders](./fulfilment-orders.md)
