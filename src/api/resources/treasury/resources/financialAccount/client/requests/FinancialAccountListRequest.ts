/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface FinancialAccountListRequest {
    /**
     * An object ID cursor for use in pagination.
     */
    ending_before?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * A limit ranging from 1 to 100 (defaults to 10).
     */
    limit?: number;
    /**
     * An object ID cursor for use in pagination.
     */
    starting_after?: string;
}
