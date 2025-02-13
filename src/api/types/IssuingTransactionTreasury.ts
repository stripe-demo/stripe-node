/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface IssuingTransactionTreasury {
    /** The Treasury [ReceivedCredit](https://stripe.com/docs/api/treasury/received_credits) representing this Issuing transaction if it is a refund */
    received_credit?: string;
    /** The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) representing this Issuing transaction if it is a capture */
    received_debit?: string;
}
