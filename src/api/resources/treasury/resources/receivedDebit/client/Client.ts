/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Stripe from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace ReceivedDebit {
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

export class ReceivedDebit {
    constructor(protected readonly _options: ReceivedDebit.Options) {}

    /**
     * <p>Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can’t directly create ReceivedDebits initiated by third parties.</p>
     *
     * @param {Stripe.treasury.ReceivedDebitCreateRequest} request
     * @param {ReceivedDebit.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.receivedDebit.create({
     *         amount: 1,
     *         currency: "currency",
     *         financial_account: "financial_account"
     *     })
     */
    public async create(
        request: Stripe.treasury.ReceivedDebitCreateRequest,
        requestOptions?: ReceivedDebit.RequestOptions,
    ): Promise<Stripe.TreasuryReceivedDebit> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                "v1/test_helpers/treasury/received_debits",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "stripe",
                "X-Fern-SDK-Version": "0.0.1-alpha0",
                "User-Agent": "stripe/0.0.1-alpha0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/x-www-form-urlencoded",
            requestType: "json",
            body: { ...request, network: "ach" },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryReceivedDebit;
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
                    "Timeout exceeded when calling POST /v1/test_helpers/treasury/received_debits.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Returns a list of ReceivedDebits.</p>
     *
     * @param {Stripe.treasury.ReceivedDebitListRequest} request
     * @param {ReceivedDebit.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.receivedDebit.list({
     *         financial_account: "financial_account"
     *     })
     */
    public async list(
        request: Stripe.treasury.ReceivedDebitListRequest,
        requestOptions?: ReceivedDebit.RequestOptions,
    ): Promise<Stripe.treasury.ReceivedDebitListResponse> {
        const {
            ending_before: endingBefore,
            expand,
            financial_account: financialAccount,
            limit,
            starting_after: startingAfter,
            status,
        } = request;
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

        _queryParams["financial_account"] = financialAccount;
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                "v1/treasury/received_debits",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "stripe",
                "X-Fern-SDK-Version": "0.0.1-alpha0",
                "User-Agent": "stripe/0.0.1-alpha0",
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
            return _response.body as Stripe.treasury.ReceivedDebitListResponse;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling GET /v1/treasury/received_debits.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.ReceivedDebitRetrieveRequest} request
     * @param {ReceivedDebit.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.receivedDebit.retrieve("id")
     */
    public async retrieve(
        id: string,
        request: Stripe.treasury.ReceivedDebitRetrieveRequest = {},
        requestOptions?: ReceivedDebit.RequestOptions,
    ): Promise<Stripe.TreasuryReceivedDebit> {
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
                `v1/treasury/received_debits/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "stripe",
                "X-Fern-SDK-Version": "0.0.1-alpha0",
                "User-Agent": "stripe/0.0.1-alpha0",
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
            return _response.body as Stripe.TreasuryReceivedDebit;
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
                    "Timeout exceeded when calling GET /v1/treasury/received_debits/{id}.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        return core.BasicAuth.toAuthorizationHeader({
            username: await core.Supplier.get(this._options.username),
            password: await core.Supplier.get(this._options.password),
        });
    }
}
