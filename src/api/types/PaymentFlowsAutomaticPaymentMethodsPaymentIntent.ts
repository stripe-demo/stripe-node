/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentFlowsAutomaticPaymentMethodsPaymentIntent {
    /**
     * Controls whether this PaymentIntent will accept redirect-based payment methods.
     *
     * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the payment.
     */
    allow_redirects?: PaymentFlowsAutomaticPaymentMethodsPaymentIntent.AllowRedirects;
    /** Automatically calculates compatible payment methods */
    enabled: boolean;
}

export namespace PaymentFlowsAutomaticPaymentMethodsPaymentIntent {
    /**
     * Controls whether this PaymentIntent will accept redirect-based payment methods.
     *
     * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the payment.
     */
    export type AllowRedirects = "always" | "never";
    export const AllowRedirects = {
        Always: "always",
        Never: "never",
    } as const;
}
