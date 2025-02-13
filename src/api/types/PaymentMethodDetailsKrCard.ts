/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodDetailsKrCard {
    /** The local credit or debit card brand. */
    brand?: PaymentMethodDetailsKrCard.Brand;
    /** A unique identifier for the buyer as determined by the local payment processor. */
    buyer_id?: string;
    /** The last four digits of the card. This may not be present for American Express cards. */
    last4?: string;
}

export namespace PaymentMethodDetailsKrCard {
    /**
     * The local credit or debit card brand.
     */
    export type Brand =
        | "bc"
        | "citi"
        | "hana"
        | "hyundai"
        | "jeju"
        | "jeonbuk"
        | "kakaobank"
        | "kbank"
        | "kdbbank"
        | "kookmin"
        | "kwangju"
        | "lotte"
        | "mg"
        | "nh"
        | "post"
        | "samsung"
        | "savingsbank"
        | "shinhan"
        | "shinhyup"
        | "suhyup"
        | "tossbank"
        | "woori";
    export const Brand = {
        Bc: "bc",
        Citi: "citi",
        Hana: "hana",
        Hyundai: "hyundai",
        Jeju: "jeju",
        Jeonbuk: "jeonbuk",
        Kakaobank: "kakaobank",
        Kbank: "kbank",
        Kdbbank: "kdbbank",
        Kookmin: "kookmin",
        Kwangju: "kwangju",
        Lotte: "lotte",
        Mg: "mg",
        Nh: "nh",
        Post: "post",
        Samsung: "samsung",
        Savingsbank: "savingsbank",
        Shinhan: "shinhan",
        Shinhyup: "shinhyup",
        Suhyup: "suhyup",
        Tossbank: "tossbank",
        Woori: "woori",
    } as const;
}
