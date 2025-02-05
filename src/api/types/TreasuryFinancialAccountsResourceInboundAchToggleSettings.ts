/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Toggle settings for enabling/disabling an inbound ACH specific feature
 */
export interface TreasuryFinancialAccountsResourceInboundAchToggleSettings {
    /** Whether the FinancialAccount should have the Feature. */
    requested: boolean;
    /** Whether the Feature is operational. */
    status: TreasuryFinancialAccountsResourceInboundAchToggleSettings.Status;
    /** Additional details; includes at least one entry when the status is not `active`. */
    status_details: Stripe.TreasuryFinancialAccountsResourceTogglesSettingStatusDetails[];
}

export namespace TreasuryFinancialAccountsResourceInboundAchToggleSettings {
    /**
     * Whether the Feature is operational.
     */
    export type Status = "active" | "pending" | "restricted";
    export const Status = {
        Active: "active",
        Pending: "pending",
        Restricted: "restricted",
    } as const;
}
