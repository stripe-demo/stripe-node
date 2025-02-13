/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PortalSubscriptionUpdateProduct {
    /** The list of price IDs which, when subscribed to, a subscription can be updated. */
    prices: string[];
    /** The product ID. */
    product: string;
}
