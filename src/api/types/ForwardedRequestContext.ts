/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Metadata about the forwarded request.
 */
export interface ForwardedRequestContext {
    /** The time it took in milliseconds for the destination endpoint to respond. */
    destination_duration: number;
    /** The IP address of the destination. */
    destination_ip_address: string;
}
