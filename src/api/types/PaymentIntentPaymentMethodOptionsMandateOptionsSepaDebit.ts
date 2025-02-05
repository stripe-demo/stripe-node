/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit {
    /** Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'. */
    reference_prefix?: string;
}
