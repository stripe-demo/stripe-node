/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Stripe from "../index";

/**
 *
 */
export interface IssuingNetworkTokenWalletProvider {
    /** The wallet provider-given account ID of the digital wallet the token belongs to. */
    account_id?: string;
    /** An evaluation on the trustworthiness of the wallet account between 1 and 5. A higher score indicates more trustworthy. */
    account_trust_score?: number;
    /** The method used for tokenizing a card. */
    card_number_source?: IssuingNetworkTokenWalletProvider.CardNumberSource;
    cardholder_address?: Stripe.IssuingNetworkTokenAddress;
    /** The name of the cardholder tokenizing the card. */
    cardholder_name?: string;
    /** An evaluation on the trustworthiness of the device. A higher score indicates more trustworthy. */
    device_trust_score?: number;
    /** The hashed email address of the cardholder's account with the wallet provider. */
    hashed_account_email_address?: string;
    /** The reasons for suggested tokenization given by the card network. */
    reason_codes?: IssuingNetworkTokenWalletProvider.ReasonCodes.Item[];
    /** The recommendation on responding to the tokenization request. */
    suggested_decision?: IssuingNetworkTokenWalletProvider.SuggestedDecision;
    /** The version of the standard for mapping reason codes followed by the wallet provider. */
    suggested_decision_version?: string;
}

export namespace IssuingNetworkTokenWalletProvider {
    /**
     * The method used for tokenizing a card.
     */
    export type CardNumberSource = "app" | "manual" | "on_file" | "other";
    export const CardNumberSource = {
        App: "app",
        Manual: "manual",
        OnFile: "on_file",
        Other: "other",
    } as const;
    export type ReasonCodes = ReasonCodes.Item[];

    export namespace ReasonCodes {
        export type Item =
            | "account_card_too_new"
            | "account_recently_changed"
            | "account_too_new"
            | "account_too_new_since_launch"
            | "additional_device"
            | "data_expired"
            | "defer_id_v_decision"
            | "device_recently_lost"
            | "good_activity_history"
            | "has_suspended_tokens"
            | "high_risk"
            | "inactive_account"
            | "long_account_tenure"
            | "low_account_score"
            | "low_device_score"
            | "low_phone_number_score"
            | "network_service_error"
            | "outside_home_territory"
            | "provisioning_cardholder_mismatch"
            | "provisioning_device_and_cardholder_mismatch"
            | "provisioning_device_mismatch"
            | "same_device_no_prior_authentication"
            | "same_device_successful_prior_authentication"
            | "software_update"
            | "suspicious_activity"
            | "too_many_different_cardholders"
            | "too_many_recent_attempts"
            | "too_many_recent_tokens";
        export const Item = {
            AccountCardTooNew: "account_card_too_new",
            AccountRecentlyChanged: "account_recently_changed",
            AccountTooNew: "account_too_new",
            AccountTooNewSinceLaunch: "account_too_new_since_launch",
            AdditionalDevice: "additional_device",
            DataExpired: "data_expired",
            DeferIdVDecision: "defer_id_v_decision",
            DeviceRecentlyLost: "device_recently_lost",
            GoodActivityHistory: "good_activity_history",
            HasSuspendedTokens: "has_suspended_tokens",
            HighRisk: "high_risk",
            InactiveAccount: "inactive_account",
            LongAccountTenure: "long_account_tenure",
            LowAccountScore: "low_account_score",
            LowDeviceScore: "low_device_score",
            LowPhoneNumberScore: "low_phone_number_score",
            NetworkServiceError: "network_service_error",
            OutsideHomeTerritory: "outside_home_territory",
            ProvisioningCardholderMismatch: "provisioning_cardholder_mismatch",
            ProvisioningDeviceAndCardholderMismatch: "provisioning_device_and_cardholder_mismatch",
            ProvisioningDeviceMismatch: "provisioning_device_mismatch",
            SameDeviceNoPriorAuthentication: "same_device_no_prior_authentication",
            SameDeviceSuccessfulPriorAuthentication: "same_device_successful_prior_authentication",
            SoftwareUpdate: "software_update",
            SuspiciousActivity: "suspicious_activity",
            TooManyDifferentCardholders: "too_many_different_cardholders",
            TooManyRecentAttempts: "too_many_recent_attempts",
            TooManyRecentTokens: "too_many_recent_tokens",
        } as const;
    }

    /**
     * The recommendation on responding to the tokenization request.
     */
    export type SuggestedDecision = "approve" | "decline" | "require_auth";
    export const SuggestedDecision = {
        Approve: "approve",
        Decline: "decline",
        RequireAuth: "require_auth",
    } as const;
}
