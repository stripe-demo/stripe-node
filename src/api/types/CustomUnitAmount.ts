/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface CustomUnitAmount {
    /** The maximum unit amount the customer can specify for this item. */
    maximum?: number;
    /** The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount. */
    minimum?: number;
    /** The starting unit amount which can be updated by the customer. */
    preset?: number;
}
