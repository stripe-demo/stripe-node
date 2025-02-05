/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface PersonCreateRequest {
    /** Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements. */
    additional_tos_acceptances?: PersonCreateRequest.AdditionalTosAcceptances;
    /** The person's address. */
    address?: PersonCreateRequest.Address;
    /** The Kana variation of the person's address (Japan only). */
    address_kana?: PersonCreateRequest.AddressKana;
    /** The Kanji variation of the person's address (Japan only). */
    address_kanji?: PersonCreateRequest.AddressKanji;
    /** The person's date of birth. */
    dob?: PersonCreateRequest.Dob;
    /** Documents that may be submitted to satisfy various informational requests. */
    documents?: PersonCreateRequest.Documents;
    /** The person's email address. */
    email?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The person's first name. */
    first_name?: string;
    /** The Kana variation of the person's first name (Japan only). */
    first_name_kana?: string;
    /** The Kanji variation of the person's first name (Japan only). */
    first_name_kanji?: string;
    /** A list of alternate names or aliases that the person is known by. */
    full_name_aliases?: PersonCreateRequest.FullNameAliases;
    /** The person's gender (International regulations require either "male" or "female"). */
    gender?: string;
    /** The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii). */
    id_number?: string;
    /** The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii). */
    id_number_secondary?: string;
    /** The person's last name. */
    last_name?: string;
    /** The Kana variation of the person's last name (Japan only). */
    last_name_kana?: string;
    /** The Kanji variation of the person's last name (Japan only). */
    last_name_kanji?: string;
    /** The person's maiden name. */
    maiden_name?: string;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: PersonCreateRequest.Metadata;
    /** The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable. */
    nationality?: string;
    /** A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person. */
    person_token?: string;
    /** The person's phone number. */
    phone?: string;
    /** Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. */
    political_exposure?: string;
    /** The person's registered address. */
    registered_address?: PersonCreateRequest.RegisteredAddress;
    /** The relationship that this person has with the account's legal entity. */
    relationship?: PersonCreateRequest.Relationship;
    /** The last four digits of the person's Social Security number (U.S. only). */
    ssn_last_4?: string;
    /** The person's verification status. */
    verification?: PersonCreateRequest.Verification;
}

export namespace PersonCreateRequest {
    /**
     * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
     */
    export interface AdditionalTosAcceptances {
        /** Details on the legal guardian's acceptance of the main Stripe service agreement. */
        account?: AdditionalTosAcceptances.Account;
    }

    export namespace AdditionalTosAcceptances {
        /**
         * Details on the legal guardian's acceptance of the main Stripe service agreement.
         */
        export interface Account {
            /** The Unix timestamp marking when the account representative accepted the service agreement. */
            date?: number;
            /** The IP address from which the account representative accepted the service agreement. */
            ip?: string;
            /** The user agent of the browser from which the account representative accepted the service agreement. */
            user_agent?: Account.UserAgent;
        }

        export namespace Account {
            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            export type UserAgent = string | "";
        }
    }

    /**
     * The person's address.
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
     * The Kana variation of the person's address (Japan only).
     */
    export interface AddressKana {
        /** City or ward. */
        city?: string;
        /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
        country?: string;
        /** Block or building number. */
        line1?: string;
        /** Building details. */
        line2?: string;
        /** Postal code. */
        postal_code?: string;
        /** Prefecture. */
        state?: string;
        /** Town or cho-me. */
        town?: string;
    }

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    export interface AddressKanji {
        /** City or ward. */
        city?: string;
        /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
        country?: string;
        /** Block or building number. */
        line1?: string;
        /** Building details. */
        line2?: string;
        /** Postal code. */
        postal_code?: string;
        /** Prefecture. */
        state?: string;
        /** Town or cho-me. */
        town?: string;
    }

    /**
     * The person's date of birth.
     */
    export type Dob =
        | {
              day: number;
              month: number;
              year: number;
          }
        | "";

    /**
     * Documents that may be submitted to satisfy various informational requests.
     */
    export interface Documents {
        /** One or more documents that demonstrate proof that this person is authorized to represent the company. */
        company_authorization?: Documents.CompanyAuthorization;
        /** One or more documents showing the person's passport page with photo and personal data. */
        passport?: Documents.Passport;
        /** One or more documents showing the person's visa required for living in the country where they are residing. */
        visa?: Documents.Visa;
    }

    export namespace Documents {
        /**
         * One or more documents that demonstrate proof that this person is authorized to represent the company.
         */
        export interface CompanyAuthorization {
            /** One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`. */
            files?: CompanyAuthorization.Files.Item[];
        }

        export namespace CompanyAuthorization {
            export type Files = Files.Item[];

            export namespace Files {
                export type Item = string | "";
            }
        }

        /**
         * One or more documents showing the person's passport page with photo and personal data.
         */
        export interface Passport {
            /** One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`. */
            files?: Passport.Files.Item[];
        }

        export namespace Passport {
            export type Files = Files.Item[];

            export namespace Files {
                export type Item = string | "";
            }
        }

        /**
         * One or more documents showing the person's visa required for living in the country where they are residing.
         */
        export interface Visa {
            /** One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`. */
            files?: Visa.Files.Item[];
        }

        export namespace Visa {
            export type Files = Files.Item[];

            export namespace Files {
                export type Item = string | "";
            }
        }
    }

    /**
     * A list of alternate names or aliases that the person is known by.
     */
    export type FullNameAliases = string[] | "";
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";

    /**
     * The person's registered address.
     */
    export interface RegisteredAddress {
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
     * The relationship that this person has with the account's legal entity.
     */
    export interface Relationship {
        /** Whether the person is the authorizer of the account's representative. */
        authorizer?: boolean;
        /** Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations. */
        director?: boolean;
        /** Whether the person has significant responsibility to control, manage, or direct the organization. */
        executive?: boolean;
        /** Whether the person is the legal guardian of the account's representative. */
        legal_guardian?: boolean;
        /** Whether the person is an owner of the account’s legal entity. */
        owner?: boolean;
        /** The percent owned by the person of the account's legal entity. */
        percent_ownership?: Relationship.PercentOwnership;
        /** Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account. */
        representative?: boolean;
        /** The person's title (e.g., CEO, Support Engineer). */
        title?: string;
    }

    export namespace Relationship {
        /**
         * The percent owned by the person of the account's legal entity.
         */
        export type PercentOwnership = number | "";
    }

    /**
     * The person's verification status.
     */
    export interface Verification {
        /** A document showing address, either a passport, local ID card, or utility bill from a well-known utility company. */
        additional_document?: Verification.AdditionalDocument;
        /** An identifying document, either a passport or local ID card. */
        document?: Verification.Document;
    }

    export namespace Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        export interface AdditionalDocument {
            /** The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size. */
            back?: string;
            /** The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size. */
            front?: string;
        }

        /**
         * An identifying document, either a passport or local ID card.
         */
        export interface Document {
            /** The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size. */
            back?: string;
            /** The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size. */
            front?: string;
        }
    }
}
