/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodDetailsPassthroughCard {
    /** Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
    brand?: string;
    /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
    country?: string;
    /** Two-digit number representing the card's expiration month. */
    exp_month?: number;
    /** Four-digit number representing the card's expiration year. */
    exp_year?: number;
    /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
    funding?: string;
    /** The last four digits of the card. */
    last4?: string;
}
