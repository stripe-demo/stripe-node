/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export interface TreasuryFinancialAccountsResourceAbaRecord {
    /** The name of the person or business that owns the bank account. */
    account_holder_name: string;
    /** The account number. */
    account_number?: string;
    /** The last four characters of the account number. */
    account_number_last4: string;
    /** Name of the bank. */
    bank_name: string;
    /** Routing number for the account. */
    routing_number: string;
}
