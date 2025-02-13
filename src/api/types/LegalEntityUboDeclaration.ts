/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface LegalEntityUboDeclaration {
    /** The Unix timestamp marking when the beneficial owner attestation was made. */
    date?: number;
    /** The IP address from which the beneficial owner attestation was made. */
    ip?: string;
    /** The user-agent string from the browser where the beneficial owner attestation was made. */
    user_agent?: string;
}
