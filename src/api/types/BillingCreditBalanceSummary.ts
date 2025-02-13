/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Indicates the billing credit balance for billing credits granted to a customer.
 */
export interface BillingCreditBalanceSummary {
    /** The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry. */
    balances: Stripe.CreditBalance[];
    /** The customer the balance is for. */
    customer: BillingCreditBalanceSummary.Customer;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "billing.credit_balance_summary";
}

export namespace BillingCreditBalanceSummary {
    /**
     * The customer the balance is for.
     */
    export type Customer = string | Stripe.Customer | Stripe.DeletedCustomer;
}
