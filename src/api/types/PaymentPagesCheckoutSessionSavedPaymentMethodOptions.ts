/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentPagesCheckoutSessionSavedPaymentMethodOptions {
    /** Uses the `allow_redisplay` value of each saved payment method to filter the set presented to a returning customer. By default, only saved payment methods with ’allow_redisplay: ‘always’ are shown in Checkout. */
    allow_redisplay_filters?: PaymentPagesCheckoutSessionSavedPaymentMethodOptions.AllowRedisplayFilters.Item[];
    /** Enable customers to choose if they wish to remove their saved payment methods. Disabled by default. */
    payment_method_remove?: PaymentPagesCheckoutSessionSavedPaymentMethodOptions.PaymentMethodRemove;
    /** Enable customers to choose if they wish to save their payment method for future use. Disabled by default. */
    payment_method_save?: PaymentPagesCheckoutSessionSavedPaymentMethodOptions.PaymentMethodSave;
}

export namespace PaymentPagesCheckoutSessionSavedPaymentMethodOptions {
    export type AllowRedisplayFilters = AllowRedisplayFilters.Item[];

    export namespace AllowRedisplayFilters {
        export type Item = "always" | "limited" | "unspecified";
        export const Item = {
            Always: "always",
            Limited: "limited",
            Unspecified: "unspecified",
        } as const;
    }

    /**
     * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
     */
    export type PaymentMethodRemove = "disabled" | "enabled";
    export const PaymentMethodRemove = {
        Disabled: "disabled",
        Enabled: "enabled",
    } as const;
    /**
     * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
     */
    export type PaymentMethodSave = "disabled" | "enabled";
    export const PaymentMethodSave = {
        Disabled: "disabled",
        Enabled: "enabled",
    } as const;
}
