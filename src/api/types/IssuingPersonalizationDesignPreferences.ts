/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface IssuingPersonalizationDesignPreferences {
    /** Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design. */
    is_default: boolean;
    /** Whether this personalization design is used to create cards when one is not specified and a default for this connected account does not exist. */
    is_platform_default?: boolean;
}
