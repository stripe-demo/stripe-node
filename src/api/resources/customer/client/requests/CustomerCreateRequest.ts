/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface CustomerCreateRequest {
    /** The customer's address. */
    address?: CustomerCreateRequest.Address;
    /** An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice. */
    balance?: number;
    /** Balance information and default balance settings for this customer. */
    cash_balance?: CustomerCreateRequest.CashBalance;
    coupon?: string;
    /** An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. */
    description?: string;
    /** Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*. */
    email?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers. */
    invoice_prefix?: string;
    /** Default invoice settings for this customer. */
    invoice_settings?: CustomerCreateRequest.InvoiceSettings;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: CustomerCreateRequest.Metadata;
    /** The customer's full name or business name. */
    name?: string;
    /** The sequence to be used on the customer's next invoice. Defaults to 1. */
    next_invoice_sequence?: number;
    payment_method?: string;
    /** The customer's phone number. */
    phone?: string;
    /** Customer's preferred languages, ordered by preference. */
    preferred_locales?: string[];
    /** The ID of a promotion code to apply to the customer. The customer will have a discount applied on all recurring payments. Charges you create through the API will not have the discount. */
    promotion_code?: string;
    /** The customer's shipping information. Appears on invoices emailed to this customer. */
    shipping?: CustomerCreateRequest.Shipping;
    source?: string;
    /** Tax details about the customer. */
    tax?: CustomerCreateRequest.Tax;
    /** The customer's tax exemption. One of `none`, `exempt`, or `reverse`. */
    tax_exempt?: CustomerCreateRequest.TaxExempt;
    /** The customer's tax IDs. */
    tax_id_data?: CustomerCreateRequest.TaxIdData.Item[];
    /** ID of the test clock to attach to the customer. */
    test_clock?: string;
    validate?: boolean;
}

export namespace CustomerCreateRequest {
    /**
     * The customer's address.
     */
    export type Address =
        | {
              city?: string | undefined;
              country?: string | undefined;
              line1?: string | undefined;
              line2?: string | undefined;
              postal_code?: string | undefined;
              state?: string | undefined;
          }
        | "";

    /**
     * Balance information and default balance settings for this customer.
     */
    export interface CashBalance {
        /**
         * Settings controlling the behavior of the customer's cash balance,
         * such as reconciliation of funds received.
         */
        settings?: CashBalance.Settings;
    }

    export namespace CashBalance {
        /**
         * Settings controlling the behavior of the customer's cash balance,
         * such as reconciliation of funds received.
         */
        export interface Settings {
            /** Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation). */
            reconciliation_mode?: Settings.ReconciliationMode;
        }

        export namespace Settings {
            /**
             * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic`, `manual`, or `merchant_default`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
             */
            export type ReconciliationMode = "automatic" | "manual" | "merchant_default";
            export const ReconciliationMode = {
                Automatic: "automatic",
                Manual: "manual",
                MerchantDefault: "merchant_default",
            } as const;
        }
    }

    /**
     * Default invoice settings for this customer.
     */
    export interface InvoiceSettings {
        /** The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields. */
        custom_fields?: InvoiceSettings.CustomFields;
        /** ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices. */
        default_payment_method?: string;
        /** Default footer to be displayed on invoices for this customer. */
        footer?: string;
        /** Default options for invoice PDF rendering for this customer. */
        rendering_options?: InvoiceSettings.RenderingOptions;
    }

    export namespace InvoiceSettings {
        /**
         * The list of up to 4 default custom fields to be displayed on invoices for this customer. When updating, pass an empty string to remove previously-defined fields.
         */
        export type CustomFields =
            | {
                  name: string;
                  value: string;
              }[]
            | "";
        /**
         * Default options for invoice PDF rendering for this customer.
         */
        export type RenderingOptions =
            | {
                  amount_tax_display?: ("" | "exclude_tax" | "include_inclusive_tax") | undefined;
                  template?: string | undefined;
              }
            | "";
    }

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    export type Metadata = Record<string, string> | "";
    /**
     * The customer's shipping information. Appears on invoices emailed to this customer.
     */
    export type Shipping =
        | {
              address: {
                  city?: string | undefined;
                  country?: string | undefined;
                  line1?: string | undefined;
                  line2?: string | undefined;
                  postal_code?: string | undefined;
                  state?: string | undefined;
              };
              name: string;
              phone?: string | undefined;
          }
        | "";

    /**
     * Tax details about the customer.
     */
    export interface Tax {
        /** A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes. */
        ip_address?: Tax.IpAddress;
        /** A flag that indicates when Stripe should validate the customer tax location. Defaults to `deferred`. */
        validate_location?: Tax.ValidateLocation;
    }

    export namespace Tax {
        /**
         * A recent IP address of the customer used for tax reporting and tax location inference. Stripe recommends updating the IP address when a new PaymentMethod is attached or the address field on the customer is updated. We recommend against updating this field more frequently since it could result in unexpected tax location/reporting outcomes.
         */
        export type IpAddress = string | "";
        /**
         * A flag that indicates when Stripe should validate the customer tax location. Defaults to `deferred`.
         */
        export type ValidateLocation = "deferred" | "immediately";
        export const ValidateLocation = {
            Deferred: "deferred",
            Immediately: "immediately",
        } as const;
    }

    /**
     * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
     */
    export type TaxExempt = "" | "exempt" | "none" | "reverse";
    export const TaxExempt = {
        Empty: "",
        Exempt: "exempt",
        None: "none",
        Reverse: "reverse",
    } as const;
    export type TaxIdData = TaxIdData.Item[];

    export namespace TaxIdData {
        export interface Item {
            /** Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `ba_tin`, `bb_tin`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kh_tin`, `kr_brn`, `kz_bin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin` */
            type: Item.Type;
            /** Value of the tax ID. */
            value: string;
        }

        export namespace Item {
            /**
             * Type of the tax ID, one of `ad_nrt`, `ae_trn`, `al_tin`, `am_tin`, `ao_tin`, `ar_cuit`, `au_abn`, `au_arn`, `ba_tin`, `bb_tin`, `bg_uic`, `bh_vat`, `bo_tin`, `br_cnpj`, `br_cpf`, `bs_tin`, `by_tin`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `cd_nif`, `ch_uid`, `ch_vat`, `cl_tin`, `cn_tin`, `co_nit`, `cr_tin`, `de_stn`, `do_rcn`, `ec_ruc`, `eg_tin`, `es_cif`, `eu_oss_vat`, `eu_vat`, `gb_vat`, `ge_vat`, `gn_nif`, `hk_br`, `hr_oib`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `jp_trn`, `ke_pin`, `kh_tin`, `kr_brn`, `kz_bin`, `li_uid`, `li_vat`, `ma_vat`, `md_vat`, `me_pib`, `mk_vat`, `mr_nif`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `ng_tin`, `no_vat`, `no_voec`, `np_pan`, `nz_gst`, `om_vat`, `pe_ruc`, `ph_tin`, `ro_tin`, `rs_pib`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `sn_ninea`, `sr_fin`, `sv_nit`, `th_vat`, `tj_tin`, `tr_tin`, `tw_vat`, `tz_vat`, `ua_vat`, `ug_tin`, `us_ein`, `uy_ruc`, `uz_tin`, `uz_vat`, `ve_rif`, `vn_tin`, `za_vat`, `zm_tin`, or `zw_tin`
             */
            export type Type =
                | "ad_nrt"
                | "ae_trn"
                | "al_tin"
                | "am_tin"
                | "ao_tin"
                | "ar_cuit"
                | "au_abn"
                | "au_arn"
                | "ba_tin"
                | "bb_tin"
                | "bg_uic"
                | "bh_vat"
                | "bo_tin"
                | "br_cnpj"
                | "br_cpf"
                | "bs_tin"
                | "by_tin"
                | "ca_bn"
                | "ca_gst_hst"
                | "ca_pst_bc"
                | "ca_pst_mb"
                | "ca_pst_sk"
                | "ca_qst"
                | "cd_nif"
                | "ch_uid"
                | "ch_vat"
                | "cl_tin"
                | "cn_tin"
                | "co_nit"
                | "cr_tin"
                | "de_stn"
                | "do_rcn"
                | "ec_ruc"
                | "eg_tin"
                | "es_cif"
                | "eu_oss_vat"
                | "eu_vat"
                | "gb_vat"
                | "ge_vat"
                | "gn_nif"
                | "hk_br"
                | "hr_oib"
                | "hu_tin"
                | "id_npwp"
                | "il_vat"
                | "in_gst"
                | "is_vat"
                | "jp_cn"
                | "jp_rn"
                | "jp_trn"
                | "ke_pin"
                | "kh_tin"
                | "kr_brn"
                | "kz_bin"
                | "li_uid"
                | "li_vat"
                | "ma_vat"
                | "md_vat"
                | "me_pib"
                | "mk_vat"
                | "mr_nif"
                | "mx_rfc"
                | "my_frp"
                | "my_itn"
                | "my_sst"
                | "ng_tin"
                | "no_vat"
                | "no_voec"
                | "np_pan"
                | "nz_gst"
                | "om_vat"
                | "pe_ruc"
                | "ph_tin"
                | "ro_tin"
                | "rs_pib"
                | "ru_inn"
                | "ru_kpp"
                | "sa_vat"
                | "sg_gst"
                | "sg_uen"
                | "si_tin"
                | "sn_ninea"
                | "sr_fin"
                | "sv_nit"
                | "th_vat"
                | "tj_tin"
                | "tr_tin"
                | "tw_vat"
                | "tz_vat"
                | "ua_vat"
                | "ug_tin"
                | "us_ein"
                | "uy_ruc"
                | "uz_tin"
                | "uz_vat"
                | "ve_rif"
                | "vn_tin"
                | "za_vat"
                | "zm_tin"
                | "zw_tin";
            export const Type = {
                AdNrt: "ad_nrt",
                AeTrn: "ae_trn",
                AlTin: "al_tin",
                AmTin: "am_tin",
                AoTin: "ao_tin",
                ArCuit: "ar_cuit",
                AuAbn: "au_abn",
                AuArn: "au_arn",
                BaTin: "ba_tin",
                BbTin: "bb_tin",
                BgUic: "bg_uic",
                BhVat: "bh_vat",
                BoTin: "bo_tin",
                BrCnpj: "br_cnpj",
                BrCpf: "br_cpf",
                BsTin: "bs_tin",
                ByTin: "by_tin",
                CaBn: "ca_bn",
                CaGstHst: "ca_gst_hst",
                CaPstBc: "ca_pst_bc",
                CaPstMb: "ca_pst_mb",
                CaPstSk: "ca_pst_sk",
                CaQst: "ca_qst",
                CdNif: "cd_nif",
                ChUid: "ch_uid",
                ChVat: "ch_vat",
                ClTin: "cl_tin",
                CnTin: "cn_tin",
                CoNit: "co_nit",
                CrTin: "cr_tin",
                DeStn: "de_stn",
                DoRcn: "do_rcn",
                EcRuc: "ec_ruc",
                EgTin: "eg_tin",
                EsCif: "es_cif",
                EuOssVat: "eu_oss_vat",
                EuVat: "eu_vat",
                GbVat: "gb_vat",
                GeVat: "ge_vat",
                GnNif: "gn_nif",
                HkBr: "hk_br",
                HrOib: "hr_oib",
                HuTin: "hu_tin",
                IdNpwp: "id_npwp",
                IlVat: "il_vat",
                InGst: "in_gst",
                IsVat: "is_vat",
                JpCn: "jp_cn",
                JpRn: "jp_rn",
                JpTrn: "jp_trn",
                KePin: "ke_pin",
                KhTin: "kh_tin",
                KrBrn: "kr_brn",
                KzBin: "kz_bin",
                LiUid: "li_uid",
                LiVat: "li_vat",
                MaVat: "ma_vat",
                MdVat: "md_vat",
                MePib: "me_pib",
                MkVat: "mk_vat",
                MrNif: "mr_nif",
                MxRfc: "mx_rfc",
                MyFrp: "my_frp",
                MyItn: "my_itn",
                MySst: "my_sst",
                NgTin: "ng_tin",
                NoVat: "no_vat",
                NoVoec: "no_voec",
                NpPan: "np_pan",
                NzGst: "nz_gst",
                OmVat: "om_vat",
                PeRuc: "pe_ruc",
                PhTin: "ph_tin",
                RoTin: "ro_tin",
                RsPib: "rs_pib",
                RuInn: "ru_inn",
                RuKpp: "ru_kpp",
                SaVat: "sa_vat",
                SgGst: "sg_gst",
                SgUen: "sg_uen",
                SiTin: "si_tin",
                SnNinea: "sn_ninea",
                SrFin: "sr_fin",
                SvNit: "sv_nit",
                ThVat: "th_vat",
                TjTin: "tj_tin",
                TrTin: "tr_tin",
                TwVat: "tw_vat",
                TzVat: "tz_vat",
                UaVat: "ua_vat",
                UgTin: "ug_tin",
                UsEin: "us_ein",
                UyRuc: "uy_ruc",
                UzTin: "uz_tin",
                UzVat: "uz_vat",
                VeRif: "ve_rif",
                VnTin: "vn_tin",
                ZaVat: "za_vat",
                ZmTin: "zm_tin",
                ZwTin: "zw_tin",
            } as const;
        }
    }
}
