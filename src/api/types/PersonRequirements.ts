/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PersonRequirements {
    /** Fields that are due and can be satisfied by providing the corresponding alternative fields instead. */
    alternatives?: Stripe.AccountRequirementsAlternative[];
    /** Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled. */
    currently_due: string[];
    /** Fields that are `currently_due` and need to be collected again because validation or verification failed. */
    errors: Stripe.AccountRequirementsError[];
    /** Fields you must collect when all thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set. */
    eventually_due: string[];
    /** Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account. */
    past_due: string[];
    /** Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending. */
    pending_verification: string[];
}
