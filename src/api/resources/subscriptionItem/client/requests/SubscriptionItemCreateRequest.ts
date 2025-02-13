/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         subscription: "subscription"
 *     }
 */
export interface SubscriptionItemCreateRequest {
    /** Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds. */
    billing_thresholds?: SubscriptionItemCreateRequest.BillingThresholds;
    /** The coupons to redeem into discounts for the subscription item. */
    discounts?: SubscriptionItemCreateRequest.Discounts;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /**
     * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
     *
     * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription’s invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
     *
     * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
     *
     * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
     */
    payment_behavior?: SubscriptionItemCreateRequest.PaymentBehavior;
    /** The identifier of the plan to add to the subscription. */
    plan?: string;
    /** The ID of the price object. */
    price?: string;
    /** Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. */
    price_data?: SubscriptionItemCreateRequest.PriceData;
    /** Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`. */
    proration_behavior?: SubscriptionItemCreateRequest.ProrationBehavior;
    /** If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint. */
    proration_date?: number;
    /** The quantity you'd like to apply to the subscription item you're creating. */
    quantity?: number;
    /** The identifier of the subscription to modify. */
    subscription: string;
    /** A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates. */
    tax_rates?: SubscriptionItemCreateRequest.TaxRates;
}

export namespace SubscriptionItemCreateRequest {
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
     */
    export type BillingThresholds =
        | {
              usage_gte: number;
          }
        | "";
    /**
     * The coupons to redeem into discounts for the subscription item.
     */
    export type Discounts =
        | {
              coupon?: string | undefined;
              discount?: string | undefined;
              promotion_code?: string | undefined;
          }[]
        | "";
    /**
     * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
     *
     * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription’s invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
     *
     * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
     *
     * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
     */
    export type PaymentBehavior =
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete";
    export const PaymentBehavior = {
        AllowIncomplete: "allow_incomplete",
        DefaultIncomplete: "default_incomplete",
        ErrorIfIncomplete: "error_if_incomplete",
        PendingIfIncomplete: "pending_if_incomplete",
    } as const;

    /**
     * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
     */
    export interface PriceData {
        /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
        currency: string;
        /** The ID of the product that this price will belong to. */
        product: string;
        /** The recurring components of a price such as `interval` and `interval_count`. */
        recurring: PriceData.Recurring;
        /** Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed. */
        tax_behavior?: PriceData.TaxBehavior;
        /** A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. */
        unit_amount?: number;
        /** Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set. */
        unit_amount_decimal?: string;
    }

    export namespace PriceData {
        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        export interface Recurring {
            /** Specifies billing frequency. Either `day`, `week`, `month` or `year`. */
            interval: Recurring.Interval;
            /** The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks). */
            interval_count?: number;
        }

        export namespace Recurring {
            /**
             * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
             */
            export type Interval = "day" | "month" | "week" | "year";
            export const Interval = {
                Day: "day",
                Month: "month",
                Week: "week",
                Year: "year",
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
    }

    /**
     * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
     */
    export type ProrationBehavior = "always_invoice" | "create_prorations" | "none";
    export const ProrationBehavior = {
        AlwaysInvoice: "always_invoice",
        CreateProrations: "create_prorations",
        None: "none",
    } as const;
    /**
     * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
     */
    export type TaxRates = string[] | "";
}
