/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodDetailsAchCreditTransfer {
    /** Account number to transfer funds to. */
    account_number?: string;
    /** Name of the bank associated with the routing number. */
    bank_name?: string;
    /** Routing transit number for the bank account to transfer funds to. */
    routing_number?: string;
    /** SWIFT code of the bank associated with the routing number. */
    swift_code?: string;
}
