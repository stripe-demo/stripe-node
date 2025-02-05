/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface CurrencyOption {
    /** When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links. */
    custom_unit_amount?: Stripe.CustomUnitAmount;
    /** Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed. */
    tax_behavior?: CurrencyOption.TaxBehavior;
    /** Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`. */
    tiers?: Stripe.PriceTier[];
    /** The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`. */
    unit_amount?: number;
    /** The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`. */
    unit_amount_decimal?: string;
}

export namespace CurrencyOption {
    /**
     * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
     */
    export type TaxBehavior = "exclusive" | "inclusive" | "unspecified";
    export const TaxBehavior = {
        Exclusive: "exclusive",
        Inclusive: "inclusive",
        Unspecified: "unspecified",
    } as const;
}
