/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface InvoicesResourcePretaxCreditAmount {
    /** The amount, in cents (or local equivalent), of the pretax credit amount. */
    amount: number;
    /** The credit balance transaction that was applied to get this pretax credit amount. */
    credit_balance_transaction?: InvoicesResourcePretaxCreditAmount.CreditBalanceTransaction;
    /** The discount that was applied to get this pretax credit amount. */
    discount?: InvoicesResourcePretaxCreditAmount.Discount;
    /** Type of the pretax credit amount referenced. */
    type: InvoicesResourcePretaxCreditAmount.Type;
}

export namespace InvoicesResourcePretaxCreditAmount {
    /**
     * The credit balance transaction that was applied to get this pretax credit amount.
     */
    export type CreditBalanceTransaction = string | Stripe.BillingCreditBalanceTransaction;
    /**
     * The discount that was applied to get this pretax credit amount.
     */
    export type Discount = string | Stripe.Discount | Stripe.DeletedDiscount;
    /**
     * Type of the pretax credit amount referenced.
     */
    export type Type = "credit_balance_transaction" | "discount";
    export const Type = {
        CreditBalanceTransaction: "credit_balance_transaction",
        Discount: "discount",
    } as const;
}
