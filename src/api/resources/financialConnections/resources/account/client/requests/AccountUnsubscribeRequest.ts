/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         features: ["transactions"]
 *     }
 */
export interface AccountUnsubscribeRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The list of account features from which you would like to unsubscribe. */
    features: "transactions"[];
}
