/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface ThresholdsResourceUsageAlertFilter {
    /** Limit the scope of the alert to this customer ID */
    customer?: ThresholdsResourceUsageAlertFilter.Customer;
    type: "customer";
}

export namespace ThresholdsResourceUsageAlertFilter {
    /**
     * Limit the scope of the alert to this customer ID
     */
    export type Customer = string | Stripe.Customer;
}
