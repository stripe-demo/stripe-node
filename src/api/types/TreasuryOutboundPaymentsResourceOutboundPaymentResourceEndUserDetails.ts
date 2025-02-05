/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails {
    /** IP address of the user initiating the OutboundPayment. Set if `present` is set to `true`. IP address collection is required for risk and compliance reasons. This will be used to help determine if the OutboundPayment is authorized or should be blocked. */
    ip_address?: string;
    /** `true` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`. */
    present: boolean;
}
