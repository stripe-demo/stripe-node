/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
 *
 * Related guide: [Managing list items](https://stripe.com/docs/radar/lists#managing-list-items)
 */
export interface RadarValueListItem {
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** The name or email address of the user who added this item to the value list. */
    created_by: string;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "radar.value_list_item";
    /** The value of the item. */
    value: string;
    /** The identifier of the value list this item belongs to. */
    value_list: string;
}
