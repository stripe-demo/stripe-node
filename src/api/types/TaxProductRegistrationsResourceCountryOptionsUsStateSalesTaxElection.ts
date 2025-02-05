/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection {
    /** A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. */
    jurisdiction?: string;
    /** The type of the election for the state sales tax registration. */
    type: TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection.Type;
}

export namespace TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection {
    /**
     * The type of the election for the state sales tax registration.
     */
    export type Type = "local_use_tax" | "simplified_sellers_use_tax" | "single_local_use_tax";
    export const Type = {
        LocalUseTax: "local_use_tax",
        SimplifiedSellersUseTax: "simplified_sellers_use_tax",
        SingleLocalUseTax: "single_local_use_tax",
    } as const;
}
