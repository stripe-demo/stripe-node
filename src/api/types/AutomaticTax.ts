/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface AutomaticTax {
    /** If Stripe disabled automatic tax, this enum describes why. */
    disabled_reason?: AutomaticTax.DisabledReason;
    /** Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices. */
    enabled: boolean;
    /** The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account. */
    liability?: Stripe.ConnectAccountReference;
    /** The status of the most recent automated tax calculation for this invoice. */
    status?: AutomaticTax.Status;
}

export namespace AutomaticTax {
    /**
     * If Stripe disabled automatic tax, this enum describes why.
     */
    export type DisabledReason = "finalization_requires_location_inputs" | "finalization_system_error";
    export const DisabledReason = {
        FinalizationRequiresLocationInputs: "finalization_requires_location_inputs",
        FinalizationSystemError: "finalization_system_error",
    } as const;
    /**
     * The status of the most recent automated tax calculation for this invoice.
     */
    export type Status = "complete" | "failed" | "requires_location_inputs";
    export const Status = {
        Complete: "complete",
        Failed: "failed",
        RequiresLocationInputs: "requires_location_inputs",
    } as const;
}
