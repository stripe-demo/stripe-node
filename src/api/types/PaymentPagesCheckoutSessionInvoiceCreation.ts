/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface PaymentPagesCheckoutSessionInvoiceCreation {
    /** Indicates whether invoice creation is enabled for the Checkout Session. */
    enabled: boolean;
    invoice_data: Stripe.PaymentPagesCheckoutSessionInvoiceSettings;
}
