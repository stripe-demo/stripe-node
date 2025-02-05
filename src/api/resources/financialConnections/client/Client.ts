/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Account } from "../resources/account/client/Client";
import { Session } from "../resources/session/client/Client";
import { Transaction } from "../resources/transaction/client/Client";

export declare namespace FinancialConnections {
    export interface Options {
        environment?: core.Supplier<environments.StripeEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        username: core.Supplier<string>;
        password: core.Supplier<string>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class FinancialConnections {
    protected _account: Account | undefined;
    protected _session: Session | undefined;
    protected _transaction: Transaction | undefined;

    constructor(protected readonly _options: FinancialConnections.Options) {}

    public get account(): Account {
        return (this._account ??= new Account(this._options));
    }

    public get session(): Session {
        return (this._session ??= new Session(this._options));
    }

    public get transaction(): Transaction {
        return (this._transaction ??= new Transaction(this._options));
    }
}
