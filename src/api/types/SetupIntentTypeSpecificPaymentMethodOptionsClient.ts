/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface SetupIntentTypeSpecificPaymentMethodOptionsClient {
    /** Bank account verification method. */
    verification_method?: SetupIntentTypeSpecificPaymentMethodOptionsClient.VerificationMethod;
}

export namespace SetupIntentTypeSpecificPaymentMethodOptionsClient {
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
