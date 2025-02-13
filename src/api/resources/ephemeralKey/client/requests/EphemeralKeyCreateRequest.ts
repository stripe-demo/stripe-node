/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface EphemeralKeyCreateRequest {
    /** The ID of the Customer you'd like to modify using the resulting ephemeral key. */
    customer?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The ID of the Issuing Card you'd like to access using the resulting ephemeral key. */
    issuing_card?: string;
    /** A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information. */
    nonce?: string;
    /** The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key */
    verification_session?: string;
}
