/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface DisputeCreateRequest {
    /** The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If not set, defaults to the full transaction amount. */
    amount?: number;
    /** Evidence provided for the dispute. */
    evidence?: DisputeCreateRequest.Evidence;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /** The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`. */
    transaction?: string;
    /** Params for disputes related to Treasury FinancialAccounts */
    treasury?: DisputeCreateRequest.Treasury;
}

export namespace DisputeCreateRequest {
    /**
     * Evidence provided for the dispute.
     */
    export interface Evidence {
        /** Evidence provided when `reason` is 'canceled'. */
        canceled?: Evidence.Canceled;
        /** Evidence provided when `reason` is 'duplicate'. */
        duplicate?: Evidence.Duplicate;
        /** Evidence provided when `reason` is 'fraudulent'. */
        fraudulent?: Evidence.Fraudulent;
        /** Evidence provided when `reason` is 'merchandise_not_as_described'. */
        merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed;
        /** Evidence provided when `reason` is 'no_valid_authorization'. */
        no_valid_authorization?: Evidence.NoValidAuthorization;
        /** Evidence provided when `reason` is 'not_received'. */
        not_received?: Evidence.NotReceived;
        /** Evidence provided when `reason` is 'other'. */
        other?: Evidence.Other;
        /** The reason for filing the dispute. The evidence should be submitted in the field of the same name. */
        reason?: Evidence.Reason;
        /** Evidence provided when `reason` is 'service_not_as_described'. */
        service_not_as_described?: Evidence.ServiceNotAsDescribed;
    }

    export namespace Evidence {
        /**
         * Evidence provided when `reason` is 'canceled'.
         */
        export type Canceled =
            | {
                  additional_documentation?: (string | "") | undefined;
                  canceled_at?: (number | "") | undefined;
                  cancellation_policy_provided?: (boolean | "") | undefined;
                  cancellation_reason?: (string | "") | undefined;
                  expected_at?: (number | "") | undefined;
                  explanation?: (string | "") | undefined;
                  product_description?: (string | "") | undefined;
                  product_type?: ("" | "merchandise" | "service") | undefined;
                  return_status?: ("" | "merchant_rejected" | "successful") | undefined;
                  returned_at?: (number | "") | undefined;
              }
            | "";
        /**
         * Evidence provided when `reason` is 'duplicate'.
         */
        export type Duplicate =
            | {
                  additional_documentation?: (string | "") | undefined;
                  card_statement?: (string | "") | undefined;
                  cash_receipt?: (string | "") | undefined;
                  check_image?: (string | "") | undefined;
                  explanation?: (string | "") | undefined;
                  original_transaction?: string | undefined;
              }
            | "";
        /**
         * Evidence provided when `reason` is 'fraudulent'.
         */
        export type Fraudulent =
            | {
                  additional_documentation?: (string | "") | undefined;
                  explanation?: (string | "") | undefined;
              }
            | "";
        /**
         * Evidence provided when `reason` is 'merchandise_not_as_described'.
         */
        export type MerchandiseNotAsDescribed =
            | {
                  additional_documentation?: (string | "") | undefined;
                  explanation?: (string | "") | undefined;
                  received_at?: (number | "") | undefined;
                  return_description?: (string | "") | undefined;
                  return_status?: ("" | "merchant_rejected" | "successful") | undefined;
                  returned_at?: (number | "") | undefined;
              }
            | "";
        /**
         * Evidence provided when `reason` is 'no_valid_authorization'.
         */
        export type NoValidAuthorization =
            | {
                  additional_documentation?: (string | "") | undefined;
                  explanation?: (string | "") | undefined;
              }
            | "";
        /**
         * Evidence provided when `reason` is 'not_received'.
         */
        export type NotReceived =
            | {
                  additional_documentation?: (string | "") | undefined;
                  expected_at?: (number | "") | undefined;
                  explanation?: (string | "") | undefined;
                  product_description?: (string | "") | undefined;
                  product_type?: ("" | "merchandise" | "service") | undefined;
              }
            | "";
        /**
         * Evidence provided when `reason` is 'other'.
         */
        export type Other =
            | {
                  additional_documentation?: (string | "") | undefined;
                  explanation?: (string | "") | undefined;
                  product_description?: (string | "") | undefined;
                  product_type?: ("" | "merchandise" | "service") | undefined;
              }
            | "";
        /**
         * The reason for filing the dispute. The evidence should be submitted in the field of the same name.
         */
        export type Reason =
            | "canceled"
            | "duplicate"
            | "fraudulent"
            | "merchandise_not_as_described"
            | "no_valid_authorization"
            | "not_received"
            | "other"
            | "service_not_as_described";
        export const Reason = {
            Canceled: "canceled",
            Duplicate: "duplicate",
            Fraudulent: "fraudulent",
            MerchandiseNotAsDescribed: "merchandise_not_as_described",
            NoValidAuthorization: "no_valid_authorization",
            NotReceived: "not_received",
            Other: "other",
            ServiceNotAsDescribed: "service_not_as_described",
        } as const;
        /**
         * Evidence provided when `reason` is 'service_not_as_described'.
         */
        export type ServiceNotAsDescribed =
            | {
                  additional_documentation?: (string | "") | undefined;
                  canceled_at?: (number | "") | undefined;
                  cancellation_reason?: (string | "") | undefined;
                  explanation?: (string | "") | undefined;
                  received_at?: (number | "") | undefined;
              }
            | "";
    }

    /**
     * Params for disputes related to Treasury FinancialAccounts
     */
    export interface Treasury {
        /** The ID of the ReceivedDebit to initiate an Issuings dispute for. */
        received_debit: string;
    }
}
