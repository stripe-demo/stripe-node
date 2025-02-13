/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 *
 */
export interface PaymentPagesCheckoutSessionShippingAddressCollection {
    /**
     * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
     * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SY, UM, VI`.
     */
    allowed_countries: PaymentPagesCheckoutSessionShippingAddressCollection.AllowedCountries.Item[];
}

export namespace PaymentPagesCheckoutSessionShippingAddressCollection {
    export type AllowedCountries = AllowedCountries.Item[];

    export namespace AllowedCountries {
        export type Item =
            | "AC"
            | "AD"
            | "AE"
            | "AF"
            | "AG"
            | "AI"
            | "AL"
            | "AM"
            | "AO"
            | "AQ"
            | "AR"
            | "AT"
            | "AU"
            | "AW"
            | "AX"
            | "AZ"
            | "BA"
            | "BB"
            | "BD"
            | "BE"
            | "BF"
            | "BG"
            | "BH"
            | "BI"
            | "BJ"
            | "BL"
            | "BM"
            | "BN"
            | "BO"
            | "BQ"
            | "BR"
            | "BS"
            | "BT"
            | "BV"
            | "BW"
            | "BY"
            | "BZ"
            | "CA"
            | "CD"
            | "CF"
            | "CG"
            | "CH"
            | "CI"
            | "CK"
            | "CL"
            | "CM"
            | "CN"
            | "CO"
            | "CR"
            | "CV"
            | "CW"
            | "CY"
            | "CZ"
            | "DE"
            | "DJ"
            | "DK"
            | "DM"
            | "DO"
            | "DZ"
            | "EC"
            | "EE"
            | "EG"
            | "EH"
            | "ER"
            | "ES"
            | "ET"
            | "FI"
            | "FJ"
            | "FK"
            | "FO"
            | "FR"
            | "GA"
            | "GB"
            | "GD"
            | "GE"
            | "GF"
            | "GG"
            | "GH"
            | "GI"
            | "GL"
            | "GM"
            | "GN"
            | "GP"
            | "GQ"
            | "GR"
            | "GS"
            | "GT"
            | "GU"
            | "GW"
            | "GY"
            | "HK"
            | "HN"
            | "HR"
            | "HT"
            | "HU"
            | "ID"
            | "IE"
            | "IL"
            | "IM"
            | "IN"
            | "IO"
            | "IQ"
            | "IS"
            | "IT"
            | "JE"
            | "JM"
            | "JO"
            | "JP"
            | "KE"
            | "KG"
            | "KH"
            | "KI"
            | "KM"
            | "KN"
            | "KR"
            | "KW"
            | "KY"
            | "KZ"
            | "LA"
            | "LB"
            | "LC"
            | "LI"
            | "LK"
            | "LR"
            | "LS"
            | "LT"
            | "LU"
            | "LV"
            | "LY"
            | "MA"
            | "MC"
            | "MD"
            | "ME"
            | "MF"
            | "MG"
            | "MK"
            | "ML"
            | "MM"
            | "MN"
            | "MO"
            | "MQ"
            | "MR"
            | "MS"
            | "MT"
            | "MU"
            | "MV"
            | "MW"
            | "MX"
            | "MY"
            | "MZ"
            | "NA"
            | "NC"
            | "NE"
            | "NG"
            | "NI"
            | "NL"
            | "NO"
            | "NP"
            | "NR"
            | "NU"
            | "NZ"
            | "OM"
            | "PA"
            | "PE"
            | "PF"
            | "PG"
            | "PH"
            | "PK"
            | "PL"
            | "PM"
            | "PN"
            | "PR"
            | "PS"
            | "PT"
            | "PY"
            | "QA"
            | "RE"
            | "RO"
            | "RS"
            | "RU"
            | "RW"
            | "SA"
            | "SB"
            | "SC"
            | "SD"
            | "SE"
            | "SG"
            | "SH"
            | "SI"
            | "SJ"
            | "SK"
            | "SL"
            | "SM"
            | "SN"
            | "SO"
            | "SR"
            | "SS"
            | "ST"
            | "SV"
            | "SX"
            | "SZ"
            | "TA"
            | "TC"
            | "TD"
            | "TF"
            | "TG"
            | "TH"
            | "TJ"
            | "TK"
            | "TL"
            | "TM"
            | "TN"
            | "TO"
            | "TR"
            | "TT"
            | "TV"
            | "TW"
            | "TZ"
            | "UA"
            | "UG"
            | "US"
            | "UY"
            | "UZ"
            | "VA"
            | "VC"
            | "VE"
            | "VG"
            | "VN"
            | "VU"
            | "WF"
            | "WS"
            | "XK"
            | "YE"
            | "YT"
            | "ZA"
            | "ZM"
            | "ZW"
            | "ZZ";
        export const Item = {
            Ac: "AC",
            Ad: "AD",
            Ae: "AE",
            Af: "AF",
            Ag: "AG",
            Ai: "AI",
            Al: "AL",
            Am: "AM",
            Ao: "AO",
            Aq: "AQ",
            Ar: "AR",
            At: "AT",
            Au: "AU",
            Aw: "AW",
            Ax: "AX",
            Az: "AZ",
            Ba: "BA",
            Bb: "BB",
            Bd: "BD",
            Be: "BE",
            Bf: "BF",
            Bg: "BG",
            Bh: "BH",
            Bi: "BI",
            Bj: "BJ",
            Bl: "BL",
            Bm: "BM",
            Bn: "BN",
            Bo: "BO",
            Bq: "BQ",
            Br: "BR",
            Bs: "BS",
            Bt: "BT",
            Bv: "BV",
            Bw: "BW",
            By: "BY",
            Bz: "BZ",
            Ca: "CA",
            Cd: "CD",
            Cf: "CF",
            Cg: "CG",
            Ch: "CH",
            Ci: "CI",
            Ck: "CK",
            Cl: "CL",
            Cm: "CM",
            Cn: "CN",
            Co: "CO",
            Cr: "CR",
            Cv: "CV",
            Cw: "CW",
            Cy: "CY",
            Cz: "CZ",
            De: "DE",
            Dj: "DJ",
            Dk: "DK",
            Dm: "DM",
            Do: "DO",
            Dz: "DZ",
            Ec: "EC",
            Ee: "EE",
            Eg: "EG",
            Eh: "EH",
            Er: "ER",
            Es: "ES",
            Et: "ET",
            Fi: "FI",
            Fj: "FJ",
            Fk: "FK",
            Fo: "FO",
            Fr: "FR",
            Ga: "GA",
            Gb: "GB",
            Gd: "GD",
            Ge: "GE",
            Gf: "GF",
            Gg: "GG",
            Gh: "GH",
            Gi: "GI",
            Gl: "GL",
            Gm: "GM",
            Gn: "GN",
            Gp: "GP",
            Gq: "GQ",
            Gr: "GR",
            Gs: "GS",
            Gt: "GT",
            Gu: "GU",
            Gw: "GW",
            Gy: "GY",
            Hk: "HK",
            Hn: "HN",
            Hr: "HR",
            Ht: "HT",
            Hu: "HU",
            Id: "ID",
            Ie: "IE",
            Il: "IL",
            Im: "IM",
            In: "IN",
            Io: "IO",
            Iq: "IQ",
            Is: "IS",
            It: "IT",
            Je: "JE",
            Jm: "JM",
            Jo: "JO",
            Jp: "JP",
            Ke: "KE",
            Kg: "KG",
            Kh: "KH",
            Ki: "KI",
            Km: "KM",
            Kn: "KN",
            Kr: "KR",
            Kw: "KW",
            Ky: "KY",
            Kz: "KZ",
            La: "LA",
            Lb: "LB",
            Lc: "LC",
            Li: "LI",
            Lk: "LK",
            Lr: "LR",
            Ls: "LS",
            Lt: "LT",
            Lu: "LU",
            Lv: "LV",
            Ly: "LY",
            Ma: "MA",
            Mc: "MC",
            Md: "MD",
            Me: "ME",
            Mf: "MF",
            Mg: "MG",
            Mk: "MK",
            Ml: "ML",
            Mm: "MM",
            Mn: "MN",
            Mo: "MO",
            Mq: "MQ",
            Mr: "MR",
            Ms: "MS",
            Mt: "MT",
            Mu: "MU",
            Mv: "MV",
            Mw: "MW",
            Mx: "MX",
            My: "MY",
            Mz: "MZ",
            Na: "NA",
            Nc: "NC",
            Ne: "NE",
            Ng: "NG",
            Ni: "NI",
            Nl: "NL",
            No: "NO",
            Np: "NP",
            Nr: "NR",
            Nu: "NU",
            Nz: "NZ",
            Om: "OM",
            Pa: "PA",
            Pe: "PE",
            Pf: "PF",
            Pg: "PG",
            Ph: "PH",
            Pk: "PK",
            Pl: "PL",
            Pm: "PM",
            Pn: "PN",
            Pr: "PR",
            Ps: "PS",
            Pt: "PT",
            Py: "PY",
            Qa: "QA",
            Re: "RE",
            Ro: "RO",
            Rs: "RS",
            Ru: "RU",
            Rw: "RW",
            Sa: "SA",
            Sb: "SB",
            Sc: "SC",
            Sd: "SD",
            Se: "SE",
            Sg: "SG",
            Sh: "SH",
            Si: "SI",
            Sj: "SJ",
            Sk: "SK",
            Sl: "SL",
            Sm: "SM",
            Sn: "SN",
            So: "SO",
            Sr: "SR",
            Ss: "SS",
            St: "ST",
            Sv: "SV",
            Sx: "SX",
            Sz: "SZ",
            Ta: "TA",
            Tc: "TC",
            Td: "TD",
            Tf: "TF",
            Tg: "TG",
            Th: "TH",
            Tj: "TJ",
            Tk: "TK",
            Tl: "TL",
            Tm: "TM",
            Tn: "TN",
            To: "TO",
            Tr: "TR",
            Tt: "TT",
            Tv: "TV",
            Tw: "TW",
            Tz: "TZ",
            Ua: "UA",
            Ug: "UG",
            Us: "US",
            Uy: "UY",
            Uz: "UZ",
            Va: "VA",
            Vc: "VC",
            Ve: "VE",
            Vg: "VG",
            Vn: "VN",
            Vu: "VU",
            Wf: "WF",
            Ws: "WS",
            Xk: "XK",
            Ye: "YE",
            Yt: "YT",
            Za: "ZA",
            Zm: "ZM",
            Zw: "ZW",
            Zz: "ZZ",
        } as const;
    }
}
