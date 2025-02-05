/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodDetailsCardInstallmentsPlan {
    /** For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card. */
    count?: number;
    /**
     * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
     * One of `month`.
     */
    interval?: "month";
    /** Type of installment plan, one of `fixed_count`. */
    type: "fixed_count";
}
