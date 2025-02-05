/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         tracking_details: {
 *             type: "ach"
 *         }
 *     }
 */
export interface OutboundPaymentUpdateRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Details about network-specific tracking information. */
    tracking_details: OutboundPaymentUpdateRequest.TrackingDetails;
}

export namespace OutboundPaymentUpdateRequest {
    /**
     * Details about network-specific tracking information.
     */
    export interface TrackingDetails {
        /** ACH network tracking details. */
        ach?: TrackingDetails.Ach;
        /** The US bank account network used to send funds. */
        type: TrackingDetails.Type;
        /** US domestic wire network tracking details. */
        us_domestic_wire?: TrackingDetails.UsDomesticWire;
    }

    export namespace TrackingDetails {
        /**
         * ACH network tracking details.
         */
        export interface Ach {
            /** ACH trace ID for funds sent over the `ach` network. */
            trace_id: string;
        }

        /**
         * The US bank account network used to send funds.
         */
        export type Type = "ach" | "us_domestic_wire";
        export const Type = {
            Ach: "ach",
            UsDomesticWire: "us_domestic_wire",
        } as const;

        /**
         * US domestic wire network tracking details.
         */
        export interface UsDomesticWire {
            /** CHIPS System Sequence Number (SSN) for funds sent over the `us_domestic_wire` network. */
            chips?: string;
            /** IMAD for funds sent over the `us_domestic_wire` network. */
            imad?: string;
            /** OMAD for funds sent over the `us_domestic_wire` network. */
            omad?: string;
        }
    }
}
