/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Stripe from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace PaymentSource {
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

export class PaymentSource {
    constructor(protected readonly _options: PaymentSource.Options) {}

    /**
     * <p>List sources for a specified customer.</p>
     *
     * @param {string} customer
     * @param {Stripe.PaymentSourceListRequest} request
     * @param {PaymentSource.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.paymentSource.list("customer")
     */
    public async list(
        customer: string,
        request: Stripe.PaymentSourceListRequest = {},
        requestOptions?: PaymentSource.RequestOptions,
    ): Promise<Stripe.PaymentSourceListResponse> {
        const { ending_before: endingBefore, expand, limit, object, starting_after: startingAfter } = request;
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

        if (object != null) {
            _queryParams["object"] = object;
        }

        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/customers/${encodeURIComponent(customer)}/sources`,
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
            return _response.body as Stripe.PaymentSourceListResponse;
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
                    "Timeout exceeded when calling GET /v1/customers/{customer}/sources.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>
     *
     * <p>If the card’s owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>
     *
     * @param {string} customer
     * @param {Stripe.PaymentSourceCreateRequest} request
     * @param {PaymentSource.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.paymentSource.create("customer", {
     *         source: "source"
     *     })
     */
    public async create(
        customer: string,
        request: Stripe.PaymentSourceCreateRequest,
        requestOptions?: PaymentSource.RequestOptions,
    ): Promise<Stripe.PaymentSource> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/customers/${encodeURIComponent(customer)}/sources`,
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
            return _response.body as Stripe.PaymentSource;
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
                    "Timeout exceeded when calling POST /v1/customers/{customer}/sources.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Retrieve a specified source for a given customer.</p>
     *
     * @param {string} customer
     * @param {string} id
     * @param {Stripe.PaymentSourceRetrieveRequest} request
     * @param {PaymentSource.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.paymentSource.retrieve("customer", "id")
     */
    public async retrieve(
        customer: string,
        id: string,
        request: Stripe.PaymentSourceRetrieveRequest = {},
        requestOptions?: PaymentSource.RequestOptions,
    ): Promise<Stripe.PaymentSource> {
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
                `v1/customers/${encodeURIComponent(customer)}/sources/${encodeURIComponent(id)}`,
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
            return _response.body as Stripe.PaymentSource;
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
                    "Timeout exceeded when calling GET /v1/customers/{customer}/sources/{id}.",
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
