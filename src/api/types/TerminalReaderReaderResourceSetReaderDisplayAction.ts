/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 * Represents a reader action to set the reader display
 */
export interface TerminalReaderReaderResourceSetReaderDisplayAction {
    /** Cart object to be displayed by the reader. */
    cart?: Stripe.TerminalReaderReaderResourceCart;
    /** Type of information to be displayed by the reader. */
    type: "cart";
}
