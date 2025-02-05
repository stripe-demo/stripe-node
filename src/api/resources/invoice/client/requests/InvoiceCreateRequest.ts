/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface InvoiceCreateRequest {
    /** The account tax IDs associated with the invoice. Only editable when the invoice is a draft. */
    account_tax_ids?: InvoiceCreateRequest.AccountTaxIds;
    /** A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees). */
    application_fee_amount?: number;
    /** Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action. */
    auto_advance?: boolean;
    /** Settings for automatic tax lookup for this invoice. */
    automatic_tax?: InvoiceCreateRequest.AutomaticTax;
    /** The time when this invoice should be scheduled to finalize. The invoice will be finalized at this time if it is still in draft state. */
    automatically_finalizes_at?: number;
    /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`. */
    collection_method?: InvoiceCreateRequest.CollectionMethod;
    /** The currency to create this invoice in. Defaults to that of `customer` if not specified. */
    currency?: string;
    /** A list of up to 4 custom fields to be displayed on the invoice. */
    custom_fields?: InvoiceCreateRequest.CustomFields;
    /** The ID of the customer who will be billed. */
    customer?: string;
    /** The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`. */
    days_until_due?: number;
    /** ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings. */
    default_payment_method?: string;
    /** ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source. */
    default_source?: string;
    /** The tax rates that will apply to any line item that does not have `tax_rates` set. */
    default_tax_rates?: string[];
    /** An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard. */
    description?: string;
    /** The coupons and promotion codes to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts. */
    discounts?: InvoiceCreateRequest.Discounts;
    /** The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`. */
    due_date?: number;
    /** The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt. */
    effective_at?: number;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Footer to be displayed on the invoice. */
    footer?: string;
    /** Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details. */
    from_invoice?: InvoiceCreateRequest.FromInvoice;
    /** The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account. */
    issuer?: InvoiceCreateRequest.Issuer;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: InvoiceCreateRequest.Metadata;
    /** Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically. */
    number?: string;
    /** The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details. */
    on_behalf_of?: string;
    /** Configuration settings for the PaymentIntent that is generated when the invoice is finalized. */
    payment_settings?: InvoiceCreateRequest.PaymentSettings;
    /** How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted. */
    pending_invoice_items_behavior?: InvoiceCreateRequest.PendingInvoiceItemsBehavior;
    /** The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page. */
    rendering?: InvoiceCreateRequest.Rendering;
    /** Settings for the cost of shipping for this invoice. */
    shipping_cost?: InvoiceCreateRequest.ShippingCost;
    /** Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer. */
    shipping_details?: InvoiceCreateRequest.ShippingDetails;
    /** Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`. */
    statement_descriptor?: string;
    /** The ID of the subscription to invoice, if any. If set, the created invoice will only include pending invoice items for that subscription. The subscription's billing cycle and regular subscription events won't be affected. */
    subscription?: string;
    /** If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. */
    transfer_data?: InvoiceCreateRequest.TransferData;
}

export namespace InvoiceCreateRequest {
    /**
     * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
     */
    export type AccountTaxIds = string[] | "";

    /**
     * Settings for automatic tax lookup for this invoice.
     */
    export interface AutomaticTax {
        /** Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices. */
        enabled: boolean;
        /** The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account. */
        liability?: AutomaticTax.Liability;
    }

    export namespace AutomaticTax {
        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        export interface Liability {
            /** The connected account being referenced when `type` is `account`. */
            account?: string;
            /** Type of the account referenced in the request. */
            type: Liability.Type;
        }

        export namespace Liability {
            /**
             * Type of the account referenced in the request.
             */
            export type Type = "account" | "self";
            export const Type = {
                Account: "account",
                Self: "self",
            } as const;
        }
    }

    /**
     * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
     */
    export type CollectionMethod = "charge_automatically" | "send_invoice";
    export const CollectionMethod = {
        ChargeAutomatically: "charge_automatically",
        SendInvoice: "send_invoice",
    } as const;
    /**
     * A list of up to 4 custom fields to be displayed on the invoice.
     */
    export type CustomFields =
        | {
              name: string;
              value: string;
          }[]
        | "";
    /**
     * The coupons and promotion codes to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts.
     */
    export type Discounts =
        | {
              coupon?: string | undefined;
              discount?: string | undefined;
              promotion_code?: string | undefined;
          }[]
        | "";

    /**
     * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
     */
    export interface FromInvoice {
        /** The relation between the new invoice and the original invoice. Currently, only 'revision' is permitted */
        action: "revision";
        /** The `id` of the invoice that will be cloned. */
        invoice: string;
    }

    /**
     * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
     */
    export interface Issuer {
        /** The connected account being referenced when `type` is `account`. */
        account?: string;
        /** Type of the account referenced in the request. */
        type: Issuer.Type;
    }

    export namespace Issuer {
        /**
         * Type of the account referenced in the request.
         */
        export type Type = "account" | "self";
        export const Type = {
            Account: "account",
            Self: "self",
        } as const;
    }

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";

    /**
     * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
     */
    export interface PaymentSettings {
        /** ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set. */
        default_mandate?: PaymentSettings.DefaultMandate;
        /** Payment-method-specific configuration to provide to the invoice’s PaymentIntent. */
        payment_method_options?: PaymentSettings.PaymentMethodOptions;
        /** The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice). Should not be specified with payment_method_configuration */
        payment_method_types?: PaymentSettings.PaymentMethodTypes;
    }

    export namespace PaymentSettings {
        /**
         * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
         */
        export type DefaultMandate = string | "";

        /**
         * Payment-method-specific configuration to provide to the invoice’s PaymentIntent.
         */
        export interface PaymentMethodOptions {
            /** If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice’s PaymentIntent. */
            acss_debit?: PaymentMethodOptions.AcssDebit;
            /** If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice’s PaymentIntent. */
            bancontact?: PaymentMethodOptions.Bancontact;
            /** If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice’s PaymentIntent. */
            card?: PaymentMethodOptions.Card;
            /** If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice’s PaymentIntent. */
            customer_balance?: PaymentMethodOptions.CustomerBalance;
            /** If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice’s PaymentIntent. */
            konbini?: PaymentMethodOptions.Konbini;
            /** If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice’s PaymentIntent. */
            sepa_debit?: PaymentMethodOptions.SepaDebit;
            /** If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice’s PaymentIntent. */
            us_bank_account?: PaymentMethodOptions.UsBankAccount;
        }

        export namespace PaymentMethodOptions {
            /**
             * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice’s PaymentIntent.
             */
            export type AcssDebit =
                | {
                      mandate_options?:
                          | {
                                transaction_type?: ("business" | "personal") | undefined;
                            }
                          | undefined;
                      verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
                  }
                | "";
            /**
             * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice’s PaymentIntent.
             */
            export type Bancontact =
                | {
                      preferred_language?: ("de" | "en" | "fr" | "nl") | undefined;
                  }
                | "";
            /**
             * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice’s PaymentIntent.
             */
            export type Card =
                | {
                      installments?:
                          | {
                                enabled?: boolean | undefined;
                                plan?:
                                    | (
                                          | {
                                                count?: number | undefined;
                                                interval?: "month" | undefined;
                                                type: "fixed_count";
                                            }
                                          | ""
                                      )
                                    | undefined;
                            }
                          | undefined;
                      request_three_d_secure?: ("any" | "automatic" | "challenge") | undefined;
                  }
                | "";
            /**
             * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice’s PaymentIntent.
             */
            export type CustomerBalance =
                | {
                      bank_transfer?:
                          | {
                                eu_bank_transfer?:
                                    | {
                                          country: string;
                                      }
                                    | undefined;
                                type?: string | undefined;
                            }
                          | undefined;
                      funding_type?: string | undefined;
                  }
                | "";
            /**
             * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice’s PaymentIntent.
             */
            export type Konbini = {} | "";
            /**
             * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice’s PaymentIntent.
             */
            export type SepaDebit = {} | "";
            /**
             * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice’s PaymentIntent.
             */
            export type UsBankAccount =
                | {
                      financial_connections?:
                          | {
                                filters?:
                                    | {
                                          account_subcategories?: ("checking" | "savings")[] | undefined;
                                      }
                                    | undefined;
                                permissions?:
                                    | ("balances" | "ownership" | "payment_method" | "transactions")[]
                                    | undefined;
                                prefetch?: ("balances" | "ownership" | "transactions")[] | undefined;
                            }
                          | undefined;
                      verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
                  }
                | "";
        }

        /**
         * The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice). Should not be specified with payment_method_configuration
         */
        export type PaymentMethodTypes =
            | (
                  | "ach_credit_transfer"
                  | "ach_debit"
                  | "acss_debit"
                  | "amazon_pay"
                  | "au_becs_debit"
                  | "bacs_debit"
                  | "bancontact"
                  | "boleto"
                  | "card"
                  | "cashapp"
                  | "customer_balance"
                  | "eps"
                  | "fpx"
                  | "giropay"
                  | "grabpay"
                  | "ideal"
                  | "jp_credit_transfer"
                  | "kakao_pay"
                  | "konbini"
                  | "kr_card"
                  | "link"
                  | "multibanco"
                  | "naver_pay"
                  | "p24"
                  | "payco"
                  | "paynow"
                  | "paypal"
                  | "promptpay"
                  | "revolut_pay"
                  | "sepa_credit_transfer"
                  | "sepa_debit"
                  | "sofort"
                  | "swish"
                  | "us_bank_account"
                  | "wechat_pay"
              )[]
            | "";
    }

    /**
     * How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted.
     */
    export type PendingInvoiceItemsBehavior = "exclude" | "include";
    export const PendingInvoiceItemsBehavior = {
        Exclude: "exclude",
        Include: "include",
    } as const;

    /**
     * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
     */
    export interface Rendering {
        /** How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts. */
        amount_tax_display?: Rendering.AmountTaxDisplay;
        /** Invoice pdf rendering options */
        pdf?: Rendering.Pdf;
        /** ID of the invoice rendering template to use for this invoice. */
        template?: string;
        /** The specific version of invoice rendering template to use for this invoice. */
        template_version?: Rendering.TemplateVersion;
    }

    export namespace Rendering {
        /**
         * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
         */
        export type AmountTaxDisplay = "" | "exclude_tax" | "include_inclusive_tax";
        export const AmountTaxDisplay = {
            Empty: "",
            ExcludeTax: "exclude_tax",
            IncludeInclusiveTax: "include_inclusive_tax",
        } as const;

        /**
         * Invoice pdf rendering options
         */
        export interface Pdf {
            /**
             * Page size for invoice PDF. Can be set to `a4`, `letter`, or `auto`.
             *  If set to `auto`, invoice PDF page size defaults to `a4` for customers with
             *  Japanese locale and `letter` for customers with other locales.
             */
            page_size?: Pdf.PageSize;
        }

        export namespace Pdf {
            /**
             * Page size for invoice PDF. Can be set to `a4`, `letter`, or `auto`.
             *  If set to `auto`, invoice PDF page size defaults to `a4` for customers with
             *  Japanese locale and `letter` for customers with other locales.
             */
            export type PageSize = "a4" | "auto" | "letter";
            export const PageSize = {
                A4: "a4",
                Auto: "auto",
                Letter: "letter",
            } as const;
        }

        /**
         * The specific version of invoice rendering template to use for this invoice.
         */
        export type TemplateVersion = number | "";
    }

    /**
     * Settings for the cost of shipping for this invoice.
     */
    export interface ShippingCost {
        /** The ID of the shipping rate to use for this order. */
        shipping_rate?: string;
        /** Parameters to create a new ad-hoc shipping rate for this order. */
        shipping_rate_data?: ShippingCost.ShippingRateData;
    }

    export namespace ShippingCost {
        /**
         * Parameters to create a new ad-hoc shipping rate for this order.
         */
        export interface ShippingRateData {
            /** The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions. */
            delivery_estimate?: ShippingRateData.DeliveryEstimate;
            /** The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions. */
            display_name: string;
            /** Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`. */
            fixed_amount?: ShippingRateData.FixedAmount;
            /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
            metadata?: Record<string, string>;
            /** Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. */
            tax_behavior?: ShippingRateData.TaxBehavior;
            /** A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`. */
            tax_code?: string;
            /** The type of calculation to use on the shipping rate. */
            type?: "fixed_amount";
        }

        export namespace ShippingRateData {
            /**
             * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
             */
            export interface DeliveryEstimate {
                /** The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite. */
                maximum?: DeliveryEstimate.Maximum;
                /** The lower bound of the estimated range. If empty, represents no lower bound. */
                minimum?: DeliveryEstimate.Minimum;
            }

            export namespace DeliveryEstimate {
                /**
                 * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
                 */
                export interface Maximum {
                    /** A unit of time. */
                    unit: Maximum.Unit;
                    /** Must be greater than 0. */
                    value: number;
                }

                export namespace Maximum {
                    /**
                     * A unit of time.
                     */
                    export type Unit = "business_day" | "day" | "hour" | "month" | "week";
                    export const Unit = {
                        BusinessDay: "business_day",
                        Day: "day",
                        Hour: "hour",
                        Month: "month",
                        Week: "week",
                    } as const;
                }

                /**
                 * The lower bound of the estimated range. If empty, represents no lower bound.
                 */
                export interface Minimum {
                    /** A unit of time. */
                    unit: Minimum.Unit;
                    /** Must be greater than 0. */
                    value: number;
                }

                export namespace Minimum {
                    /**
                     * A unit of time.
                     */
                    export type Unit = "business_day" | "day" | "hour" | "month" | "week";
                    export const Unit = {
                        BusinessDay: "business_day",
                        Day: "day",
                        Hour: "hour",
                        Month: "month",
                        Week: "week",
                    } as const;
                }
            }

            /**
             * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
             */
            export interface FixedAmount {
                /** A non-negative integer in cents representing how much to charge. */
                amount: number;
                /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
                currency: string;
                /** Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies). */
                currency_options?: Record<string, FixedAmount.CurrencyOptions.Value>;
            }

            export namespace FixedAmount {
                export namespace CurrencyOptions {
                    export interface Value {
                        /** A non-negative integer in cents representing how much to charge. */
                        amount: number;
                        /** Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. */
                        tax_behavior?: Value.TaxBehavior;
                    }

                    export namespace Value {
                        /**
                         * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
                         */
                        export type TaxBehavior = "exclusive" | "inclusive" | "unspecified";
                        export const TaxBehavior = {
                            Exclusive: "exclusive",
                            Inclusive: "inclusive",
                            Unspecified: "unspecified",
                        } as const;
                    }
                }
            }

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            export type TaxBehavior = "exclusive" | "inclusive" | "unspecified";
            export const TaxBehavior = {
                Exclusive: "exclusive",
                Inclusive: "inclusive",
                Unspecified: "unspecified",
            } as const;
        }
    }

    /**
     * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
     */
    export interface ShippingDetails {
        /** Shipping address */
        address: ShippingDetails.Address;
        /** Recipient name. */
        name: string;
        /** Recipient phone (including extension) */
        phone?: ShippingDetails.Phone;
    }

    export namespace ShippingDetails {
        /**
         * Shipping address
         */
        export interface Address {
            /** City, district, suburb, town, or village. */
            city?: string;
            /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
            country?: string;
            /** Address line 1 (e.g., street, PO Box, or company name). */
            line1?: string;
            /** Address line 2 (e.g., apartment, suite, unit, or building). */
            line2?: string;
            /** ZIP or postal code. */
            postal_code?: string;
            /** State, county, province, or region. */
            state?: string;
        }

        /**
         * Recipient phone (including extension)
         */
        export type Phone = string | "";
    }

    /**
     * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
     */
    export interface TransferData {
        /** The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. */
        amount?: number;
        /** ID of an existing, connected Stripe account. */
        destination: string;
    }
}
