/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         default_aggregation: {
 *             formula: "count"
 *         },
 *         display_name: "display_name",
 *         event_name: "event_name"
 *     }
 */
export interface MeterCreateRequest {
    /** Fields that specify how to map a meter event to a customer. */
    customer_mapping?: MeterCreateRequest.CustomerMapping;
    /** The default settings to aggregate a meter's events with. */
    default_aggregation: MeterCreateRequest.DefaultAggregation;
    /** The meter’s name. Not visible to the customer. */
    display_name: string;
    /** The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events. */
    event_name: string;
    /** The time window to pre-aggregate meter events for, if any. */
    event_time_window?: MeterCreateRequest.EventTimeWindow;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Fields that specify how to calculate a meter event's value. */
    value_settings?: MeterCreateRequest.ValueSettings;
}

export namespace MeterCreateRequest {
    /**
     * Fields that specify how to map a meter event to a customer.
     */
    export interface CustomerMapping {
        /** The key in the meter event payload to use for mapping the event to a customer. */
        event_payload_key: string;
        /** The method for mapping a meter event to a customer. Must be `by_id`. */
        type: "by_id";
    }

    /**
     * The default settings to aggregate a meter's events with.
     */
    export interface DefaultAggregation {
        /** Specifies how events are aggregated. Allowed values are `count` to count the number of events and `sum` to sum each event's value. */
        formula: DefaultAggregation.Formula;
    }

    export namespace DefaultAggregation {
        /**
         * Specifies how events are aggregated. Allowed values are `count` to count the number of events and `sum` to sum each event's value.
         */
        export type Formula = "count" | "sum";
        export const Formula = {
            Count: "count",
            Sum: "sum",
        } as const;
    }

    /**
     * The time window to pre-aggregate meter events for, if any.
     */
    export type EventTimeWindow = "day" | "hour";
    export const EventTimeWindow = {
        Day: "day",
        Hour: "hour",
    } as const;

    /**
     * Fields that specify how to calculate a meter event's value.
     */
    export interface ValueSettings {
        /** The key in the usage event payload to use as the value for this meter. For example, if the event payload contains usage on a `bytes_used` field, then set the event_payload_key to "bytes_used". */
        event_payload_key: string;
    }
}
