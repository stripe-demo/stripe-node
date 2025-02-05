/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * A summary of a customer's active entitlements.
 */
export interface EntitlementsActiveEntitlementSummary {
    /** The customer that is entitled to this feature. */
    customer: string;
    /** The list of entitlements this customer has. */
    entitlements: EntitlementsActiveEntitlementSummary.Entitlements;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "entitlements.active_entitlement_summary";
}

export namespace EntitlementsActiveEntitlementSummary {
    /**
     * The list of entitlements this customer has.
     */
    export interface Entitlements {
        data: Stripe.EntitlementsActiveEntitlement[];
        /** True if this list has another page of items after this one that can be fetched. */
        has_more: boolean;
        /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
        object: "list";
        /** The URL where this list can be accessed. */
        url: string;
    }
}
