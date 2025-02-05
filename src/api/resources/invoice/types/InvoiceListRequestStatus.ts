/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InvoiceListRequestStatus = "draft" | "open" | "paid" | "uncollectible" | "void";
export const InvoiceListRequestStatus = {
    Draft: "draft",
    Open: "open",
    Paid: "paid",
    Uncollectible: "uncollectible",
    Void: "void",
} as const;
