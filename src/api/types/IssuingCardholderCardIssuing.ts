/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface IssuingCardholderCardIssuing {
    /** Information about cardholder acceptance of Celtic [Authorized User Terms](https://stripe.com/docs/issuing/cards#accept-authorized-user-terms). Required for cards backed by a Celtic program. */
    user_terms_acceptance?: Stripe.IssuingCardholderUserTermsAcceptance;
}
