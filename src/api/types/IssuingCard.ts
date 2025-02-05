/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * You can [create physical or virtual cards](https://stripe.com/docs/issuing) that are issued to cardholders.
 */
export interface IssuingCard {
    /** The brand of the card. */
    brand: string;
    /** The reason why the card was canceled. */
    cancellation_reason?: IssuingCard.CancellationReason;
    cardholder: Stripe.IssuingCardholder;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: number;
    /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Supported currencies are `usd` in the US, `eur` in the EU, and `gbp` in the UK. */
    currency: string;
    /** The card's CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint. */
    cvc?: string;
    /** The expiration month of the card. */
    exp_month: number;
    /** The expiration year of the card. */
    exp_year: number;
    /** The financial account this card is attached to. */
    financial_account?: string;
    /** Unique identifier for the object. */
    id: string;
    /** The last 4 digits of the card number. */
    last4: string;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata: Record<string, string>;
    /** The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint. */
    number?: string;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "issuing.card";
    /** The personalization design object belonging to this card. */
    personalization_design?: IssuingCard.PersonalizationDesign;
    /** The latest card that replaces this card, if any. */
    replaced_by?: IssuingCard.ReplacedBy;
    /** The card this card replaces, if any. */
    replacement_for?: IssuingCard.ReplacementFor;
    /** The reason why the previous card needed to be replaced. */
    replacement_reason?: IssuingCard.ReplacementReason;
    /** Where and how the card will be shipped. */
    shipping?: Stripe.IssuingCardShipping;
    spending_controls: Stripe.IssuingCardAuthorizationControls;
    /** Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`. */
    status: IssuingCard.Status;
    /** The type of the card. */
    type: IssuingCard.Type;
    /** Information relating to digital wallets (like Apple Pay and Google Pay). */
    wallets?: Stripe.IssuingCardWallets;
}

export namespace IssuingCard {
    /**
     * The reason why the card was canceled.
     */
    export type CancellationReason = "design_rejected" | "lost" | "stolen";
    export const CancellationReason = {
        DesignRejected: "design_rejected",
        Lost: "lost",
        Stolen: "stolen",
    } as const;
    /**
     * The personalization design object belonging to this card.
     */
    export type PersonalizationDesign = string | Stripe.IssuingPersonalizationDesign;
    /**
     * The latest card that replaces this card, if any.
     */
    export type ReplacedBy = string | Stripe.IssuingCard;
    /**
     * The card this card replaces, if any.
     */
    export type ReplacementFor = string | Stripe.IssuingCard;
    /**
     * The reason why the previous card needed to be replaced.
     */
    export type ReplacementReason = "damaged" | "expired" | "lost" | "stolen";
    export const ReplacementReason = {
        Damaged: "damaged",
        Expired: "expired",
        Lost: "lost",
        Stolen: "stolen",
    } as const;
    /**
     * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
     */
    export type Status = "active" | "canceled" | "inactive";
    export const Status = {
        Active: "active",
        Canceled: "canceled",
        Inactive: "inactive",
    } as const;
    /**
     * The type of the card.
     */
    export type Type = "physical" | "virtual";
    export const Type = {
        Physical: "physical",
        Virtual: "virtual",
    } as const;
}
