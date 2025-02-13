/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface IssuingTransactionFleetTaxData {
    /** Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax. */
    local_amount_decimal?: string;
    /** Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax. */
    national_amount_decimal?: string;
}
