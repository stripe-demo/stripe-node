/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         allow_redisplay: "always",
 *         setup_intent: "setup_intent"
 *     }
 */
export interface ReaderProcessSetupIntentRequest {
    /** This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. */
    allow_redisplay: ReaderProcessSetupIntentRequest.AllowRedisplay;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Configuration overrides */
    process_config?: ReaderProcessSetupIntentRequest.ProcessConfig;
    /** SetupIntent ID */
    setup_intent: string;
}

export namespace ReaderProcessSetupIntentRequest {
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
     */
    export type AllowRedisplay = "always" | "limited" | "unspecified";
    export const AllowRedisplay = {
        Always: "always",
        Limited: "limited",
        Unspecified: "unspecified",
    } as const;

    /**
     * Configuration overrides
     */
    export interface ProcessConfig {
        /** Enables cancel button on transaction screens. */
        enable_customer_cancellation?: boolean;
    }
}
