/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface RefundNextAction {
    display_details?: Stripe.RefundNextActionDisplayDetails;
    /** Type of the next action to perform. */
    type: string;
}
