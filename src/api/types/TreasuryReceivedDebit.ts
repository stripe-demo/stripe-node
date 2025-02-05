/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
 */
export interface TreasuryReceivedDebit {
    /** Amount (in cents) transferred. */
    amount: number;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description: string;
    /** Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen. */
    failure_code?: TreasuryReceivedDebit.FailureCode;
    /** The FinancialAccount that funds were pulled from. */
    financial_account?: string;
    /** A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. */
    hosted_regulatory_receipt_url?: string;
    /** Unique identifier for the object. */
    id: string;
    initiating_payment_method_details?: Stripe.TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
    linked_flows: Stripe.TreasuryReceivedDebitsResourceLinkedFlows;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** The network used for the ReceivedDebit. */
    network: TreasuryReceivedDebit.Network;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "treasury.received_debit";
    /** Details describing when a ReceivedDebit might be reversed. */
    reversal_details?: Stripe.TreasuryReceivedDebitsResourceReversalDetails;
    /** Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`. */
    status: TreasuryReceivedDebit.Status;
    /** The Transaction associated with this object. */
    transaction?: TreasuryReceivedDebit.Transaction;
}

export namespace TreasuryReceivedDebit {
    /**
     * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
     */
    export type FailureCode =
        | "account_closed"
        | "account_frozen"
        | "insufficient_funds"
        | "international_transaction"
        | "other";
    export const FailureCode = {
        AccountClosed: "account_closed",
        AccountFrozen: "account_frozen",
        InsufficientFunds: "insufficient_funds",
        InternationalTransaction: "international_transaction",
        Other: "other",
    } as const;
    /**
     * The network used for the ReceivedDebit.
     */
    export type Network = "ach" | "card" | "stripe";
    export const Network = {
        Ach: "ach",
        Card: "card",
        Stripe: "stripe",
    } as const;
    /**
     * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
     */
    export type Status = "failed" | "succeeded";
    export const Status = {
        Failed: "failed",
        Succeeded: "succeeded",
    } as const;
    /**
     * The Transaction associated with this object.
     */
    export type Transaction = string | Stripe.TreasuryTransaction;
}
