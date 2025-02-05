/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { ReportRun } from "../resources/reportRun/client/Client";
import { ReportType } from "../resources/reportType/client/Client";

export declare namespace Reporting {
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

export class Reporting {
    protected _reportRun: ReportRun | undefined;
    protected _reportType: ReportType | undefined;

    constructor(protected readonly _options: Reporting.Options) {}

    public get reportRun(): ReportRun {
        return (this._reportRun ??= new ReportRun(this._options));
    }

    public get reportType(): ReportType {
        return (this._reportType ??= new ReportType(this._options));
    }
}
