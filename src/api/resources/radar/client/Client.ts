/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { EarlyFraudWarning } from "../resources/earlyFraudWarning/client/Client";
import { ValueListItem } from "../resources/valueListItem/client/Client";
import { ValueList } from "../resources/valueList/client/Client";

export declare namespace Radar {
    export interface Options {
        environment?: core.Supplier<environments.StripeEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
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

export class Radar {
    protected _earlyFraudWarning: EarlyFraudWarning | undefined;
    protected _valueListItem: ValueListItem | undefined;
    protected _valueList: ValueList | undefined;

    constructor(protected readonly _options: Radar.Options) {}

    public get earlyFraudWarning(): EarlyFraudWarning {
        return (this._earlyFraudWarning ??= new EarlyFraudWarning(this._options));
    }

    public get valueListItem(): ValueListItem {
        return (this._valueListItem ??= new ValueListItem(this._options));
    }

    public get valueList(): ValueList {
        return (this._valueList ??= new ValueList(this._options));
    }
}
