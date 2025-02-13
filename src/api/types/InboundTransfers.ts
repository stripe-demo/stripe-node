/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface InboundTransfers {
    billing_details: Stripe.TreasurySharedResourceBillingDetails;
    /** The type of the payment method used in the InboundTransfer. */
    type: "us_bank_account";
    us_bank_account?: Stripe.InboundTransfersPaymentMethodDetailsUsBankAccount;
}
