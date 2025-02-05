/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         invoice: "invoice"
 *     }
 */
export interface CreditNoteCreateRequest {
    /** The integer amount in cents (or local equivalent) representing the total amount of the credit note. */
    amount?: number;
    /** The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice. */
    credit_amount?: number;
    /** The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF. */
    effective_at?: number;
    /** Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`. */
    email_type?: CreditNoteCreateRequest.EmailType;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** ID of the invoice. */
    invoice: string;
    /** Line items that make up the credit note. */
    lines?: CreditNoteCreateRequest.Lines.Item[];
    /** The credit note's memo appears on the credit note PDF. */
    memo?: string;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /** The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe. */
    out_of_band_amount?: number;
    /** Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` */
    reason?: CreditNoteCreateRequest.Reason;
    /** ID of an existing refund to link this credit note to. */
    refund?: string;
    /** The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice. */
    refund_amount?: number;
    /** When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. */
    shipping_cost?: CreditNoteCreateRequest.ShippingCost;
}

export namespace CreditNoteCreateRequest {
    /**
     * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
     */
    export type EmailType = "credit_note" | "none";
    export const EmailType = {
        CreditNote: "credit_note",
        None: "none",
    } as const;
    export type Lines = Lines.Item[];

    export namespace Lines {
        export interface Item {
            /** The line item amount to credit. Only valid when `type` is `invoice_line_item`. If invoice is set up with `automatic_tax[enabled]=true`, this amount is tax exclusive */
            amount?: number;
            /** The description of the credit note line item. Only valid when the `type` is `custom_line_item`. */
            description?: string;
            /** The invoice line item to credit. Only valid when the `type` is `invoice_line_item`. */
            invoice_line_item?: string;
            /** The line item quantity to credit. */
            quantity?: number;
            /** A list of up to 10 tax amounts for the credit note line item. Cannot be mixed with `tax_rates`. */
            tax_amounts?: Item.TaxAmounts;
            /** The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`. */
            tax_rates?: Item.TaxRates;
            /** Type of the credit note line item, one of `invoice_line_item` or `custom_line_item` */
            type: Item.Type;
            /** The integer unit amount in cents (or local equivalent) of the credit note line item. This `unit_amount` will be multiplied by the quantity to get the full amount to credit for this line item. Only valid when `type` is `custom_line_item`. */
            unit_amount?: number;
            /** Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set. */
            unit_amount_decimal?: string;
        }

        export namespace Item {
            /**
             * A list of up to 10 tax amounts for the credit note line item. Cannot be mixed with `tax_rates`.
             */
            export type TaxAmounts =
                | {
                      amount: number;
                      tax_rate: string;
                      taxable_amount: number;
                  }[]
                | "";
            /**
             * The tax rates which apply to the credit note line item. Only valid when the `type` is `custom_line_item` and cannot be mixed with `tax_amounts`.
             */
            export type TaxRates = string[] | "";
            /**
             * Type of the credit note line item, one of `invoice_line_item` or `custom_line_item`
             */
            export type Type = "custom_line_item" | "invoice_line_item";
            export const Type = {
                CustomLineItem: "custom_line_item",
                InvoiceLineItem: "invoice_line_item",
            } as const;
        }
    }

    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    export type Reason = "duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory";
    export const Reason = {
        Duplicate: "duplicate",
        Fraudulent: "fraudulent",
        OrderChange: "order_change",
        ProductUnsatisfactory: "product_unsatisfactory",
    } as const;

    /**
     * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note.
     */
    export interface ShippingCost {
        /** The ID of the shipping rate to use for this order. */
        shipping_rate?: string;
    }
}
