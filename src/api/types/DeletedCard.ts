/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface DeletedCard {
    /** Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. */
    currency?: string;
    /** Always true for a deleted object */
    deleted: boolean;
    /** Unique identifier for the object. */
    id: string;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "card";
}
