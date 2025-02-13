/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface InvoiceThresholdReason {
    /** The total invoice amount threshold boundary if it triggered the threshold invoice. */
    amount_gte?: number;
    /** Indicates which line items triggered a threshold invoice. */
    item_reasons: Stripe.InvoiceItemThresholdReason[];
}
