/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface ConfirmationTokensResourceShipping {
    address: Stripe.Address;
    /** Recipient name. */
    name: string;
    /** Recipient phone (including extension). */
    phone?: string;
}
