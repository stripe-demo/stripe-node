/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface InvoiceTaxAmount {
    /** The amount, in cents (or local equivalent), of the tax. */
    amount: number;
    /** Whether this tax amount is inclusive or exclusive. */
    inclusive: boolean;
    /** The tax rate that was applied to get this tax amount. */
    tax_rate: InvoiceTaxAmount.TaxRate;
    /** The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported. */
    taxability_reason?: InvoiceTaxAmount.TaxabilityReason;
    /** The amount on which tax is calculated, in cents (or local equivalent). */
    taxable_amount?: number;
}

export namespace InvoiceTaxAmount {
    /**
     * The tax rate that was applied to get this tax amount.
     */
    export type TaxRate = string | Stripe.TaxRate;
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
