/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Stripe from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace TransferReversal {
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

export class TransferReversal {
    constructor(protected readonly _options: TransferReversal.Options) {}

    /**
     * <p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>
     *
     * @param {string} id
     * @param {Stripe.TransferReversalListRequest} request
     * @param {TransferReversal.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.transferReversal.list("id")
     */
    public async list(
        id: string,
        request: Stripe.TransferReversalListRequest = {},
        requestOptions?: TransferReversal.RequestOptions,
    ): Promise<Stripe.TransferReversalListResponse> {
        const { ending_before: endingBefore, expand, limit, starting_after: startingAfter } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
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

        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/transfers/${encodeURIComponent(id)}/reversals`,
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
            return _response.body as Stripe.TransferReversalListResponse;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling GET /v1/transfers/{id}/reversals.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>When you create a new reversal, you must specify a transfer to create it on.</p>
     *
     * <p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>
     *
     * <p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>
     *
     * @param {string} id
     * @param {Stripe.TransferReversalCreateRequest} request
     * @param {TransferReversal.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.transferReversal.create("id")
     */
    public async create(
        id: string,
        request: Stripe.TransferReversalCreateRequest = {},
        requestOptions?: TransferReversal.RequestOptions,
    ): Promise<Stripe.TransferReversal> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/transfers/${encodeURIComponent(id)}/reversals`,
            ),
            method: "POST",
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
            contentType: "application/x-www-form-urlencoded",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TransferReversal;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling POST /v1/transfers/{id}/reversals.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>
     *
     * @param {string} id
     * @param {string} transfer
     * @param {Stripe.TransferReversalRetrieveRequest} request
     * @param {TransferReversal.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.transferReversal.retrieve("id", "transfer")
     */
    public async retrieve(
        id: string,
        transfer: string,
        request: Stripe.TransferReversalRetrieveRequest = {},
        requestOptions?: TransferReversal.RequestOptions,
    ): Promise<Stripe.TransferReversal> {
        const { expand } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (expand != null) {
            if (Array.isArray(expand)) {
                _queryParams["expand"] = expand.map((item) => item);
            } else {
                _queryParams["expand"] = expand;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/transfers/${encodeURIComponent(transfer)}/reversals/${encodeURIComponent(id)}`,
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
            return _response.body as Stripe.TransferReversal;
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
                    "Timeout exceeded when calling GET /v1/transfers/{transfer}/reversals/{id}.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>
     *
     * <p>This request only accepts metadata and description as arguments.</p>
     *
     * @param {string} id
     * @param {string} transfer
     * @param {Stripe.TransferReversalUpdateRequest} request
     * @param {TransferReversal.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.transferReversal.update("id", "transfer")
     */
    public async update(
        id: string,
        transfer: string,
        request: Stripe.TransferReversalUpdateRequest = {},
        requestOptions?: TransferReversal.RequestOptions,
    ): Promise<Stripe.TransferReversal> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/transfers/${encodeURIComponent(transfer)}/reversals/${encodeURIComponent(id)}`,
            ),
            method: "POST",
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
            contentType: "application/x-www-form-urlencoded",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TransferReversal;
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
                    "Timeout exceeded when calling POST /v1/transfers/{transfer}/reversals/{id}.",
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
