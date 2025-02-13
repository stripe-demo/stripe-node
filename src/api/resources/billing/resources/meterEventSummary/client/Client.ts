/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Stripe from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace MeterEventSummary {
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

export class MeterEventSummary {
    constructor(protected readonly _options: MeterEventSummary.Options) {}

    /**
     * <p>Retrieve a list of billing meter event summaries.</p>
     *
     * @param {string} id - Unique identifier for the object.
     * @param {Stripe.billing.MeterEventSummaryListRequest} request
     * @param {MeterEventSummary.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.billing.meterEventSummary.list("id", {
     *         customer: "customer",
     *         end_time: 1,
     *         start_time: 1
     *     })
     */
    public async list(
        id: string,
        request: Stripe.billing.MeterEventSummaryListRequest,
        requestOptions?: MeterEventSummary.RequestOptions,
    ): Promise<Stripe.billing.MeterEventSummaryListResponse> {
        const {
            customer,
            end_time: endTime,
            ending_before: endingBefore,
            expand,
            limit,
            start_time: startTime,
            starting_after: startingAfter,
            value_grouping_window: valueGroupingWindow,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["customer"] = customer;
        _queryParams["end_time"] = endTime.toString();
        if (endingBefore != null) {
            _queryParams["ending_before"] = endingBefore;
        }

        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand"] = expand.map((item) => item);
            } else {
                _queryParams["expand"] = expand;
            }
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        _queryParams["start_time"] = startTime.toString();
        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        if (valueGroupingWindow != null) {
            _queryParams["value_grouping_window"] = valueGroupingWindow;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/billing/meters/${encodeURIComponent(id)}/event_summaries`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/stripe",
                "X-Fern-SDK-Version": "1.0.1",
                "User-Agent": "@fern-api/stripe/1.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.billing.MeterEventSummaryListResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.StripeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.StripeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.StripeTimeoutError(
                    "Timeout exceeded when calling GET /v1/billing/meters/{id}/event_summaries.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
