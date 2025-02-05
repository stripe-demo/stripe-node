/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../../../index";

/**
 *
 */
export interface ReviewListResponse {
    data: Stripe.Review[];
    /** True if this list has another page of items after this one that can be fetched. */
    has_more: boolean;
    /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
    object: "list";
    /** The URL where this list can be accessed. */
    url: string;
}
