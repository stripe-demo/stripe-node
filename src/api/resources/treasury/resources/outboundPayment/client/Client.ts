/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Stripe from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace OutboundPayment {
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

export class OutboundPayment {
    constructor(protected readonly _options: OutboundPayment.Options) {}

    /**
     * <p>Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.OutboundPaymentUpdateRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.update("id", {
     *         tracking_details: {
     *             type: "ach"
     *         }
     *     })
     */
    public async update(
        id: string,
        request: Stripe.treasury.OutboundPaymentUpdateRequest,
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}`,
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling POST /v1/test_helpers/treasury/outbound_payments/{id}.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Transitions a test mode created OutboundPayment to the <code>failed</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.OutboundPaymentFailRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.fail("id")
     */
    public async fail(
        id: string,
        request: Stripe.treasury.OutboundPaymentFailRequest = {},
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}/fail`,
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling POST /v1/test_helpers/treasury/outbound_payments/{id}/fail.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Transitions a test mode created OutboundPayment to the <code>posted</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.OutboundPaymentPostRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.post("id")
     */
    public async post(
        id: string,
        request: Stripe.treasury.OutboundPaymentPostRequest = {},
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}/post`,
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling POST /v1/test_helpers/treasury/outbound_payments/{id}/post.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Transitions a test mode created OutboundPayment to the <code>returned</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.OutboundPaymentReturnOutboundPaymentRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.returnOutboundPayment("id")
     */
    public async returnOutboundPayment(
        id: string,
        request: Stripe.treasury.OutboundPaymentReturnOutboundPaymentRequest = {},
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}/return`,
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling POST /v1/test_helpers/treasury/outbound_payments/{id}/return.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Returns a list of OutboundPayments sent from the specified FinancialAccount.</p>
     *
     * @param {Stripe.treasury.OutboundPaymentListRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.list({
     *         financial_account: "financial_account"
     *     })
     */
    public async list(
        request: Stripe.treasury.OutboundPaymentListRequest,
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.treasury.OutboundPaymentListResponse> {
        const {
            customer,
            ending_before: endingBefore,
            expand,
            financial_account: financialAccount,
            limit,
            starting_after: startingAfter,
            status,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (customer != null) {
            _queryParams["customer"] = customer;
        }

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
                "v1/treasury/outbound_payments",
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
            return _response.body as Stripe.treasury.OutboundPaymentListResponse;
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
                    "Timeout exceeded when calling GET /v1/treasury/outbound_payments.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Creates an OutboundPayment.</p>
     *
     * @param {Stripe.treasury.OutboundPaymentCreateRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.create({
     *         amount: 1,
     *         currency: "currency",
     *         financial_account: "financial_account"
     *     })
     */
    public async create(
        request: Stripe.treasury.OutboundPaymentCreateRequest,
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                "v1/treasury/outbound_payments",
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling POST /v1/treasury/outbound_payments.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.OutboundPaymentRetrieveRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.retrieve("id")
     */
    public async retrieve(
        id: string,
        request: Stripe.treasury.OutboundPaymentRetrieveRequest = {},
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
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
                `v1/treasury/outbound_payments/${encodeURIComponent(id)}`,
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
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling GET /v1/treasury/outbound_payments/{id}.",
                );
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Cancel an OutboundPayment.</p>
     *
     * @param {string} id
     * @param {Stripe.treasury.OutboundPaymentCancelRequest} request
     * @param {OutboundPayment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.treasury.outboundPayment.cancel("id")
     */
    public async cancel(
        id: string,
        request: Stripe.treasury.OutboundPaymentCancelRequest = {},
        requestOptions?: OutboundPayment.RequestOptions,
    ): Promise<Stripe.TreasuryOutboundPayment> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/treasury/outbound_payments/${encodeURIComponent(id)}/cancel`,
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
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Stripe.TreasuryOutboundPayment;
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
                    "Timeout exceeded when calling POST /v1/treasury/outbound_payments/{id}/cancel.",
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
