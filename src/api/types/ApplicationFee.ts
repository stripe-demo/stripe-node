/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface ApplicationFee {
    /** ID of the Stripe account this fee was taken from. */
    account: ApplicationFee.Account;
    /** Amount earned, in cents (or local equivalent). */
    amount: number;
    /** Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued) */
    amount_refunded: number;
    /** ID of the Connect application that earned the fee. */
    application: ApplicationFee.Application;
    /** Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds). */
    balance_transaction?: ApplicationFee.BalanceTransaction;
    /** ID of the charge that the application fee was taken from. */
    charge: ApplicationFee.Charge;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** Polymorphic source of the application fee. Includes the ID of the object the application fee was created from. */
    fee_source?: Stripe.PlatformEarningFeeSource;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "application_fee";
    /** ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter. */
    originating_transaction?: ApplicationFee.OriginatingTransaction;
    /** Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false. */
    refunded: boolean;
    /** A list of refunds that have been applied to the fee. */
    refunds: ApplicationFee.Refunds;
}

export namespace ApplicationFee {
    /**
     * ID of the Stripe account this fee was taken from.
     */
    export type Account = string | Stripe.Account;
    /**
     * ID of the Connect application that earned the fee.
     */
    export type Application = string | Stripe.Application;
    /**
     * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
     */
    export type BalanceTransaction = string | Stripe.BalanceTransaction;
    /**
     * ID of the charge that the application fee was taken from.
     */
    export type Charge = string | Stripe.Charge;
    /**
     * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
     */
    export type OriginatingTransaction = string | Stripe.Charge;

    /**
     * A list of refunds that have been applied to the fee.
     */
    export interface Refunds {
        /** Details about each object. */
        data: Stripe.FeeRefund[];
        /** True if this list has another page of items after this one that can be fetched. */
        has_more: boolean;
        /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
        object: "list";
        /** The URL where this list can be accessed. */
        url: string;
    }
}
