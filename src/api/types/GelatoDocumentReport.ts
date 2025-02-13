/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Result from a document check
 */
export interface GelatoDocumentReport {
    /** Address as it appears in the document. */
    address?: Stripe.Address;
    /** Date of birth as it appears in the document. */
    dob?: Stripe.GelatoDataDocumentReportDateOfBirth;
    /** Details on the verification error. Present when status is `unverified`. */
    error?: Stripe.GelatoDocumentReportError;
    /** Expiration date of the document. */
    expiration_date?: Stripe.GelatoDataDocumentReportExpirationDate;
    /** Array of [File](https://stripe.com/docs/api/files) ids containing images for this document. */
    files?: string[];
    /** First name as it appears in the document. */
    first_name?: string;
    /** Issued date of the document. */
    issued_date?: Stripe.GelatoDataDocumentReportIssuedDate;
    /** Issuing country of the document. */
    issuing_country?: string;
    /** Last name as it appears in the document. */
    last_name?: string;
    /** Document ID number. */
    number?: string;
    /** Status of this `document` check. */
    status: GelatoDocumentReport.Status;
    /** Type of the document. */
    type?: GelatoDocumentReport.Type;
}

export namespace GelatoDocumentReport {
    /**
     * Status of this `document` check.
     */
    export type Status = "unverified" | "verified";
    export const Status = {
        Unverified: "unverified",
        Verified: "verified",
    } as const;
    /**
     * Type of the document.
     */
    export type Type = "driving_license" | "id_card" | "passport";
    export const Type = {
        DrivingLicense: "driving_license",
        IdCard: "id_card",
        Passport: "passport",
    } as const;
}
