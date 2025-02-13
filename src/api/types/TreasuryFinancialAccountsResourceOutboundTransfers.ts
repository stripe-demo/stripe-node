/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * OutboundTransfers contains outbound transfers features for a FinancialAccount.
 */
export interface TreasuryFinancialAccountsResourceOutboundTransfers {
    ach?: Stripe.TreasuryFinancialAccountsResourceOutboundAchToggleSettings;
    us_domestic_wire?: Stripe.TreasuryFinancialAccountsResourceToggleSettings;
}
