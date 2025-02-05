/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
 */
export interface FinancialConnectionsSession {
    /** The account holder for whom accounts are collected in this session. */
    account_holder?: Stripe.BankConnectionsResourceAccountholder;
    /** The accounts that were collected as part of this Session. */
    accounts: FinancialConnectionsSession.Accounts;
    /** A value that will be passed to the client to launch the authentication flow. */
    client_secret: string;
    filters?: Stripe.BankConnectionsResourceLinkAccountSessionFilters;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "financial_connections.session";
    /** Permissions requested for accounts collected during this session. */
    permissions: FinancialConnectionsSession.Permissions.Item[];
    /** Data features requested to be retrieved upon account creation. */
    prefetch?: FinancialConnectionsSession.Prefetch.Item[];
    /** For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app. */
    return_url?: string;
}

export namespace FinancialConnectionsSession {
    /**
     * The accounts that were collected as part of this Session.
     */
    export interface Accounts {
        /** Details about each object. */
        data: Stripe.FinancialConnectionsAccount[];
        /** True if this list has another page of items after this one that can be fetched. */
        has_more: boolean;
        /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
        object: "list";
        /** The URL where this list can be accessed. */
        url: string;
    }

    export type Permissions = Permissions.Item[];

    export namespace Permissions {
        export type Item = "balances" | "ownership" | "payment_method" | "transactions";
        export const Item = {
            Balances: "balances",
            Ownership: "ownership",
            PaymentMethod: "payment_method",
            Transactions: "transactions",
        } as const;
    }

    export type Prefetch = Prefetch.Item[];

    export namespace Prefetch {
        export type Item = "balances" | "ownership" | "transactions";
        export const Item = {
            Balances: "balances",
            Ownership: "ownership",
            Transactions: "transactions",
        } as const;
    }
}
