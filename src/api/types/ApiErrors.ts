/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface ApiErrors {
    /** For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines) if they provide one. */
    advice_code?: string;
    /** For card errors, the ID of the failed charge. */
    charge?: string;
    /** For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported. */
    code?: ApiErrors.Code;
    /** For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one. */
    decline_code?: string;
    /** A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported. */
    doc_url?: string;
    /** A human-readable message providing more details about the error. For card errors, these messages can be shown to your users. */
    message?: string;
    /** For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error. */
    network_advice_code?: string;
    /** For card errors resulting from a card issuer decline, a brand specific 2, 3, or 4 digit code which indicates the reason the authorization failed. */
    network_decline_code?: string;
    /** If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field. */
    param?: string;
    payment_intent?: Stripe.PaymentIntent;
    payment_method?: Stripe.PaymentMethod;
    /** If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors. */
    payment_method_type?: string;
    /** A URL to the request log entry in your dashboard. */
    request_log_url?: string;
    setup_intent?: Stripe.SetupIntent;
    source?: Stripe.PaymentSource;
    /** The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error` */
    type: ApiErrors.Type;
}

export namespace ApiErrors {
    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
     */
    export type Code =
        | "account_closed"
        | "account_country_invalid_address"
        | "account_error_country_change_requires_additional_steps"
        | "account_information_mismatch"
        | "account_invalid"
        | "account_number_invalid"
        | "acss_debit_session_incomplete"
        | "alipay_upgrade_required"
        | "amount_too_large"
        | "amount_too_small"
        | "api_key_expired"
        | "application_fees_not_allowed"
        | "authentication_required"
        | "balance_insufficient"
        | "balance_invalid_parameter"
        | "bank_account_bad_routing_numbers"
        | "bank_account_declined"
        | "bank_account_exists"
        | "bank_account_restricted"
        | "bank_account_unusable"
        | "bank_account_unverified"
        | "bank_account_verification_failed"
        | "billing_invalid_mandate"
        | "bitcoin_upgrade_required"
        | "capture_charge_authorization_expired"
        | "capture_unauthorized_payment"
        | "card_decline_rate_limit_exceeded"
        | "card_declined"
        | "cardholder_phone_number_required"
        | "charge_already_captured"
        | "charge_already_refunded"
        | "charge_disputed"
        | "charge_exceeds_source_limit"
        | "charge_exceeds_transaction_limit"
        | "charge_expired_for_capture"
        | "charge_invalid_parameter"
        | "charge_not_refundable"
        | "clearing_code_unsupported"
        | "country_code_invalid"
        | "country_unsupported"
        | "coupon_expired"
        | "customer_max_payment_methods"
        | "customer_max_subscriptions"
        | "customer_tax_location_invalid"
        | "debit_not_authorized"
        | "email_invalid"
        | "expired_card"
        | "financial_connections_account_inactive"
        | "financial_connections_no_successful_transaction_refresh"
        | "forwarding_api_inactive"
        | "forwarding_api_invalid_parameter"
        | "forwarding_api_upstream_connection_error"
        | "forwarding_api_upstream_connection_timeout"
        | "idempotency_key_in_use"
        | "incorrect_address"
        | "incorrect_cvc"
        | "incorrect_number"
        | "incorrect_zip"
        | "instant_payouts_config_disabled"
        | "instant_payouts_currency_disabled"
        | "instant_payouts_limit_exceeded"
        | "instant_payouts_unsupported"
        | "insufficient_funds"
        | "intent_invalid_state"
        | "intent_verification_method_missing"
        | "invalid_card_type"
        | "invalid_characters"
        | "invalid_charge_amount"
        | "invalid_cvc"
        | "invalid_expiry_month"
        | "invalid_expiry_year"
        | "invalid_mandate_reference_prefix_format"
        | "invalid_number"
        | "invalid_source_usage"
        | "invalid_tax_location"
        | "invoice_no_customer_line_items"
        | "invoice_no_payment_method_types"
        | "invoice_no_subscription_line_items"
        | "invoice_not_editable"
        | "invoice_on_behalf_of_not_editable"
        | "invoice_payment_intent_requires_action"
        | "invoice_upcoming_none"
        | "livemode_mismatch"
        | "lock_timeout"
        | "missing"
        | "no_account"
        | "not_allowed_on_standard_account"
        | "out_of_inventory"
        | "ownership_declaration_not_allowed"
        | "parameter_invalid_empty"
        | "parameter_invalid_integer"
        | "parameter_invalid_string_blank"
        | "parameter_invalid_string_empty"
        | "parameter_missing"
        | "parameter_unknown"
        | "parameters_exclusive"
        | "payment_intent_action_required"
        | "payment_intent_authentication_failure"
        | "payment_intent_incompatible_payment_method"
        | "payment_intent_invalid_parameter"
        | "payment_intent_konbini_rejected_confirmation_number"
        | "payment_intent_mandate_invalid"
        | "payment_intent_payment_attempt_expired"
        | "payment_intent_payment_attempt_failed"
        | "payment_intent_unexpected_state"
        | "payment_method_bank_account_already_verified"
        | "payment_method_bank_account_blocked"
        | "payment_method_billing_details_address_missing"
        | "payment_method_configuration_failures"
        | "payment_method_currency_mismatch"
        | "payment_method_customer_decline"
        | "payment_method_invalid_parameter"
        | "payment_method_invalid_parameter_testmode"
        | "payment_method_microdeposit_failed"
        | "payment_method_microdeposit_verification_amounts_invalid"
        | "payment_method_microdeposit_verification_amounts_mismatch"
        | "payment_method_microdeposit_verification_attempts_exceeded"
        | "payment_method_microdeposit_verification_descriptor_code_mismatch"
        | "payment_method_microdeposit_verification_timeout"
        | "payment_method_not_available"
        | "payment_method_provider_decline"
        | "payment_method_provider_timeout"
        | "payment_method_unactivated"
        | "payment_method_unexpected_state"
        | "payment_method_unsupported_type"
        | "payout_reconciliation_not_ready"
        | "payouts_limit_exceeded"
        | "payouts_not_allowed"
        | "platform_account_required"
        | "platform_api_key_expired"
        | "postal_code_invalid"
        | "processing_error"
        | "product_inactive"
        | "progressive_onboarding_limit_exceeded"
        | "rate_limit"
        | "refer_to_customer"
        | "refund_disputed_payment"
        | "resource_already_exists"
        | "resource_missing"
        | "return_intent_already_processed"
        | "routing_number_invalid"
        | "secret_key_required"
        | "sepa_unsupported_account"
        | "setup_attempt_failed"
        | "setup_intent_authentication_failure"
        | "setup_intent_invalid_parameter"
        | "setup_intent_mandate_invalid"
        | "setup_intent_setup_attempt_expired"
        | "setup_intent_unexpected_state"
        | "shipping_address_invalid"
        | "shipping_calculation_failed"
        | "sku_inactive"
        | "state_unsupported"
        | "status_transition_invalid"
        | "stripe_tax_inactive"
        | "tax_id_invalid"
        | "taxes_calculation_failed"
        | "terminal_location_country_unsupported"
        | "terminal_reader_busy"
        | "terminal_reader_hardware_fault"
        | "terminal_reader_invalid_location_for_activation"
        | "terminal_reader_invalid_location_for_payment"
        | "terminal_reader_offline"
        | "terminal_reader_timeout"
        | "testmode_charges_only"
        | "tls_version_unsupported"
        | "token_already_used"
        | "token_card_network_invalid"
        | "token_in_use"
        | "transfer_source_balance_parameters_mismatch"
        | "transfers_not_allowed"
        | "url_invalid";
    export const Code = {
        AccountClosed: "account_closed",
        AccountCountryInvalidAddress: "account_country_invalid_address",
        AccountErrorCountryChangeRequiresAdditionalSteps: "account_error_country_change_requires_additional_steps",
        AccountInformationMismatch: "account_information_mismatch",
        AccountInvalid: "account_invalid",
        AccountNumberInvalid: "account_number_invalid",
        AcssDebitSessionIncomplete: "acss_debit_session_incomplete",
        AlipayUpgradeRequired: "alipay_upgrade_required",
        AmountTooLarge: "amount_too_large",
        AmountTooSmall: "amount_too_small",
        ApiKeyExpired: "api_key_expired",
        ApplicationFeesNotAllowed: "application_fees_not_allowed",
        AuthenticationRequired: "authentication_required",
        BalanceInsufficient: "balance_insufficient",
        BalanceInvalidParameter: "balance_invalid_parameter",
        BankAccountBadRoutingNumbers: "bank_account_bad_routing_numbers",
        BankAccountDeclined: "bank_account_declined",
        BankAccountExists: "bank_account_exists",
        BankAccountRestricted: "bank_account_restricted",
        BankAccountUnusable: "bank_account_unusable",
        BankAccountUnverified: "bank_account_unverified",
        BankAccountVerificationFailed: "bank_account_verification_failed",
        BillingInvalidMandate: "billing_invalid_mandate",
        BitcoinUpgradeRequired: "bitcoin_upgrade_required",
        CaptureChargeAuthorizationExpired: "capture_charge_authorization_expired",
        CaptureUnauthorizedPayment: "capture_unauthorized_payment",
        CardDeclineRateLimitExceeded: "card_decline_rate_limit_exceeded",
        CardDeclined: "card_declined",
        CardholderPhoneNumberRequired: "cardholder_phone_number_required",
        ChargeAlreadyCaptured: "charge_already_captured",
        ChargeAlreadyRefunded: "charge_already_refunded",
        ChargeDisputed: "charge_disputed",
        ChargeExceedsSourceLimit: "charge_exceeds_source_limit",
        ChargeExceedsTransactionLimit: "charge_exceeds_transaction_limit",
        ChargeExpiredForCapture: "charge_expired_for_capture",
        ChargeInvalidParameter: "charge_invalid_parameter",
        ChargeNotRefundable: "charge_not_refundable",
        ClearingCodeUnsupported: "clearing_code_unsupported",
        CountryCodeInvalid: "country_code_invalid",
        CountryUnsupported: "country_unsupported",
        CouponExpired: "coupon_expired",
        CustomerMaxPaymentMethods: "customer_max_payment_methods",
        CustomerMaxSubscriptions: "customer_max_subscriptions",
        CustomerTaxLocationInvalid: "customer_tax_location_invalid",
        DebitNotAuthorized: "debit_not_authorized",
        EmailInvalid: "email_invalid",
        ExpiredCard: "expired_card",
        FinancialConnectionsAccountInactive: "financial_connections_account_inactive",
        FinancialConnectionsNoSuccessfulTransactionRefresh: "financial_connections_no_successful_transaction_refresh",
        ForwardingApiInactive: "forwarding_api_inactive",
        ForwardingApiInvalidParameter: "forwarding_api_invalid_parameter",
        ForwardingApiUpstreamConnectionError: "forwarding_api_upstream_connection_error",
        ForwardingApiUpstreamConnectionTimeout: "forwarding_api_upstream_connection_timeout",
        IdempotencyKeyInUse: "idempotency_key_in_use",
        IncorrectAddress: "incorrect_address",
        IncorrectCvc: "incorrect_cvc",
        IncorrectNumber: "incorrect_number",
        IncorrectZip: "incorrect_zip",
        InstantPayoutsConfigDisabled: "instant_payouts_config_disabled",
        InstantPayoutsCurrencyDisabled: "instant_payouts_currency_disabled",
        InstantPayoutsLimitExceeded: "instant_payouts_limit_exceeded",
        InstantPayoutsUnsupported: "instant_payouts_unsupported",
        InsufficientFunds: "insufficient_funds",
        IntentInvalidState: "intent_invalid_state",
        IntentVerificationMethodMissing: "intent_verification_method_missing",
        InvalidCardType: "invalid_card_type",
        InvalidCharacters: "invalid_characters",
        InvalidChargeAmount: "invalid_charge_amount",
        InvalidCvc: "invalid_cvc",
        InvalidExpiryMonth: "invalid_expiry_month",
        InvalidExpiryYear: "invalid_expiry_year",
        InvalidMandateReferencePrefixFormat: "invalid_mandate_reference_prefix_format",
        InvalidNumber: "invalid_number",
        InvalidSourceUsage: "invalid_source_usage",
        InvalidTaxLocation: "invalid_tax_location",
        InvoiceNoCustomerLineItems: "invoice_no_customer_line_items",
        InvoiceNoPaymentMethodTypes: "invoice_no_payment_method_types",
        InvoiceNoSubscriptionLineItems: "invoice_no_subscription_line_items",
        InvoiceNotEditable: "invoice_not_editable",
        InvoiceOnBehalfOfNotEditable: "invoice_on_behalf_of_not_editable",
        InvoicePaymentIntentRequiresAction: "invoice_payment_intent_requires_action",
        InvoiceUpcomingNone: "invoice_upcoming_none",
        LivemodeMismatch: "livemode_mismatch",
        LockTimeout: "lock_timeout",
        Missing: "missing",
        NoAccount: "no_account",
        NotAllowedOnStandardAccount: "not_allowed_on_standard_account",
        OutOfInventory: "out_of_inventory",
        OwnershipDeclarationNotAllowed: "ownership_declaration_not_allowed",
        ParameterInvalidEmpty: "parameter_invalid_empty",
        ParameterInvalidInteger: "parameter_invalid_integer",
        ParameterInvalidStringBlank: "parameter_invalid_string_blank",
        ParameterInvalidStringEmpty: "parameter_invalid_string_empty",
        ParameterMissing: "parameter_missing",
        ParameterUnknown: "parameter_unknown",
        ParametersExclusive: "parameters_exclusive",
        PaymentIntentActionRequired: "payment_intent_action_required",
        PaymentIntentAuthenticationFailure: "payment_intent_authentication_failure",
        PaymentIntentIncompatiblePaymentMethod: "payment_intent_incompatible_payment_method",
        PaymentIntentInvalidParameter: "payment_intent_invalid_parameter",
        PaymentIntentKonbiniRejectedConfirmationNumber: "payment_intent_konbini_rejected_confirmation_number",
        PaymentIntentMandateInvalid: "payment_intent_mandate_invalid",
        PaymentIntentPaymentAttemptExpired: "payment_intent_payment_attempt_expired",
        PaymentIntentPaymentAttemptFailed: "payment_intent_payment_attempt_failed",
        PaymentIntentUnexpectedState: "payment_intent_unexpected_state",
        PaymentMethodBankAccountAlreadyVerified: "payment_method_bank_account_already_verified",
        PaymentMethodBankAccountBlocked: "payment_method_bank_account_blocked",
        PaymentMethodBillingDetailsAddressMissing: "payment_method_billing_details_address_missing",
        PaymentMethodConfigurationFailures: "payment_method_configuration_failures",
        PaymentMethodCurrencyMismatch: "payment_method_currency_mismatch",
        PaymentMethodCustomerDecline: "payment_method_customer_decline",
        PaymentMethodInvalidParameter: "payment_method_invalid_parameter",
        PaymentMethodInvalidParameterTestmode: "payment_method_invalid_parameter_testmode",
        PaymentMethodMicrodepositFailed: "payment_method_microdeposit_failed",
        PaymentMethodMicrodepositVerificationAmountsInvalid: "payment_method_microdeposit_verification_amounts_invalid",
        PaymentMethodMicrodepositVerificationAmountsMismatch:
            "payment_method_microdeposit_verification_amounts_mismatch",
        PaymentMethodMicrodepositVerificationAttemptsExceeded:
            "payment_method_microdeposit_verification_attempts_exceeded",
        PaymentMethodMicrodepositVerificationDescriptorCodeMismatch:
            "payment_method_microdeposit_verification_descriptor_code_mismatch",
        PaymentMethodMicrodepositVerificationTimeout: "payment_method_microdeposit_verification_timeout",
        PaymentMethodNotAvailable: "payment_method_not_available",
        PaymentMethodProviderDecline: "payment_method_provider_decline",
        PaymentMethodProviderTimeout: "payment_method_provider_timeout",
        PaymentMethodUnactivated: "payment_method_unactivated",
        PaymentMethodUnexpectedState: "payment_method_unexpected_state",
        PaymentMethodUnsupportedType: "payment_method_unsupported_type",
        PayoutReconciliationNotReady: "payout_reconciliation_not_ready",
        PayoutsLimitExceeded: "payouts_limit_exceeded",
        PayoutsNotAllowed: "payouts_not_allowed",
        PlatformAccountRequired: "platform_account_required",
        PlatformApiKeyExpired: "platform_api_key_expired",
        PostalCodeInvalid: "postal_code_invalid",
        ProcessingError: "processing_error",
        ProductInactive: "product_inactive",
        ProgressiveOnboardingLimitExceeded: "progressive_onboarding_limit_exceeded",
        RateLimit: "rate_limit",
        ReferToCustomer: "refer_to_customer",
        RefundDisputedPayment: "refund_disputed_payment",
        ResourceAlreadyExists: "resource_already_exists",
        ResourceMissing: "resource_missing",
        ReturnIntentAlreadyProcessed: "return_intent_already_processed",
        RoutingNumberInvalid: "routing_number_invalid",
        SecretKeyRequired: "secret_key_required",
        SepaUnsupportedAccount: "sepa_unsupported_account",
        SetupAttemptFailed: "setup_attempt_failed",
        SetupIntentAuthenticationFailure: "setup_intent_authentication_failure",
        SetupIntentInvalidParameter: "setup_intent_invalid_parameter",
        SetupIntentMandateInvalid: "setup_intent_mandate_invalid",
        SetupIntentSetupAttemptExpired: "setup_intent_setup_attempt_expired",
        SetupIntentUnexpectedState: "setup_intent_unexpected_state",
        ShippingAddressInvalid: "shipping_address_invalid",
        ShippingCalculationFailed: "shipping_calculation_failed",
        SkuInactive: "sku_inactive",
        StateUnsupported: "state_unsupported",
        StatusTransitionInvalid: "status_transition_invalid",
        StripeTaxInactive: "stripe_tax_inactive",
        TaxIdInvalid: "tax_id_invalid",
        TaxesCalculationFailed: "taxes_calculation_failed",
        TerminalLocationCountryUnsupported: "terminal_location_country_unsupported",
        TerminalReaderBusy: "terminal_reader_busy",
        TerminalReaderHardwareFault: "terminal_reader_hardware_fault",
        TerminalReaderInvalidLocationForActivation: "terminal_reader_invalid_location_for_activation",
        TerminalReaderInvalidLocationForPayment: "terminal_reader_invalid_location_for_payment",
        TerminalReaderOffline: "terminal_reader_offline",
        TerminalReaderTimeout: "terminal_reader_timeout",
        TestmodeChargesOnly: "testmode_charges_only",
        TlsVersionUnsupported: "tls_version_unsupported",
        TokenAlreadyUsed: "token_already_used",
        TokenCardNetworkInvalid: "token_card_network_invalid",
        TokenInUse: "token_in_use",
        TransferSourceBalanceParametersMismatch: "transfer_source_balance_parameters_mismatch",
        TransfersNotAllowed: "transfers_not_allowed",
        UrlInvalid: "url_invalid",
    } as const;
    /**
     * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
     */
    export type Type = "api_error" | "card_error" | "idempotency_error" | "invalid_request_error";
    export const Type = {
        ApiError: "api_error",
        CardError: "card_error",
        IdempotencyError: "idempotency_error",
        InvalidRequestError: "invalid_request_error",
    } as const;
}
