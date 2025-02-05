/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface IssuingAuthorizationFraudChallenge {
    /** The method by which the fraud challenge was delivered to the cardholder. */
    channel: "sms";
    /** The status of the fraud challenge. */
    status: IssuingAuthorizationFraudChallenge.Status;
    /** If the challenge is not deliverable, the reason why. */
    undeliverable_reason?: IssuingAuthorizationFraudChallenge.UndeliverableReason;
}

export namespace IssuingAuthorizationFraudChallenge {
    /**
     * The status of the fraud challenge.
     */
    export type Status = "expired" | "pending" | "rejected" | "undeliverable" | "verified";
    export const Status = {
        Expired: "expired",
        Pending: "pending",
        Rejected: "rejected",
        Undeliverable: "undeliverable",
        Verified: "verified",
    } as const;
    /**
     * If the challenge is not deliverable, the reason why.
     */
    export type UndeliverableReason = "no_phone_number" | "unsupported_phone_number";
    export const UndeliverableReason = {
        NoPhoneNumber: "no_phone_number",
        UnsupportedPhoneNumber: "unsupported_phone_number",
    } as const;
}
