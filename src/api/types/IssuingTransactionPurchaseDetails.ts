/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface IssuingTransactionPurchaseDetails {
    /** Fleet-specific information for transactions using Fleet cards. */
    fleet?: Stripe.IssuingTransactionFleetData;
    /** Information about the flight that was purchased with this transaction. */
    flight?: Stripe.IssuingTransactionFlightData;
    /** Information about fuel that was purchased with this transaction. */
    fuel?: Stripe.IssuingTransactionFuelData;
    /** Information about lodging that was purchased with this transaction. */
    lodging?: Stripe.IssuingTransactionLodgingData;
    /** The line items in the purchase. */
    receipt?: Stripe.IssuingTransactionReceiptData[];
    /** A merchant-specific order number. */
    reference?: string;
}
