/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface RevolutPayUnderlyingPaymentMethodFundingDetails {
    card?: Stripe.PaymentMethodDetailsPassthroughCard;
    /** funding type of the underlying payment method. */
    type?: "card";
}
