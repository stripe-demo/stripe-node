/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface SourceUpdateRequest {
    /** Amount associated with the source. */
    amount?: number;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status. */
    mandate?: SourceUpdateRequest.Mandate;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: SourceUpdateRequest.Metadata;
    /** Information about the owner of the payment instrument that may be used or required by particular source types. */
    owner?: SourceUpdateRequest.Owner;
    /** Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it. */
    source_order?: SourceUpdateRequest.SourceOrder;
}

export namespace SourceUpdateRequest {
    /**
     * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
     */
    export interface Mandate {
        /** The parameters required to notify Stripe of a mandate acceptance or refusal by the customer. */
        acceptance?: Mandate.Acceptance;
        /** The amount specified by the mandate. (Leave null for a mandate covering all amounts) */
        amount?: Mandate.Amount;
        /** The currency specified by the mandate. (Must match `currency` of the source) */
        currency?: string;
        /** The interval of debits permitted by the mandate. Either `one_time` (just permitting a single debit), `scheduled` (with debits on an agreed schedule or for clearly-defined events), or `variable`(for debits with any frequency) */
        interval?: Mandate.Interval;
        /** The method Stripe should use to notify the customer of upcoming debit instructions and/or mandate confirmation as required by the underlying debit network. Either `email` (an email is sent directly to the customer), `manual` (a `source.mandate_notification` event is sent to your webhooks endpoint and you should handle the notification) or `none` (the underlying debit network does not require any notification). */
        notification_method?: Mandate.NotificationMethod;
    }

    export namespace Mandate {
        /**
         * The parameters required to notify Stripe of a mandate acceptance or refusal by the customer.
         */
        export interface Acceptance {
            /** The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer. */
            date?: number;
            /** The IP address from which the mandate was accepted or refused by the customer. */
            ip?: string;
            /** The parameters required to store a mandate accepted offline. Should only be set if `mandate[type]` is `offline` */
            offline?: Acceptance.Offline;
            /** The parameters required to store a mandate accepted online. Should only be set if `mandate[type]` is `online` */
            online?: Acceptance.Online;
            /** The status of the mandate acceptance. Either `accepted` (the mandate was accepted) or `refused` (the mandate was refused). */
            status: Acceptance.Status;
            /** The type of acceptance information included with the mandate. Either `online` or `offline` */
            type?: Acceptance.Type;
            /** The user agent of the browser from which the mandate was accepted or refused by the customer. */
            user_agent?: string;
        }

        export namespace Acceptance {
            /**
             * The parameters required to store a mandate accepted offline. Should only be set if `mandate[type]` is `offline`
             */
            export interface Offline {
                /** An email to contact you with if a copy of the mandate is requested, required if `type` is `offline`. */
                contact_email: string;
            }

            /**
             * The parameters required to store a mandate accepted online. Should only be set if `mandate[type]` is `online`
             */
            export interface Online {
                /** The Unix timestamp (in seconds) when the mandate was accepted or refused by the customer. */
                date?: number;
                /** The IP address from which the mandate was accepted or refused by the customer. */
                ip?: string;
                /** The user agent of the browser from which the mandate was accepted or refused by the customer. */
                user_agent?: string;
            }

            /**
             * The status of the mandate acceptance. Either `accepted` (the mandate was accepted) or `refused` (the mandate was refused).
             */
            export type Status = "accepted" | "pending" | "refused" | "revoked";
            export const Status = {
                Accepted: "accepted",
                Pending: "pending",
                Refused: "refused",
                Revoked: "revoked",
            } as const;
            /**
             * The type of acceptance information included with the mandate. Either `online` or `offline`
             */
            export type Type = "offline" | "online";
            export const Type = {
                Offline: "offline",
                Online: "online",
            } as const;
        }

        /**
         * The amount specified by the mandate. (Leave null for a mandate covering all amounts)
         */
        export type Amount = number | "";
        /**
         * The interval of debits permitted by the mandate. Either `one_time` (just permitting a single debit), `scheduled` (with debits on an agreed schedule or for clearly-defined events), or `variable`(for debits with any frequency)
         */
        export type Interval = "one_time" | "scheduled" | "variable";
        export const Interval = {
            OneTime: "one_time",
            Scheduled: "scheduled",
            Variable: "variable",
        } as const;
        /**
         * The method Stripe should use to notify the customer of upcoming debit instructions and/or mandate confirmation as required by the underlying debit network. Either `email` (an email is sent directly to the customer), `manual` (a `source.mandate_notification` event is sent to your webhooks endpoint and you should handle the notification) or `none` (the underlying debit network does not require any notification).
         */
        export type NotificationMethod = "deprecated_none" | "email" | "manual" | "none" | "stripe_email";
        export const NotificationMethod = {
            DeprecatedNone: "deprecated_none",
            Email: "email",
            Manual: "manual",
            None: "none",
            StripeEmail: "stripe_email",
        } as const;
    }

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";

    /**
     * Information about the owner of the payment instrument that may be used or required by particular source types.
     */
    export interface Owner {
        /** Owner's address. */
        address?: Owner.Address;
        /** Owner's email address. */
        email?: string;
        /** Owner's full name. */
        name?: string;
        /** Owner's phone number. */
        phone?: string;
    }

    export namespace Owner {
        /**
         * Owner's address.
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
    }

    /**
     * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
     */
    export interface SourceOrder {
        /** List of items constituting the order. */
        items?: SourceOrder.Items.Item[];
        /** Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true. */
        shipping?: SourceOrder.Shipping;
    }

    export namespace SourceOrder {
        export type Items = Items.Item[];

        export namespace Items {
            export interface Item {
                amount?: number;
                currency?: string;
                description?: string;
                /** The ID of the SKU being ordered. */
                parent?: string;
                /** The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered. */
                quantity?: number;
                type?: Item.Type;
            }

            export namespace Item {
                export type Type = "discount" | "shipping" | "sku" | "tax";
                export const Type = {
                    Discount: "discount",
                    Shipping: "shipping",
                    Sku: "sku",
                    Tax: "tax",
                } as const;
            }
        }

        /**
         * Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
         */
        export interface Shipping {
            /** Shipping address. */
            address: Shipping.Address;
            /** The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. */
            carrier?: string;
            /** Recipient name. */
            name?: string;
            /** Recipient phone (including extension). */
            phone?: string;
            /** The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas. */
            tracking_number?: string;
        }

        export namespace Shipping {
            /**
             * Shipping address.
             */
            export interface Address {
                /** City, district, suburb, town, or village. */
                city?: string;
                /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
                country?: string;
                /** Address line 1 (e.g., street, PO Box, or company name). */
                line1: string;
                /** Address line 2 (e.g., apartment, suite, unit, or building). */
                line2?: string;
                /** ZIP or postal code. */
                postal_code?: string;
                /** State, county, province, or region. */
                state?: string;
            }
        }
    }
}
