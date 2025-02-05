/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodNaverPay {
    /** Whether to fund this transaction with Naver Pay points or a card. */
    funding: PaymentMethodNaverPay.Funding;
}

export namespace PaymentMethodNaverPay {
    /**
     * Whether to fund this transaction with Naver Pay points or a card.
     */
    export type Funding = "card" | "points";
    export const Funding = {
        Card: "card",
        Points: "points",
    } as const;
}
