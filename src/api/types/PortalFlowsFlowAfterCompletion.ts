/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PortalFlowsFlowAfterCompletion {
    /** Configuration when `after_completion.type=hosted_confirmation`. */
    hosted_confirmation?: Stripe.PortalFlowsAfterCompletionHostedConfirmation;
    /** Configuration when `after_completion.type=redirect`. */
    redirect?: Stripe.PortalFlowsAfterCompletionRedirect;
    /** The specified type of behavior after the flow is completed. */
    type: PortalFlowsFlowAfterCompletion.Type;
}

export namespace PortalFlowsFlowAfterCompletion {
    /**
     * The specified type of behavior after the flow is completed.
     */
    export type Type = "hosted_confirmation" | "portal_homepage" | "redirect";
    export const Type = {
        HostedConfirmation: "hosted_confirmation",
        PortalHomepage: "portal_homepage",
        Redirect: "redirect",
    } as const;
}
