/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentMethodDetailsCardPresent {
    /** The authorized amount */
    amount_authorized?: number;
    /** Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    brand?: string;
    /** The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card. */
    brand_product?: string;
    /** When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured. */
    capture_before?: number;
    /** The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay. */
    cardholder_name?: string;
    /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
    country?: string;
    /** A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.) */
    description?: string;
    /** Authorization response cryptogram. */
    emv_auth_data?: string;
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
    /** ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod. */
    generated_card?: string;
    /** Issuer identification number of the card. (For internal use only and not typically available in standard API requests.) */
    iin?: string;
    /** Whether this [PaymentIntent](https://stripe.com/docs/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support). */
    incremental_authorization_supported: boolean;
    /** The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.) */
    issuer?: string;
    /** The last four digits of the card. */
    last4?: string;
    /** Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    network?: string;
    /** This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. The first three digits of the Trace ID is the Financial Network Code, the next 6 digits is the Banknet Reference Number, and the last 4 digits represent the date (MM/DD). This field will be available for successful Visa, Mastercard, or American Express transactions and always null for other card brands. */
    network_transaction_id?: string;
    /** Details about payments collected offline. */
    offline?: Stripe.PaymentMethodDetailsCardPresentOffline;
    /** Defines whether the authorized amount can be over-captured or not */
    overcapture_supported: boolean;
    /** EMV tag 5F2D. Preferred languages specified by the integrated circuit chip. */
    preferred_locales?: string[];
    /** How card details were read in this transaction. */
    read_method?: PaymentMethodDetailsCardPresent.ReadMethod;
    /** A collection of fields required to be displayed on receipts. Only required for EMV transactions. */
    receipt?: Stripe.PaymentMethodDetailsCardPresentReceipt;
    wallet?: Stripe.PaymentFlowsPrivatePaymentMethodsCardPresentCommonWallet;
}

export namespace PaymentMethodDetailsCardPresent {
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
