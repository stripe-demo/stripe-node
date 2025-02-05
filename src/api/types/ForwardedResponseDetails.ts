/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Details about the response from the destination endpoint.
 */
export interface ForwardedResponseDetails {
    /** The response body from the destination endpoint to Stripe. */
    body: string;
    /** HTTP headers that the destination endpoint returned. */
    headers: Stripe.ForwardedRequestHeader[];
    /** The HTTP status code that the destination endpoint returned. */
    status: number;
}
