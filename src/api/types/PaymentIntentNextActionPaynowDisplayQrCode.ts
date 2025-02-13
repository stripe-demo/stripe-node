/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentIntentNextActionPaynowDisplayQrCode {
    /** The raw data string used to generate QR code, it should be used together with QR code library. */
    data: string;
    /** The URL to the hosted PayNow instructions page, which allows customers to view the PayNow QR code. */
    hosted_instructions_url?: string;
    /** The image_url_png string used to render QR code */
    image_url_png: string;
    /** The image_url_svg string used to render QR code */
    image_url_svg: string;
}
