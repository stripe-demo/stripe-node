/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface SubscriptionScheduleReleaseRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Keep any cancellation on the subscription that the schedule has set */
    preserve_cancel_date?: boolean;
}
