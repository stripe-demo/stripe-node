/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface SetupAttemptPaymentMethodDetailsCard {
    /** Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    brand?: string;
    /** Check results by Card networks on Card address and CVC at the time of authorization */
    checks?: Stripe.SetupAttemptPaymentMethodDetailsCardChecks;
    /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
    country?: string;
    /** A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.) */
    description?: string;
    /** Two-digit number representing the card's expiration month. */
    exp_month?: number;
    /** Four-digit number representing the card's expiration year. */
    exp_year?: number;
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
    /** Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    network?: string;
    /** Populated if this authorization used 3D Secure authentication. */
    three_d_secure?: Stripe.ThreeDSecureDetails;
    /** If this Card is part of a card wallet, this contains the details of the card wallet. */
    wallet?: Stripe.SetupAttemptPaymentMethodDetailsCardWallet;
}
