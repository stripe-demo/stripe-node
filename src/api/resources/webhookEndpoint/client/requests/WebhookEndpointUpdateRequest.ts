/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface WebhookEndpointUpdateRequest {
    /** An optional description of what the webhook is used for. */
    description?: WebhookEndpointUpdateRequest.Description;
    /** Disable the webhook endpoint if set to true. */
    disabled?: boolean;
    /** The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection. */
    enabled_events?: WebhookEndpointUpdateRequest.EnabledEvents.Item[];
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: WebhookEndpointUpdateRequest.Metadata;
    /** The URL of the webhook endpoint. */
    url?: string;
}

export namespace WebhookEndpointUpdateRequest {
    /**
     * An optional description of what the webhook is used for.
     */
    export type Description = string | "";
    export type EnabledEvents = EnabledEvents.Item[];

    export namespace EnabledEvents {
        export type Item =
            | "*"
            | "account.application.authorized"
            | "account.application.deauthorized"
            | "account.external_account.created"
            | "account.external_account.deleted"
            | "account.external_account.updated"
            | "account.updated"
            | "application_fee.created"
            | "application_fee.refund.updated"
            | "application_fee.refunded"
            | "balance.available"
            | "billing.alert.triggered"
            | "billing_portal.configuration.created"
            | "billing_portal.configuration.updated"
            | "billing_portal.session.created"
            | "capability.updated"
            | "cash_balance.funds_available"
            | "charge.captured"
            | "charge.dispute.closed"
            | "charge.dispute.created"
            | "charge.dispute.funds_reinstated"
            | "charge.dispute.funds_withdrawn"
            | "charge.dispute.updated"
            | "charge.expired"
            | "charge.failed"
            | "charge.pending"
            | "charge.refund.updated"
            | "charge.refunded"
            | "charge.succeeded"
            | "charge.updated"
            | "checkout.session.async_payment_failed"
            | "checkout.session.async_payment_succeeded"
            | "checkout.session.completed"
            | "checkout.session.expired"
            | "climate.order.canceled"
            | "climate.order.created"
            | "climate.order.delayed"
            | "climate.order.delivered"
            | "climate.order.product_substituted"
            | "climate.product.created"
            | "climate.product.pricing_updated"
            | "coupon.created"
            | "coupon.deleted"
            | "coupon.updated"
            | "credit_note.created"
            | "credit_note.updated"
            | "credit_note.voided"
            | "customer.created"
            | "customer.deleted"
            | "customer.discount.created"
            | "customer.discount.deleted"
            | "customer.discount.updated"
            | "customer.source.created"
            | "customer.source.deleted"
            | "customer.source.expiring"
            | "customer.source.updated"
            | "customer.subscription.created"
            | "customer.subscription.deleted"
            | "customer.subscription.paused"
            | "customer.subscription.pending_update_applied"
            | "customer.subscription.pending_update_expired"
            | "customer.subscription.resumed"
            | "customer.subscription.trial_will_end"
            | "customer.subscription.updated"
            | "customer.tax_id.created"
            | "customer.tax_id.deleted"
            | "customer.tax_id.updated"
            | "customer.updated"
            | "customer_cash_balance_transaction.created"
            | "entitlements.active_entitlement_summary.updated"
            | "file.created"
            | "financial_connections.account.created"
            | "financial_connections.account.deactivated"
            | "financial_connections.account.disconnected"
            | "financial_connections.account.reactivated"
            | "financial_connections.account.refreshed_balance"
            | "financial_connections.account.refreshed_ownership"
            | "financial_connections.account.refreshed_transactions"
            | "identity.verification_session.canceled"
            | "identity.verification_session.created"
            | "identity.verification_session.processing"
            | "identity.verification_session.redacted"
            | "identity.verification_session.requires_input"
            | "identity.verification_session.verified"
            | "invoice.created"
            | "invoice.deleted"
            | "invoice.finalization_failed"
            | "invoice.finalized"
            | "invoice.marked_uncollectible"
            | "invoice.overdue"
            | "invoice.paid"
            | "invoice.payment_action_required"
            | "invoice.payment_failed"
            | "invoice.payment_succeeded"
            | "invoice.sent"
            | "invoice.upcoming"
            | "invoice.updated"
            | "invoice.voided"
            | "invoice.will_be_due"
            | "invoiceitem.created"
            | "invoiceitem.deleted"
            | "issuing_authorization.created"
            | "issuing_authorization.request"
            | "issuing_authorization.updated"
            | "issuing_card.created"
            | "issuing_card.updated"
            | "issuing_cardholder.created"
            | "issuing_cardholder.updated"
            | "issuing_dispute.closed"
            | "issuing_dispute.created"
            | "issuing_dispute.funds_reinstated"
            | "issuing_dispute.funds_rescinded"
            | "issuing_dispute.submitted"
            | "issuing_dispute.updated"
            | "issuing_personalization_design.activated"
            | "issuing_personalization_design.deactivated"
            | "issuing_personalization_design.rejected"
            | "issuing_personalization_design.updated"
            | "issuing_token.created"
            | "issuing_token.updated"
            | "issuing_transaction.created"
            | "issuing_transaction.purchase_details_receipt_updated"
            | "issuing_transaction.updated"
            | "mandate.updated"
            | "payment_intent.amount_capturable_updated"
            | "payment_intent.canceled"
            | "payment_intent.created"
            | "payment_intent.partially_funded"
            | "payment_intent.payment_failed"
            | "payment_intent.processing"
            | "payment_intent.requires_action"
            | "payment_intent.succeeded"
            | "payment_link.created"
            | "payment_link.updated"
            | "payment_method.attached"
            | "payment_method.automatically_updated"
            | "payment_method.detached"
            | "payment_method.updated"
            | "payout.canceled"
            | "payout.created"
            | "payout.failed"
            | "payout.paid"
            | "payout.reconciliation_completed"
            | "payout.updated"
            | "person.created"
            | "person.deleted"
            | "person.updated"
            | "plan.created"
            | "plan.deleted"
            | "plan.updated"
            | "price.created"
            | "price.deleted"
            | "price.updated"
            | "product.created"
            | "product.deleted"
            | "product.updated"
            | "promotion_code.created"
            | "promotion_code.updated"
            | "quote.accepted"
            | "quote.canceled"
            | "quote.created"
            | "quote.finalized"
            | "radar.early_fraud_warning.created"
            | "radar.early_fraud_warning.updated"
            | "refund.created"
            | "refund.failed"
            | "refund.updated"
            | "reporting.report_run.failed"
            | "reporting.report_run.succeeded"
            | "reporting.report_type.updated"
            | "review.closed"
            | "review.opened"
            | "setup_intent.canceled"
            | "setup_intent.created"
            | "setup_intent.requires_action"
            | "setup_intent.setup_failed"
            | "setup_intent.succeeded"
            | "sigma.scheduled_query_run.created"
            | "source.canceled"
            | "source.chargeable"
            | "source.failed"
            | "source.mandate_notification"
            | "source.refund_attributes_required"
            | "source.transaction.created"
            | "source.transaction.updated"
            | "subscription_schedule.aborted"
            | "subscription_schedule.canceled"
            | "subscription_schedule.completed"
            | "subscription_schedule.created"
            | "subscription_schedule.expiring"
            | "subscription_schedule.released"
            | "subscription_schedule.updated"
            | "tax.settings.updated"
            | "tax_rate.created"
            | "tax_rate.updated"
            | "terminal.reader.action_failed"
            | "terminal.reader.action_succeeded"
            | "test_helpers.test_clock.advancing"
            | "test_helpers.test_clock.created"
            | "test_helpers.test_clock.deleted"
            | "test_helpers.test_clock.internal_failure"
            | "test_helpers.test_clock.ready"
            | "topup.canceled"
            | "topup.created"
            | "topup.failed"
            | "topup.reversed"
            | "topup.succeeded"
            | "transfer.created"
            | "transfer.reversed"
            | "transfer.updated"
            | "treasury.credit_reversal.created"
            | "treasury.credit_reversal.posted"
            | "treasury.debit_reversal.completed"
            | "treasury.debit_reversal.created"
            | "treasury.debit_reversal.initial_credit_granted"
            | "treasury.financial_account.closed"
            | "treasury.financial_account.created"
            | "treasury.financial_account.features_status_updated"
            | "treasury.inbound_transfer.canceled"
            | "treasury.inbound_transfer.created"
            | "treasury.inbound_transfer.failed"
            | "treasury.inbound_transfer.succeeded"
            | "treasury.outbound_payment.canceled"
            | "treasury.outbound_payment.created"
            | "treasury.outbound_payment.expected_arrival_date_updated"
            | "treasury.outbound_payment.failed"
            | "treasury.outbound_payment.posted"
            | "treasury.outbound_payment.returned"
            | "treasury.outbound_payment.tracking_details_updated"
            | "treasury.outbound_transfer.canceled"
            | "treasury.outbound_transfer.created"
            | "treasury.outbound_transfer.expected_arrival_date_updated"
            | "treasury.outbound_transfer.failed"
            | "treasury.outbound_transfer.posted"
            | "treasury.outbound_transfer.returned"
            | "treasury.outbound_transfer.tracking_details_updated"
            | "treasury.received_credit.created"
            | "treasury.received_credit.failed"
            | "treasury.received_credit.succeeded"
            | "treasury.received_debit.created";
        export const Item = {
            All: "*",
            AccountApplicationAuthorized: "account.application.authorized",
            AccountApplicationDeauthorized: "account.application.deauthorized",
            AccountExternalAccountCreated: "account.external_account.created",
            AccountExternalAccountDeleted: "account.external_account.deleted",
            AccountExternalAccountUpdated: "account.external_account.updated",
            AccountUpdated: "account.updated",
            ApplicationFeeCreated: "application_fee.created",
            ApplicationFeeRefundUpdated: "application_fee.refund.updated",
            ApplicationFeeRefunded: "application_fee.refunded",
            BalanceAvailable: "balance.available",
            BillingAlertTriggered: "billing.alert.triggered",
            BillingPortalConfigurationCreated: "billing_portal.configuration.created",
            BillingPortalConfigurationUpdated: "billing_portal.configuration.updated",
            BillingPortalSessionCreated: "billing_portal.session.created",
            CapabilityUpdated: "capability.updated",
            CashBalanceFundsAvailable: "cash_balance.funds_available",
            ChargeCaptured: "charge.captured",
            ChargeDisputeClosed: "charge.dispute.closed",
            ChargeDisputeCreated: "charge.dispute.created",
            ChargeDisputeFundsReinstated: "charge.dispute.funds_reinstated",
            ChargeDisputeFundsWithdrawn: "charge.dispute.funds_withdrawn",
            ChargeDisputeUpdated: "charge.dispute.updated",
            ChargeExpired: "charge.expired",
            ChargeFailed: "charge.failed",
            ChargePending: "charge.pending",
            ChargeRefundUpdated: "charge.refund.updated",
            ChargeRefunded: "charge.refunded",
            ChargeSucceeded: "charge.succeeded",
            ChargeUpdated: "charge.updated",
            CheckoutSessionAsyncPaymentFailed: "checkout.session.async_payment_failed",
            CheckoutSessionAsyncPaymentSucceeded: "checkout.session.async_payment_succeeded",
            CheckoutSessionCompleted: "checkout.session.completed",
            CheckoutSessionExpired: "checkout.session.expired",
            ClimateOrderCanceled: "climate.order.canceled",
            ClimateOrderCreated: "climate.order.created",
            ClimateOrderDelayed: "climate.order.delayed",
            ClimateOrderDelivered: "climate.order.delivered",
            ClimateOrderProductSubstituted: "climate.order.product_substituted",
            ClimateProductCreated: "climate.product.created",
            ClimateProductPricingUpdated: "climate.product.pricing_updated",
            CouponCreated: "coupon.created",
            CouponDeleted: "coupon.deleted",
            CouponUpdated: "coupon.updated",
            CreditNoteCreated: "credit_note.created",
            CreditNoteUpdated: "credit_note.updated",
            CreditNoteVoided: "credit_note.voided",
            CustomerCreated: "customer.created",
            CustomerDeleted: "customer.deleted",
            CustomerDiscountCreated: "customer.discount.created",
            CustomerDiscountDeleted: "customer.discount.deleted",
            CustomerDiscountUpdated: "customer.discount.updated",
            CustomerSourceCreated: "customer.source.created",
            CustomerSourceDeleted: "customer.source.deleted",
            CustomerSourceExpiring: "customer.source.expiring",
            CustomerSourceUpdated: "customer.source.updated",
            CustomerSubscriptionCreated: "customer.subscription.created",
            CustomerSubscriptionDeleted: "customer.subscription.deleted",
            CustomerSubscriptionPaused: "customer.subscription.paused",
            CustomerSubscriptionPendingUpdateApplied: "customer.subscription.pending_update_applied",
            CustomerSubscriptionPendingUpdateExpired: "customer.subscription.pending_update_expired",
            CustomerSubscriptionResumed: "customer.subscription.resumed",
            CustomerSubscriptionTrialWillEnd: "customer.subscription.trial_will_end",
            CustomerSubscriptionUpdated: "customer.subscription.updated",
            CustomerTaxIdCreated: "customer.tax_id.created",
            CustomerTaxIdDeleted: "customer.tax_id.deleted",
            CustomerTaxIdUpdated: "customer.tax_id.updated",
            CustomerUpdated: "customer.updated",
            CustomerCashBalanceTransactionCreated: "customer_cash_balance_transaction.created",
            EntitlementsActiveEntitlementSummaryUpdated: "entitlements.active_entitlement_summary.updated",
            FileCreated: "file.created",
            FinancialConnectionsAccountCreated: "financial_connections.account.created",
            FinancialConnectionsAccountDeactivated: "financial_connections.account.deactivated",
            FinancialConnectionsAccountDisconnected: "financial_connections.account.disconnected",
            FinancialConnectionsAccountReactivated: "financial_connections.account.reactivated",
            FinancialConnectionsAccountRefreshedBalance: "financial_connections.account.refreshed_balance",
            FinancialConnectionsAccountRefreshedOwnership: "financial_connections.account.refreshed_ownership",
            FinancialConnectionsAccountRefreshedTransactions: "financial_connections.account.refreshed_transactions",
            IdentityVerificationSessionCanceled: "identity.verification_session.canceled",
            IdentityVerificationSessionCreated: "identity.verification_session.created",
            IdentityVerificationSessionProcessing: "identity.verification_session.processing",
            IdentityVerificationSessionRedacted: "identity.verification_session.redacted",
            IdentityVerificationSessionRequiresInput: "identity.verification_session.requires_input",
            IdentityVerificationSessionVerified: "identity.verification_session.verified",
            InvoiceCreated: "invoice.created",
            InvoiceDeleted: "invoice.deleted",
            InvoiceFinalizationFailed: "invoice.finalization_failed",
            InvoiceFinalized: "invoice.finalized",
            InvoiceMarkedUncollectible: "invoice.marked_uncollectible",
            InvoiceOverdue: "invoice.overdue",
            InvoicePaid: "invoice.paid",
            InvoicePaymentActionRequired: "invoice.payment_action_required",
            InvoicePaymentFailed: "invoice.payment_failed",
            InvoicePaymentSucceeded: "invoice.payment_succeeded",
            InvoiceSent: "invoice.sent",
            InvoiceUpcoming: "invoice.upcoming",
            InvoiceUpdated: "invoice.updated",
            InvoiceVoided: "invoice.voided",
            InvoiceWillBeDue: "invoice.will_be_due",
            InvoiceitemCreated: "invoiceitem.created",
            InvoiceitemDeleted: "invoiceitem.deleted",
            IssuingAuthorizationCreated: "issuing_authorization.created",
            IssuingAuthorizationRequest: "issuing_authorization.request",
            IssuingAuthorizationUpdated: "issuing_authorization.updated",
            IssuingCardCreated: "issuing_card.created",
            IssuingCardUpdated: "issuing_card.updated",
            IssuingCardholderCreated: "issuing_cardholder.created",
            IssuingCardholderUpdated: "issuing_cardholder.updated",
            IssuingDisputeClosed: "issuing_dispute.closed",
            IssuingDisputeCreated: "issuing_dispute.created",
            IssuingDisputeFundsReinstated: "issuing_dispute.funds_reinstated",
            IssuingDisputeFundsRescinded: "issuing_dispute.funds_rescinded",
            IssuingDisputeSubmitted: "issuing_dispute.submitted",
            IssuingDisputeUpdated: "issuing_dispute.updated",
            IssuingPersonalizationDesignActivated: "issuing_personalization_design.activated",
            IssuingPersonalizationDesignDeactivated: "issuing_personalization_design.deactivated",
            IssuingPersonalizationDesignRejected: "issuing_personalization_design.rejected",
            IssuingPersonalizationDesignUpdated: "issuing_personalization_design.updated",
            IssuingTokenCreated: "issuing_token.created",
            IssuingTokenUpdated: "issuing_token.updated",
            IssuingTransactionCreated: "issuing_transaction.created",
            IssuingTransactionPurchaseDetailsReceiptUpdated: "issuing_transaction.purchase_details_receipt_updated",
            IssuingTransactionUpdated: "issuing_transaction.updated",
            MandateUpdated: "mandate.updated",
            PaymentIntentAmountCapturableUpdated: "payment_intent.amount_capturable_updated",
            PaymentIntentCanceled: "payment_intent.canceled",
            PaymentIntentCreated: "payment_intent.created",
            PaymentIntentPartiallyFunded: "payment_intent.partially_funded",
            PaymentIntentPaymentFailed: "payment_intent.payment_failed",
            PaymentIntentProcessing: "payment_intent.processing",
            PaymentIntentRequiresAction: "payment_intent.requires_action",
            PaymentIntentSucceeded: "payment_intent.succeeded",
            PaymentLinkCreated: "payment_link.created",
            PaymentLinkUpdated: "payment_link.updated",
            PaymentMethodAttached: "payment_method.attached",
            PaymentMethodAutomaticallyUpdated: "payment_method.automatically_updated",
            PaymentMethodDetached: "payment_method.detached",
            PaymentMethodUpdated: "payment_method.updated",
            PayoutCanceled: "payout.canceled",
            PayoutCreated: "payout.created",
            PayoutFailed: "payout.failed",
            PayoutPaid: "payout.paid",
            PayoutReconciliationCompleted: "payout.reconciliation_completed",
            PayoutUpdated: "payout.updated",
            PersonCreated: "person.created",
            PersonDeleted: "person.deleted",
            PersonUpdated: "person.updated",
            PlanCreated: "plan.created",
            PlanDeleted: "plan.deleted",
            PlanUpdated: "plan.updated",
            PriceCreated: "price.created",
            PriceDeleted: "price.deleted",
            PriceUpdated: "price.updated",
            ProductCreated: "product.created",
            ProductDeleted: "product.deleted",
            ProductUpdated: "product.updated",
            PromotionCodeCreated: "promotion_code.created",
            PromotionCodeUpdated: "promotion_code.updated",
            QuoteAccepted: "quote.accepted",
            QuoteCanceled: "quote.canceled",
            QuoteCreated: "quote.created",
            QuoteFinalized: "quote.finalized",
            RadarEarlyFraudWarningCreated: "radar.early_fraud_warning.created",
            RadarEarlyFraudWarningUpdated: "radar.early_fraud_warning.updated",
            RefundCreated: "refund.created",
            RefundFailed: "refund.failed",
            RefundUpdated: "refund.updated",
            ReportingReportRunFailed: "reporting.report_run.failed",
            ReportingReportRunSucceeded: "reporting.report_run.succeeded",
            ReportingReportTypeUpdated: "reporting.report_type.updated",
            ReviewClosed: "review.closed",
            ReviewOpened: "review.opened",
            SetupIntentCanceled: "setup_intent.canceled",
            SetupIntentCreated: "setup_intent.created",
            SetupIntentRequiresAction: "setup_intent.requires_action",
            SetupIntentSetupFailed: "setup_intent.setup_failed",
            SetupIntentSucceeded: "setup_intent.succeeded",
            SigmaScheduledQueryRunCreated: "sigma.scheduled_query_run.created",
            SourceCanceled: "source.canceled",
            SourceChargeable: "source.chargeable",
            SourceFailed: "source.failed",
            SourceMandateNotification: "source.mandate_notification",
            SourceRefundAttributesRequired: "source.refund_attributes_required",
            SourceTransactionCreated: "source.transaction.created",
            SourceTransactionUpdated: "source.transaction.updated",
            SubscriptionScheduleAborted: "subscription_schedule.aborted",
            SubscriptionScheduleCanceled: "subscription_schedule.canceled",
            SubscriptionScheduleCompleted: "subscription_schedule.completed",
            SubscriptionScheduleCreated: "subscription_schedule.created",
            SubscriptionScheduleExpiring: "subscription_schedule.expiring",
            SubscriptionScheduleReleased: "subscription_schedule.released",
            SubscriptionScheduleUpdated: "subscription_schedule.updated",
            TaxSettingsUpdated: "tax.settings.updated",
            TaxRateCreated: "tax_rate.created",
            TaxRateUpdated: "tax_rate.updated",
            TerminalReaderActionFailed: "terminal.reader.action_failed",
            TerminalReaderActionSucceeded: "terminal.reader.action_succeeded",
            TestHelpersTestClockAdvancing: "test_helpers.test_clock.advancing",
            TestHelpersTestClockCreated: "test_helpers.test_clock.created",
            TestHelpersTestClockDeleted: "test_helpers.test_clock.deleted",
            TestHelpersTestClockInternalFailure: "test_helpers.test_clock.internal_failure",
            TestHelpersTestClockReady: "test_helpers.test_clock.ready",
            TopupCanceled: "topup.canceled",
            TopupCreated: "topup.created",
            TopupFailed: "topup.failed",
            TopupReversed: "topup.reversed",
            TopupSucceeded: "topup.succeeded",
            TransferCreated: "transfer.created",
            TransferReversed: "transfer.reversed",
            TransferUpdated: "transfer.updated",
            TreasuryCreditReversalCreated: "treasury.credit_reversal.created",
            TreasuryCreditReversalPosted: "treasury.credit_reversal.posted",
            TreasuryDebitReversalCompleted: "treasury.debit_reversal.completed",
            TreasuryDebitReversalCreated: "treasury.debit_reversal.created",
            TreasuryDebitReversalInitialCreditGranted: "treasury.debit_reversal.initial_credit_granted",
            TreasuryFinancialAccountClosed: "treasury.financial_account.closed",
            TreasuryFinancialAccountCreated: "treasury.financial_account.created",
            TreasuryFinancialAccountFeaturesStatusUpdated: "treasury.financial_account.features_status_updated",
            TreasuryInboundTransferCanceled: "treasury.inbound_transfer.canceled",
            TreasuryInboundTransferCreated: "treasury.inbound_transfer.created",
            TreasuryInboundTransferFailed: "treasury.inbound_transfer.failed",
            TreasuryInboundTransferSucceeded: "treasury.inbound_transfer.succeeded",
            TreasuryOutboundPaymentCanceled: "treasury.outbound_payment.canceled",
            TreasuryOutboundPaymentCreated: "treasury.outbound_payment.created",
            TreasuryOutboundPaymentExpectedArrivalDateUpdated:
                "treasury.outbound_payment.expected_arrival_date_updated",
            TreasuryOutboundPaymentFailed: "treasury.outbound_payment.failed",
            TreasuryOutboundPaymentPosted: "treasury.outbound_payment.posted",
            TreasuryOutboundPaymentReturned: "treasury.outbound_payment.returned",
            TreasuryOutboundPaymentTrackingDetailsUpdated: "treasury.outbound_payment.tracking_details_updated",
            TreasuryOutboundTransferCanceled: "treasury.outbound_transfer.canceled",
            TreasuryOutboundTransferCreated: "treasury.outbound_transfer.created",
            TreasuryOutboundTransferExpectedArrivalDateUpdated:
                "treasury.outbound_transfer.expected_arrival_date_updated",
            TreasuryOutboundTransferFailed: "treasury.outbound_transfer.failed",
            TreasuryOutboundTransferPosted: "treasury.outbound_transfer.posted",
            TreasuryOutboundTransferReturned: "treasury.outbound_transfer.returned",
            TreasuryOutboundTransferTrackingDetailsUpdated: "treasury.outbound_transfer.tracking_details_updated",
            TreasuryReceivedCreditCreated: "treasury.received_credit.created",
            TreasuryReceivedCreditFailed: "treasury.received_credit.failed",
            TreasuryReceivedCreditSucceeded: "treasury.received_credit.succeeded",
            TreasuryReceivedDebitCreated: "treasury.received_debit.created",
        } as const;
    }

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";
}
