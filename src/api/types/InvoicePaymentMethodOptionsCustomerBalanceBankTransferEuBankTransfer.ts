/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer {
    /** The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`. */
    country: InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer.Country;
}

export namespace InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer {
    /**
     * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
     */
    export type Country = "BE" | "DE" | "ES" | "FR" | "IE" | "NL";
    export const Country = {
        Be: "BE",
        De: "DE",
        Es: "ES",
        Fr: "FR",
        Ie: "IE",
        Nl: "NL",
    } as const;
}
