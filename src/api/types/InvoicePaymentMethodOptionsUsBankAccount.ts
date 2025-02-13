/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface InvoicePaymentMethodOptionsUsBankAccount {
    financial_connections?: Stripe.InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions;
    /** Bank account verification method. */
    verification_method?: InvoicePaymentMethodOptionsUsBankAccount.VerificationMethod;
}

export namespace InvoicePaymentMethodOptionsUsBankAccount {
    /**
     * Bank account verification method.
     */
    export type VerificationMethod = "automatic" | "instant" | "microdeposits";
    export const VerificationMethod = {
        Automatic: "automatic",
        Instant: "instant",
        Microdeposits: "microdeposits",
    } as const;
}
