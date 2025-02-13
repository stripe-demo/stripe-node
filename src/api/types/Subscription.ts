/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Subscriptions allow you to charge a customer on a recurring basis.
 *
 * Related guide: [Creating subscriptions](https://stripe.com/docs/billing/subscriptions/creating)
 */
export interface Subscription {
    /** ID of the Connect Application that created the subscription. */
    application?: Subscription.Application;
    /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. */
    application_fee_percent?: number;
    automatic_tax: Stripe.SubscriptionAutomaticTax;
    /** The reference point that aligns future [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle) dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals. The timestamp is in UTC format. */
    billing_cycle_anchor: number;
    /** The fixed values used to calculate the `billing_cycle_anchor`. */
    billing_cycle_anchor_config?: Stripe.SubscriptionsResourceBillingCycleAnchorConfig;
    /** Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period */
    billing_thresholds?: Stripe.SubscriptionBillingThresholds;
    /** A date in the future at which the subscription will automatically get canceled */
    cancel_at?: number;
    /** Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period. */
    cancel_at_period_end: boolean;
    /** If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state. */
    canceled_at?: number;
    /** Details about why this subscription was cancelled */
    cancellation_details?: Stripe.CancellationDetails;
    /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. */
    collection_method: Subscription.CollectionMethod;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created. */
    current_period_end: number;
    /** Start of the current period that the subscription has been invoiced for. */
    current_period_start: number;
    /** ID of the customer who owns the subscription. */
    customer: Subscription.Customer;
    /** Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`. */
    days_until_due?: number;
    /** ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source). */
    default_payment_method?: Subscription.DefaultPaymentMethod;
    /** ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source). */
    default_source?: Subscription.DefaultSource;
    /** The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription. */
    default_tax_rates?: Stripe.TaxRate[];
    /** The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs. */
    description?: string;
    /** Describes the current discount applied to this subscription, if there is one. When billing, a discount applied to a subscription overrides a discount applied on a customer-wide basis. This field has been deprecated and will be removed in a future API version. Use `discounts` instead. */
    discount?: Stripe.Discount;
    /** The discounts applied to the subscription. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount. */
    discounts: Subscription.Discounts.Item[];
    /** If the subscription has ended, the date the subscription ended. */
    ended_at?: number;
    /** Unique identifier for the object. */
    id: string;
    invoice_settings: Stripe.SubscriptionsResourceSubscriptionInvoiceSettings;
    /** List of subscription items, each with an attached price. */
    items: Subscription.Items;
    /** The most recent invoice this subscription has generated. */
    latest_invoice?: Subscription.LatestInvoice;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata: Record<string, string>;
    /** Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. */
    next_pending_invoice_item_invoice?: number;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "subscription";
    /** The account (if any) the charge was made on behalf of for charges associated with this subscription. See the Connect documentation for details. */
    on_behalf_of?: Subscription.OnBehalfOf;
    /** If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment). */
    pause_collection?: Stripe.SubscriptionsResourcePauseCollection;
    /** Payment settings passed on to invoices created by the subscription. */
    payment_settings?: Stripe.SubscriptionsResourcePaymentSettings;
    /** Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval. */
    pending_invoice_item_interval?: Stripe.SubscriptionPendingInvoiceItemInterval;
    /** You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2). */
    pending_setup_intent?: Subscription.PendingSetupIntent;
    /** If specified, [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid. */
    pending_update?: Stripe.SubscriptionsResourcePendingUpdate;
    /** The schedule attached to the subscription */
    schedule?: Subscription.Schedule;
    /** Date when the subscription was first created. The date might differ from the `created` date due to backdating. */
    start_date: number;
    /**
     * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`.
     *
     * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this status can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` status. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal status, the open invoice will be voided and no further invoices will be generated.
     *
     * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
     *
     * A subscription can only enter a `paused` status [when a trial ends without a payment method](https://stripe.com/docs/billing/subscriptions/trials#create-free-trials-without-payment). A `paused` subscription doesn't generate invoices and can be resumed after your customer adds their payment method. The `paused` status is different from [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment), which still generates invoices and leaves the subscription's status unchanged.
     *
     * If subscription `collection_method=charge_automatically`, it becomes `past_due` when payment is required but cannot be paid (due to failed payment or awaiting additional user actions). Once Stripe has exhausted all payment retry attempts, the subscription will become `canceled` or `unpaid` (depending on your subscriptions settings).
     *
     * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
     */
    status: Subscription.Status;
    /** ID of the test clock this subscription belongs to. */
    test_clock?: Subscription.TestClock;
    /** The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices. */
    transfer_data?: Stripe.SubscriptionTransferData;
    /** If the subscription has a trial, the end of that trial. */
    trial_end?: number;
    /** Settings related to subscription trials. */
    trial_settings?: Stripe.SubscriptionsTrialsResourceTrialSettings;
    /** If the subscription has a trial, the beginning of that trial. */
    trial_start?: number;
}

export namespace Subscription {
    /**
     * ID of the Connect Application that created the subscription.
     */
    export type Application = string | Stripe.Application | Stripe.DeletedApplication;
    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
     */
    export type CollectionMethod = "charge_automatically" | "send_invoice";
    export const CollectionMethod = {
        ChargeAutomatically: "charge_automatically",
        SendInvoice: "send_invoice",
    } as const;
    /**
     * ID of the customer who owns the subscription.
     */
    export type Customer = string | Stripe.Customer | Stripe.DeletedCustomer;
    /**
     * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
     */
    export type DefaultPaymentMethod = string | Stripe.PaymentMethod;
    /**
     * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
     */
    export type DefaultSource = string | Stripe.PaymentSource;
    export type Discounts = Discounts.Item[];

    export namespace Discounts {
        export type Item = string | Stripe.Discount;
    }

    /**
     * List of subscription items, each with an attached price.
     */
    export interface Items {
        /** Details about each object. */
        data: Stripe.SubscriptionItem[];
        /** True if this list has another page of items after this one that can be fetched. */
        has_more: boolean;
        /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
        object: "list";
        /** The URL where this list can be accessed. */
        url: string;
    }

    /**
     * The most recent invoice this subscription has generated.
     */
    export type LatestInvoice = string | Stripe.Invoice;
    /**
     * The account (if any) the charge was made on behalf of for charges associated with this subscription. See the Connect documentation for details.
     */
    export type OnBehalfOf = string | Stripe.Account;
    /**
     * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
     */
    export type PendingSetupIntent = string | Stripe.SetupIntent;
    /**
     * The schedule attached to the subscription
     */
    export type Schedule = string | Stripe.SubscriptionSchedule;
    /**
     * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`.
     *
     * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this status can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` status. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal status, the open invoice will be voided and no further invoices will be generated.
     *
     * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
     *
     * A subscription can only enter a `paused` status [when a trial ends without a payment method](https://stripe.com/docs/billing/subscriptions/trials#create-free-trials-without-payment). A `paused` subscription doesn't generate invoices and can be resumed after your customer adds their payment method. The `paused` status is different from [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment), which still generates invoices and leaves the subscription's status unchanged.
     *
     * If subscription `collection_method=charge_automatically`, it becomes `past_due` when payment is required but cannot be paid (due to failed payment or awaiting additional user actions). Once Stripe has exhausted all payment retry attempts, the subscription will become `canceled` or `unpaid` (depending on your subscriptions settings).
     *
     * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
     */
    export type Status =
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "paused"
        | "trialing"
        | "unpaid";
    export const Status = {
        Active: "active",
        Canceled: "canceled",
        Incomplete: "incomplete",
        IncompleteExpired: "incomplete_expired",
        PastDue: "past_due",
        Paused: "paused",
        Trialing: "trialing",
        Unpaid: "unpaid",
    } as const;
    /**
     * ID of the test clock this subscription belongs to.
     */
    export type TestClock = string | Stripe.TestHelpersTestClock;
}
