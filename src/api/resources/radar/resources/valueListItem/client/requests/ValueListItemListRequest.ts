/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         value_list: "value_list"
 *     }
 */
export interface ValueListItemListRequest {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: string | string[];
    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
    /**
     * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
     */
    value?: string;
    /**
     * Identifier for the parent value list this item belongs to.
     */
    value_list: string;
}
