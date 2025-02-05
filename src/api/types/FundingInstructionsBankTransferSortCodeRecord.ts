/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Sort Code Records contain U.K. bank account details per the sort code format.
 */
export interface FundingInstructionsBankTransferSortCodeRecord {
    account_holder_address: Stripe.Address;
    /** The name of the person or business that owns the bank account */
    account_holder_name: string;
    /** The account number */
    account_number: string;
    bank_address: Stripe.Address;
    /** The six-digit sort code */
    sort_code: string;
}
