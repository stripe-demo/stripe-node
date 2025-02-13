/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "blackcurrant............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................",
 *         scope: {
 *             type: "account",
 *             user: undefined
 *         }
 *     }
 */
export interface SecretFindRequest {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * A name for the secret that's unique within the scope.
     */
    name: string;
    /**
     * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
     */
    scope: Stripe.apps.SecretFindRequestScope;
}
