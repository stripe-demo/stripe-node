/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface QuotesResourceSubscriptionDataSubscriptionData {
    /** The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs. */
    description?: string;
    /** When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch. */
    effective_date?: number;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values. */
    metadata?: Record<string, string | undefined>;
    /** Integer representing the number of trial period days before the customer is charged for the first time. */
    trial_period_days?: number;
}
