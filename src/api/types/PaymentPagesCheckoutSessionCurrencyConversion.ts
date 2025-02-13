/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentPagesCheckoutSessionCurrencyConversion {
    /** Total of all items in source currency before discounts or taxes are applied. */
    amount_subtotal: number;
    /** Total of all items in source currency after discounts and taxes are applied. */
    amount_total: number;
    /** Exchange rate used to convert source currency amounts to customer currency amounts */
    fx_rate: string;
    /** Creation currency of the CheckoutSession before localization */
    source_currency: string;
}
