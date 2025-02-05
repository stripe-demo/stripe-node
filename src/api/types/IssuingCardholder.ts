/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
 *
 * Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards/virtual/issue-cards#create-cardholder)
 */
export interface IssuingCardholder {
    billing: Stripe.IssuingCardholderAddress;
    /** Additional information about a `company` cardholder. */
    company?: Stripe.IssuingCardholderCompany;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** The cardholder's email address. */
    email?: string;
    /** Unique identifier for the object. */
    id: string;
    /** Additional information about an `individual` cardholder. */
    individual?: Stripe.IssuingCardholderIndividual;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata: Record<string, string>;
    /** The cardholder's name. This will be printed on cards issued to them. */
    name: string;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "issuing.cardholder";
    /** The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details. */
    phone_number?: string;
    /**
     * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
     *  This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
     */
    preferred_locales?: IssuingCardholder.PreferredLocales.Item[];
    requirements: Stripe.IssuingCardholderRequirements;
    /** Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details. */
    spending_controls?: Stripe.IssuingCardholderAuthorizationControls;
    /** Specifies whether to permit authorizations on this cardholder's cards. */
    status: IssuingCardholder.Status;
    /** One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details. */
    type: IssuingCardholder.Type;
}

export namespace IssuingCardholder {
    export type PreferredLocales = PreferredLocales.Item[];

    export namespace PreferredLocales {
        export type Item = "de" | "en" | "es" | "fr" | "it";
        export const Item = {
            De: "de",
            En: "en",
            Es: "es",
            Fr: "fr",
            It: "it",
        } as const;
    }

    /**
     * Specifies whether to permit authorizations on this cardholder's cards.
     */
    export type Status = "active" | "blocked" | "inactive";
    export const Status = {
        Active: "active",
        Blocked: "blocked",
        Inactive: "inactive",
    } as const;
    /**
     * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
     */
    export type Type = "company" | "individual";
    export const Type = {
        Company: "company",
        Individual: "individual",
    } as const;
}
