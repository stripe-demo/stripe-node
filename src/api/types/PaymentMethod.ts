/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * PaymentMethod objects represent your customer's payment instruments.
 * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
 * Customer objects to store instrument details for future payments.
 *
 * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
 */
export interface PaymentMethod {
    acss_debit?: Stripe.PaymentMethodAcssDebit;
    affirm?: Stripe.PaymentMethodAffirm;
    afterpay_clearpay?: Stripe.PaymentMethodAfterpayClearpay;
    alipay?: Stripe.PaymentFlowsPrivatePaymentMethodsAlipay;
    /** This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”. */
    allow_redisplay?: PaymentMethod.AllowRedisplay;
    alma?: Stripe.PaymentMethodAlma;
    amazon_pay?: Stripe.PaymentMethodAmazonPay;
    au_becs_debit?: Stripe.PaymentMethodAuBecsDebit;
    bacs_debit?: Stripe.PaymentMethodBacsDebit;
    bancontact?: Stripe.PaymentMethodBancontact;
    billing_details: Stripe.BillingDetails;
    blik?: Stripe.PaymentMethodBlik;
    boleto?: Stripe.PaymentMethodBoleto;
    card?: Stripe.PaymentMethodCard;
    card_present?: Stripe.PaymentMethodCardPresent;
    cashapp?: Stripe.PaymentMethodCashapp;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer. */
    customer?: PaymentMethod.Customer;
    customer_balance?: Stripe.PaymentMethodCustomerBalance;
    eps?: Stripe.PaymentMethodEps;
    fpx?: Stripe.PaymentMethodFpx;
    giropay?: Stripe.PaymentMethodGiropay;
    grabpay?: Stripe.PaymentMethodGrabpay;
    /** Unique identifier for the object. */
    id: string;
    ideal?: Stripe.PaymentMethodIdeal;
    interac_present?: Stripe.PaymentMethodInteracPresent;
    kakao_pay?: Stripe.PaymentMethodKakaoPay;
    klarna?: Stripe.PaymentMethodKlarna;
    konbini?: Stripe.PaymentMethodKonbini;
    kr_card?: Stripe.PaymentMethodKrCard;
    link?: Stripe.PaymentMethodLink;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata?: Record<string, string | undefined>;
    mobilepay?: Stripe.PaymentMethodMobilepay;
    multibanco?: Stripe.PaymentMethodMultibanco;
    naver_pay?: Stripe.PaymentMethodNaverPay;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "payment_method";
    oxxo?: Stripe.PaymentMethodOxxo;
    p24?: Stripe.PaymentMethodP24;
    pay_by_bank?: Stripe.PaymentMethodPayByBank;
    payco?: Stripe.PaymentMethodPayco;
    paynow?: Stripe.PaymentMethodPaynow;
    paypal?: Stripe.PaymentMethodPaypal;
    pix?: Stripe.PaymentMethodPix;
    promptpay?: Stripe.PaymentMethodPromptpay;
    radar_options?: Stripe.RadarRadarOptions;
    revolut_pay?: Stripe.PaymentMethodRevolutPay;
    samsung_pay?: Stripe.PaymentMethodSamsungPay;
    sepa_debit?: Stripe.PaymentMethodSepaDebit;
    sofort?: Stripe.PaymentMethodSofort;
    swish?: Stripe.PaymentMethodSwish;
    twint?: Stripe.PaymentMethodTwint;
    /** The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type. */
    type: PaymentMethod.Type;
    us_bank_account?: Stripe.PaymentMethodUsBankAccount;
    wechat_pay?: Stripe.PaymentMethodWechatPay;
    zip?: Stripe.PaymentMethodZip;
}

export namespace PaymentMethod {
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
     */
    export type AllowRedisplay = "always" | "limited" | "unspecified";
    export const AllowRedisplay = {
        Always: "always",
        Limited: "limited",
        Unspecified: "unspecified",
    } as const;
    /**
     * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
     */
    export type Customer = string | Stripe.Customer;
    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    export type Type =
        | "acss_debit"
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "amazon_pay"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "blik"
        | "boleto"
        | "card"
        | "card_present"
        | "cashapp"
        | "customer_balance"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "interac_present"
        | "kakao_pay"
        | "klarna"
        | "konbini"
        | "kr_card"
        | "link"
        | "mobilepay"
        | "multibanco"
        | "naver_pay"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "payco"
        | "paynow"
        | "paypal"
        | "pix"
        | "promptpay"
        | "revolut_pay"
        | "samsung_pay"
        | "sepa_debit"
        | "sofort"
        | "swish"
        | "twint"
        | "us_bank_account"
        | "wechat_pay"
        | "zip";
    export const Type = {
        AcssDebit: "acss_debit",
        Affirm: "affirm",
        AfterpayClearpay: "afterpay_clearpay",
        Alipay: "alipay",
        Alma: "alma",
        AmazonPay: "amazon_pay",
        AuBecsDebit: "au_becs_debit",
        BacsDebit: "bacs_debit",
        Bancontact: "bancontact",
        Blik: "blik",
        Boleto: "boleto",
        Card: "card",
        CardPresent: "card_present",
        Cashapp: "cashapp",
        CustomerBalance: "customer_balance",
        Eps: "eps",
        Fpx: "fpx",
        Giropay: "giropay",
        Grabpay: "grabpay",
        Ideal: "ideal",
        InteracPresent: "interac_present",
        KakaoPay: "kakao_pay",
        Klarna: "klarna",
        Konbini: "konbini",
        KrCard: "kr_card",
        Link: "link",
        Mobilepay: "mobilepay",
        Multibanco: "multibanco",
        NaverPay: "naver_pay",
        Oxxo: "oxxo",
        P24: "p24",
        PayByBank: "pay_by_bank",
        Payco: "payco",
        Paynow: "paynow",
        Paypal: "paypal",
        Pix: "pix",
        Promptpay: "promptpay",
        RevolutPay: "revolut_pay",
        SamsungPay: "samsung_pay",
        SepaDebit: "sepa_debit",
        Sofort: "sofort",
        Swish: "swish",
        Twint: "twint",
        UsBankAccount: "us_bank_account",
        WechatPay: "wechat_pay",
        Zip: "zip",
    } as const;
}
