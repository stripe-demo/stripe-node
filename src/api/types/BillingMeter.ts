/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Meters specify how to aggregate meter events over a billing period. Meter events represent the actions that customers take in your system. Meters attach to prices and form the basis of the bill.
 *
 * Related guide: [Usage based billing](https://docs.stripe.com/billing/subscriptions/usage-based)
 */
export interface BillingMeter {
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    customer_mapping: Stripe.BillingMeterResourceCustomerMappingSettings;
    default_aggregation: Stripe.BillingMeterResourceAggregationSettings;
    /** The meter's name. */
    display_name: string;
    /** The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events. */
    event_name: string;
    /** The time window to pre-aggregate meter events for, if any. */
    event_time_window?: BillingMeter.EventTimeWindow;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "billing.meter";
    /** The meter's status. */
    status: BillingMeter.Status;
    status_transitions: Stripe.BillingMeterResourceBillingMeterStatusTransitions;
    /** Time at which the object was last updated. Measured in seconds since the Unix epoch. */
    updated: number;
    value_settings: Stripe.BillingMeterResourceBillingMeterValue;
}

export namespace BillingMeter {
    /**
     * The time window to pre-aggregate meter events for, if any.
     */
    export type EventTimeWindow = "day" | "hour";
    export const EventTimeWindow = {
        Day: "day",
        Hour: "hour",
    } as const;
    /**
     * The meter's status.
     */
    export type Status = "active" | "inactive";
    export const Status = {
        Active: "active",
        Inactive: "inactive",
    } as const;
}
