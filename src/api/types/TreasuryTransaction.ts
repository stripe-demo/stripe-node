/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Transactions represent changes to a [FinancialAccount's](https://stripe.com/docs/api#financial_accounts) balance.
 */
export interface TreasuryTransaction {
    /** Amount (in cents) transferred. */
    amount: number;
    balance_impact: Stripe.TreasuryTransactionsResourceBalanceImpact;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description: string;
    /** A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints. */
    entries?: TreasuryTransaction.Entries;
    /** The FinancialAccount associated with this object. */
    financial_account: string;
    /** ID of the flow that created the Transaction. */
    flow?: string;
    /** Details of the flow that created the Transaction. */
    flow_details?: Stripe.TreasuryTransactionsResourceFlowDetails;
    /** Type of the flow that created the Transaction. */
    flow_type: TreasuryTransaction.FlowType;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "treasury.transaction";
    /** Status of the Transaction. */
    status: TreasuryTransaction.Status;
    status_transitions: Stripe.TreasuryTransactionsResourceAbstractTransactionResourceStatusTransitions;
}

export namespace TreasuryTransaction {
    /**
     * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
     */
    export interface Entries {
        /** Details about each object. */
        data: Stripe.TreasuryTransactionEntry[];
        /** True if this list has another page of items after this one that can be fetched. */
        has_more: boolean;
        /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
        object: "list";
        /** The URL where this list can be accessed. */
        url: string;
    }

    /**
     * Type of the flow that created the Transaction.
     */
    export type FlowType =
        | "credit_reversal"
        | "debit_reversal"
        | "inbound_transfer"
        | "issuing_authorization"
        | "other"
        | "outbound_payment"
        | "outbound_transfer"
        | "received_credit"
        | "received_debit";
    export const FlowType = {
        CreditReversal: "credit_reversal",
        DebitReversal: "debit_reversal",
        InboundTransfer: "inbound_transfer",
        IssuingAuthorization: "issuing_authorization",
        Other: "other",
        OutboundPayment: "outbound_payment",
        OutboundTransfer: "outbound_transfer",
        ReceivedCredit: "received_credit",
        ReceivedDebit: "received_debit",
    } as const;
    /**
     * Status of the Transaction.
     */
    export type Status = "open" | "posted" | "void";
    export const Status = {
        Open: "open",
        Posted: "posted",
        Void: "void",
    } as const;
}
