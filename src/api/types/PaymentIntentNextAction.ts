/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentIntentNextAction {
    alipay_handle_redirect?: Stripe.PaymentIntentNextActionAlipayHandleRedirect;
    boleto_display_details?: Stripe.PaymentIntentNextActionBoleto;
    card_await_notification?: Stripe.PaymentIntentNextActionCardAwaitNotification;
    cashapp_handle_redirect_or_display_qr_code?: Stripe.PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode;
    display_bank_transfer_instructions?: Stripe.PaymentIntentNextActionDisplayBankTransferInstructions;
    konbini_display_details?: Stripe.PaymentIntentNextActionKonbini;
    multibanco_display_details?: Stripe.PaymentIntentNextActionDisplayMultibancoDetails;
    oxxo_display_details?: Stripe.PaymentIntentNextActionDisplayOxxoDetails;
    paynow_display_qr_code?: Stripe.PaymentIntentNextActionPaynowDisplayQrCode;
    pix_display_qr_code?: Stripe.PaymentIntentNextActionPixDisplayQrCode;
    promptpay_display_qr_code?: Stripe.PaymentIntentNextActionPromptpayDisplayQrCode;
    redirect_to_url?: Stripe.PaymentIntentNextActionRedirectToUrl;
    swish_handle_redirect_or_display_qr_code?: Stripe.PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode;
    /** Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`. */
    type: string;
    /** When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js. */
    use_stripe_sdk?: Record<string, unknown>;
    verify_with_microdeposits?: Stripe.PaymentIntentNextActionVerifyWithMicrodeposits;
    wechat_pay_display_qr_code?: Stripe.PaymentIntentNextActionWechatPayDisplayQrCode;
    wechat_pay_redirect_to_android_app?: Stripe.PaymentIntentNextActionWechatPayRedirectToAndroidApp;
    wechat_pay_redirect_to_ios_app?: Stripe.PaymentIntentNextActionWechatPayRedirectToIosApp;
}
