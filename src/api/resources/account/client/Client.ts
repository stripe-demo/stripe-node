/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Stripe from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Account {
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

export class Account {
    constructor(protected readonly _options: Account.Options) {}

    /**
     * <p>Retrieves the details of an account.</p>
     *
     * @param {Stripe.AccountRetrieveRequest} request
     * @param {Account.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.account.retrieve()
     */
    public async retrieve(
        request: Stripe.AccountRetrieveRequest = {},
        requestOptions?: Account.RequestOptions,
    ): Promise<Stripe.Account> {
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
                "v1/account",
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
            return _response.body as Stripe.Account;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling GET /v1/account.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>
     *
     * @param {Stripe.AccountListRequest} request
     * @param {Account.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.account.list()
     */
    public async list(
        request: Stripe.AccountListRequest = {},
        requestOptions?: Account.RequestOptions,
    ): Promise<Stripe.AccountListResponse> {
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
                "v1/accounts",
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
            return _response.body as Stripe.AccountListResponse;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling GET /v1/accounts.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
     * To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>
     *
     * <p>If you’ve already collected information for your connected accounts, you <a href="/docs/connect/best-practices#onboarding">can prefill that information</a> when
     * creating the account. Connect Onboarding won’t ask for the prefilled information during account onboarding.
     * You can prefill any information on the account.</p>
     *
     * @param {Stripe.AccountCreateRequest} request
     * @param {Account.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.account.create()
     */
    public async create(
        request: Stripe.AccountCreateRequest = {},
        requestOptions?: Account.RequestOptions,
    ): Promise<Stripe.Account> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                "v1/accounts",
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
            return _response.body as Stripe.Account;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling POST /v1/accounts.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Updates a <a href="/connect/accounts">connected account</a> by setting the values of the parameters passed. Any parameters not provided are
     * left unchanged.</p>
     *
     * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
     * is <code>application</code>, which includes Custom accounts, you can update any information on the account.</p>
     *
     * <p>For accounts where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a>
     * is <code>stripe</code>, which includes Standard and Express accounts, you can update all information until you create
     * an <a href="/api/account_links">Account Link</a> or <a href="/api/account_sessions">Account Session</a> to start Connect onboarding,
     * after which some properties can no longer be updated.</p>
     *
     * <p>To update your own account, use the <a href="https://dashboard.stripe.com/settings/account">Dashboard</a>. Refer to our
     * <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>
     *
     * @param {string} account
     * @param {Stripe.AccountUpdateRequest} request
     * @param {Account.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.account.update("account")
     */
    public async update(
        account: string,
        request: Stripe.AccountUpdateRequest = {},
        requestOptions?: Account.RequestOptions,
    ): Promise<Stripe.Account> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/accounts/${encodeURIComponent(account)}`,
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
            return _response.body as Stripe.Account;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling POST /v1/accounts/{account}.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>With <a href="/connect">Connect</a>, you can delete accounts you manage.</p>
     *
     * <p>Test-mode accounts can be deleted at any time.</p>
     *
     * <p>Live-mode accounts where Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. Live-mode accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be deleted when all <a href="/api/balance/balance_object">balances</a> are zero.</p>
     *
     * <p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/settings/account">account information tab in your account settings</a> instead.</p>
     *
     * @param {string} account
     * @param {Stripe.AccountDeleteRequest} request
     * @param {Account.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.account.delete("account")
     */
    public async delete(
        account: string,
        request: Stripe.AccountDeleteRequest = {},
        requestOptions?: Account.RequestOptions,
    ): Promise<Stripe.DeletedAccount> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/accounts/${encodeURIComponent(account)}`,
            ),
            method: "DELETE",
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
            return _response.body as Stripe.DeletedAccount;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling DELETE /v1/accounts/{account}.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>With <a href="/connect">Connect</a>, you can reject accounts that you have flagged as suspicious.</p>
     *
     * <p>Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.</p>
     *
     * @param {string} account
     * @param {Stripe.AccountRejectRequest} request
     * @param {Account.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.account.reject("account", {
     *         reason: "reason"
     *     })
     */
    public async reject(
        account: string,
        request: Stripe.AccountRejectRequest,
        requestOptions?: Account.RequestOptions,
    ): Promise<Stripe.Account> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                `v1/accounts/${encodeURIComponent(account)}/reject`,
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
            return _response.body as Stripe.Account;
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
                    "Timeout exceeded when calling POST /v1/accounts/{account}/reject.",
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
