/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface IssuingPhysicalBundleFeatures {
    /** The policy for how to use card logo images in a card design with this physical bundle. */
    card_logo: IssuingPhysicalBundleFeatures.CardLogo;
    /** The policy for how to use carrier letter text in a card design with this physical bundle. */
    carrier_text: IssuingPhysicalBundleFeatures.CarrierText;
    /** The policy for how to use a second line on a card with this physical bundle. */
    second_line: IssuingPhysicalBundleFeatures.SecondLine;
}

export namespace IssuingPhysicalBundleFeatures {
    /**
     * The policy for how to use card logo images in a card design with this physical bundle.
     */
    export type CardLogo = "optional" | "required" | "unsupported";
    export const CardLogo = {
        Optional: "optional",
        Required: "required",
        Unsupported: "unsupported",
    } as const;
    /**
     * The policy for how to use carrier letter text in a card design with this physical bundle.
     */
    export type CarrierText = "optional" | "required" | "unsupported";
    export const CarrierText = {
        Optional: "optional",
        Required: "required",
        Unsupported: "unsupported",
    } as const;
    /**
     * The policy for how to use a second line on a card with this physical bundle.
     */
    export type SecondLine = "optional" | "required" | "unsupported";
    export const SecondLine = {
        Optional: "optional",
        Required: "required",
        Unsupported: "unsupported",
    } as const;
}
