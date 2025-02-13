/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentPagesCheckoutSessionAutomaticTax {
    /** Indicates whether automatic tax is enabled for the session */
    enabled: boolean;
    /** The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account. */
    liability?: Stripe.ConnectAccountReference;
    /** The status of the most recent automated tax calculation for this session. */
    status?: PaymentPagesCheckoutSessionAutomaticTax.Status;
}

export namespace PaymentPagesCheckoutSessionAutomaticTax {
    /**
     * The status of the most recent automated tax calculation for this session.
     */
    export type Status = "complete" | "failed" | "requires_location_inputs";
    export const Status = {
        Complete: "complete",
        Failed: "failed",
        RequiresLocationInputs: "requires_location_inputs",
    } as const;
}
