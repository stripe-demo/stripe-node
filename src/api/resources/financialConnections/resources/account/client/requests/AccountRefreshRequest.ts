/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         features: ["balance"]
 *     }
 */
export interface AccountRefreshRequest {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The list of account features that you would like to refresh. */
    features: AccountRefreshRequest.Features.Item[];
}

export namespace AccountRefreshRequest {
    export type Features = Features.Item[];

    export namespace Features {
        export type Item = "balance" | "ownership" | "transactions";
        export const Item = {
            Balance: "balance",
            Ownership: "ownership",
            Transactions: "transactions",
        } as const;
    }
}
