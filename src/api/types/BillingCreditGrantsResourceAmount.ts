/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface BillingCreditGrantsResourceAmount {
    /** The monetary amount. */
    monetary?: Stripe.BillingCreditGrantsResourceMonetaryAmount;
    /** The type of this amount. We currently only support `monetary` billing credits. */
    type: "monetary";
}
