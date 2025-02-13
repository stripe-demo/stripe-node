/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction {
    /** The [Refund](https://stripe.com/docs/api/refunds/object) that moved these funds into the customer's cash balance. */
    refund: CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction.Refund;
}

export namespace CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction {
    /**
     * The [Refund](https://stripe.com/docs/api/refunds/object) that moved these funds into the customer's cash balance.
     */
    export type Refund = string | Stripe.Refund;
}
