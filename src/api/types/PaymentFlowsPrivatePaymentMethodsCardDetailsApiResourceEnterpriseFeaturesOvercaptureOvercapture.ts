/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture {
    /** The maximum amount that can be captured. */
    maximum_amount_capturable: number;
    /** Indicates whether or not the authorized amount can be over-captured. */
    status: PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture.Status;
}

export namespace PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture {
    /**
     * Indicates whether or not the authorized amount can be over-captured.
     */
    export type Status = "available" | "unavailable";
    export const Status = {
        Available: "available",
        Unavailable: "unavailable",
    } as const;
}
