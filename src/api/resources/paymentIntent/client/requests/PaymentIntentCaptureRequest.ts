/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface PaymentIntentCaptureRequest {
    /** The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Any additional amount is automatically refunded. Defaults to the full `amount_capturable` if it's not provided. */
    amount_to_capture?: number;
    /** The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts). */
    application_fee_amount?: number;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Defaults to `true`. When capturing a PaymentIntent, setting `final_capture` to `false` notifies Stripe to not release the remaining uncaptured funds to make sure that they're captured in future requests. You can only use this setting when [multicapture](https://stripe.com/docs/payments/multicapture) is available for PaymentIntents. */
    final_capture?: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: PaymentIntentCaptureRequest.Metadata;
    /**
     * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     *
     * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
     */
    statement_descriptor?: string;
    /** Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. */
    statement_descriptor_suffix?: string;
    /**
     * The parameters that you can use to automatically create a transfer after the payment
     * is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentCaptureRequest.TransferData;
}

export namespace PaymentIntentCaptureRequest {
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";

    /**
     * The parameters that you can use to automatically create a transfer after the payment
     * is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    export interface TransferData {
        /** The amount that will be transferred automatically when a charge succeeds. */
        amount?: number;
    }
}
