/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface TreasuryOutboundTransfersResourceStatusTransitions {
    /** Timestamp describing when an OutboundTransfer changed status to `canceled` */
    canceled_at?: number;
    /** Timestamp describing when an OutboundTransfer changed status to `failed` */
    failed_at?: number;
    /** Timestamp describing when an OutboundTransfer changed status to `posted` */
    posted_at?: number;
    /** Timestamp describing when an OutboundTransfer changed status to `returned` */
    returned_at?: number;
}
