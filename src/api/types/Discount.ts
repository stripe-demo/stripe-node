/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
 * It contains information about when the discount began, when it will end, and what it is applied to.
 *
 * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
 */
export interface Discount {
    /** The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode. */
    checkout_session?: string;
    coupon: Stripe.Coupon;
    /** The ID of the customer associated with this discount. */
    customer?: Discount.Customer;
    /** If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null. */
    end?: number;
    /** The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array. */
    id: string;
    /** The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. */
    invoice?: string;
    /** The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. */
    invoice_item?: string;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "discount";
    /** The promotion code applied to create this discount. */
    promotion_code?: Discount.PromotionCode;
    /** Date that the coupon was applied. */
    start: number;
    /** The subscription that this coupon is applied to, if it is applied to a particular subscription. */
    subscription?: string;
    /** The subscription item that this coupon is applied to, if it is applied to a particular subscription item. */
    subscription_item?: string;
}

export namespace Discount {
    /**
     * The ID of the customer associated with this discount.
     */
    export type Customer = string | Stripe.Customer | Stripe.DeletedCustomer;
    /**
     * The promotion code applied to create this discount.
     */
    export type PromotionCode = string | Stripe.PromotionCode;
}
