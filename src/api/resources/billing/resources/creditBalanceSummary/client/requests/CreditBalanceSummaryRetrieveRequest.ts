/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../../../../../../index";

/**
 * @example
 *     {
 *         customer: "blackcurrant............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................",
 *         filter: {
 *             applicability_scope: undefined,
 *             credit_grant: undefined,
 *             type: "applicability_scope"
 *         }
 *     }
 */
export interface CreditBalanceSummaryRetrieveRequest {
    /**
     * The customer for which to fetch credit balance summary.
     */
    customer: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * The filter criteria for the credit balance summary.
     */
    filter: Stripe.billing.CreditBalanceSummaryRetrieveRequestFilter;
}
