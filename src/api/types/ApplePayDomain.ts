/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface ApplePayDomain {
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    domain_name: string;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "apple_pay_domain";
}
