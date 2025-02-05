/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface SchedulesPhaseAutomaticTax {
    /** If Stripe disabled automatic tax, this enum describes why. */
    disabled_reason?: "requires_location_inputs";
    /** Whether Stripe automatically computes tax on invoices created during this phase. */
    enabled: boolean;
    /** The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account. */
    liability?: Stripe.ConnectAccountReference;
}
