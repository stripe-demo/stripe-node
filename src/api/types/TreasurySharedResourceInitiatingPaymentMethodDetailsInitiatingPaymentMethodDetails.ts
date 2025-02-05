/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails {
    /** Set when `type` is `balance`. */
    balance?: "payments";
    billing_details: Stripe.TreasurySharedResourceBillingDetails;
    financial_account?: Stripe.ReceivedPaymentMethodDetailsFinancialAccount;
    /** Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID. */
    issuing_card?: string;
    /** Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount. */
    type: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails.Type;
    us_bank_account?: Stripe.TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount;
}

export namespace TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails {
    /**
     * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
     */
    export type Type = "balance" | "financial_account" | "issuing_card" | "stripe" | "us_bank_account";
    export const Type = {
        Balance: "balance",
        FinancialAccount: "financial_account",
        IssuingCard: "issuing_card",
        Stripe: "stripe",
        UsBankAccount: "us_bank_account",
    } as const;
}
