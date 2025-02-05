/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { InboundTransfer } from "../resources/inboundTransfer/client/Client";
import { OutboundPayment } from "../resources/outboundPayment/client/Client";
import { OutboundTransfer } from "../resources/outboundTransfer/client/Client";
import { ReceivedCredit } from "../resources/receivedCredit/client/Client";
import { ReceivedDebit } from "../resources/receivedDebit/client/Client";
import { CreditReversal } from "../resources/creditReversal/client/Client";
import { DebitReversal } from "../resources/debitReversal/client/Client";
import { FinancialAccount } from "../resources/financialAccount/client/Client";
import { TransactionEntry } from "../resources/transactionEntry/client/Client";
import { Transaction } from "../resources/transaction/client/Client";

export declare namespace Treasury {
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

export class Treasury {
    protected _inboundTransfer: InboundTransfer | undefined;
    protected _outboundPayment: OutboundPayment | undefined;
    protected _outboundTransfer: OutboundTransfer | undefined;
    protected _receivedCredit: ReceivedCredit | undefined;
    protected _receivedDebit: ReceivedDebit | undefined;
    protected _creditReversal: CreditReversal | undefined;
    protected _debitReversal: DebitReversal | undefined;
    protected _financialAccount: FinancialAccount | undefined;
    protected _transactionEntry: TransactionEntry | undefined;
    protected _transaction: Transaction | undefined;

    constructor(protected readonly _options: Treasury.Options) {}

    public get inboundTransfer(): InboundTransfer {
        return (this._inboundTransfer ??= new InboundTransfer(this._options));
    }

    public get outboundPayment(): OutboundPayment {
        return (this._outboundPayment ??= new OutboundPayment(this._options));
    }

    public get outboundTransfer(): OutboundTransfer {
        return (this._outboundTransfer ??= new OutboundTransfer(this._options));
    }

    public get receivedCredit(): ReceivedCredit {
        return (this._receivedCredit ??= new ReceivedCredit(this._options));
    }

    public get receivedDebit(): ReceivedDebit {
        return (this._receivedDebit ??= new ReceivedDebit(this._options));
    }

    public get creditReversal(): CreditReversal {
        return (this._creditReversal ??= new CreditReversal(this._options));
    }

    public get debitReversal(): DebitReversal {
        return (this._debitReversal ??= new DebitReversal(this._options));
    }

    public get financialAccount(): FinancialAccount {
        return (this._financialAccount ??= new FinancialAccount(this._options));
    }

    public get transactionEntry(): TransactionEntry {
        return (this._transactionEntry ??= new TransactionEntry(this._options));
    }

    public get transaction(): Transaction {
        return (this._transaction ??= new Transaction(this._options));
    }
}
