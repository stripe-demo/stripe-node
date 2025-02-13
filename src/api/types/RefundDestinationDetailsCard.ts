/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface RefundDestinationDetailsCard {
    /** Value of the reference number assigned to the refund. */
    reference?: string;
    /** Status of the reference number on the refund. This can be `pending`, `available` or `unavailable`. */
    reference_status?: string;
    /** Type of the reference number assigned to the refund. */
    reference_type?: string;
    /** The type of refund. This can be `refund`, `reversal`, or `pending`. */
    type: RefundDestinationDetailsCard.Type;
}

export namespace RefundDestinationDetailsCard {
    /**
     * The type of refund. This can be `refund`, `reversal`, or `pending`.
     */
    export type Type = "pending" | "refund" | "reversal";
    export const Type = {
        Pending: "pending",
        Refund: "refund",
        Reversal: "reversal",
    } as const;
}
