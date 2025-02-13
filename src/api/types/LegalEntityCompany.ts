/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface LegalEntityCompany {
    address?: Stripe.Address;
    /** The Kana variation of the company's primary address (Japan only). */
    address_kana?: Stripe.LegalEntityJapanAddress;
    /** The Kanji variation of the company's primary address (Japan only). */
    address_kanji?: Stripe.LegalEntityJapanAddress;
    /** Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided). */
    directors_provided?: boolean;
    /** This hash is used to attest that the director information provided to Stripe is both current and correct. */
    directorship_declaration?: Stripe.LegalEntityDirectorshipDeclaration;
    /** Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided. */
    executives_provided?: boolean;
    /** The export license ID number of the company, also referred as Import Export Code (India only). */
    export_license_id?: string;
    /** The purpose code to use for export transactions (India only). */
    export_purpose_code?: string;
    /** The company's legal name. */
    name?: string;
    /** The Kana variation of the company's legal name (Japan only). */
    name_kana?: string;
    /** The Kanji variation of the company's legal name (Japan only). */
    name_kanji?: string;
    /** Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together). */
    owners_provided?: boolean;
    /** This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct. */
    ownership_declaration?: Stripe.LegalEntityUboDeclaration;
    ownership_exemption_reason?: LegalEntityCompany.OwnershipExemptionReason;
    /** The company's phone number (used for verification). */
    phone?: string;
    /** The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details. */
    structure?: LegalEntityCompany.Structure;
    /** Whether the company's business ID number was provided. */
    tax_id_provided?: boolean;
    /** The jurisdiction in which the `tax_id` is registered (Germany-based companies only). */
    tax_id_registrar?: string;
    /** Whether the company's business VAT number was provided. */
    vat_id_provided?: boolean;
    /** Information on the verification state of the company. */
    verification?: Stripe.LegalEntityCompanyVerification;
}

export namespace LegalEntityCompany {
    export type OwnershipExemptionReason =
        | "qualified_entity_exceeds_ownership_threshold"
        | "qualifies_as_financial_institution";
    export const OwnershipExemptionReason = {
        QualifiedEntityExceedsOwnershipThreshold: "qualified_entity_exceeds_ownership_threshold",
        QualifiesAsFinancialInstitution: "qualifies_as_financial_institution",
    } as const;
    /**
     * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
     */
    export type Structure =
        | "free_zone_establishment"
        | "free_zone_llc"
        | "government_instrumentality"
        | "governmental_unit"
        | "incorporated_non_profit"
        | "incorporated_partnership"
        | "limited_liability_partnership"
        | "llc"
        | "multi_member_llc"
        | "private_company"
        | "private_corporation"
        | "private_partnership"
        | "public_company"
        | "public_corporation"
        | "public_partnership"
        | "registered_charity"
        | "single_member_llc"
        | "sole_establishment"
        | "sole_proprietorship"
        | "tax_exempt_government_instrumentality"
        | "unincorporated_association"
        | "unincorporated_non_profit"
        | "unincorporated_partnership";
    export const Structure = {
        FreeZoneEstablishment: "free_zone_establishment",
        FreeZoneLlc: "free_zone_llc",
        GovernmentInstrumentality: "government_instrumentality",
        GovernmentalUnit: "governmental_unit",
        IncorporatedNonProfit: "incorporated_non_profit",
        IncorporatedPartnership: "incorporated_partnership",
        LimitedLiabilityPartnership: "limited_liability_partnership",
        Llc: "llc",
        MultiMemberLlc: "multi_member_llc",
        PrivateCompany: "private_company",
        PrivateCorporation: "private_corporation",
        PrivatePartnership: "private_partnership",
        PublicCompany: "public_company",
        PublicCorporation: "public_corporation",
        PublicPartnership: "public_partnership",
        RegisteredCharity: "registered_charity",
        SingleMemberLlc: "single_member_llc",
        SoleEstablishment: "sole_establishment",
        SoleProprietorship: "sole_proprietorship",
        TaxExemptGovernmentInstrumentality: "tax_exempt_government_instrumentality",
        UnincorporatedAssociation: "unincorporated_association",
        UnincorporatedNonProfit: "unincorporated_non_profit",
        UnincorporatedPartnership: "unincorporated_partnership",
    } as const;
}
