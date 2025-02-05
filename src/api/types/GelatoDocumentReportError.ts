/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface GelatoDocumentReportError {
    /** A short machine-readable string giving the reason for the verification failure. */
    code?: GelatoDocumentReportError.Code;
    /** A human-readable message giving the reason for the failure. These messages can be shown to your users. */
    reason?: string;
}

export namespace GelatoDocumentReportError {
    /**
     * A short machine-readable string giving the reason for the verification failure.
     */
    export type Code = "document_expired" | "document_type_not_supported" | "document_unverified_other";
    export const Code = {
        DocumentExpired: "document_expired",
        DocumentTypeNotSupported: "document_type_not_supported",
        DocumentUnverifiedOther: "document_unverified_other",
    } as const;
}
