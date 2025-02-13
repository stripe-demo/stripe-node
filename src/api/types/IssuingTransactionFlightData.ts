/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface IssuingTransactionFlightData {
    /** The time that the flight departed. */
    departure_at?: number;
    /** The name of the passenger. */
    passenger_name?: string;
    /** Whether the ticket is refundable. */
    refundable?: boolean;
    /** The legs of the trip. */
    segments?: Stripe.IssuingTransactionFlightDataLeg[];
    /** The travel agency that issued the ticket. */
    travel_agency?: string;
}
