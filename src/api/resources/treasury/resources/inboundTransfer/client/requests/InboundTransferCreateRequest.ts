/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         amount: 1,
 *         currency: "currency",
 *         financial_account: "financial_account",
 *         origin_payment_method: "origin_payment_method"
 *     }
 */
export interface InboundTransferCreateRequest {
    /** Amount (in cents) to be transferred. */
    amount: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The FinancialAccount to send funds to. */
    financial_account: string;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /** The origin payment method to be debited for the InboundTransfer. */
    origin_payment_method: string;
    /** The complete description that appears on your customers' statements. Maximum 10 characters. */
    statement_descriptor?: string;
}
