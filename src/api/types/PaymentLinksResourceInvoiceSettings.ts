/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentLinksResourceInvoiceSettings {
    /** The account tax IDs associated with the invoice. */
    account_tax_ids?: PaymentLinksResourceInvoiceSettings.AccountTaxIds.Item[];
    /** A list of up to 4 custom fields to be displayed on the invoice. */
    custom_fields?: Stripe.InvoiceSettingCustomField[];
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** Footer to be displayed on the invoice. */
    footer?: string;
    /** The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account. */
    issuer?: Stripe.ConnectAccountReference;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata?: Record<string, string | undefined>;
    /** Options for invoice PDF rendering. */
    rendering_options?: Stripe.InvoiceSettingRenderingOptions;
}

export namespace PaymentLinksResourceInvoiceSettings {
    export type AccountTaxIds = AccountTaxIds.Item[];

    export namespace AccountTaxIds {
        export type Item = string | Stripe.TaxId | Stripe.DeletedTaxId;
    }
}
