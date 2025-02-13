/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export interface TreasuryFinancialAccountsResourceFinancialAddress {
    aba?: Stripe.TreasuryFinancialAccountsResourceAbaRecord;
    /** The list of networks that the address supports */
    supported_networks?: TreasuryFinancialAccountsResourceFinancialAddress.SupportedNetworks.Item[];
    /** The type of financial address */
    type: "aba";
}

export namespace TreasuryFinancialAccountsResourceFinancialAddress {
    export type SupportedNetworks = SupportedNetworks.Item[];

    export namespace SupportedNetworks {
        export type Item = "ach" | "us_domestic_wire";
        export const Item = {
            Ach: "ach",
            UsDomesticWire: "us_domestic_wire",
        } as const;
    }
}
