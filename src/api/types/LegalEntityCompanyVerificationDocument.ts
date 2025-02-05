/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface LegalEntityCompanyVerificationDocument {
    /** The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. */
    back?: LegalEntityCompanyVerificationDocument.Back;
    /** A user-displayable string describing the verification state of this document. */
    details?: string;
    /** One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document. */
    details_code?: string;
    /** The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. */
    front?: LegalEntityCompanyVerificationDocument.Front;
}

export namespace LegalEntityCompanyVerificationDocument {
    /**
     * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`.
     */
    export type Back = string | Stripe.File_;
    /**
     * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`.
     */
    export type Front = string | Stripe.File_;
}
