/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface ShippingRateDeliveryEstimate {
    /** The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite. */
    maximum?: Stripe.ShippingRateDeliveryEstimateBound;
    /** The lower bound of the estimated range. If empty, represents no lower bound. */
    minimum?: Stripe.ShippingRateDeliveryEstimateBound;
}
