/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig {
    /** A File ID representing an image you would like displayed on the reader. */
    splashscreen?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.Splashscreen;
}

export namespace TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig {
    /**
     * A File ID representing an image you would like displayed on the reader.
     */
    export type Splashscreen = string | Stripe.File_;
}
