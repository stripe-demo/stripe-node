/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         bank_transfer: {
 *             type: "eu_bank_transfer"
 *         },
 *         currency: "currency"
 *     }
 */
export interface CustomerCreateFundingInstructionsRequest {
    /** Additional parameters for `bank_transfer` funding types */
    bank_transfer: CustomerCreateFundingInstructionsRequest.BankTransfer;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
}

export namespace CustomerCreateFundingInstructionsRequest {
    /**
     * Additional parameters for `bank_transfer` funding types
     */
    export interface BankTransfer {
        /** Configuration for eu_bank_transfer funding type. */
        eu_bank_transfer?: BankTransfer.EuBankTransfer;
        /**
         * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
         *
         * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
         */
        requested_address_types?: BankTransfer.RequestedAddressTypes.Item[];
        /** The type of the `bank_transfer` */
        type: BankTransfer.Type;
    }

    export namespace BankTransfer {
        /**
         * Configuration for eu_bank_transfer funding type.
         */
        export interface EuBankTransfer {
            /** The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`. */
            country: string;
        }

        export type RequestedAddressTypes = RequestedAddressTypes.Item[];

        export namespace RequestedAddressTypes {
            export type Item = "iban" | "sort_code" | "spei" | "zengin";
            export const Item = {
                Iban: "iban",
                SortCode: "sort_code",
                Spei: "spei",
                Zengin: "zengin",
            } as const;
        }

        /**
         * The type of the `bank_transfer`
         */
        export type Type =
            | "eu_bank_transfer"
            | "gb_bank_transfer"
            | "jp_bank_transfer"
            | "mx_bank_transfer"
            | "us_bank_transfer";
        export const Type = {
            EuBankTransfer: "eu_bank_transfer",
            GbBankTransfer: "gb_bank_transfer",
            JpBankTransfer: "jp_bank_transfer",
            MxBankTransfer: "mx_bank_transfer",
            UsBankTransfer: "us_bank_transfer",
        } as const;
    }
}
