/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../../../../index";

/**
 * @example
 *     {
 *         invoice: "invoice"
 *     }
 */
export interface CreditNotePreviewLinesRequest {
    /**
     * The integer amount in cents (or local equivalent) representing the total amount of the credit note.
     */
    amount?: number;
    /**
     * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
     */
    credit_amount?: number;
    /**
     * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
     */
    effective_at?: number;
    /**
     * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
     */
    email_type?: Stripe.CreditNotePreviewLinesRequestEmailType;
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * ID of the invoice.
     */
    invoice: string;
    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * Line items that make up the credit note.
     */
    lines?: Stripe.CreditNotePreviewLinesRequestLinesItem | Stripe.CreditNotePreviewLinesRequestLinesItem[];
    /**
     * The credit note's memo appears on the credit note PDF.
     */
    memo?: string;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Record<string, string | undefined>;
    /**
     * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
     */
    out_of_band_amount?: number;
    /**
     * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
     */
    reason?: Stripe.CreditNotePreviewLinesRequestReason;
    /**
     * ID of an existing refund to link this credit note to.
     */
    refund?: string;
    /**
     * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
     */
    refund_amount?: number;
    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
}
