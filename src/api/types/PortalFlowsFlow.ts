/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PortalFlowsFlow {
    after_completion: Stripe.PortalFlowsFlowAfterCompletion;
    /** Configuration when `flow.type=subscription_cancel`. */
    subscription_cancel?: Stripe.PortalFlowsFlowSubscriptionCancel;
    /** Configuration when `flow.type=subscription_update`. */
    subscription_update?: Stripe.PortalFlowsFlowSubscriptionUpdate;
    /** Configuration when `flow.type=subscription_update_confirm`. */
    subscription_update_confirm?: Stripe.PortalFlowsFlowSubscriptionUpdateConfirm;
    /** Type of flow that the customer will go through. */
    type: PortalFlowsFlow.Type;
}

export namespace PortalFlowsFlow {
    /**
     * Type of flow that the customer will go through.
     */
    export type Type =
        | "payment_method_update"
        | "subscription_cancel"
        | "subscription_update"
        | "subscription_update_confirm";
    export const Type = {
        PaymentMethodUpdate: "payment_method_update",
        SubscriptionCancel: "subscription_cancel",
        SubscriptionUpdate: "subscription_update",
        SubscriptionUpdateConfirm: "subscription_update_confirm",
    } as const;
}
