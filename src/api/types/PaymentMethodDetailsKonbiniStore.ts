/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodDetailsKonbiniStore {
    /** The name of the convenience store chain where the payment was completed. */
    chain?: PaymentMethodDetailsKonbiniStore.Chain;
}

export namespace PaymentMethodDetailsKonbiniStore {
    /**
     * The name of the convenience store chain where the payment was completed.
     */
    export type Chain = "familymart" | "lawson" | "ministop" | "seicomart";
    export const Chain = {
        Familymart: "familymart",
        Lawson: "lawson",
        Ministop: "ministop",
        Seicomart: "seicomart",
    } as const;
}
