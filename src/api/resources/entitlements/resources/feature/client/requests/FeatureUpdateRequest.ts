/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface FeatureUpdateRequest {
    /** Inactive features cannot be attached to new products and will not be returned from the features list endpoint. */
    active?: boolean;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
    metadata?: FeatureUpdateRequest.Metadata;
    /** The feature's name, for your own purpose, not meant to be displayable to the customer. */
    name?: string;
}

export namespace FeatureUpdateRequest {
    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    export type Metadata = Record<string, string> | "";
}
