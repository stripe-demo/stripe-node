/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface InvoiceUpcomingLinesRequestInvoiceItemsItem {
    /** The integer amount in cents (or local equivalent) of previewed invoice item. */
    amount?: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Only applicable to new invoice items. */
    currency?: string;
    /** An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. */
    description?: string;
    /** Explicitly controls whether discounts apply to this invoice item. Defaults to true, except for negative invoice items. */
    discountable?: boolean;
    /** The coupons to redeem into discounts for the invoice item in the preview. */
    discounts?: InvoiceUpcomingLinesRequestInvoiceItemsItem.Discounts;
    /** The ID of the invoice item to update in preview. If not specified, a new invoice item will be added to the preview of the upcoming invoice. */
    invoiceitem?: string;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: InvoiceUpcomingLinesRequestInvoiceItemsItem.Metadata;
    /** The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details. */
    period?: InvoiceUpcomingLinesRequestInvoiceItemsItem.Period;
    /** The ID of the price object. One of `price` or `price_data` is required. */
    price?: string;
    /** Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required. */
    price_data?: InvoiceUpcomingLinesRequestInvoiceItemsItem.PriceData;
    /** Non-negative integer. The quantity of units for the invoice item. */
    quantity?: number;
    /** Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed. */
    tax_behavior?: InvoiceUpcomingLinesRequestInvoiceItemsItem.TaxBehavior;
    /** A [tax code](https://stripe.com/docs/tax/tax-categories) ID. */
    tax_code?: InvoiceUpcomingLinesRequestInvoiceItemsItem.TaxCode;
    /** The tax rates that apply to the item. When set, any `default_tax_rates` do not apply to this item. */
    tax_rates?: InvoiceUpcomingLinesRequestInvoiceItemsItem.TaxRates;
    /** The integer unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount. */
    unit_amount?: number;
    /** Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set. */
    unit_amount_decimal?: string;
}

export namespace InvoiceUpcomingLinesRequestInvoiceItemsItem {
    /**
     * The coupons to redeem into discounts for the invoice item in the preview.
     */
    export type Discounts =
        | {
              coupon?: string | undefined;
              discount?: string | undefined;
              promotion_code?: string | undefined;
          }[]
        | "";
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";

    /**
     * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
     */
    export interface Period {
        /** The end of the period, which must be greater than or equal to the start. This value is inclusive. */
        end: number;
        /** The start of the period. This value is inclusive. */
        start: number;
    }

    /**
     * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
     */
    export interface PriceData {
        /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
        currency: string;
        /** The ID of the product that this price will belong to. */
        product: string;
        /** Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed. */
        tax_behavior?: PriceData.TaxBehavior;
        /** A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. */
        unit_amount?: number;
        /** Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set. */
        unit_amount_decimal?: string;
    }

    export namespace PriceData {
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

    /**
     * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
     */
    export type TaxBehavior = "exclusive" | "inclusive" | "unspecified";
    export const TaxBehavior = {
        Exclusive: "exclusive",
        Inclusive: "inclusive",
        Unspecified: "unspecified",
    } as const;
    /**
     * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
     */
    export type TaxCode = string | "";
    /**
     * The tax rates that apply to the item. When set, any `default_tax_rates` do not apply to this item.
     */
    export type TaxRates = string[] | "";
}
