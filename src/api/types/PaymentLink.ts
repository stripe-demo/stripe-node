/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * A payment link is a shareable URL that will take your customers to a hosted payment page. A payment link can be shared and used multiple times.
 *
 * When a customer opens a payment link it will open a new [checkout session](https://stripe.com/docs/api/checkout/sessions) to render the payment page. You can use [checkout session events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed) to track payments through payment links.
 *
 * Related guide: [Payment Links API](https://stripe.com/docs/payment-links)
 */
export interface PaymentLink {
    /** Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated. */
    active: boolean;
    after_completion: Stripe.PaymentLinksResourceAfterCompletion;
    /** Whether user redeemable promotion codes are enabled. */
    allow_promotion_codes: boolean;
    /** The ID of the Connect application that created the Payment Link. */
    application?: PaymentLink.Application;
    /** The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. */
    application_fee_amount?: number;
    /** This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. */
    application_fee_percent?: number;
    automatic_tax: Stripe.PaymentLinksResourceAutomaticTax;
    /** Configuration for collecting the customer's billing address. Defaults to `auto`. */
    billing_address_collection: PaymentLink.BillingAddressCollection;
    /** When set, provides configuration to gather active consent from customers. */
    consent_collection?: Stripe.PaymentLinksResourceConsentCollection;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** Collect additional information from your customer using custom fields. Up to 3 fields are supported. */
    custom_fields: Stripe.PaymentLinksResourceCustomFields[];
    custom_text: Stripe.PaymentLinksResourceCustomText;
    /** Configuration for Customer creation during checkout. */
    customer_creation: PaymentLink.CustomerCreation;
    /** Unique identifier for the object. */
    id: string;
    /** The custom message to be displayed to a customer when a payment link is no longer active. */
    inactive_message?: string;
    /** Configuration for creating invoice for payment mode payment links. */
    invoice_creation?: Stripe.PaymentLinksResourceInvoiceCreation;
    /** The line items representing what is being sold. */
    line_items?: PaymentLink.LineItems;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata: Record<string, string>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "payment_link";
    /** The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details. */
    on_behalf_of?: PaymentLink.OnBehalfOf;
    /** Indicates the parameters to be passed to PaymentIntent creation during checkout. */
    payment_intent_data?: Stripe.PaymentLinksResourcePaymentIntentData;
    /** Configuration for collecting a payment method during checkout. Defaults to `always`. */
    payment_method_collection: PaymentLink.PaymentMethodCollection;
    /** The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). */
    payment_method_types?: PaymentLink.PaymentMethodTypes.Item[];
    phone_number_collection: Stripe.PaymentLinksResourcePhoneNumberCollection;
    /** Settings that restrict the usage of a payment link. */
    restrictions?: Stripe.PaymentLinksResourceRestrictions;
    /** Configuration for collecting the customer's shipping address. */
    shipping_address_collection?: Stripe.PaymentLinksResourceShippingAddressCollection;
    /** The shipping rate options applied to the session. */
    shipping_options: Stripe.PaymentLinksResourceShippingOption[];
    /** Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button. */
    submit_type: PaymentLink.SubmitType;
    /** When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`. */
    subscription_data?: Stripe.PaymentLinksResourceSubscriptionData;
    tax_id_collection: Stripe.PaymentLinksResourceTaxIdCollection;
    /** The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. */
    transfer_data?: Stripe.PaymentLinksResourceTransferData;
    /** The public URL that can be shared with customers. */
    url: string;
}

export namespace PaymentLink {
    /**
     * The ID of the Connect application that created the Payment Link.
     */
    export type Application = string | Stripe.Application | Stripe.DeletedApplication;
    /**
     * Configuration for collecting the customer's billing address. Defaults to `auto`.
     */
    export type BillingAddressCollection = "auto" | "required";
    export const BillingAddressCollection = {
        Auto: "auto",
        Required: "required",
    } as const;
    /**
     * Configuration for Customer creation during checkout.
     */
    export type CustomerCreation = "always" | "if_required";
    export const CustomerCreation = {
        Always: "always",
        IfRequired: "if_required",
    } as const;

    /**
     * The line items representing what is being sold.
     */
    export interface LineItems {
        /** Details about each object. */
        data: Stripe.Item[];
        /** True if this list has another page of items after this one that can be fetched. */
        has_more: boolean;
        /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
        object: "list";
        /** The URL where this list can be accessed. */
        url: string;
    }

    /**
     * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
     */
    export type OnBehalfOf = string | Stripe.Account;
    /**
     * Configuration for collecting a payment method during checkout. Defaults to `always`.
     */
    export type PaymentMethodCollection = "always" | "if_required";
    export const PaymentMethodCollection = {
        Always: "always",
        IfRequired: "if_required",
    } as const;
    export type PaymentMethodTypes = PaymentMethodTypes.Item[];

    export namespace PaymentMethodTypes {
        export type Item =
            | "affirm"
            | "afterpay_clearpay"
            | "alipay"
            | "alma"
            | "au_becs_debit"
            | "bacs_debit"
            | "bancontact"
            | "blik"
            | "boleto"
            | "card"
            | "cashapp"
            | "eps"
            | "fpx"
            | "giropay"
            | "grabpay"
            | "ideal"
            | "klarna"
            | "konbini"
            | "link"
            | "mobilepay"
            | "multibanco"
            | "oxxo"
            | "p24"
            | "pay_by_bank"
            | "paynow"
            | "paypal"
            | "pix"
            | "promptpay"
            | "sepa_debit"
            | "sofort"
            | "swish"
            | "twint"
            | "us_bank_account"
            | "wechat_pay"
            | "zip";
        export const Item = {
            Affirm: "affirm",
            AfterpayClearpay: "afterpay_clearpay",
            Alipay: "alipay",
            Alma: "alma",
            AuBecsDebit: "au_becs_debit",
            BacsDebit: "bacs_debit",
            Bancontact: "bancontact",
            Blik: "blik",
            Boleto: "boleto",
            Card: "card",
            Cashapp: "cashapp",
            Eps: "eps",
            Fpx: "fpx",
            Giropay: "giropay",
            Grabpay: "grabpay",
            Ideal: "ideal",
            Klarna: "klarna",
            Konbini: "konbini",
            Link: "link",
            Mobilepay: "mobilepay",
            Multibanco: "multibanco",
            Oxxo: "oxxo",
            P24: "p24",
            PayByBank: "pay_by_bank",
            Paynow: "paynow",
            Paypal: "paypal",
            Pix: "pix",
            Promptpay: "promptpay",
            SepaDebit: "sepa_debit",
            Sofort: "sofort",
            Swish: "swish",
            Twint: "twint",
            UsBankAccount: "us_bank_account",
            WechatPay: "wechat_pay",
            Zip: "zip",
        } as const;
    }

    /**
     * Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button.
     */
    export type SubmitType = "auto" | "book" | "donate" | "pay" | "subscribe";
    export const SubmitType = {
        Auto: "auto",
        Book: "book",
        Donate: "donate",
        Pay: "pay",
        Subscribe: "subscribe",
    } as const;
}
