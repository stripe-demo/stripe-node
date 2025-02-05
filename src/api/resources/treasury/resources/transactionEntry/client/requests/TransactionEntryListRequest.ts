/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../../../../../../index";

/**
 * @example
 *     {
 *         financial_account: "financial_account"
 *     }
 */
export interface TransactionEntryListRequest {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;
    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.
     */
    order_by?: Stripe.treasury.TransactionEntryListRequestOrderBy;
    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
    /**
     * Only return TransactionEntries associated with this Transaction.
     */
    transaction?: string;
}
