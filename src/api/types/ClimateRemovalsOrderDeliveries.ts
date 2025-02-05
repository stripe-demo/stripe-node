/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * The delivery of a specified quantity of carbon for an order.
 */
export interface ClimateRemovalsOrderDeliveries {
    /** Time at which the delivery occurred. Measured in seconds since the Unix epoch. */
    delivered_at: number;
    /** Specific location of this delivery. */
    location?: Stripe.ClimateRemovalsLocation;
    /** Quantity of carbon removal supplied by this delivery. */
    metric_tons: string;
    /** Once retired, a URL to the registry entry for the tons from this delivery. */
    registry_url?: string;
    supplier: Stripe.ClimateSupplier;
}
