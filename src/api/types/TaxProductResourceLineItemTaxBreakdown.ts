/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface TaxProductResourceLineItemTaxBreakdown {
    /** The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
    amount: number;
    jurisdiction: Stripe.TaxProductResourceJurisdiction;
    /** Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address). */
    sourcing: TaxProductResourceLineItemTaxBreakdown.Sourcing;
    /** Details regarding the rate for this tax. This field will be `null` when the tax is not imposed, for example if the product is exempt from tax. */
    tax_rate_details?: Stripe.TaxProductResourceLineItemTaxRateDetails;
    /** The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported. */
    taxability_reason: TaxProductResourceLineItemTaxBreakdown.TaxabilityReason;
    /** The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
    taxable_amount: number;
}

export namespace TaxProductResourceLineItemTaxBreakdown {
    /**
     * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
     */
    export type Sourcing = "destination" | "origin";
    export const Sourcing = {
        Destination: "destination",
        Origin: "origin",
    } as const;
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
     */
    export type TaxabilityReason =
        | "customer_exempt"
        | "not_collecting"
        | "not_subject_to_tax"
        | "not_supported"
        | "portion_product_exempt"
        | "portion_reduced_rated"
        | "portion_standard_rated"
        | "product_exempt"
        | "product_exempt_holiday"
        | "proportionally_rated"
        | "reduced_rated"
        | "reverse_charge"
        | "standard_rated"
        | "taxable_basis_reduced"
        | "zero_rated";
    export const TaxabilityReason = {
        CustomerExempt: "customer_exempt",
        NotCollecting: "not_collecting",
        NotSubjectToTax: "not_subject_to_tax",
        NotSupported: "not_supported",
        PortionProductExempt: "portion_product_exempt",
        PortionReducedRated: "portion_reduced_rated",
        PortionStandardRated: "portion_standard_rated",
        ProductExempt: "product_exempt",
        ProductExemptHoliday: "product_exempt_holiday",
        ProportionallyRated: "proportionally_rated",
        ReducedRated: "reduced_rated",
        ReverseCharge: "reverse_charge",
        StandardRated: "standard_rated",
        TaxableBasisReduced: "taxable_basis_reduced",
        ZeroRated: "zero_rated",
    } as const;
}
