/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * A Tax `Registration` lets us know that your business is registered to collect tax on payments within a region, enabling you to [automatically collect tax](https://stripe.com/docs/tax).
 *
 * Stripe doesn't register on your behalf with the relevant authorities when you create a Tax `Registration` object. For more information on how to register to collect tax, see [our guide](https://stripe.com/docs/tax/registering).
 *
 * Related guide: [Using the Registrations API](https://stripe.com/docs/tax/registrations-api)
 */
export interface TaxRegistration {
    /** Time at which the registration becomes active. Measured in seconds since the Unix epoch. */
    active_from: number;
    /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
    country: string;
    country_options: Stripe.TaxProductRegistrationsResourceCountryOptions;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch. */
    expires_at?: number;
    /** Unique identifier for the object. */
    id: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "tax.registration";
    /** The status of the registration. This field is present for convenience and can be deduced from `active_from` and `expires_at`. */
    status: TaxRegistration.Status;
}

export namespace TaxRegistration {
    /**
     * The status of the registration. This field is present for convenience and can be deduced from `active_from` and `expires_at`.
     */
    export type Status = "active" | "expired" | "scheduled";
    export const Status = {
        Active: "active",
        Expired: "expired",
        Scheduled: "scheduled",
    } as const;
}
