/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Stripe from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace PhysicalBundle {
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

export class PhysicalBundle {
    constructor(protected readonly _options: PhysicalBundle.Options) {}

    /**
     * <p>Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>
     *
     * @param {Stripe.issuing.PhysicalBundleListRequest} request
     * @param {PhysicalBundle.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.issuing.physicalBundle.list()
     */
    public async list(
        request: Stripe.issuing.PhysicalBundleListRequest = {},
        requestOptions?: PhysicalBundle.RequestOptions,
    ): Promise<Stripe.issuing.PhysicalBundleListResponse> {
        const {
            ending_before: endingBefore,
            expand,
            limit,
            starting_after: startingAfter,
            status,
            type: type_,
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

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (startingAfter != null) {
            _queryParams["starting_after"] = startingAfter;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (type_ != null) {
            _queryParams["type"] = type_;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.StripeEnvironment.Default,
                "v1/issuing/physical_bundles",
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/stripe",
                "X-Fern-SDK-Version": "1.0.0",
                "User-Agent": "@fern-api/stripe/1.0.0",
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
            return _response.body as Stripe.issuing.PhysicalBundleListResponse;
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
                throw new errors.StripeTimeoutError("Timeout exceeded when calling GET /v1/issuing/physical_bundles.");
            case "unknown":
                throw new errors.StripeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <p>Retrieves a physical bundle object.</p>
     *
     * @param {string} physicalBundle
     * @param {Stripe.issuing.PhysicalBundleRetrieveRequest} request
     * @param {PhysicalBundle.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.issuing.physicalBundle.retrieve("physical_bundle")
     */
    public async retrieve(
        physicalBundle: string,
        request: Stripe.issuing.PhysicalBundleRetrieveRequest = {},
        requestOptions?: PhysicalBundle.RequestOptions,
    ): Promise<Stripe.IssuingPhysicalBundle> {
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
                `v1/issuing/physical_bundles/${encodeURIComponent(physicalBundle)}`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/stripe",
                "X-Fern-SDK-Version": "1.0.0",
                "User-Agent": "@fern-api/stripe/1.0.0",
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
            return _response.body as Stripe.IssuingPhysicalBundle;
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
                    "Timeout exceeded when calling GET /v1/issuing/physical_bundles/{physical_bundle}.",
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
