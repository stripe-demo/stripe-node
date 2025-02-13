/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentPagesCheckoutSessionCustomFields {
    dropdown?: Stripe.PaymentPagesCheckoutSessionCustomFieldsDropdown;
    /** String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters. */
    key: string;
    label: Stripe.PaymentPagesCheckoutSessionCustomFieldsLabel;
    numeric?: Stripe.PaymentPagesCheckoutSessionCustomFieldsNumeric;
    /** Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`. */
    optional: boolean;
    text?: Stripe.PaymentPagesCheckoutSessionCustomFieldsText;
    /** The type of the field. */
    type: PaymentPagesCheckoutSessionCustomFields.Type;
}

export namespace PaymentPagesCheckoutSessionCustomFields {
    /**
     * The type of the field.
     */
    export type Type = "dropdown" | "numeric" | "text";
    export const Type = {
        Dropdown: "dropdown",
        Numeric: "numeric",
        Text: "text",
    } as const;
}
