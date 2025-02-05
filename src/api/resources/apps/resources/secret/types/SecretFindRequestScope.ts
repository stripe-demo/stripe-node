/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SecretFindRequestScope {
    /** The secret scope type. */
    type: SecretFindRequestScope.Type;
    /** The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`. */
    user?: string;
}

export namespace SecretFindRequestScope {
    /**
     * The secret scope type.
     */
    export type Type = "account" | "user";
    export const Type = {
        Account: "account",
        User: "user",
    } as const;
}
