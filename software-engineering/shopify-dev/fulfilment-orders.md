---
title: "Fulfillment Orders"
description: "Notes on Fulfillment Orders."
---

# Fulfillment Orders

**Fulfillment orders** model how Shopify splits an order into fulfillable groups per location and delivery method — the modern API for fulfillment apps.

## Source

- [About fulfillment services](https://shopify.dev/docs/apps/fulfillment/fulfillment-service-apps)
- [Migrate to fulfillment orders](https://shopify.dev/docs/apps/fulfillment/migrate-to-fulfillment-orders)

## Key objects

| Object | Role |
|--------|------|
| `Order` | Parent order with one or more fulfillment orders |
| `FulfillmentOrder` | Line items fulfilled from one location / delivery method |
| `FulfillmentOrderLineItem` | Quantities to fulfill per FO |
| `Fulfillment` | Shipment record (tracking, items) |
| `FulfillmentService` | 3PL / print-on-demand service with its own `Location` |

## Lifecycle (fulfillment service app)

1. Merchant or app submits a **fulfillment request** for an FO
2. Service **accepts** or **rejects** the request
3. Service creates **fulfillments** with tracking
4. Cancellation requests can flow both directions via dedicated webhooks

## Webhooks (selection)

- `fulfillment_orders/fulfillment_request_submitted`
- `fulfillment_orders/fulfillment_request_accepted` / `_rejected`
- `fulfillment_orders/cancelled`
- `fulfillment_orders/order_routing_complete`

## Split carts

Orders may include multiple delivery methods (ship + pickup). Iterate **all fulfillment orders** — never assume a single method per order.

## Related

- [Track orders through third-party marketplaces](./track-orders-placed-through-third-party-marketplaces.md)
- [Carrier Services](./carrier-services.md)
