/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface SubscriptionsResourcePaymentMethodOptions {
    /** This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to invoices created by the subscription. */
    acss_debit?: Stripe.InvoicePaymentMethodOptionsAcssDebit;
    /** This sub-hash contains details about the Bancontact payment method options to pass to invoices created by the subscription. */
    bancontact?: Stripe.InvoicePaymentMethodOptionsBancontact;
    /** This sub-hash contains details about the Card payment method options to pass to invoices created by the subscription. */
    card?: Stripe.SubscriptionPaymentMethodOptionsCard;
    /** This sub-hash contains details about the Bank transfer payment method options to pass to invoices created by the subscription. */
    customer_balance?: Stripe.InvoicePaymentMethodOptionsCustomerBalance;
    /** This sub-hash contains details about the Konbini payment method options to pass to invoices created by the subscription. */
    konbini?: Stripe.InvoicePaymentMethodOptionsKonbini;
    /** This sub-hash contains details about the SEPA Direct Debit payment method options to pass to invoices created by the subscription. */
    sepa_debit?: Stripe.InvoicePaymentMethodOptionsSepaDebit;
    /** This sub-hash contains details about the ACH direct debit payment method options to pass to invoices created by the subscription. */
    us_bank_account?: Stripe.InvoicePaymentMethodOptionsUsBankAccount;
}
