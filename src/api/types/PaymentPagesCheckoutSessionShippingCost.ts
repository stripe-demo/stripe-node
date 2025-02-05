/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentPagesCheckoutSessionShippingCost {
    /** Total shipping cost before any discounts or taxes are applied. */
    amount_subtotal: number;
    /** Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0. */
    amount_tax: number;
    /** Total shipping cost after discounts and taxes are applied. */
    amount_total: number;
    /** The ID of the ShippingRate for this order. */
    shipping_rate?: PaymentPagesCheckoutSessionShippingCost.ShippingRate;
    /** The taxes applied to the shipping rate. */
    taxes?: Stripe.LineItemsTaxAmount[];
}

export namespace PaymentPagesCheckoutSessionShippingCost {
    /**
     * The ID of the ShippingRate for this order.
     */
    export type ShippingRate = string | Stripe.ShippingRate;
}
