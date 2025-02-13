/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentMethodDetailsUsBankAccount {
    /** Account holder type: individual or company. */
    account_holder_type?: PaymentMethodDetailsUsBankAccount.AccountHolderType;
    /** Account type: checkings or savings. Defaults to checking if omitted. */
    account_type?: PaymentMethodDetailsUsBankAccount.AccountType;
    /** Name of the bank associated with the bank account. */
    bank_name?: string;
    /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
    fingerprint?: string;
    /** Last four digits of the bank account number. */
    last4?: string;
    /** ID of the mandate used to make this payment. */
    mandate?: PaymentMethodDetailsUsBankAccount.Mandate;
    /** Reference number to locate ACH payments with customer's bank. */
    payment_reference?: string;
    /** Routing number of the bank account. */
    routing_number?: string;
}

export namespace PaymentMethodDetailsUsBankAccount {
    /**
     * Account holder type: individual or company.
     */
    export type AccountHolderType = "company" | "individual";
    export const AccountHolderType = {
        Company: "company",
        Individual: "individual",
    } as const;
    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    export type AccountType = "checking" | "savings";
    export const AccountType = {
        Checking: "checking",
        Savings: "savings",
    } as const;
    /**
     * ID of the mandate used to make this payment.
     */
    export type Mandate = string | Stripe.Mandate;
}
