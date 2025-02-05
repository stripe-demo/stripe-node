/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface Recurring {
    /** Specifies a usage aggregation strategy for prices of `usage_type=metered`. Defaults to `sum`. */
    aggregate_usage?: Recurring.AggregateUsage;
    /** The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`. */
    interval: Recurring.Interval;
    /** The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. */
    interval_count: number;
    /** The meter tracking the usage of a metered price */
    meter?: string;
    /** Default number of trial days when subscribing a customer to this price using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan). */
    trial_period_days?: number;
    /** Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`. */
    usage_type: Recurring.UsageType;
}

export namespace Recurring {
    /**
     * Specifies a usage aggregation strategy for prices of `usage_type=metered`. Defaults to `sum`.
     */
    export type AggregateUsage = "last_during_period" | "last_ever" | "max" | "sum";
    export const AggregateUsage = {
        LastDuringPeriod: "last_during_period",
        LastEver: "last_ever",
        Max: "max",
        Sum: "sum",
    } as const;
    /**
     * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
     */
    export type Interval = "day" | "month" | "week" | "year";
    export const Interval = {
        Day: "day",
        Month: "month",
        Week: "week",
        Year: "year",
    } as const;
    /**
     * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
     */
    export type UsageType = "licensed" | "metered";
    export const UsageType = {
        Licensed: "licensed",
        Metered: "metered",
    } as const;
}
