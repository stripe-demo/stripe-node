/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Payment-method-specific configuration
 */
export interface ConfirmationTokensResourcePaymentMethodOptions {
    /** This hash contains the card payment method options. */
    card?: Stripe.ConfirmationTokensResourcePaymentMethodOptionsResourceCard;
}
