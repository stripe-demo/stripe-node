/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ProductListRequest {
    /**
     * Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
     */
    active?: boolean;
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * Only return products with the given IDs. Cannot be used with [starting_after](https://stripe.com/docs/api#list_products-starting_after) or [ending_before](https://stripe.com/docs/api#list_products-ending_before).
     */
    ids?: string | string[];
    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * Only return products that can be shipped (i.e., physical, not digital products).
     */
    shippable?: boolean;
    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
    /**
     * Only return products of this type.
     */
    type?: Stripe.ProductListRequestType;
    /**
     * Only return products with the given url.
     */
    url?: string;
}
