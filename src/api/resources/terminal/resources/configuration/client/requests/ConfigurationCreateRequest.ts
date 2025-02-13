/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface ConfigurationCreateRequest {
    /** An object containing device type specific settings for BBPOS WisePOS E readers */
    bbpos_wisepos_e?: ConfigurationCreateRequest.BbposWiseposE;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Name of the configuration */
    name?: string;
    /** Configurations for collecting transactions offline. */
    offline?: ConfigurationCreateRequest.Offline;
    /** Reboot time settings for readers that support customized reboot time configuration. */
    reboot_window?: ConfigurationCreateRequest.RebootWindow;
    /** An object containing device type specific settings for Stripe S700 readers */
    stripe_s700?: ConfigurationCreateRequest.StripeS700;
    /** Tipping configurations for readers supporting on-reader tips */
    tipping?: ConfigurationCreateRequest.Tipping;
    /** An object containing device type specific settings for Verifone P400 readers */
    verifone_p400?: ConfigurationCreateRequest.VerifoneP400;
}

export namespace ConfigurationCreateRequest {
    /**
     * An object containing device type specific settings for BBPOS WisePOS E readers
     */
    export interface BbposWiseposE {
        /** A File ID representing an image you would like displayed on the reader. */
        splashscreen?: BbposWiseposE.Splashscreen;
    }

    export namespace BbposWiseposE {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        export type Splashscreen = string | "";
    }

    /**
     * Configurations for collecting transactions offline.
     */
    export type Offline =
        | {
              enabled: boolean;
          }
        | "";

    /**
     * Reboot time settings for readers that support customized reboot time configuration.
     */
    export interface RebootWindow {
        /** Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour. */
        end_hour: number;
        /** Integer between 0 to 23 that represents the start hour of the reboot time window. */
        start_hour: number;
    }

    /**
     * An object containing device type specific settings for Stripe S700 readers
     */
    export interface StripeS700 {
        /** A File ID representing an image you would like displayed on the reader. */
        splashscreen?: StripeS700.Splashscreen;
    }

    export namespace StripeS700 {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        export type Splashscreen = string | "";
    }

    /**
     * Tipping configurations for readers supporting on-reader tips
     */
    export type Tipping =
        | {
              aud?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              cad?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              chf?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              czk?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              dkk?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              eur?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              gbp?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              hkd?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              jpy?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              myr?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              nok?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              nzd?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              pln?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              sek?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              sgd?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
              usd?:
                  | {
                        fixed_amounts?: number[] | undefined;
                        percentages?: number[] | undefined;
                        smart_tip_threshold?: number | undefined;
                    }
                  | undefined;
          }
        | "";

    /**
     * An object containing device type specific settings for Verifone P400 readers
     */
    export interface VerifoneP400 {
        /** A File ID representing an image you would like displayed on the reader. */
        splashscreen?: VerifoneP400.Splashscreen;
    }

    export namespace VerifoneP400 {
        /**
         * A File ID representing an image you would like displayed on the reader.
         */
        export type Splashscreen = string | "";
    }
}
