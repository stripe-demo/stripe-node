/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         confirmed: true
 *     }
 */
export interface AuthorizationRespondRequest {
    /** Whether to simulate the user confirming that the transaction was legitimate (true) or telling Stripe that it was fraudulent (false). */
    confirmed: boolean;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
}
