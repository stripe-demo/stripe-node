/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         supported_currencies: ["supported_currencies"]
 *     }
 */
export interface FinancialAccountCreateRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field. */
    features?: FinancialAccountCreateRequest.Features;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: Record<string, string>;
    /** The nickname for the FinancialAccount. */
    nickname?: FinancialAccountCreateRequest.Nickname;
    /** The set of functionalities that the platform can restrict on the FinancialAccount. */
    platform_restrictions?: FinancialAccountCreateRequest.PlatformRestrictions;
    /** The currencies the FinancialAccount can hold a balance in. */
    supported_currencies: string[];
}

export namespace FinancialAccountCreateRequest {
    /**
     * Encodes whether a FinancialAccount has access to a particular feature. Stripe or the platform can control features via the requested field.
     */
    export interface Features {
        /** Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount. */
        card_issuing?: Features.CardIssuing;
        /** Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount. */
        deposit_insurance?: Features.DepositInsurance;
        /** Contains Features that add FinancialAddresses to the FinancialAccount. */
        financial_addresses?: Features.FinancialAddresses;
        /** Contains settings related to adding funds to a FinancialAccount from another Account with the same owner. */
        inbound_transfers?: Features.InboundTransfers;
        /** Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment). */
        intra_stripe_flows?: Features.IntraStripeFlows;
        /** Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money. */
        outbound_payments?: Features.OutboundPayments;
        /** Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner. */
        outbound_transfers?: Features.OutboundTransfers;
    }

    export namespace Features {
        /**
         * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
         */
        export interface CardIssuing {
            /** Whether the FinancialAccount should have the Feature. */
            requested: boolean;
        }

        /**
         * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
         */
        export interface DepositInsurance {
            /** Whether the FinancialAccount should have the Feature. */
            requested: boolean;
        }

        /**
         * Contains Features that add FinancialAddresses to the FinancialAccount.
         */
        export interface FinancialAddresses {
            /** Adds an ABA FinancialAddress to the FinancialAccount. */
            aba?: FinancialAddresses.Aba;
        }

        export namespace FinancialAddresses {
            /**
             * Adds an ABA FinancialAddress to the FinancialAccount.
             */
            export interface Aba {
                /** Whether the FinancialAccount should have the Feature. */
                requested: boolean;
            }
        }

        /**
         * Contains settings related to adding funds to a FinancialAccount from another Account with the same owner.
         */
        export interface InboundTransfers {
            /** Enables ACH Debits via the InboundTransfers API. */
            ach?: InboundTransfers.Ach;
        }

        export namespace InboundTransfers {
            /**
             * Enables ACH Debits via the InboundTransfers API.
             */
            export interface Ach {
                /** Whether the FinancialAccount should have the Feature. */
                requested: boolean;
            }
        }

        /**
         * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
         */
        export interface IntraStripeFlows {
            /** Whether the FinancialAccount should have the Feature. */
            requested: boolean;
        }

        /**
         * Includes Features related to initiating money movement out of the FinancialAccount to someone else's bucket of money.
         */
        export interface OutboundPayments {
            /** Enables ACH transfers via the OutboundPayments API. */
            ach?: OutboundPayments.Ach;
            /** Enables US domestic wire transfers via the OutboundPayments API. */
            us_domestic_wire?: OutboundPayments.UsDomesticWire;
        }

        export namespace OutboundPayments {
            /**
             * Enables ACH transfers via the OutboundPayments API.
             */
            export interface Ach {
                /** Whether the FinancialAccount should have the Feature. */
                requested: boolean;
            }

            /**
             * Enables US domestic wire transfers via the OutboundPayments API.
             */
            export interface UsDomesticWire {
                /** Whether the FinancialAccount should have the Feature. */
                requested: boolean;
            }
        }

        /**
         * Contains a Feature and settings related to moving money out of the FinancialAccount into another Account with the same owner.
         */
        export interface OutboundTransfers {
            /** Enables ACH transfers via the OutboundTransfers API. */
            ach?: OutboundTransfers.Ach;
            /** Enables US domestic wire transfers via the OutboundTransfers API. */
            us_domestic_wire?: OutboundTransfers.UsDomesticWire;
        }

        export namespace OutboundTransfers {
            /**
             * Enables ACH transfers via the OutboundTransfers API.
             */
            export interface Ach {
                /** Whether the FinancialAccount should have the Feature. */
                requested: boolean;
            }

            /**
             * Enables US domestic wire transfers via the OutboundTransfers API.
             */
            export interface UsDomesticWire {
                /** Whether the FinancialAccount should have the Feature. */
                requested: boolean;
            }
        }
    }

    /**
     * The nickname for the FinancialAccount.
     */
    export type Nickname = string | "";

    /**
     * The set of functionalities that the platform can restrict on the FinancialAccount.
     */
    export interface PlatformRestrictions {
        /** Restricts all inbound money movement. */
        inbound_flows?: PlatformRestrictions.InboundFlows;
        /** Restricts all outbound money movement. */
        outbound_flows?: PlatformRestrictions.OutboundFlows;
    }

    export namespace PlatformRestrictions {
        /**
         * Restricts all inbound money movement.
         */
        export type InboundFlows = "restricted" | "unrestricted";
        export const InboundFlows = {
            Restricted: "restricted",
            Unrestricted: "unrestricted",
        } as const;
        /**
         * Restricts all outbound money movement.
         */
        export type OutboundFlows = "restricted" | "unrestricted";
        export const OutboundFlows = {
            Restricted: "restricted",
            Unrestricted: "unrestricted",
        } as const;
    }
}
