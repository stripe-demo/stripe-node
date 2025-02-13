/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface DisputeEvidenceDetails {
    /** Date by which evidence must be submitted in order to successfully challenge dispute. Will be 0 if the customer's bank or credit card company doesn't allow a response for this particular dispute. */
    due_by?: number;
    enhanced_eligibility: Stripe.DisputeEnhancedEligibility;
    /** Whether evidence has been staged for this dispute. */
    has_evidence: boolean;
    /** Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed. */
    past_due: boolean;
    /** The number of times evidence has been submitted. Typically, you may only submit evidence once. */
    submission_count: number;
}
