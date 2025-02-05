/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface QuotesResourceTransferData {
    /** The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination. */
    amount?: number;
    /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination. */
    amount_percent?: number;
    /** The account where funds from the payment will be transferred to upon payment success. */
    destination: QuotesResourceTransferData.Destination;
}

export namespace QuotesResourceTransferData {
    /**
     * The account where funds from the payment will be transferred to upon payment success.
     */
    export type Destination = string | Stripe.Account;
}
