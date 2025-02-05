/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentIntentNextActionBoleto {
    /** The timestamp after which the boleto expires. */
    expires_at?: number;
    /** The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher. */
    hosted_voucher_url?: string;
    /** The boleto number. */
    number?: string;
    /** The URL to the downloadable boleto voucher PDF. */
    pdf?: string;
}
