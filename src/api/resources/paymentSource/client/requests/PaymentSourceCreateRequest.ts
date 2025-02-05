/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         source: "source"
 *     }
 */
export interface PaymentSourceCreateRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /** Please refer to full [documentation](https://stripe.com/docs/api) instead. */
    source: string;
    validate?: boolean;
}
