/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentPagesCheckoutSessionCustomFieldsDropdown {
    /** The value that will pre-fill on the payment page. */
    default_value?: string;
    /** The options available for the customer to select. Up to 200 options allowed. */
    options: Stripe.PaymentPagesCheckoutSessionCustomFieldsOption[];
    /** The option selected by the customer. This will be the `value` for the option. */
    value?: string;
}
