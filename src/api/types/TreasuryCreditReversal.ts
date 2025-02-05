/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
 */
export interface TreasuryCreditReversal {
    /** Amount (in cents) transferred. */
    amount: number;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** The FinancialAccount to reverse funds from. */
    financial_account: string;
    /** A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses. */
    hosted_regulatory_receipt_url?: string;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata: Record<string, string>;
    /** The rails used to reverse the funds. */
    network: TreasuryCreditReversal.Network;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "treasury.credit_reversal";
    /** The ReceivedCredit being reversed. */
    received_credit: string;
    /** Status of the CreditReversal */
    status: TreasuryCreditReversal.Status;
    status_transitions: Stripe.TreasuryReceivedCreditsResourceStatusTransitions;
    /** The Transaction associated with this object. */
    transaction?: TreasuryCreditReversal.Transaction;
}

export namespace TreasuryCreditReversal {
    /**
     * The rails used to reverse the funds.
     */
    export type Network = "ach" | "stripe";
    export const Network = {
        Ach: "ach",
        Stripe: "stripe",
    } as const;
    /**
     * Status of the CreditReversal
     */
    export type Status = "canceled" | "posted" | "processing";
    export const Status = {
        Canceled: "canceled",
        Posted: "posted",
        Processing: "processing",
    } as const;
    /**
     * The Transaction associated with this object.
     */
    export type Transaction = string | Stripe.TreasuryTransaction;
}
