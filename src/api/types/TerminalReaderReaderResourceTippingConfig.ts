/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Represents a per-transaction tipping configuration
 */
export interface TerminalReaderReaderResourceTippingConfig {
    /** Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency). */
    amount_eligible?: number;
}
