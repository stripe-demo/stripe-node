/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * An AccountSession allows a Connect platform to grant access to a connected account in Connect embedded components.
 *
 * We recommend that you create an AccountSession each time you need to display an embedded component
 * to your user. Do not save AccountSessions to your database as they expire relatively
 * quickly, and cannot be used more than once.
 *
 * Related guide: [Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components)
 */
export interface AccountSession {
    /** The ID of the account the AccountSession was created for */
    account: string;
    /**
     * The client secret of this AccountSession. Used on the client to set up secure access to the given `account`.
     *
     * The client secret can be used to provide access to `account` from your frontend. It should not be stored, logged, or exposed to anyone other than the connected account. Make sure that you have TLS enabled on any page that includes the client secret.
     *
     * Refer to our docs to [setup Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components) and learn about how `client_secret` should be handled.
     */
    client_secret: string;
    components: Stripe.ConnectEmbeddedAccountSessionCreateComponents;
    /** The timestamp at which this AccountSession will expire. */
    expires_at: number;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: boolean;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "account_session";
}
