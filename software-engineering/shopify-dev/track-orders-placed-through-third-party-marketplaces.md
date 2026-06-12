---
title: Track orders placed through third-party marketplaces
description: Shopify GraphQL Admin API workflow for Facebook/Google marketplace orders.
---

# Track orders placed through third-party marketplaces

Orders created through third-party marketplaces (Facebook, Google, etc.) use **Shopify Payments** as the processor. Fulfillment and payment capture behave differently from other channels.

## Source

- [Track orders placed on other platforms](https://shopify.dev/docs/apps/fulfillment/order-management-apps/third-party-marketplaces) — Shopify developer docs

## Requirements

- App can make authenticated **GraphQL Admin API** requests
- Store has unfulfilled orders to test against
- Familiarity with `FulfillmentOrder` objects
- [Protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data) met

## How marketplace orders differ

| Aspect | Third-party marketplace | Other channels |
|--------|----------------------|----------------|
| Transaction capture | After fulfillment (marketplace initiates capture) | Often captured before fulfillment |
| Immediate fulfillment | **No** — hold period ~30 min–24 h | Usually allowed immediately |
| During hold | Cannot change address, edit order, issue custom refunds, or manually capture | Normal order ops |

Hold period covers cancellation windows, payment authorization, and fraud review.

## Recommended workflow

### 1. Use fulfillment orders (not legacy Fulfillment API)

As of API **2022-07**, fulfill via `FulfillmentOrder` — not legacy `Order` + `Fulfillment` objects. Migrate before **2023-07**.

### 2. Identify the source channel

Review fields when fetching an order:

| Field | Shopify Payments | Facebook Payments |
|-------|------------------|-------------------|
| `displayFulfillmentStatus` | `ON_HOLD` | `UNFULFILLED` |
| `displayFinancialStatus` | `AUTHORIZED` | `PAID` |
| `paymentGatewayNames` | `["shopify_payments"]` | `["instagram"]` |

Use `source_name` (set at order creation only) to determine channel — **not** `gateway`, which may show `shopify_payments` even for Facebook-channel orders.

### 3. Decide if the order is fulfillable

| Check | Value | Webhook hints |
|-------|-------|---------------|
| `Order.displayFinancialStatus` | `AUTHORIZED` or `PAID` | `orders/updated` |
| `FulfillmentOrder.status` | `OPEN` | `fulfillment_orders/order_routing_complete`, `fulfillment_orders/scheduled_fulfillment_order_ready`, `fulfillment_orders/hold_released` |

> **Note:** `line_items.fulfillable_quantity` is `0` when a fulfillment order is on hold — do not use it alone. Check `FulfillmentOrder.status` before creating a fulfillment after `order/create`.

## Best practices

- **Do not** start fulfillments solely on `orders/create`, `order_transactions/create`, or `order/paid` — use `fulfillment_orders/ready_to_fulfill` (unstable API) and inspect `FulfillmentOrder` status.
- During the Facebook Payments → Shopify Payments transition, branch on `paymentGatewayNames` / gateway until all stores are migrated.
- Avoid fixed hold-duration assumptions — marketplace hold times vary.

## Next steps

- [Manage fulfillments as an order management app](https://shopify.dev/docs/apps/fulfillment/order-management-apps)
- [Migrate to fulfillment orders](https://shopify.dev/docs/apps/fulfillment/migrate-to-fulfillment-orders)
