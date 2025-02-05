/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface InternalCard {
    /** Brand of the card used in the transaction */
    brand?: string;
    /** Two-letter ISO code representing the country of the card */
    country?: string;
    /** Two digit number representing the card's expiration month */
    exp_month?: number;
    /** Two digit number representing the card's expiration year */
    exp_year?: number;
    /** The last 4 digits of the card */
    last4?: string;
}
