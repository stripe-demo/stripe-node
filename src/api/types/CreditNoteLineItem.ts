/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * The credit note line item object
 */
export interface CreditNoteLineItem {
    /** The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts. */
    amount: number;
    /** The integer amount in cents (or local equivalent) representing the amount being credited for this line item, excluding all tax and discounts. */
    amount_excluding_tax?: number;
    /** Description of the item being credited. */
    description?: string;
    /** The integer amount in cents (or local equivalent) representing the discount being credited for this line item. */
    discount_amount: number;
    /** The amount of discount calculated per discount for this line item */
    discount_amounts: Stripe.DiscountsResourceDiscountAmount[];
    /** Unique identifier for the object. */
    id: string;
    /** ID of the invoice line item being credited */
    invoice_line_item?: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "credit_note_line_item";
    /** The pretax credit amounts (ex: discount, credit grants, etc) for this line item. */
    pretax_credit_amounts: Stripe.CreditNotesPretaxCreditAmount[];
    /** The number of units of product being credited. */
    quantity?: number;
    /** The amount of tax calculated per tax rate for this line item */
    tax_amounts: Stripe.CreditNoteTaxAmount[];
    /** The tax rates which apply to the line item. */
    tax_rates: Stripe.TaxRate[];
    /** The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice. */
    type: CreditNoteLineItem.Type;
    /** The cost of each unit of product being credited. */
    unit_amount?: number;
    /** Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. */
    unit_amount_decimal?: string;
    /** The amount in cents (or local equivalent) representing the unit amount being credited for this line item, excluding all tax and discounts. */
    unit_amount_excluding_tax?: string;
}

export namespace CreditNoteLineItem {
    /**
     * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
     */
    export type Type = "custom_line_item" | "invoice_line_item";
    export const Type = {
        CustomLineItem: "custom_line_item",
        InvoiceLineItem: "invoice_line_item",
    } as const;
}
