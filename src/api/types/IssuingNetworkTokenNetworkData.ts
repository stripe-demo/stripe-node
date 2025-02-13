/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface IssuingNetworkTokenNetworkData {
    device?: Stripe.IssuingNetworkTokenDevice;
    mastercard?: Stripe.IssuingNetworkTokenMastercard;
    /** The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network. */
    type: IssuingNetworkTokenNetworkData.Type;
    visa?: Stripe.IssuingNetworkTokenVisa;
    wallet_provider?: Stripe.IssuingNetworkTokenWalletProvider;
}

export namespace IssuingNetworkTokenNetworkData {
    /**
     * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
     */
    export type Type = "mastercard" | "visa";
    export const Type = {
        Mastercard: "mastercard",
        Visa: "visa",
    } as const;
}
