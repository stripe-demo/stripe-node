/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface Level3 {
    customer_reference?: string;
    line_items: Stripe.Level3LineItems[];
    merchant_reference: string;
    shipping_address_zip?: string;
    shipping_amount?: number;
    shipping_from_zip?: string;
}
