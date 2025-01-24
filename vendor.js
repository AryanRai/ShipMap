var a, n, o = ["Iceland", "Icelander", "ISL", "India", "Indian", "IND", "Indonesian", "IDN", "Iranian", "IRN", "IRQ", "Ireland", "IRL", "Isle of Man", "Manx", "IMN", "Israel", "Israeli", "ISR", "Italy", "Italian", "ITA", "Jamaica", "Jamaican", "JAM", "Japanese", "JPN", "Jersey", "Jerseyman", "Jordanian", "Kazakhstan", "Kazakhstani", "KAZ", "Kenya", "Kenyan", "KEN", "Kiribati", "I-Kiribati", "KIR", "Kosovar", "Kuwait", "\tKuwaiti", "KWT", "Kyrgyzstan", "KGZ", "Lao", "LAO", "Latvia", "LVA", "Lebanese", "Lesotho", "Lesothonian", "LSO", "Liberian", "LBR", "Libya", "Libyan", "Liechtenstein", "Liechtensteiner", "Lithuania", "Lithuanian", "LTU", "Luxembourg", "Luxembourgish", "LUX", "Macao", "Macau", "MAC", "MDG", "Malawian", "MWI", "Malaysia", "Maldives", "Maldivian", "Malian", "MLI", "Malta", "Maltese", "MLT", "Marshallese", "MHL", "Martinican", "Mauritania", "MRT", "Mauritius", "MYT", "Mexico", "Mexican", "Micronesian", "Moldova", "Moldovan", "MDA", "Monaco", "Monegasque", "Mongolia", "Mongolian", "MNG", "Montenegro", "Montenegrin", "MNE", "Montserrat", "Montserratian", "Morocco", "MAR", "Mozambique", "Mozambican", "MOZ", "Myanmar", "Myanma", "Namibia", "Namibian", "NAM", "Nauru", "Nauruan", "Nepal", "Nepalese", "Netherlands Antilles", "Netherlands Antillean", "ANT", "Netherlands", "NLD", "New Caledonia", "New Caledonian", "NZL", "Nicaragua", "Nicaraguan", "NIC", "Nigerien", "NER", "Nigeria", "NGA", "Niuean", "NIU", "Norfolk Island", "Norfolk Islander", "NFK", "North Korea", "PRK", "North Macedonia", "MKD", "Northern Mariana Islands", "Northern Mariana Islander", "Norway", "Norwegian", "NOR", "Oman", "Omani", "OMN", "Pakistan", "Pakistani", "Palau", "Palauan", "PLW", "Palestine", "Palestinian", "PSE", "Panama", "Panamanian", "PAN", "Papua New Guinea", "Papua New Guinean", "Paraguay", "PRY", "Peru", "Peruvian", "Philippines", "PHL", "Pitcairn", "Pitcairn Islander", "PCN", "Poland", "POL", "Portugal", "Portuguese", "PRT", "Puerto Rico", "Puerto Rican", "Qatar", "Qatari", "QAT", "Réunion", "Réunionese", "REU", "Romanian", "ROU", "Russia", "Russian", "Rwanda", "Rwandan", "RWA", "Saint Barthélemy", "Barthélemois", "Saint Helena, Ascension and Tristan da Cunha", "Ascensionian", "SHN", "Saint Helenian", "Saint Kitts and Nevis", "KNA", "Nevisian", "Saint Lucia", "Saint Lucian", "Saint Martin", "Saint-Martinois", "MAF", "Saint Pierre and Miquelon", "Saint-Pierrais", "SPM", "Saint Vincent and the Grenadines", "Saint Vincentian", "VCT", "Samoa", "Samoan", "WSM", "San Marino", "Sammarinese", "SMR", "STP", "Saudi Arabia", "Saudi", "Senegal", "SEN", "Serbian", "SRB", "Seychelles", "SYC", "Sierra Leone", "Sierra Leonean", "Singaporean", "Republik Singapura", "Slovakia", "SVK", "Slovenia", "Slovenian", "Solomon Islander", "SLB", "Somali", "South Africa", "South African", "South Georgia and the South Sandwich Islands", "South Georgian", "South Korea", "KOR", "South Sudan", "South Sudanese", "SSD", "Sri Lanka", "Sri Lankan", "LKA", "Suriname", "Surinamese", "SUR", "Svalbard and Jan Mayen", "SJM", "Swazi", "SWZ", "Sweden", "SWE", "Switzerland", "Swiss", "CHE", "Syria", "SYR", "Taiwan", "Tajikistan", "Tajik", "TJK", "Tanzania", "Tanzanian", "TZA", "Thailand", "Thai", "THA", "Timorese", "TLS", "Togolese", "TGO", "Tokelauan", "Tonga", "Tongan", "TON", "Trinidad and Tobago", "TTO", "Tunisia", "TUN", "Turkey", "Turkish", "TUR", "Turkmenistan", "Turkmenistani", "Turks and Caicos Islands", "Turks and Caicos Islander", "TCA", "Tuvaluan", "Uganda", "Ugandan", "UGA", "Ukraine", "Ukrainian", "United Arab Emirates", "Emirati", "British", "GBR", "United States Minor Outlying Islands", "American Islander", "UMI", "American", "USA", "Uruguay", "Uruguayan", "URY", "Uzbekistan", "Uzbek", "UZB", "Vanuatu", "Vanuatuan", "Venezuelan", "VEN", "Vietnam", "Vietnamese", "Viet Nam", "Republic of Viet Nam", "Virgin Islands of the United States", "VIR", "Wallis and Futuna", "Wallisian", "WLF", "Futunan", "Western Sahara", "Western Saharan", "ESH", "Yemeni", "YEM", "Zambia", "Zambian", "ZMB", "Zimbabwe", "Zimbabwean", "ZWE", "toUpperCase", "find", "name", "demonym", "iso3", "findFlagUrlByCountryName", "findFlagUrlByNationality", "findFlagUrlByIso2Code", "defineProperty", "string", "object", "message", "stack", "prototype", "getPrototypeOf", "boolean", "_originalTimeouts", "_timeouts", "_options", "_maxRetryTime", "maxRetryTime", "_fn", "_operationTimeout", "_operationTimeoutCb", "_timeout", "_operationStart", "forever", "_cachedTimeouts", "reset", "_attempts", "stop", "retry", "getTime", "_errors", "RetryOperation timeout occurred", "push", "shift", "splice", "slice", "unref", "timeout", "log", "Using RetryOperation.try() is deprecated", "attempt", "Using RetryOperation.start() is deprecated", "start", "try", "attempts", "mainError", "operation", "timeouts", "minTimeout", "retries", "sort", "createTimeout", "randomize", "random", "round", "factor", "min", "maxTimeout", "function", "call", "pop", "apply", "options", "hasOwnProperty", "code", "resolve", "retried", "Retrying", "EPROMISERETRY", "then", "https://upload.wikimedia.org/wikipedia/", "concat", "commons/f/f6/Flag_of_Aruba.svg", "commons/9/9a/Flag_of_Afghanistan.svg", "commons/b/b4/Flag_of_Anguilla.svg", "commons/5/52/Flag_of_%C3%85land.svg", "commons/3/36/Flag_of_Albania.svg", "commons/1/19/Flag_of_Andorra.svg", "commons/e/eb/Flag_of_the_Netherlands_Antilles_(1959%E2%80%931986).svg", "commons/c/cb/Flag_of_the_United_Arab_Emirates.svg", "commons/1/1a/Flag_of_Argentina.svg", "commons/8/89/Flag_of_Antigua_and_Barbuda.svg", "commons/8/88/Flag_of_Australia_(converted).svg", "commons/5/50/Flag_of_Burundi.svg", "commons/6/65/Flag_of_Belgium.svg", "commons/0/0a/Flag_of_Benin.svg", "commons/2/20/Flag_of_the_Netherlands.svg", "commons/3/31/Flag_of_Burkina_Faso.svg", "commons/9/9a/Flag_of_Bulgaria.svg", "commons/2/2c/Flag_of_Bahrain.svg", "commons/9/93/Flag_of_the_Bahamas.svg", "commons/8/85/Flag_of_Belarus.svg", "commons/e/e7/Flag_of_Belize.svg", "commons/b/bf/Flag_of_Bermuda.svg", "commons/5/5b/Bolivia_Flag.svg", "commons/0/05/Flag_of_Brazil.svg", "commons/e/ef/Flag_of_Barbados.svg", "commons/9/9c/Flag_of_Brunei.svg", "commons/9/91/Flag_of_Bhutan.svg", "commons/f/fa/Flag_of_Botswana.svg", "commons/7/74/Flag_of_the_Cocos_(Keeling)_Islands.svg", "commons/7/78/Flag_of_Chile.svg", "commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg", "commons/f/fe/Flag_of_Côte_d%27Ivoire.svg", "commons/4/4f/Flag_of_Cameroon.svg", "commons/1/11/Flag_of_the_Democratic_Republic_of_the_Congo_(3-2).svg", "commons/3/35/Flag_of_the_Cook_Islands.svg", "commons/d/df/Flag_of_the_Comoros_(3-2).svg", "commons/3/38/Flag_of_Cape_Verde.svg", "commons/b/bd/Flag_of_Cuba.svg", "commons/b/b1/Flag_of_Curaçao.svg", "commons/6/67/Flag_of_Christmas_Island.svg", "commons/0/0f/Flag_of_the_Cayman_Islands.svg", "commons/c/cb/Flag_of_the_Czech_Republic.svg", "commons/b/ba/Flag_of_Germany.svg", "commons/3/34/Flag_of_Djibouti.svg", "commons/9/9f/Flag_of_the_Dominican_Republic.svg", "commons/7/77/Flag_of_Algeria.svg", "commons/e/e8/Flag_of_Ecuador.svg", "commons/f/fe/Flag_of_Egypt.svg", "commons/2/29/Flag_of_Eritrea.svg", "commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg", "commons/9/9a/Flag_of_Spain.svg", "commons/7/71/Flag_of_Ethiopia.svg", "commons/b/bc/Flag_of_Finland.svg", "commons/b/ba/Flag_of_Fiji.svg", "commons/c/c3/Flag_of_France.svg", "commons/3/3c/Flag_of_the_Faroe_Islands.svg", "commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg", "commons/a/ae/Flag_of_the_United_Kingdom.svg", "commons/1/19/Flag_of_Ghana.svg", "commons/0/02/Flag_of_Gibraltar.svg", "commons/0/01/Flag_of_Guinea-Bissau.svg", "commons/3/31/Flag_of_Equatorial_Guinea.svg", "commons/5/5c/Flag_of_Greece.svg", "commons/0/09/Flag_of_Greenland.svg", "commons/5/5b/Flag_of_Hong_Kong.svg", "commons/c/c1/Flag_of_Hungary.svg", "commons/9/9f/Flag_of_Indonesia.svg", "commons/b/bc/Flag_of_the_Isle_of_Man.svg", "commons/c/c0/Republic_of_Ireland_Flag.svg", "commons/c/ca/Flag_of_Iran.svg", "commons/f/f6/Flag_of_Iraq.svg", "commons/c/ce/Flag_of_Iceland.svg", "commons/0/03/Flag_of_Italy.svg", "commons/0/0a/Flag_of_Jamaica.svg", "commons/c/c0/Flag_of_Jordan.svg", "commons/b/bc/Flag_of_Japan%28bordered%29.svg", "commons/d/d3/Flag_of_Kazakhstan.svg", "commons/4/49/Flag_of_Kenya.svg", "commons/c/c7/Flag_of_Kyrgyzstan.svg", "commons/8/83/Flag_of_Cambodia.svg", "commons/d/d3/Flag_of_Kiribati.svg", "commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg", "commons/0/09/Flag_of_South_Korea.svg", "commons/a/aa/Flag_of_Kuwait.svg", "commons/5/56/Flag_of_Laos.svg", "commons/b/b8/Flag_of_Liberia.svg", "commons/0/05/Flag_of_Libya.svg", "commons/9/9f/Flag_of_Saint_Lucia.svg", "commons/4/47/Flag_of_Liechtenstein.svg", "commons/4/4a/Flag_of_Lesotho.svg", "commons/1/11/Flag_of_Lithuania.svg", "commons/d/da/Flag_of_Luxembourg.svg", "commons/8/84/Flag_of_Latvia.svg", "commons/6/63/Flag_of_Macau.svg", "commons/d/dd/Flag_of_Saint-Martin_%28fictional%29.svg", "commons/2/2c/Flag_of_Morocco.svg", "commons/e/ea/Flag_of_Monaco.svg", "commons/2/27/Flag_of_Moldova.svg", "commons/b/bc/Flag_of_Madagascar.svg", "commons/0/0f/Flag_of_Maldives.svg", "commons/f/fc/Flag_of_Mexico.svg", "commons/2/2e/Flag_of_the_Marshall_Islands.svg", "commons/9/92/Flag_of_Mali.svg", "commons/7/73/Flag_of_Malta.svg", "commons/8/8c/Flag_of_Myanmar.svg", "commons/6/64/Flag_of_Montenegro.svg", "commons/4/4c/Flag_of_Mongolia.svg", "commons/d/d0/Flag_of_Mozambique.svg", "commons/4/43/Flag_of_Mauritania.svg", "commons/d/d0/Flag_of_Montserrat.svg", "commons/2/21/Flag_of_the_Territorial_Collectivity_of_Martinique.svg", "commons/7/77/Flag_of_Mauritius.svg", "commons/d/d1/Flag_of_Malawi.svg", "commons/6/66/Flag_of_Malaysia.svg", "commons/0/00/Flag_of_Namibia.svg", "commons/6/66/Flag_of_FLNKS.svg", "commons/4/48/Flag_of_Norfolk_Island.svg", "commons/7/79/Flag_of_Nigeria.svg", "commons/1/19/Flag_of_Nicaragua.svg", "commons/d/d9/Flag_of_Norway.svg", "commons/9/9b/Flag_of_Nepal.svg", "commons/3/30/Flag_of_Nauru.svg", "commons/d/dd/Flag_of_Oman.svg", "commons/8/88/Flag_of_the_Pitcairn_Islands.svg", "commons/c/cf/Flag_of_Peru.svg", "commons/9/99/Flag_of_the_Philippines.svg", "commons/4/48/Flag_of_Palau.svg", "commons/2/28/Flag_of_Puerto_Rico.svg", "commons/2/27/Flag_of_Paraguay.svg", "commons/d/db/Flag_of_French_Polynesia.svg", "commons/6/65/Flag_of_Qatar.svg", "commons/5/5a/Flag_of_Réunion.svg", "commons/7/73/Flag_of_Romania.svg", "commons/f/f3/Flag_of_Russia.svg", "commons/1/17/Flag_of_Rwanda.svg", "commons/0/0d/Flag_of_Saudi_Arabia.svg", "commons/0/01/Flag_of_Sudan.svg", "commons/0/00/Flag_of_Saint_Helena.svg", "commons/7/74/Flag_of_the_Solomon_Islands.svg", "commons/1/17/Flag_of_Sierra_Leone.svg", "commons/3/34/Flag_of_El_Salvador.svg", "commons/b/b1/Flag_of_San_Marino.svg", "commons/f/ff/Flag_of_Serbia.svg", "commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg", "commons/e/e6/Flag_of_Slovakia.svg", "commons/4/4c/Flag_of_Sweden.svg", "commons/d/d3/Flag_of_Sint_Maarten.svg", "commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg", "commons/6/68/Flag_of_Togo.svg", "commons/a/a9/Flag_of_Thailand.svg", "commons/1/1b/Flag_of_Turkmenistan.svg", "commons/2/26/Flag_of_East_Timor.svg", "commons/9/9a/Flag_of_Tonga.svg", "commons/c/ce/Flag_of_Tunisia.svg", "commons/b/b4/Flag_of_Turkey.svg", "commons/3/38/Flag_of_Tuvalu.svg", "commons/7/72/Flag_of_the_Republic_of_China.svg", "commons/3/38/Flag_of_Tanzania.svg", "commons/4/4e/Flag_of_Uganda.svg", "commons/4/49/Flag_of_Ukraine.svg", "commons/0/05/Flag_of_the_U.S..svg", "commons/a/a4/Flag_of_the_United_States.svg", "commons/8/84/Flag_of_Uzbekistan.svg", "commons/7/7b/Flag_of_Venezuela_(state).svg", "commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg", "commons/2/21/Flag_of_Vietnam.svg", "commons/d/d2/Flag_of_Wallis_and_Futuna.svg", "commons/3/31/Flag_of_Samoa.svg", "commons/8/89/Flag_of_Yemen.svg", "commons/a/af/Flag_of_South_Africa.svg", "commons/0/06/Flag_of_Zambia.svg", "commons/6/6a/Flag_of_Zimbabwe.svg", "Cannot call a class as a function", "length", "flag", "iso2", "altSpellings", "Afghanistan", "Afghan", "AFG", "Aland Islands", "Alandic", "ALA", "Albania", "Albanian", "Algeria", "American Samoa", "American Samoan", "ASM", "Andorra", "Andorran", "Angola", "Angolan", "AGO", "Anguilla", "AIA", "Antigua and Barbuda", "ATG", "Argentina", "Argentinian", "ARG", "Armenia", "Armenian", "ARM", "Aruba", "Arubian", "ABW", "Australia", "AUS", "Austria", "AUT", "Azerbaijan", "AZE", "Bahamian", "Bahrain", "Bahraini", "BHR", "Bangladesh", "Barbados", "Barbadian", "BRB", "Belarus", "Belarusian", "BLR", "Belgium", "Belgian", "BEL", "Belize", "Belizean", "BLZ", "Benin", "Beninese", "BEN", "Bermuda", "Bermudian", "BMU", "Bhutan", "Bolivian", "Bonaire, Sint Eustatius and Saba", "BES", "Bosnia and Herzegovina", "Botswana", "Batswana", "Brazil", "Brazilian", "BRA", "Virgin Islander", "VGB", "Brunei", "Bruneian", "Bulgaria", "Bulgarian", "BGR", "Burkina Faso", "Burkinabé", "BFA", "Burundi", "Burundian", "BDI", "Cambodia", "Cambodian", "KHM", "Cameroon", "Cameroonian", "CMR", "Canadian", "Cape Verde", "Cape Verdean", "CPV", "Cayman Islands", "CYM", "Central African Republic", "CAF", "Chadian", "Chile", "Chilean", "CHL", "China", "Chinese", "CXR", "Cocos Islands", "Taiwanese", "Colombia", "Colombian", "Comoros", "Comorian", "COM", "Congo", "Congolese", "COG", "Cook Islander", "Costa Rica", "Costa Rican", "CRI", "Côte d'Ivoire", "Ivorian", "CIV", "Croatia", "Croatian", "HRV", "Cuba", "Curaçao", "Dutch", "CUW", "Cypriot", "CYP", "Czech", "Democratic Republic of the Congo", "Denmark", "Danish", "DNK", "Djiboutian", "DJI", "Dominica", "Dominican", "DMA", "Dominican Republic", "DOM", "Ecuadorian", "ECU", "Egypt", "EGY", "El Salvador", "Salvadoran", "SLV", "Equatorial Guinea", "Equatoguinean", "GNQ", "Eritrea", "Eritrean", "ERI", "Estonia", "Estonian", "EST", "Ethiopia", "Ethiopian", "ETH", "Falkland Islands", "Falkland Islander", "FLK", "Faroe Islands", "Faroese", "FRO", "Fiji", "Fijian", "FJI", "Finland", "FIN", "France", "French", "FRA", "Guianan", "French Polynesia", "French Polynesian", "PYF", "Gabonese", "GAB", "Gambian", "GMB", "Georgia", "Georgian", "GEO", "Germany", "German", "DEU", "Ghana", "Ghanaian", "GHA", "GIB", "Greece", "GRC", "Greenland", "Greenlander", "GRL", "Grenada", "Grenadian", "Guadeloupe", "Guam", "Guamanian", "GUM", "Guatemala", "Guatemalan", "GTM", "Guernsey", "Guernseymen", "GGY", "Bissau-Guinean", "GNB", "Guinea", "Guinean", "GIN", "Guyana", "Guyanese", "Haiti", "Haitian", "Holy See", "VAT", "Vatican", "Honduras", "HND", "Hong Kong", "Hong Kongese", "HKG", "Hungary", "Hungarian", "HUN"];
a = o,
n = 411,
function(n) {
    for (; --n; )
        a.push(a.shift())
}(++n);
var e = function(a, n) {
    return o[a -= 0]
};
function s(a) {
    return e("0x0")[e("0x1")](a)
}
var x = {
    ABW: s(e("0x2")),
    AFG: s(e("0x3")),
    AGO: s("commons/9/9d/Flag_of_Angola.svg"),
    AIA: s(e("0x4")),
    ALA: s(e("0x5")),
    ALB: s(e("0x6")),
    AND: s(e("0x7")),
    ANT: s(e("0x8")),
    ARE: s(e("0x9")),
    ARG: s(e("0xa")),
    ARM: s("commons/2/2f/Flag_of_Armenia.svg"),
    ASM: s("commons/8/87/Flag_of_American_Samoa.svg"),
    ATG: s(e("0xb")),
    AUS: s(e("0xc")),
    AUT: s("commons/4/41/Flag_of_Austria.svg"),
    AZE: s("commons/d/dd/Flag_of_Azerbaijan.svg"),
    BDI: s(e("0xd")),
    BEL: s(e("0xe")),
    BEN: s(e("0xf")),
    BES: s(e("0x10")),
    BFA: s(e("0x11")),
    BGD: s("commons/f/f9/Flag_of_Bangladesh.svg"),
    BGR: s(e("0x12")),
    BHR: s(e("0x13")),
    BHS: s(e("0x14")),
    BIH: s("commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"),
    BLM: s("commons/0/03/Saint-Barthelémy_Icône.svg"),
    BLR: s(e("0x15")),
    BLZ: s(e("0x16")),
    BMU: s(e("0x17")),
    BOL: s(e("0x18")),
    BRA: s(e("0x19")),
    BRB: s(e("0x1a")),
    BRN: s(e("0x1b")),
    BTN: s(e("0x1c")),
    BWA: s(e("0x1d")),
    CAF: s("commons/6/6f/Flag_of_the_Central_African_Republic.svg"),
    CAN: s("commons/d/d9/Flag_of_Canada_(Pantone).svg"),
    CCK: s(e("0x1e")),
    CHE: s("commons/f/f3/Flag_of_Switzerland.svg"),
    CHL: s(e("0x1f")),
    CHN: s(e("0x20")),
    CIV: s(e("0x21")),
    CMR: s(e("0x22")),
    COD: s(e("0x23")),
    COG: s("commons/9/92/Flag_of_the_Republic_of_the_Congo.svg"),
    COK: s(e("0x24")),
    COL: s("commons/2/21/Flag_of_Colombia.svg"),
    COM: s(e("0x25")),
    CPV: s(e("0x26")),
    CRI: s("commons/b/bc/Flag_of_Costa_Rica_(state).svg"),
    CUB: s(e("0x27")),
    CUW: s(e("0x28")),
    CXR: s(e("0x29")),
    CYM: s(e("0x2a")),
    CYP: s("commons/d/d4/Flag_of_Cyprus.svg"),
    CZE: s(e("0x2b")),
    DEU: s(e("0x2c")),
    DJI: s(e("0x2d")),
    DMA: s("commons/c/c4/Flag_of_Dominica.svg"),
    DNK: s("commons/9/9c/Flag_of_Denmark.svg"),
    DOM: s(e("0x2e")),
    DZA: s(e("0x2f")),
    ECU: s(e("0x30")),
    EGY: s(e("0x31")),
    ERI: s(e("0x32")),
    ESH: s(e("0x33")),
    ESP: s(e("0x34")),
    EST: s("commons/8/8f/Flag_of_Estonia.svg"),
    ETH: s(e("0x35")),
    FIN: s(e("0x36")),
    FJI: s(e("0x37")),
    FLK: s("commons/8/83/Flag_of_the_Falkland_Islands.svg"),
    FRA: s(e("0x38")),
    FRO: s(e("0x39")),
    FSM: s(e("0x3a")),
    GAB: s("commons/0/04/Flag_of_Gabon.svg"),
    GBR: s(e("0x3b")),
    GEO: s("commons/0/0f/Flag_of_Georgia.svg"),
    GGY: s("commons/f/fa/Flag_of_Guernsey.svg"),
    GHA: s(e("0x3c")),
    GIB: s(e("0x3d")),
    GIN: s("commons/e/ed/Flag_of_Guinea.svg"),
    GLP: s("commons/9/9f/Flag_of_France_%287x10%29.svg"),
    GMB: s("commons/7/77/Flag_of_The_Gambia.svg"),
    GNB: s(e("0x3e")),
    GNQ: s(e("0x3f")),
    GRC: s(e("0x40")),
    GRD: s("commons/b/bc/Flag_of_Grenada.svg"),
    GRL: s(e("0x41")),
    GTM: s("commons/e/ec/Flag_of_Guatemala.svg"),
    GUF: s("commons/e/ed/Flag_of_France_%28Pantone%29.svg"),
    GUM: s("commons/0/07/Flag_of_Guam.svg"),
    GUY: s("commons/9/99/Flag_of_Guyana.svg"),
    HKG: s(e("0x42")),
    HND: s("commons/8/82/Flag_of_Honduras.svg"),
    HRV: s("commons/1/1b/Flag_of_Croatia.svg"),
    HTI: s("commons/5/56/Flag_of_Haiti.svg"),
    HUN: s(e("0x43")),
    IDN: s(e("0x44")),
    IMN: s(e("0x45")),
    IND: s("commons/4/41/Flag_of_India.svg"),
    IRL: s(e("0x46")),
    IRN: s(e("0x47")),
    IRQ: s(e("0x48")),
    ISL: s(e("0x49")),
    ISR: s("commons/d/d4/Flag_of_Israel.svg"),
    ITA: s(e("0x4a")),
    JAM: s(e("0x4b")),
    JEY: s("commons/1/1c/Flag_of_Jersey.svg"),
    JOR: s(e("0x4c")),
    JPN: s(e("0x4d")),
    KAZ: s(e("0x4e")),
    KEN: s(e("0x4f")),
    KGZ: s(e("0x50")),
    KHM: s(e("0x51")),
    KIR: s(e("0x52")),
    KNA: s(e("0x53")),
    KOR: s(e("0x54")),
    KWT: s(e("0x55")),
    LAO: s(e("0x56")),
    LBN: s("commons/5/59/Flag_of_Lebanon.svg"),
    LBR: s(e("0x57")),
    LBY: s(e("0x58")),
    LCA: s(e("0x59")),
    LIE: s(e("0x5a")),
    LKA: s("commons/1/11/Flag_of_Sri_Lanka.svg"),
    LSO: s(e("0x5b")),
    LTU: s(e("0x5c")),
    LUX: s(e("0x5d")),
    LVA: s(e("0x5e")),
    MAC: s(e("0x5f")),
    MAF: s(e("0x60")),
    MAR: s(e("0x61")),
    MCO: s(e("0x62")),
    MDA: s(e("0x63")),
    MDG: s(e("0x64")),
    MDV: s(e("0x65")),
    MEX: s(e("0x66")),
    MHL: s(e("0x67")),
    MKD: s("commons/7/79/Flag_of_North_Macedonia.svg"),
    MLI: s(e("0x68")),
    MLT: s(e("0x69")),
    MMR: s(e("0x6a")),
    MNE: s(e("0x6b")),
    MNG: s(e("0x6c")),
    MNP: s("commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg"),
    MOZ: s(e("0x6d")),
    MRT: s(e("0x6e")),
    MSR: s(e("0x6f")),
    MTQ: s(e("0x70")),
    MUS: s(e("0x71")),
    MWI: s(e("0x72")),
    MYS: s(e("0x73")),
    MYT: s(e("0x38")),
    NAM: s(e("0x74")),
    NCL: s(e("0x75")),
    NER: s("commons/f/f4/Flag_of_Niger.svg"),
    NFK: s(e("0x76")),
    NGA: s(e("0x77")),
    NIC: s(e("0x78")),
    NIU: s("commons/0/01/Flag_of_Niue.svg"),
    NLD: s(e("0x10")),
    NOR: s(e("0x79")),
    NPL: s(e("0x7a")),
    NRU: s(e("0x7b")),
    NZL: s("commons/3/3e/Flag_of_New_Zealand.svg"),
    OMN: s(e("0x7c")),
    PAK: s("commons/3/32/Flag_of_Pakistan.svg"),
    PAN: s("commons/a/ab/Flag_of_Panama.svg"),
    PCN: s(e("0x7d")),
    PER: s(e("0x7e")),
    PHL: s(e("0x7f")),
    PLW: s(e("0x80")),
    PNG: s("commons/e/e3/Flag_of_Papua_New_Guinea.svg"),
    POL: s("commons/1/12/Flag_of_Poland.svg"),
    PRI: s(e("0x81")),
    PRK: s("commons/5/51/Flag_of_North_Korea.svg"),
    PRT: s("commons/5/5c/Flag_of_Portugal.svg"),
    PRY: s(e("0x82")),
    PSE: s("commons/f/f4/Palestine_Flag.svg"),
    PYF: s(e("0x83")),
    QAT: s(e("0x84")),
    REU: s(e("0x85")),
    ROU: s(e("0x86")),
    RUS: s(e("0x87")),
    RWA: s(e("0x88")),
    SAU: s(e("0x89")),
    SDN: s(e("0x8a")),
    SEN: s("commons/f/fd/Flag_of_Senegal.svg"),
    SGP: s("commons/4/48/Flag_of_Singapore.svg"),
    SGS: s("commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg"),
    SHN: s(e("0x8b")),
    SJM: s(e("0x79")),
    SLB: s(e("0x8c")),
    SLE: s(e("0x8d")),
    SLV: s(e("0x8e")),
    SMR: s(e("0x8f")),
    SOM: s("commons/a/a0/Flag_of_Somalia.svg"),
    SPM: s("commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg"),
    SRB: s(e("0x90")),
    SSD: s("commons/7/7a/Flag_of_South_Sudan.svg"),
    STP: s(e("0x91")),
    SUR: s("commons/6/60/Flag_of_Suriname.svg"),
    SVK: s(e("0x92")),
    SVN: s("commons/f/f0/Flag_of_Slovenia.svg"),
    SWE: s(e("0x93")),
    SWZ: s("commons/f/fb/Flag_of_Eswatini.svg"),
    SXM: s(e("0x94")),
    SYC: s("commons/f/fc/Flag_of_Seychelles.svg"),
    SYR: s("commons/5/53/Flag_of_Syria.svg"),
    TCA: s(e("0x95")),
    TCD: s("commons/4/4b/Flag_of_Chad.svg"),
    TGO: s(e("0x96")),
    THA: s(e("0x97")),
    TJK: s("commons/d/d0/Flag_of_Tajikistan.svg"),
    TKL: s("commons/8/8e/Flag_of_Tokelau.svg"),
    TKM: s(e("0x98")),
    TLS: s(e("0x99")),
    TON: s(e("0x9a")),
    TTO: s("commons/6/64/Flag_of_Trinidad_and_Tobago.svg"),
    TUN: s(e("0x9b")),
    TUR: s(e("0x9c")),
    TUV: s(e("0x9d")),
    TWN: s(e("0x9e")),
    TZA: s(e("0x9f")),
    UGA: s(e("0xa0")),
    UKR: s(e("0xa1")),
    UMI: s(e("0xa2")),
    URY: s("commons/f/fe/Flag_of_Uruguay.svg"),
    USA: s(e("0xa3")),
    UZB: s(e("0xa4")),
    VAT: s("commons/0/00/Flag_of_the_Vatican_City.svg"),
    VCT: s("commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg"),
    VEN: s(e("0xa5")),
    VGB: s("commons/4/42/Flag_of_the_British_Virgin_Islands.svg"),
    VIR: s(e("0xa6")),
    VNM: s(e("0xa7")),
    VUT: s("commons/6/6e/Flag_of_Vanuatu_(official).svg"),
    WLF: s(e("0xa8")),
    WSM: s(e("0xa9")),
    XXK: s("commons/1/1f/Flag_of_Kosovo.svg"),
    YEM: s(e("0xaa")),
    ZAF: s(e("0xab")),
    ZMB: s(e("0xac")),
    ZWE: s(e("0xad"))
};
function i(a, n) {
    if (!(a instanceof n))
        throw new TypeError(e("0xae"))
}
var m = x
  , t = function a(n, o, s, x) {
    var t = arguments[e("0xaf")] > 4 && void 0 !== arguments[4] ? arguments[4] : [];
    i(this, a),
    this.name = n,
    this.demonym = o,
    this[e("0xb0")] = m[x],
    this[e("0xb1")] = s,
    this.iso3 = x,
    this[e("0xb2")] = t
}
  , _ = [new t(e("0xb3"),e("0xb4"),"AF",e("0xb5")), new t(e("0xb6"),e("0xb7"),"AX",e("0xb8")), new t(e("0xb9"),e("0xba"),"AL","ALB"), new t(e("0xbb"),"Algerian","DZ","DZA"), new t(e("0xbc"),e("0xbd"),"AS",e("0xbe")), new t(e("0xbf"),e("0xc0"),"AD","AND"), new t(e("0xc1"),e("0xc2"),"AO",e("0xc3")), new t(e("0xc4"),"Anguillian","AI",e("0xc5")), new t(e("0xc6"),"Antiguan Barbudan","AG",e("0xc7")), new t(e("0xc8"),e("0xc9"),"AR",e("0xca")), new t(e("0xcb"),e("0xcc"),"AM",e("0xcd")), new t(e("0xce"),e("0xcf"),"AW",e("0xd0")), new t(e("0xd1"),"Australian","AU",e("0xd2")), new t(e("0xd3"),"Austrian","AT",e("0xd4")), new t(e("0xd5"),"Azerbaijani","AZ",e("0xd6")), new t("Bahamas",e("0xd7"),"BS","BHS"), new t(e("0xd8"),e("0xd9"),"BH",e("0xda")), new t(e("0xdb"),"Bengali","BD","BGD"), new t(e("0xdc"),e("0xdd"),"BB",e("0xde")), new t(e("0xdf"),e("0xe0"),"BY",e("0xe1")), new t(e("0xe2"),e("0xe3"),"BE",e("0xe4")), new t(e("0xe5"),e("0xe6"),"BZ",e("0xe7")), new t(e("0xe8"),e("0xe9"),"BJ",e("0xea")), new t(e("0xeb"),e("0xec"),"BM",e("0xed")), new t(e("0xee"),"Bhutanese","BT","BTN"), new t("Bolivia",e("0xef"),"BO","BOL"), new t(e("0xf0"),"Dutch","BQ",e("0xf1")), new t(e("0xf2"),"Bosnian","BA","BIH"), new t(e("0xf3"),e("0xf4"),"BW","BWA"), new t(e("0xf5"),e("0xf6"),"BR",e("0xf7")), new t("British Virgin Islands",e("0xf8"),"VG",e("0xf9")), new t(e("0xfa"),e("0xfb"),"BN","BRN"), new t(e("0xfc"),e("0xfd"),"BG",e("0xfe")), new t(e("0xff"),e("0x100"),"BF",e("0x101")), new t(e("0x102"),e("0x103"),"BI",e("0x104")), new t(e("0x105"),e("0x106"),"KH",e("0x107")), new t(e("0x108"),e("0x109"),"CM",e("0x10a")), new t("Canada",e("0x10b"),"CA","CAN"), new t(e("0x10c"),e("0x10d"),"CV",e("0x10e")), new t(e("0x10f"),"Caymanian","KY",e("0x110")), new t(e("0x111"),"Central African","CF",e("0x112")), new t("Chad",e("0x113"),"TD","TCD"), new t(e("0x114"),e("0x115"),"CL",e("0x116")), new t(e("0x117"),e("0x118"),"CN","CHN"), new t("Christmas Island","Christmas Islander","CX",e("0x119")), new t(e("0x11a"),e("0x11b"),"CC","CCK"), new t(e("0x11c"),e("0x11d"),"CO","COL"), new t(e("0x11e"),e("0x11f"),"KM",e("0x120")), new t(e("0x121"),e("0x122"),"CG",e("0x123")), new t("Cook Islands",e("0x124"),"CK","COK"), new t(e("0x125"),e("0x126"),"CR",e("0x127")), new t(e("0x128"),e("0x129"),"CI",e("0x12a")), new t(e("0x12b"),e("0x12c"),"HR",e("0x12d")), new t(e("0x12e"),"Cuban","CU","CUB"), new t(e("0x12f"),e("0x130"),"CW",e("0x131")), new t("Cyprus",e("0x132"),"CY",e("0x133")), new t("Czech Republic",e("0x134"),"CZ","CZE"), new t(e("0x135"),"Congolese","KP","COD"), new t(e("0x136"),e("0x137"),"DK",e("0x138")), new t("Djibouti",e("0x139"),"DJ",e("0x13a")), new t(e("0x13b"),e("0x13c"),"DM",e("0x13d")), new t(e("0x13e"),e("0x13c"),"DO",e("0x13f")), new t("Ecuador",e("0x140"),"EC",e("0x141")), new t(e("0x142"),"Egyptian","EG",e("0x143")), new t(e("0x144"),e("0x145"),"SV",e("0x146")), new t(e("0x147"),e("0x148"),"GQ",e("0x149")), new t(e("0x14a"),e("0x14b"),"ER",e("0x14c")), new t(e("0x14d"),e("0x14e"),"EE",e("0x14f")), new t(e("0x150"),e("0x151"),"ET",e("0x152")), new t(e("0x153"),e("0x154"),"FK",e("0x155")), new t(e("0x156"),e("0x157"),"FO",e("0x158")), new t(e("0x159"),e("0x15a"),"FJ",e("0x15b")), new t(e("0x15c"),"Finnish","FI",e("0x15d")), new t(e("0x15e"),e("0x15f"),"FR",e("0x160")), new t("French Guiana",e("0x161"),"GF","GUF"), new t(e("0x162"),e("0x163"),"PF",e("0x164")), new t("Gabon",e("0x165"),"GA",e("0x166")), new t("Gambia",e("0x167"),"GM",e("0x168")), new t(e("0x169"),e("0x16a"),"GE",e("0x16b")), new t(e("0x16c"),e("0x16d"),"DE",e("0x16e")), new t(e("0x16f"),e("0x170"),"GH",e("0x171")), new t("Gibraltar","Gibraltarian","GI",e("0x172")), new t(e("0x173"),"Greek","GR",e("0x174")), new t(e("0x175"),e("0x176"),"GL",e("0x177")), new t(e("0x178"),e("0x179"),"GD","GRD"), new t(e("0x17a"),"Guadeloupean","GP","GLP"), new t(e("0x17b"),e("0x17c"),"GU",e("0x17d")), new t(e("0x17e"),e("0x17f"),"GT",e("0x180")), new t(e("0x181"),e("0x182"),"GG",e("0x183")), new t("Guinea-Bissau",e("0x184"),"GW",e("0x185")), new t(e("0x186"),e("0x187"),"GN",e("0x188")), new t(e("0x189"),e("0x18a"),"GY","GUY"), new t(e("0x18b"),e("0x18c"),"HT","HTI"), new t(e("0x18d"),"Papal","VA",e("0x18e"),[e("0x18f")]), new t(e("0x190"),"Honduran","HN",e("0x191")), new t(e("0x192"),e("0x193"),"HK",e("0x194")), new t(e("0x195"),e("0x196"),"HU",e("0x197")), new t(e("0x198"),e("0x199"),"IS",e("0x19a")), new t(e("0x19b"),e("0x19c"),"IN",e("0x19d")), new t("Indonesia",e("0x19e"),"ID",e("0x19f")), new t("Iran",e("0x1a0"),"IR",e("0x1a1")), new t("Iraq","Iraqi","IQ",e("0x1a2")), new t(e("0x1a3"),"Irish","IE",e("0x1a4")), new t(e("0x1a5"),e("0x1a6"),"IM",e("0x1a7")), new t(e("0x1a8"),e("0x1a9"),"IL",e("0x1aa")), new t(e("0x1ab"),e("0x1ac"),"IT",e("0x1ad")), new t(e("0x1ae"),e("0x1af"),"JM",e("0x1b0")), new t("Japan",e("0x1b1"),"JP",e("0x1b2")), new t(e("0x1b3"),e("0x1b4"),"JE","JEY"), new t("Jordan",e("0x1b5"),"JO","JOR"), new t(e("0x1b6"),e("0x1b7"),"KZ",e("0x1b8")), new t(e("0x1b9"),e("0x1ba"),"KE",e("0x1bb")), new t(e("0x1bc"),e("0x1bd"),"KI",e("0x1be")), new t("Kosovo",e("0x1bf"),"XK","XXK"), new t(e("0x1c0"),e("0x1c1"),"KW",e("0x1c2")), new t(e("0x1c3"),"Kyrgyzstani","KG",e("0x1c4")), new t("Laos",e("0x1c5"),"LA",e("0x1c6")), new t(e("0x1c7"),"Latvian","LV",e("0x1c8")), new t("Lebanon",e("0x1c9"),"LB","LBN"), new t(e("0x1ca"),e("0x1cb"),"LS",e("0x1cc")), new t("Liberia",e("0x1cd"),"LR",e("0x1ce")), new t(e("0x1cf"),e("0x1d0"),"LY","LBY"), new t(e("0x1d1"),e("0x1d2"),"LI","LIE"), new t(e("0x1d3"),e("0x1d4"),"LT",e("0x1d5")), new t(e("0x1d6"),e("0x1d7"),"LU",e("0x1d8")), new t(e("0x1d9"),e("0x1da"),"MO",e("0x1db")), new t("Madagascar","Malagasy","MG",e("0x1dc")), new t("Malawi",e("0x1dd"),"MW",e("0x1de")), new t(e("0x1df"),"Malaysian","MY","MYS"), new t(e("0x1e0"),e("0x1e1"),"MV","MDV"), new t("Mali",e("0x1e2"),"ML",e("0x1e3")), new t(e("0x1e4"),e("0x1e5"),"MT",e("0x1e6")), new t("Marshall Islands",e("0x1e7"),"MH",e("0x1e8")), new t("Martinique",e("0x1e9"),"MQ","MTQ"), new t(e("0x1ea"),"Mauritanian","MR",e("0x1eb")), new t(e("0x1ec"),"Mauritian","MU","MUS"), new t("Mayotte","Mahoran","YT",e("0x1ed")), new t(e("0x1ee"),e("0x1ef"),"MX","MEX"), new t("Micronesia",e("0x1f0"),"FM","FSM"), new t(e("0x1f1"),e("0x1f2"),"MD",e("0x1f3")), new t(e("0x1f4"),e("0x1f5"),"MC","MCO"), new t(e("0x1f6"),e("0x1f7"),"MN",e("0x1f8")), new t(e("0x1f9"),e("0x1fa"),"ME",e("0x1fb")), new t(e("0x1fc"),e("0x1fd"),"MS","MSR"), new t(e("0x1fe"),"Moroccan","MA",e("0x1ff")), new t(e("0x200"),e("0x201"),"MZ",e("0x202")), new t(e("0x203"),e("0x204"),"MM","MMR"), new t(e("0x205"),e("0x206"),"NA",e("0x207")), new t(e("0x208"),e("0x209"),"NR","NRU"), new t(e("0x20a"),e("0x20b"),"NP","NPL"), new t(e("0x20c"),e("0x20d"),"AN",e("0x20e")), new t(e("0x20f"),e("0x130"),"NL",e("0x210")), new t(e("0x211"),e("0x212"),"NC","NCL"), new t("New Zealand","New Zealander","NZ",e("0x213")), new t(e("0x214"),e("0x215"),"NI",e("0x216")), new t("Niger",e("0x217"),"NE",e("0x218")), new t(e("0x219"),"Nigerian","NG",e("0x21a")), new t("Niue",e("0x21b"),"NU",e("0x21c")), new t(e("0x21d"),e("0x21e"),"NF",e("0x21f")), new t(e("0x220"),"North Korea","KP",e("0x221")), new t(e("0x222"),"Macedonian","MK",e("0x223")), new t(e("0x224"),e("0x225"),"MP","MNP"), new t(e("0x226"),e("0x227"),"NO",e("0x228")), new t(e("0x229"),e("0x22a"),"OM",e("0x22b")), new t(e("0x22c"),e("0x22d"),"PK","PAK"), new t(e("0x22e"),e("0x22f"),"PW",e("0x230")), new t(e("0x231"),e("0x232"),"PS",e("0x233")), new t(e("0x234"),e("0x235"),"PA",e("0x236")), new t(e("0x237"),e("0x238"),"PG","PNG"), new t(e("0x239"),"Paraguayan","PY",e("0x23a")), new t(e("0x23b"),e("0x23c"),"PE","PER"), new t(e("0x23d"),"Filipino","PH",e("0x23e")), new t(e("0x23f"),e("0x240"),"PN",e("0x241")), new t(e("0x242"),"Polish","PL",e("0x243")), new t(e("0x244"),e("0x245"),"PT",e("0x246")), new t(e("0x247"),e("0x248"),"PR","PRI"), new t(e("0x249"),e("0x24a"),"QA",e("0x24b")), new t(e("0x24c"),e("0x24d"),"RE",e("0x24e")), new t("Romania",e("0x24f"),"RO",e("0x250")), new t(e("0x251"),e("0x252"),"RU","RUS"), new t(e("0x253"),e("0x254"),"RW",e("0x255")), new t(e("0x256"),e("0x257"),"BL","BLM"), new t(e("0x258"),e("0x259"),"SH",e("0x25a"),[e("0x25b"), "Tristanian"]), new t(e("0x25c"),"Kittitian","KN",e("0x25d"),[e("0x25e")]), new t(e("0x25f"),e("0x260"),"LC","LCA"), new t(e("0x261"),e("0x262"),"MF",e("0x263")), new t(e("0x264"),e("0x265"),"PM",e("0x266")), new t(e("0x267"),e("0x268"),"VC",e("0x269")), new t(e("0x26a"),e("0x26b"),"WS",e("0x26c")), new t(e("0x26d"),e("0x26e"),"SM",e("0x26f")), new t("Sao Tome and Principe","São Toméan","ST",e("0x270")), new t(e("0x271"),e("0x272"),"SA","SAU"), new t(e("0x273"),"Senegalese","SN",e("0x274")), new t("Serbia",e("0x275"),"RS",e("0x276")), new t(e("0x277"),"Seychellois","SC",e("0x278")), new t(e("0x279"),e("0x27a"),"SL","SLE"), new t("Singapore",e("0x27b"),"SG","SGP",["SG", "Singapura", e("0x27c")]), new t("Sint Maarten","St. Maartener","SX","SXM"), new t(e("0x27d"),"Slovak","SK",e("0x27e")), new t(e("0x27f"),e("0x280"),"SI","SVN"), new t("Solomon Islands",e("0x281"),"SB",e("0x282")), new t("Somalia",e("0x283"),"SO","SOM"), new t(e("0x284"),e("0x285"),"ZA","ZAF"), new t(e("0x286"),e("0x287"),"GS","SGS"), new t(e("0x288"),"South Korean","KR",e("0x289"),["Republic of Korea"]), new t(e("0x28a"),e("0x28b"),"SS",e("0x28c")), new t("Spain","Spanish","ES","ESP"), new t(e("0x28d"),e("0x28e"),"LK",e("0x28f")), new t("Sudan","Sudanese","SD","SDN"), new t(e("0x290"),e("0x291"),"SR",e("0x292")), new t(e("0x293"),"Svalbard","SJ",e("0x294")), new t("Swaziland",e("0x295"),"SZ",e("0x296")), new t(e("0x297"),"Swedish","SE",e("0x298")), new t(e("0x299"),e("0x29a"),"CH",e("0x29b")), new t(e("0x29c"),"Syrian","SY",e("0x29d")), new t(e("0x29e"),e("0x11b"),"TW","TWN"), new t(e("0x29f"),e("0x2a0"),"TJ",e("0x2a1")), new t(e("0x2a2"),e("0x2a3"),"TZ",e("0x2a4")), new t(e("0x2a5"),e("0x2a6"),"TH",e("0x2a7")), new t("Timor-Leste",e("0x2a8"),"TL",e("0x2a9")), new t("Togo",e("0x2aa"),"TG",e("0x2ab")), new t("Tokelau",e("0x2ac"),"TK","TKL"), new t(e("0x2ad"),e("0x2ae"),"TO",e("0x2af")), new t(e("0x2b0"),"Trinidadian and Tobagonian","TT",e("0x2b1")), new t(e("0x2b2"),"Tunisian","TN",e("0x2b3")), new t(e("0x2b4"),e("0x2b5"),"TR",e("0x2b6")), new t(e("0x2b7"),e("0x2b8"),"TM","TKM"), new t(e("0x2b9"),e("0x2ba"),"TC",e("0x2bb")), new t("Tuvalu",e("0x2bc"),"TV","TUV"), new t(e("0x2bd"),e("0x2be"),"UG",e("0x2bf")), new t(e("0x2c0"),e("0x2c1"),"UA","UKR"), new t(e("0x2c2"),e("0x2c3"),"AE","ARE",["AE", "UAE"]), new t("United Kingdom",e("0x2c4"),"GB",e("0x2c5"),["UK"]), new t(e("0x2c6"),e("0x2c7"),"UM",e("0x2c8")), new t("United States",e("0x2c9"),"US","USA",[e("0x2ca")]), new t(e("0x2cb"),e("0x2cc"),"UY",e("0x2cd")), new t(e("0x2ce"),e("0x2cf"),"UZ",e("0x2d0")), new t(e("0x2d1"),e("0x2d2"),"VU","VUT"), new t("Venezuela",e("0x2d3"),"VE",e("0x2d4")), new t(e("0x2d5"),e("0x2d6"),"VN","VNM",[e("0x2d7"), e("0x2d8"), "South Vietnam"]), new t(e("0x2d9"),e("0xf8"),"VI",e("0x2da")), new t(e("0x2db"),e("0x2dc"),"WF",e("0x2dd"),[e("0x2de")]), new t(e("0x2df"),e("0x2e0"),"EH",e("0x2e1")), new t("Yemen",e("0x2e2"),"YE",e("0x2e3")), new t(e("0x2e4"),e("0x2e5"),"ZM",e("0x2e6")), new t(e("0x2e7"),e("0x2e8"),"ZW",e("0x2e9"))]
  , r = _;
function g(a, n) {
    return a.toUpperCase() === n[e("0x2ea")]()
}
function c(a, n) {
    var o = a[e("0x2eb")](n);
    return o ? o[e("0xb0")] : ""
}
var l = {
    findFlagUrlByCountryName: function(a) {
        return c(r, (function(n) {
            var o = n[e("0x2ec")]
              , s = n[e("0xb2")];
            return g(o, a) || s.some((function(n) {
                return g(n, a)
            }
            ))
        }
        ))
    },
    findFlagUrlByNationality: function(a) {
        return c(r, (function(n) {
            return g(n[e("0x2ed")], a)
        }
        ))
    },
    findFlagUrlByIso2Code: function(a) {
        return c(r, (function(n) {
            return g(n.iso2, a)
        }
        ))
    },
    findFlagUrlByIso3Code: function(a) {
        return c(r, (function(n) {
            return g(n[e("0x2ee")], a)
        }
        ))
    }
}
  , f = {
    countries: _,
    flagUrls: x,
    findFlagUrlByCountryName: l[e("0x2ef")],
    findFlagUrlByNationality: l[e("0x2f0")],
    findFlagUrlByIso2Code: l[e("0x2f1")],
    findFlagUrlByIso3Code: l.findFlagUrlByIso3Code
};
function d(a, n) {
    for (const o in n)
        Object[e("0x2f2")](a, o, {
            value: n[o],
            enumerable: !0,
            configurable: !0
        });
    return a
}
var u = function(a, n, o) {
    if (!a || typeof a === e("0x2f3"))
        throw new TypeError("Please pass an Error to err-code");
    o || (o = {}),
    typeof n === e("0x2f4") && (o = n,
    n = void 0),
    null != n && (o.code = n);
    try {
        return d(a, o)
    } catch (s) {
        o.message = a[e("0x2f5")],
        o[e("0x2f6")] = a[e("0x2f6")];
        const n = function() {};
        return n[e("0x2f7")] = Object.create(Object[e("0x2f8")](a)),
        d(new n, o)
    }
}
  , F = {};
function v(a, n) {
    typeof n === e("0x2f9") && (n = {
        forever: n
    }),
    this[e("0x2fa")] = JSON.parse(JSON.stringify(a)),
    this[e("0x2fb")] = a,
    this[e("0x2fc")] = n || {},
    this[e("0x2fd")] = n && n[e("0x2fe")] || 1 / 0,
    this[e("0x2ff")] = null,
    this._errors = [],
    this._attempts = 1,
    this[e("0x300")] = null,
    this[e("0x301")] = null,
    this[e("0x302")] = null,
    this[e("0x303")] = null,
    this._options[e("0x304")] && (this[e("0x305")] = this[e("0x2fb")].slice(0))
}
var w, b, S = v;
v.prototype[e("0x306")] = function() {
    this[e("0x307")] = 1,
    this._timeouts = this[e("0x2fa")]
}
,
v[e("0x2f7")][e("0x308")] = function() {
    this._timeout && clearTimeout(this[e("0x302")]),
    this._timeouts = [],
    this[e("0x305")] = null
}
,
v.prototype[e("0x309")] = function(a) {
    if (this._timeout && clearTimeout(this._timeout),
    !a)
        return !1;
    var n = (new Date)[e("0x30a")]();
    if (a && n - this[e("0x303")] >= this._maxRetryTime)
        return this[e("0x30b")].unshift(new Error(e("0x30c"))),
        !1;
    this[e("0x30b")][e("0x30d")](a);
    var o = this[e("0x2fb")][e("0x30e")]();
    if (void 0 === o) {
        if (!this[e("0x305")])
            return !1;
        this._errors[e("0x30f")](this[e("0x30b")][e("0xaf")] - 1, this[e("0x30b")][e("0xaf")]),
        this._timeouts = this[e("0x305")][e("0x310")](0),
        o = this._timeouts.shift()
    }
    var s = this
      , x = setTimeout((function() {
        s[e("0x307")]++,
        s[e("0x301")] && (s._timeout = setTimeout((function() {
            s[e("0x301")](s[e("0x307")])
        }
        ), s._operationTimeout),
        s[e("0x2fc")][e("0x311")] && s[e("0x302")][e("0x311")]()),
        s[e("0x2ff")](s[e("0x307")])
    }
    ), o);
    return this._options.unref && x[e("0x311")](),
    !0
}
,
v.prototype.attempt = function(a, n) {
    this[e("0x2ff")] = a,
    n && (n[e("0x312")] && (this[e("0x300")] = n[e("0x312")]),
    n.cb && (this[e("0x301")] = n.cb));
    var o = this;
    this[e("0x301")] && (this[e("0x302")] = setTimeout((function() {
        o[e("0x301")]()
    }
    ), o[e("0x300")])),
    this[e("0x303")] = (new Date)[e("0x30a")](),
    this[e("0x2ff")](this[e("0x307")])
}
,
v[e("0x2f7")].try = function(a) {
    console[e("0x313")](e("0x314")),
    this[e("0x315")](a)
}
,
v.prototype.start = function(a) {
    console[e("0x313")](e("0x316")),
    this[e("0x315")](a)
}
,
v[e("0x2f7")][e("0x317")] = v.prototype[e("0x318")],
v[e("0x2f7")].errors = function() {
    return this._errors
}
,
v[e("0x2f7")][e("0x319")] = function() {
    return this._attempts
}
,
v[e("0x2f7")][e("0x31a")] = function() {
    if (0 === this[e("0x30b")][e("0xaf")])
        return null;
    for (var a = {}, n = null, o = 0, s = 0; s < this[e("0x30b")].length; s++) {
        var x = this._errors[s]
          , i = x[e("0x2f5")]
          , m = (a[i] || 0) + 1;
        a[i] = m,
        m >= o && (n = x,
        o = m)
    }
    return n
}
,
b = S,
(w = F)[e("0x31b")] = function(a) {
    var n = w[e("0x31c")](a);
    return new b(n,{
        forever: a && a[e("0x304")],
        unref: a && a.unref,
        maxRetryTime: a && a[e("0x2fe")]
    })
}
,
w.timeouts = function(a) {
    if (a instanceof Array)
        return [][e("0x1")](a);
    var n = {
        retries: 10,
        factor: 2,
        minTimeout: 1e3,
        maxTimeout: 1 / 0,
        randomize: !1
    };
    for (var o in a)
        n[o] = a[o];
    if (n[e("0x31d")] > n.maxTimeout)
        throw new Error("minTimeout is greater than maxTimeout");
    for (var s = [], x = 0; x < n[e("0x31e")]; x++)
        s[e("0x30d")](this.createTimeout(x, n));
    return a && a[e("0x304")] && !s[e("0xaf")] && s.push(this.createTimeout(x, n)),
    s[e("0x31f")]((function(a, n) {
        return a - n
    }
    )),
    s
}
,
w[e("0x320")] = function(a, n) {
    var o = n[e("0x321")] ? Math[e("0x322")]() + 1 : 1
      , s = Math[e("0x323")](o * n.minTimeout * Math.pow(n[e("0x324")], a));
    return s = Math[e("0x325")](s, n[e("0x326")])
}
,
w.wrap = function(a, n, o) {
    if (n instanceof Array && (o = n,
    n = null),
    !o)
        for (var s in o = [],
        a)
            typeof a[s] === e("0x327") && o[e("0x30d")](s);
    for (var x = 0; x < o[e("0xaf")]; x++) {
        var i = o[x]
          , m = a[i];
        a[i] = function(o) {
            var s = w.operation(n)
              , x = Array[e("0x2f7")].slice[e("0x328")](arguments, 1)
              , i = x[e("0x329")]();
            x[e("0x30d")]((function(a) {
                s[e("0x309")](a) || (a && (arguments[0] = s[e("0x31a")]()),
                i[e("0x32a")](this, arguments))
            }
            )),
            s[e("0x315")]((function() {
                o.apply(a, x)
            }
            ))
        }
        .bind(a, m),
        a[i][e("0x32b")] = n
    }
}
;
var h = u
  , M = F
  , A = Object[e("0x2f7")][e("0x32c")];
function N(a) {
    return a && "EPROMISERETRY" === a[e("0x32d")] && A[e("0x328")](a, "retried")
}
var C = function(a, n) {
    var o, s;
    return typeof a === e("0x2f4") && typeof n === e("0x327") && (o = n,
    n = a,
    a = o),
    s = M[e("0x31b")](n),
    new Promise((function(n, o) {
        s.attempt((function(x) {
            Promise[e("0x32e")]().then((function() {
                return a((function(a) {
                    throw N(a) && (a = a[e("0x32f")]),
                    h(new Error(e("0x330")), e("0x331"), {
                        retried: a
                    })
                }
                ), x)
            }
            ))[e("0x332")](n, (function(a) {
                N(a) && (a = a[e("0x32f")],
                s[e("0x309")](a || new Error)) || o(a)
            }
            ))
        }
        ))
    }
    ))
};
export {f as d, C as p};
