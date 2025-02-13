/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
 */
export interface BillingAlert {
    /** Defines the type of the alert. */
    alert_type: "usage_threshold";
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "billing.alert";
    /** Status of the alert. This can be active, inactive or archived. */
    status?: BillingAlert.Status;
    /** Title of the alert. */
    title: string;
    /** Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://stripe.com/docs/api/billing/meter). */
    usage_threshold?: Stripe.ThresholdsResourceUsageThresholdConfig;
}

export namespace BillingAlert {
    /**
     * Status of the alert. This can be active, inactive or archived.
     */
    export type Status = "active" | "archived" | "inactive";
    export const Status = {
        Active: "active",
        Archived: "archived",
        Inactive: "inactive",
    } as const;
}
