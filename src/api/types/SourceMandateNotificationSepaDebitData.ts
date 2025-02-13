/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface SourceMandateNotificationSepaDebitData {
    /** SEPA creditor ID. */
    creditor_identifier?: string;
    /** Last 4 digits of the account number associated with the debit. */
    last4?: string;
    /** Mandate reference associated with the debit. */
    mandate_reference?: string;
}
