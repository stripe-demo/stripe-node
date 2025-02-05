/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Result from a phone check
 */
export interface GelatoPhoneReport {
    /** Details on the verification error. Present when status is `unverified`. */
    error?: Stripe.GelatoPhoneReportError;
    /** Phone to be verified. */
    phone?: string;
    /** Status of this `phone` check. */
    status: GelatoPhoneReport.Status;
}

export namespace GelatoPhoneReport {
    /**
     * Status of this `phone` check.
     */
    export type Status = "unverified" | "verified";
    export const Status = {
        Unverified: "unverified",
        Verified: "verified",
    } as const;
}
