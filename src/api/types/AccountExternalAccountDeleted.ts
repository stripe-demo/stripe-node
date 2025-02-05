/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Occurs whenever an external account is deleted.
 */
export interface AccountExternalAccountDeleted {
    object: AccountExternalAccountDeleted.Object_;
}

export namespace AccountExternalAccountDeleted {
    export type Object_ = Stripe.BankAccount | Stripe.Card | Stripe.Source;
}
