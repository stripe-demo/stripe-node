/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         increment_amount: 1
 *     }
 */
export interface AuthorizationIncrementRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The amount to increment the authorization by. This amount is in the authorization currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
    increment_amount: number;
    /** If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization. */
    is_amount_controllable?: boolean;
}
