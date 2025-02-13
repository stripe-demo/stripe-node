/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface IssuingCardholderIndividual {
    /** Information related to the card_issuing program for this cardholder. */
    card_issuing?: Stripe.IssuingCardholderCardIssuing;
    /** The date of birth of this cardholder. */
    dob?: Stripe.IssuingCardholderIndividualDob;
    /** The first name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters. */
    first_name?: string;
    /** The last name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters. */
    last_name?: string;
    /** Government-issued ID document for this cardholder. */
    verification?: Stripe.IssuingCardholderVerification;
}
