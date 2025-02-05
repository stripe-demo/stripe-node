/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface SubscriptionCancelRequest {
    /** Details about why this subscription was cancelled */
    cancellation_details?: SubscriptionCancelRequest.CancellationDetails;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items. Defaults to `false`. */
    invoice_now?: boolean;
    /** Will generate a proration invoice item that credits remaining unused time until the subscription period end. Defaults to `false`. */
    prorate?: boolean;
}

export namespace SubscriptionCancelRequest {
    /**
     * Details about why this subscription was cancelled
     */
    export interface CancellationDetails {
        /** Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user. */
        comment?: CancellationDetails.Comment;
        /** The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user. */
        feedback?: CancellationDetails.Feedback;
    }

    export namespace CancellationDetails {
        /**
         * Additional comments about why the user canceled the subscription, if the subscription was canceled explicitly by the user.
         */
        export type Comment = string | "";
        /**
         * The customer submitted reason for why they canceled, if the subscription was canceled explicitly by the user.
         */
        export type Feedback =
            | ""
            | "customer_service"
            | "low_quality"
            | "missing_features"
            | "other"
            | "switched_service"
            | "too_complex"
            | "too_expensive"
            | "unused";
        export const Feedback = {
            Empty: "",
            CustomerService: "customer_service",
            LowQuality: "low_quality",
            MissingFeatures: "missing_features",
            Other: "other",
            SwitchedService: "switched_service",
            TooComplex: "too_complex",
            TooExpensive: "too_expensive",
            Unused: "unused",
        } as const;
    }
}
