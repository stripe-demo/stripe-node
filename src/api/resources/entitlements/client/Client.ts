/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { ActiveEntitlement } from "../resources/activeEntitlement/client/Client";
import { Feature } from "../resources/feature/client/Client";

export declare namespace Entitlements {
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

export class Entitlements {
    protected _activeEntitlement: ActiveEntitlement | undefined;
    protected _feature: Feature | undefined;

    constructor(protected readonly _options: Entitlements.Options) {}

    public get activeEntitlement(): ActiveEntitlement {
        return (this._activeEntitlement ??= new ActiveEntitlement(this._options));
    }

    public get feature(): Feature {
        return (this._feature ??= new Feature(this._options));
    }
}
