/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface TaxProductResourceTaxCalculationShippingCost {
    /** The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount. */
    amount: number;
    /** The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
    amount_tax: number;
    /** The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object). */
    shipping_rate?: string;
    /** Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes. */
    tax_behavior: TaxProductResourceTaxCalculationShippingCost.TaxBehavior;
    /** Detailed account of taxes relevant to shipping cost. */
    tax_breakdown?: Stripe.TaxProductResourceLineItemTaxBreakdown[];
    /** The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping. */
    tax_code: string;
}

export namespace TaxProductResourceTaxCalculationShippingCost {
    /**
     * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
     */
    export type TaxBehavior = "exclusive" | "inclusive";
    export const TaxBehavior = {
        Exclusive: "exclusive",
        Inclusive: "inclusive",
    } as const;
}
