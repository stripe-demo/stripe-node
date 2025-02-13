/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface InvoiceRenderingPdf {
    /** Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale. */
    page_size?: InvoiceRenderingPdf.PageSize;
}

export namespace InvoiceRenderingPdf {
    /**
     * Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale.
     */
    export type PageSize = "a4" | "auto" | "letter";
    export const PageSize = {
        A4: "a4",
        Auto: "auto",
        Letter: "letter",
    } as const;
}
