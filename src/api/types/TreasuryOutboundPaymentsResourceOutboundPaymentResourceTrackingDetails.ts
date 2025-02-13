/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails {
    ach?: Stripe.TreasuryOutboundPaymentsResourceAchTrackingDetails;
    /** The US bank account network used to send funds. */
    type: TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails.Type;
    us_domestic_wire?: Stripe.TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails;
}

export namespace TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails {
    /**
     * The US bank account network used to send funds.
     */
    export type Type = "ach" | "us_domestic_wire";
    export const Type = {
        Ach: "ach",
        UsDomesticWire: "us_domestic_wire",
    } as const;
}
