/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentMethodInteracPresent {
    /** Card brand. Can be `interac`, `mastercard` or `visa`. */
    brand?: string;
    /** The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay. */
    cardholder_name?: string;
    /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
    country?: string;
    /** A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.) */
    description?: string;
    /** Two-digit number representing the card's expiration month. */
    exp_month: number;
    /** Four-digit number representing the card's expiration year. */
    exp_year: number;
    /**
     * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
     *
     * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
     */
    fingerprint?: string;
    /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
    funding?: string;
    /** Issuer identification number of the card. (For internal use only and not typically available in standard API requests.) */
    iin?: string;
    /** The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.) */
    issuer?: string;
    /** The last four digits of the card. */
    last4?: string;
    /** Contains information about card networks that can be used to process the payment. */
    networks?: Stripe.PaymentMethodCardPresentNetworks;
    /** EMV tag 5F2D. Preferred languages specified by the integrated circuit chip. */
    preferred_locales?: string[];
    /** How card details were read in this transaction. */
    read_method?: PaymentMethodInteracPresent.ReadMethod;
}

export namespace PaymentMethodInteracPresent {
    /**
     * How card details were read in this transaction.
     */
    export type ReadMethod =
        | "contact_emv"
        | "contactless_emv"
        | "contactless_magstripe_mode"
        | "magnetic_stripe_fallback"
        | "magnetic_stripe_track2";
    export const ReadMethod = {
        ContactEmv: "contact_emv",
        ContactlessEmv: "contactless_emv",
        ContactlessMagstripeMode: "contactless_magstripe_mode",
        MagneticStripeFallback: "magnetic_stripe_fallback",
        MagneticStripeTrack2: "magnetic_stripe_track2",
    } as const;
}
