/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentIntentNextActionWechatPayRedirectToAndroidApp {
    /** app_id is the APP ID registered on WeChat open platform */
    app_id: string;
    /** nonce_str is a random string */
    nonce_str: string;
    /** package is static value */
    package: string;
    /** an unique merchant ID assigned by WeChat Pay */
    partner_id: string;
    /** an unique trading ID assigned by WeChat Pay */
    prepay_id: string;
    /** A signature */
    sign: string;
    /** Specifies the current time in epoch format */
    timestamp: string;
}
