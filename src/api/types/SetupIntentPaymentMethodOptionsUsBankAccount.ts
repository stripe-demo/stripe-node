/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface SetupIntentPaymentMethodOptionsUsBankAccount {
    financial_connections?: Stripe.LinkedAccountOptionsUsBankAccount;
    mandate_options?: Stripe.PaymentMethodOptionsUsBankAccountMandateOptions;
    /** Bank account verification method. */
    verification_method?: SetupIntentPaymentMethodOptionsUsBankAccount.VerificationMethod;
}

export namespace SetupIntentPaymentMethodOptionsUsBankAccount {
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
