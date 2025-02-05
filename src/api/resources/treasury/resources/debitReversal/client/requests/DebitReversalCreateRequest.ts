/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         received_debit: "received_debit"
 *     }
 */
export interface DebitReversalCreateRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /** The ReceivedDebit to reverse. */
    received_debit: string;
}
