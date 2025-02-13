/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentMethodDetailsCard {
    /** The authorized amount. */
    amount_authorized?: number;
    /** Authorization code on the charge. */
    authorization_code?: string;
    /** Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    brand?: string;
    /** When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured. */
    capture_before?: number;
    /** Check results by Card networks on Card address and CVC at time of payment. */
    checks?: Stripe.PaymentMethodDetailsCardChecks;
    /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
    country?: string;
    /** A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.) */
    description?: string;
    /** Two-digit number representing the card's expiration month. */
    exp_month: number;
    /** Four-digit number representing the card's expiration year. */
    exp_year: number;
    extended_authorization?: Stripe.PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization;
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
    incremental_authorization?: Stripe.PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization;
    /**
     * Installment details for this payment (Mexico only).
     *
     * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
     */
    installments?: Stripe.PaymentMethodDetailsCardInstallments;
    /** The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.) */
    issuer?: string;
    /** The last four digits of the card. */
    last4?: string;
    /** ID of the mandate used to make this payment or created by it. */
    mandate?: string;
    /** True if this payment was marked as MOTO and out of scope for SCA. */
    moto?: boolean;
    multicapture?: Stripe.PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture;
    /** Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    network?: string;
    /** If this card has network token credentials, this contains the details of the network token credentials. */
    network_token?: Stripe.PaymentMethodDetailsCardNetworkToken;
    /** This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. The first three digits of the Trace ID is the Financial Network Code, the next 6 digits is the Banknet Reference Number, and the last 4 digits represent the date (MM/DD). This field will be available for successful Visa, Mastercard, or American Express transactions and always null for other card brands. */
    network_transaction_id?: string;
    overcapture?: Stripe.PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture;
    /** Status of a card based on the card issuer. */
    regulated_status?: PaymentMethodDetailsCard.RegulatedStatus;
    /** Populated if this transaction used 3D Secure authentication. */
    three_d_secure?: Stripe.ThreeDSecureDetailsCharge;
    /** If this Card is part of a card wallet, this contains the details of the card wallet. */
    wallet?: Stripe.PaymentMethodDetailsCardWallet;
}

export namespace PaymentMethodDetailsCard {
    /**
     * Status of a card based on the card issuer.
     */
    export type RegulatedStatus = "regulated" | "unregulated";
    export const RegulatedStatus = {
        Regulated: "regulated",
        Unregulated: "unregulated",
    } as const;
}
