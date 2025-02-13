/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface DisputePaymentMethodDetails {
    amazon_pay?: Stripe.DisputePaymentMethodDetailsAmazonPay;
    card?: Stripe.DisputePaymentMethodDetailsCard;
    klarna?: Stripe.DisputePaymentMethodDetailsKlarna;
    paypal?: Stripe.DisputePaymentMethodDetailsPaypal;
    /** Payment method type. */
    type: DisputePaymentMethodDetails.Type;
}

export namespace DisputePaymentMethodDetails {
    /**
     * Payment method type.
     */
    export type Type = "amazon_pay" | "card" | "klarna" | "paypal";
    export const Type = {
        AmazonPay: "amazon_pay",
        Card: "card",
        Klarna: "klarna",
        Paypal: "paypal",
    } as const;
}
