/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface LineItemsDiscountAmount {
    /** The amount discounted. */
    amount: number;
    discount: Stripe.Discount;
}
