/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface SetupIntentVerifyMicrodepositsRequest {
    /** Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account. */
    amounts?: number[];
    /** A six-character code starting with SM present in the microdeposit sent to the bank account. */
    descriptor_code?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
}
