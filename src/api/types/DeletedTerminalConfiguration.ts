/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface DeletedTerminalConfiguration {
    /** Always true for a deleted object */
    deleted: boolean;
    /** Unique identifier for the object. */
    id: string;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: "terminal.configuration";
}
