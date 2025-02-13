/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodAuBecsDebit {
    /** Six-digit number identifying bank and branch associated with this bank account. */
    bsb_number?: string;
    /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
    fingerprint?: string;
    /** Last four digits of the bank account number. */
    last4?: string;
}
