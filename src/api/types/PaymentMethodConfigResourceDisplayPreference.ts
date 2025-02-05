/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodConfigResourceDisplayPreference {
    /** For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used. */
    overridable?: boolean;
    /** The account's display preference. */
    preference: PaymentMethodConfigResourceDisplayPreference.Preference;
    /** The effective display preference value. */
    value: PaymentMethodConfigResourceDisplayPreference.Value;
}

export namespace PaymentMethodConfigResourceDisplayPreference {
    /**
     * The account's display preference.
     */
    export type Preference = "none" | "off" | "on";
    export const Preference = {
        None: "none",
        Off: "off",
        On: "on",
    } as const;
    /**
     * The effective display preference value.
     */
    export type Value = "off" | "on";
    export const Value = {
        Off: "off",
        On: "on",
    } as const;
}
