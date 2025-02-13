/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Configuration for the components supported by this Customer Session.
 */
export interface CustomerSessionResourceComponents {
    buy_button: Stripe.CustomerSessionResourceComponentsResourceBuyButton;
    payment_element: Stripe.CustomerSessionResourceComponentsResourcePaymentElement;
    pricing_table: Stripe.CustomerSessionResourceComponentsResourcePricingTable;
}
