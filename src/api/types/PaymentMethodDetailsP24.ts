/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentMethodDetailsP24 {
    /** The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`. */
    bank?: PaymentMethodDetailsP24.Bank;
    /** Unique reference for this Przelewy24 payment. */
    reference?: string;
    /**
     * Owner's verified full name. Values are verified or provided by Przelewy24 directly
     * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     * Przelewy24 rarely provides this information so the attribute is usually empty.
     */
    verified_name?: string;
}

export namespace PaymentMethodDetailsP24 {
    /**
     * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
     */
    export type Bank =
        | "alior_bank"
        | "bank_millennium"
        | "bank_nowy_bfg_sa"
        | "bank_pekao_sa"
        | "banki_spbdzielcze"
        | "blik"
        | "bnp_paribas"
        | "boz"
        | "citi_handlowy"
        | "credit_agricole"
        | "envelobank"
        | "etransfer_pocztowy24"
        | "getin_bank"
        | "ideabank"
        | "ing"
        | "inteligo"
        | "mbank_mtransfer"
        | "nest_przelew"
        | "noble_pay"
        | "pbac_z_ipko"
        | "plus_bank"
        | "santander_przelew24"
        | "tmobile_usbugi_bankowe"
        | "toyota_bank"
        | "velobank"
        | "volkswagen_bank";
    export const Bank = {
        AliorBank: "alior_bank",
        BankMillennium: "bank_millennium",
        BankNowyBfgSa: "bank_nowy_bfg_sa",
        BankPekaoSa: "bank_pekao_sa",
        BankiSpbdzielcze: "banki_spbdzielcze",
        Blik: "blik",
        BnpParibas: "bnp_paribas",
        Boz: "boz",
        CitiHandlowy: "citi_handlowy",
        CreditAgricole: "credit_agricole",
        Envelobank: "envelobank",
        EtransferPocztowy24: "etransfer_pocztowy24",
        GetinBank: "getin_bank",
        Ideabank: "ideabank",
        Ing: "ing",
        Inteligo: "inteligo",
        MbankMtransfer: "mbank_mtransfer",
        NestPrzelew: "nest_przelew",
        NoblePay: "noble_pay",
        PbacZIpko: "pbac_z_ipko",
        PlusBank: "plus_bank",
        SantanderPrzelew24: "santander_przelew24",
        TmobileUsbugiBankowe: "tmobile_usbugi_bankowe",
        ToyotaBank: "toyota_bank",
        Velobank: "velobank",
        VolkswagenBank: "volkswagen_bank",
    } as const;
}
