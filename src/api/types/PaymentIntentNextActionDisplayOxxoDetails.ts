/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentIntentNextActionDisplayOxxoDetails {
    /** The timestamp after which the OXXO voucher expires. */
    expires_after?: number;
    /** The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher. */
    hosted_voucher_url?: string;
    /** OXXO reference number. */
    number?: string;
}
