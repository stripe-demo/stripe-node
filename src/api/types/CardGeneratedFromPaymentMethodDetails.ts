/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface CardGeneratedFromPaymentMethodDetails {
    card_present?: Stripe.PaymentMethodDetailsCardPresent;
    /** The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`. */
    type: string;
}
