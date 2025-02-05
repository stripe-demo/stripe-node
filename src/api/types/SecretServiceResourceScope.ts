/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface SecretServiceResourceScope {
    /** The secret scope type. */
    type: SecretServiceResourceScope.Type;
    /** The user ID, if type is set to "user" */
    user?: string;
}

export namespace SecretServiceResourceScope {
    /**
     * The secret scope type.
     */
    export type Type = "account" | "user";
    export const Type = {
        Account: "account",
        User: "user",
    } as const;
}
