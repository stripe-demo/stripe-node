/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Tokenization is the process Stripe uses to collect sensitive card or bank
 * account details, or personally identifiable information (PII), directly from
 * your customers in a secure manner. A token representing this information is
 * returned to your server to use. Use our
 * [recommended payments integrations](https://stripe.com/docs/payments) to perform this process
 * on the client-side. This guarantees that no sensitive card data touches your server,
 * and allows your integration to operate in a PCI-compliant way.
 *
 * If you can't use client-side tokenization, you can also create tokens using
 * the API with either your publishable or secret API key. If
 * your integration uses this method, you're responsible for any PCI compliance
 * that it might require, and you must keep your secret API key safe. Unlike with
 * client-side tokenization, your customer's information isn't sent directly to
 * Stripe, so we can't determine how it's handled or stored.
 *
 * You can't store or use tokens more than once. To store card or bank account
 * information for later use, create [Customer](https://stripe.com/docs/api#customers)
 * objects or [External accounts](/api#external_accounts).
 * [Radar](https://stripe.com/docs/radar), our integrated solution for automatic fraud protection,
 * performs best with integrations that use client-side tokenization.
 */
export interface Token {
    bank_account?: Stripe.BankAccount;
    card?: Stripe.Card;
    /** IP address of the client that generates the token. */
    client_ip?: string;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "token";
    /** Type of the token: `account`, `bank_account`, `card`, or `pii`. */
    type: string;
    /** Determines if you have already used this token (you can only use tokens once). */
    used: boolean;
}
