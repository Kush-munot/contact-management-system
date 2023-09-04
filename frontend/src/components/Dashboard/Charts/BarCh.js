import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "country": "Afghanistan",
        "deathsPerOneMillion": 195,
        "casesPerOneMillion": 5530
    },
    {
        "country": "Albania",
        "deathsPerOneMillion": 1257,
        "casesPerOneMillion": 116777
    },
    {
        "country": "Algeria",
        "deathsPerOneMillion": 152,
        "casesPerOneMillion": 5995
    },
    {
        "country": "Andorra",
        "deathsPerOneMillion": 2130,
        "casesPerOneMillion": 619844
    },
    {
        "country": "Angola",
        "deathsPerOneMillion": 55,
        "casesPerOneMillion": 3009
    },
    {
        "country": "Anguilla",
        "deathsPerOneMillion": 788,
        "casesPerOneMillion": 256336
    },
    {
        "country": "Antigua and Barbuda",
        "deathsPerOneMillion": 1467,
        "casesPerOneMillion": 91509
    },
    {
        "country": "Argentina",
        "deathsPerOneMillion": 2838,
        "casesPerOneMillion": 218755
    },
    {
        "country": "Armenia",
        "deathsPerOneMillion": 2945,
        "casesPerOneMillion": 151177
    },
    {
        "country": "Aruba",
        "deathsPerOneMillion": 2714,
        "casesPerOneMillion": 410969
    },
    {
        "country": "Australia",
        "deathsPerOneMillion": 869,
        "casesPerOneMillion": 450863
    },
    {
        "country": "Austria",
        "deathsPerOneMillion": 2486,
        "casesPerOneMillion": 670727
    },
    {
        "country": "Azerbaijan",
        "deathsPerOneMillion": 1000,
        "casesPerOneMillion": 80793
    },
    {
        "country": "Bahamas",
        "deathsPerOneMillion": 2107,
        "casesPerOneMillion": 95087
    },
    {
        "country": "Bahrain",
        "deathsPerOneMillion": 880,
        "casesPerOneMillion": 407163
    },
    {
        "country": "Bangladesh",
        "deathsPerOneMillion": 176,
        "casesPerOneMillion": 12183
    },
    {
        "country": "Barbados",
        "deathsPerOneMillion": 2153,
        "casesPerOneMillion": 380188
    },
    {
        "country": "Belarus",
        "deathsPerOneMillion": 755,
        "casesPerOneMillion": 105381
    },
    {
        "country": "Belgium",
        "deathsPerOneMillion": 2946,
        "casesPerOneMillion": 412012
    },
    {
        "country": "Belize",
        "deathsPerOneMillion": 1669,
        "casesPerOneMillion": 171722
    },
    {
        "country": "Benin",
        "deathsPerOneMillion": 13,
        "casesPerOneMillion": 2191
    },
    {
        "country": "Bermuda",
        "deathsPerOneMillion": 2664,
        "casesPerOneMillion": 304493
    },
    {
        "country": "Bhutan",
        "deathsPerOneMillion": 27,
        "casesPerOneMillion": 79571
    },
    {
        "country": "Bolivia",
        "deathsPerOneMillion": 1868,
        "casesPerOneMillion": 100662
    },
    {
        "country": "Bosnia",
        "deathsPerOneMillion": 5032,
        "casesPerOneMillion": 124046
    },
    {
        "country": "Botswana",
        "deathsPerOneMillion": 1147,
        "casesPerOneMillion": 135275
    },
    {
        "country": "Brazil",
        "deathsPerOneMillion": 3275,
        "casesPerOneMillion": 175394
    },
    {
        "country": "British Virgin Islands",
        "deathsPerOneMillion": 2092,
        "casesPerOneMillion": 238757
    },
    {
        "country": "Brunei",
        "deathsPerOneMillion": 505,
        "casesPerOneMillion": 697127
    },
    {
        "country": "Bulgaria",
        "deathsPerOneMillion": 5618,
        "casesPerOneMillion": 191525
    },
    {
        "country": "Burkina Faso",
        "deathsPerOneMillion": 18,
        "casesPerOneMillion": 998
    },
    {
        "country": "Burundi",
        "deathsPerOneMillion": 3,
        "casesPerOneMillion": 4296
    },
    {
        "country": "Cabo Verde",
        "deathsPerOneMillion": 731,
        "casesPerOneMillion": 113159
    },
    {
        "country": "Cambodia",
        "deathsPerOneMillion": 178,
        "casesPerOneMillion": 8093
    },
    {
        "country": "Cameroon",
        "deathsPerOneMillion": 71,
        "casesPerOneMillion": 4482
    },
    {
        "country": "Canada",
        "deathsPerOneMillion": 1390,
        "casesPerOneMillion": 122601
    },
    {
        "country": "Caribbean Netherlands",
        "deathsPerOneMillion": 1426,
        "casesPerOneMillion": 438398
    },
    {
        "country": "Cayman Islands",
        "deathsPerOneMillion": 550,
        "casesPerOneMillion": 467797
    },
    {
        "country": "Central African Republic",
        "deathsPerOneMillion": 23,
        "casesPerOneMillion": 3063
    },
    {
        "country": "Chad",
        "deathsPerOneMillion": 11,
        "casesPerOneMillion": 442
    },
    {
        "country": "Channel Islands",
        "deathsPerOneMillion": 1292,
        "casesPerOneMillion": 576421
    },
    {
        "country": "Chile",
        "deathsPerOneMillion": 3350,
        "casesPerOneMillion": 274869
    },
    {
        "country": "China",
        "deathsPerOneMillion": 4,
        "casesPerOneMillion": 347
    },
    {
        "country": "Colombia",
        "deathsPerOneMillion": 2775,
        "casesPerOneMillion": 123814
    },
    {
        "country": "Comoros",
        "deathsPerOneMillion": 177,
        "casesPerOneMillion": 10038
    },
    {
        "country": "Congo",
        "deathsPerOneMillion": 67,
        "casesPerOneMillion": 4377
    },
    {
        "country": "Cook Islands",
        "deathsPerOneMillion": 114,
        "casesPerOneMillion": 407034
    },
    {
        "country": "Costa Rica",
        "deathsPerOneMillion": 1819,
        "casesPerOneMillion": 239058
    },
    {
        "country": "Croatia",
        "deathsPerOneMillion": 4507,
        "casesPerOneMillion": 313955
    },
    {
        "country": "Cuba",
        "deathsPerOneMillion": 754,
        "casesPerOneMillion": 98634
    },
    {
        "country": "Curaçao",
        "deathsPerOneMillion": 1782,
        "casesPerOneMillion": 277812
    },
    {
        "country": "Cyprus",
        "deathsPerOneMillion": 1115,
        "casesPerOneMillion": 540184
    },
    {
        "country": "Czechia",
        "deathsPerOneMillion": 3988,
        "casesPerOneMillion": 432575
    },
    {
        "country": "Côte d'Ivoire",
        "deathsPerOneMillion": 30,
        "casesPerOneMillion": 3184
    },
    {
        "country": "DRC",
        "deathsPerOneMillion": 15,
        "casesPerOneMillion": 1026
    },
    {
        "country": "Denmark",
        "deathsPerOneMillion": 1508,
        "casesPerOneMillion": 545566
    },
    {
        "country": "Diamond Princess",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 0
    },
    {
        "country": "Djibouti",
        "deathsPerOneMillion": 186,
        "casesPerOneMillion": 15441
    },
    {
        "country": "Dominica",
        "deathsPerOneMillion": 1023,
        "casesPerOneMillion": 217848
    },
    {
        "country": "Dominican Republic",
        "deathsPerOneMillion": 397,
        "casesPerOneMillion": 60332
    },
    {
        "country": "Ecuador",
        "deathsPerOneMillion": 1990,
        "casesPerOneMillion": 59024
    },
    {
        "country": "Egypt",
        "deathsPerOneMillion": 232,
        "casesPerOneMillion": 4861
    },
    {
        "country": "El Salvador",
        "deathsPerOneMillion": 646,
        "casesPerOneMillion": 30805
    },
    {
        "country": "Equatorial Guinea",
        "deathsPerOneMillion": 122,
        "casesPerOneMillion": 11512
    },
    {
        "country": "Eritrea",
        "deathsPerOneMillion": 28,
        "casesPerOneMillion": 2782
    },
    {
        "country": "Estonia",
        "deathsPerOneMillion": 2270,
        "casesPerOneMillion": 468674
    },
    {
        "country": "Ethiopia",
        "deathsPerOneMillion": 63,
        "casesPerOneMillion": 4147
    },
    {
        "country": "Falkland Islands (Malvinas)",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 545352
    },
    {
        "country": "Faroe Islands",
        "deathsPerOneMillion": 569,
        "casesPerOneMillion": 703959
    },
    {
        "country": "Fiji",
        "deathsPerOneMillion": 973,
        "casesPerOneMillion": 75997
    },
    {
        "country": "Finland",
        "deathsPerOneMillion": 1831,
        "casesPerOneMillion": 267208
    },
    {
        "country": "France",
        "deathsPerOneMillion": 2556,
        "casesPerOneMillion": 612013
    },
    {
        "country": "French Guiana",
        "deathsPerOneMillion": 1337,
        "casesPerOneMillion": 312065
    },
    {
        "country": "French Polynesia",
        "deathsPerOneMillion": 2284,
        "casesPerOneMillion": 276675
    },
    {
        "country": "Gabon",
        "deathsPerOneMillion": 132,
        "casesPerOneMillion": 21013
    },
    {
        "country": "Gambia",
        "deathsPerOneMillion": 145,
        "casesPerOneMillion": 4935
    },
    {
        "country": "Georgia",
        "deathsPerOneMillion": 4317,
        "casesPerOneMillion": 467476
    },
    {
        "country": "Germany",
        "deathsPerOneMillion": 2078,
        "casesPerOneMillion": 458119
    },
    {
        "country": "Ghana",
        "deathsPerOneMillion": 45,
        "casesPerOneMillion": 5301
    },
    {
        "country": "Gibraltar",
        "deathsPerOneMillion": 3353,
        "casesPerOneMillion": 609720
    },
    {
        "country": "Greece",
        "deathsPerOneMillion": 3595,
        "casesPerOneMillion": 591412
    },
    {
        "country": "Greenland",
        "deathsPerOneMillion": 369,
        "casesPerOneMillion": 210117
    },
    {
        "country": "Grenada",
        "deathsPerOneMillion": 2097,
        "casesPerOneMillion": 173545
    },
    {
        "country": "Guadeloupe",
        "deathsPerOneMillion": 2554,
        "casesPerOneMillion": 508349
    },
    {
        "country": "Guatemala",
        "deathsPerOneMillion": 1090,
        "casesPerOneMillion": 68658
    },
    {
        "country": "Guinea",
        "deathsPerOneMillion": 34,
        "casesPerOneMillion": 2781
    },
    {
        "country": "Guinea-Bissau",
        "deathsPerOneMillion": 86,
        "casesPerOneMillion": 4659
    },
    {
        "country": "Guyana",
        "deathsPerOneMillion": 1636,
        "casesPerOneMillion": 92419
    },
    {
        "country": "Haiti",
        "deathsPerOneMillion": 74,
        "casesPerOneMillion": 2937
    },
    {
        "country": "Holy See (Vatican City State)",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 36295
    },
    {
        "country": "Honduras",
        "deathsPerOneMillion": 1092,
        "casesPerOneMillion": 46330
    },
    {
        "country": "Hong Kong",
        "deathsPerOneMillion": 1817,
        "casesPerOneMillion": 383723
    },
    {
        "country": "Hungary",
        "deathsPerOneMillion": 5088,
        "casesPerOneMillion": 229388
    },
    {
        "country": "Iceland",
        "deathsPerOneMillion": 663,
        "casesPerOneMillion": 605661
    },
    {
        "country": "India",
        "deathsPerOneMillion": 378,
        "casesPerOneMillion": 31989
    },
    {
        "country": "Indonesia",
        "deathsPerOneMillion": 580,
        "casesPerOneMillion": 24408
    },
    {
        "country": "Iran",
        "deathsPerOneMillion": 1701,
        "casesPerOneMillion": 88506
    },
    {
        "country": "Iraq",
        "deathsPerOneMillion": 602,
        "casesPerOneMillion": 58474
    },
    {
        "country": "Ireland",
        "deathsPerOneMillion": 1829,
        "casesPerOneMillion": 342276
    },
    {
        "country": "Isle of Man",
        "deathsPerOneMillion": 1353,
        "casesPerOneMillion": 443335
    },
    {
        "country": "Israel",
        "deathsPerOneMillion": 1355,
        "casesPerOneMillion": 518334
    },
    {
        "country": "Italy",
        "deathsPerOneMillion": 3174,
        "casesPerOneMillion": 430709
    },
    {
        "country": "Jamaica",
        "deathsPerOneMillion": 1205,
        "casesPerOneMillion": 52213
    },
    {
        "country": "Japan",
        "deathsPerOneMillion": 595,
        "casesPerOneMillion": 269169
    },
    {
        "country": "Jordan",
        "deathsPerOneMillion": 1371,
        "casesPerOneMillion": 169597
    },
    {
        "country": "Kazakhstan",
        "deathsPerOneMillion": 721,
        "casesPerOneMillion": 73514
    },
    {
        "country": "Kenya",
        "deathsPerOneMillion": 101,
        "casesPerOneMillion": 6118
    },
    {
        "country": "Kiribati",
        "deathsPerOneMillion": 194,
        "casesPerOneMillion": 41201
    },
    {
        "country": "Kuwait",
        "deathsPerOneMillion": 587,
        "casesPerOneMillion": 152072
    },
    {
        "country": "Kyrgyzstan",
        "deathsPerOneMillion": 445,
        "casesPerOneMillion": 30750
    },
    {
        "country": "Lao People's Democratic Republic",
        "deathsPerOneMillion": 101,
        "casesPerOneMillion": 29250
    },
    {
        "country": "Latvia",
        "deathsPerOneMillion": 3457,
        "casesPerOneMillion": 529173
    },
    {
        "country": "Lebanon",
        "deathsPerOneMillion": 1636,
        "casesPerOneMillion": 185277
    },
    {
        "country": "Lesotho",
        "deathsPerOneMillion": 332,
        "casesPerOneMillion": 15990
    },
    {
        "country": "Liberia",
        "deathsPerOneMillion": 56,
        "casesPerOneMillion": 1525
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "deathsPerOneMillion": 914,
        "casesPerOneMillion": 72048
    },
    {
        "country": "Liechtenstein",
        "deathsPerOneMillion": 2449,
        "casesPerOneMillion": 559408
    },
    {
        "country": "Lithuania",
        "deathsPerOneMillion": 3644,
        "casesPerOneMillion": 497191
    },
    {
        "country": "Luxembourg",
        "deathsPerOneMillion": 1918,
        "casesPerOneMillion": 498091
    },
    {
        "country": "MS Zaandam",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 0
    },
    {
        "country": "Macao",
        "deathsPerOneMillion": 184,
        "casesPerOneMillion": 23101
    },
    {
        "country": "Macedonia",
        "deathsPerOneMillion": 4649,
        "casesPerOneMillion": 167383
    },
    {
        "country": "Madagascar",
        "deathsPerOneMillion": 49,
        "casesPerOneMillion": 2340
    },
    {
        "country": "Malawi",
        "deathsPerOneMillion": 133,
        "casesPerOneMillion": 4402
    },
    {
        "country": "Malaysia",
        "deathsPerOneMillion": 1120,
        "casesPerOneMillion": 154403
    },
    {
        "country": "Maldives",
        "deathsPerOneMillion": 584,
        "casesPerOneMillion": 345087
    },
    {
        "country": "Mali",
        "deathsPerOneMillion": 35,
        "casesPerOneMillion": 1544
    },
    {
        "country": "Malta",
        "deathsPerOneMillion": 1930,
        "casesPerOneMillion": 270374
    },
    {
        "country": "Marshall Islands",
        "deathsPerOneMillion": 283,
        "casesPerOneMillion": 268395
    },
    {
        "country": "Martinique",
        "deathsPerOneMillion": 2946,
        "casesPerOneMillion": 615777
    },
    {
        "country": "Mauritania",
        "deathsPerOneMillion": 203,
        "casesPerOneMillion": 12998
    },
    {
        "country": "Mauritius",
        "deathsPerOneMillion": 824,
        "casesPerOneMillion": 33631
    },
    {
        "country": "Mayotte",
        "deathsPerOneMillion": 657,
        "casesPerOneMillion": 146815
    },
    {
        "country": "Mexico",
        "deathsPerOneMillion": 2541,
        "casesPerOneMillion": 58021
    },
    {
        "country": "Micronesia",
        "deathsPerOneMillion": 553,
        "casesPerOneMillion": 225808
    },
    {
        "country": "Moldova",
        "deathsPerOneMillion": 3022,
        "casesPerOneMillion": 154757
    },
    {
        "country": "Monaco",
        "deathsPerOneMillion": 1684,
        "casesPerOneMillion": 424830
    },
    {
        "country": "Mongolia",
        "deathsPerOneMillion": 645,
        "casesPerOneMillion": 299275
    },
    {
        "country": "Montenegro",
        "deathsPerOneMillion": 4504,
        "casesPerOneMillion": 465599
    },
    {
        "country": "Montserrat",
        "deathsPerOneMillion": 1611,
        "casesPerOneMillion": 282578
    },
    {
        "country": "Morocco",
        "deathsPerOneMillion": 431,
        "casesPerOneMillion": 33769
    },
    {
        "country": "Mozambique",
        "deathsPerOneMillion": 68,
        "casesPerOneMillion": 7054
    },
    {
        "country": "Myanmar",
        "deathsPerOneMillion": 353,
        "casesPerOneMillion": 11610
    },
    {
        "country": "N. Korea",
        "deathsPerOneMillion": 3,
        "casesPerOneMillion": 183636
    },
    {
        "country": "Namibia",
        "deathsPerOneMillion": 1556,
        "casesPerOneMillion": 65302
    },
    {
        "country": "Nauru",
        "deathsPerOneMillion": 92,
        "casesPerOneMillion": 494635
    },
    {
        "country": "Nepal",
        "deathsPerOneMillion": 398,
        "casesPerOneMillion": 33198
    },
    {
        "country": "Netherlands",
        "deathsPerOneMillion": 1336,
        "casesPerOneMillion": 500270
    },
    {
        "country": "New Caledonia",
        "deathsPerOneMillion": 1079,
        "casesPerOneMillion": 274726
    },
    {
        "country": "New Zealand",
        "deathsPerOneMillion": 964,
        "casesPerOneMillion": 501061
    },
    {
        "country": "Nicaragua",
        "deathsPerOneMillion": 33,
        "casesPerOneMillion": 2728
    },
    {
        "country": "Niger",
        "deathsPerOneMillion": 12,
        "casesPerOneMillion": 381
    },
    {
        "country": "Nigeria",
        "deathsPerOneMillion": 15,
        "casesPerOneMillion": 1230
    },
    {
        "country": "Niue",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 545006
    },
    {
        "country": "Norway",
        "deathsPerOneMillion": 1021,
        "casesPerOneMillion": 269798
    },
    {
        "country": "Oman",
        "deathsPerOneMillion": 869,
        "casesPerOneMillion": 75028
    },
    {
        "country": "Pakistan",
        "deathsPerOneMillion": 134,
        "casesPerOneMillion": 6892
    },
    {
        "country": "Palau",
        "deathsPerOneMillion": 494,
        "casesPerOneMillion": 341578
    },
    {
        "country": "Palestine",
        "deathsPerOneMillion": 1011,
        "casesPerOneMillion": 116173
    },
    {
        "country": "Panama",
        "deathsPerOneMillion": 1947,
        "casesPerOneMillion": 235677
    },
    {
        "country": "Papua New Guinea",
        "deathsPerOneMillion": 72,
        "casesPerOneMillion": 5043
    },
    {
        "country": "Paraguay",
        "deathsPerOneMillion": 2739,
        "casesPerOneMillion": 111367
    },
    {
        "country": "Peru",
        "deathsPerOneMillion": 6582,
        "casesPerOneMillion": 134158
    },
    {
        "country": "Philippines",
        "deathsPerOneMillion": 592,
        "casesPerOneMillion": 37100
    },
    {
        "country": "Poland",
        "deathsPerOneMillion": 3170,
        "casesPerOneMillion": 172740
    },
    {
        "country": "Portugal",
        "deathsPerOneMillion": 2672,
        "casesPerOneMillion": 552351
    },
    {
        "country": "Qatar",
        "deathsPerOneMillion": 232,
        "casesPerOneMillion": 172664
    },
    {
        "country": "Romania",
        "deathsPerOneMillion": 3587,
        "casesPerOneMillion": 179555
    },
    {
        "country": "Russia",
        "deathsPerOneMillion": 2743,
        "casesPerOneMillion": 157673
    },
    {
        "country": "Rwanda",
        "deathsPerOneMillion": 108,
        "casesPerOneMillion": 9793
    },
    {
        "country": "Réunion",
        "deathsPerOneMillion": 1014,
        "casesPerOneMillion": 535854
    },
    {
        "country": "S. Korea",
        "deathsPerOneMillion": 698,
        "casesPerOneMillion": 670887
    },
    {
        "country": "Saint Helena",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 354211
    },
    {
        "country": "Saint Kitts and Nevis",
        "deathsPerOneMillion": 891,
        "casesPerOneMillion": 122645
    },
    {
        "country": "Saint Lucia",
        "deathsPerOneMillion": 2209,
        "casesPerOneMillion": 162344
    },
    {
        "country": "Saint Martin",
        "deathsPerOneMillion": 1586,
        "casesPerOneMillion": 310194
    },
    {
        "country": "Saint Pierre Miquelon",
        "deathsPerOneMillion": 347,
        "casesPerOneMillion": 599410
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "deathsPerOneMillion": 1112,
        "casesPerOneMillion": 86337
    },
    {
        "country": "Samoa",
        "deathsPerOneMillion": 153,
        "casesPerOneMillion": 82961
    },
    {
        "country": "San Marino",
        "deathsPerOneMillion": 3697,
        "casesPerOneMillion": 716327
    },
    {
        "country": "Sao Tome and Principe",
        "deathsPerOneMillion": 351,
        "casesPerOneMillion": 28971
    },
    {
        "country": "Saudi Arabia",
        "deathsPerOneMillion": 269,
        "casesPerOneMillion": 23475
    },
    {
        "country": "Senegal",
        "deathsPerOneMillion": 112,
        "casesPerOneMillion": 5042
    },
    {
        "country": "Serbia",
        "deathsPerOneMillion": 2087,
        "casesPerOneMillion": 294112
    },
    {
        "country": "Seychelles",
        "deathsPerOneMillion": 1730,
        "casesPerOneMillion": 512311
    },
    {
        "country": "Sierra Leone",
        "deathsPerOneMillion": 15,
        "casesPerOneMillion": 934
    },
    {
        "country": "Singapore",
        "deathsPerOneMillion": 315,
        "casesPerOneMillion": 430001
    },
    {
        "country": "Sint Maarten",
        "deathsPerOneMillion": 2093,
        "casesPerOneMillion": 251353
    },
    {
        "country": "Slovakia",
        "deathsPerOneMillion": 3877,
        "casesPerOneMillion": 341936
    },
    {
        "country": "Slovenia",
        "deathsPerOneMillion": 3417,
        "casesPerOneMillion": 647028
    },
    {
        "country": "Solomon Islands",
        "deathsPerOneMillion": 212,
        "casesPerOneMillion": 34077
    },
    {
        "country": "Somalia",
        "deathsPerOneMillion": 81,
        "casesPerOneMillion": 1623
    },
    {
        "country": "South Africa",
        "deathsPerOneMillion": 1689,
        "casesPerOneMillion": 67095
    },
    {
        "country": "South Sudan",
        "deathsPerOneMillion": 12,
        "casesPerOneMillion": 1581
    },
    {
        "country": "Spain",
        "deathsPerOneMillion": 2606,
        "casesPerOneMillion": 297840
    },
    {
        "country": "Sri Lanka",
        "deathsPerOneMillion": 782,
        "casesPerOneMillion": 31173
    },
    {
        "country": "St. Barth",
        "deathsPerOneMillion": 603,
        "casesPerOneMillion": 553746
    },
    {
        "country": "Sudan",
        "deathsPerOneMillion": 110,
        "casesPerOneMillion": 1391
    },
    {
        "country": "Suriname",
        "deathsPerOneMillion": 2359,
        "casesPerOneMillion": 138378
    },
    {
        "country": "Swaziland",
        "deathsPerOneMillion": 1204,
        "casesPerOneMillion": 63201
    },
    {
        "country": "Sweden",
        "deathsPerOneMillion": 2424,
        "casesPerOneMillion": 265684
    },
    {
        "country": "Switzerland",
        "deathsPerOneMillion": 1647,
        "casesPerOneMillion": 502613
    },
    {
        "country": "Syrian Arab Republic",
        "deathsPerOneMillion": 163,
        "casesPerOneMillion": 2982
    },
    {
        "country": "Taiwan",
        "deathsPerOneMillion": 796,
        "casesPerOneMillion": 428720
    },
    {
        "country": "Tajikistan",
        "deathsPerOneMillion": 13,
        "casesPerOneMillion": 1786
    },
    {
        "country": "Tanzania",
        "deathsPerOneMillion": 13,
        "casesPerOneMillion": 681
    },
    {
        "country": "Thailand",
        "deathsPerOneMillion": 492,
        "casesPerOneMillion": 67873
    },
    {
        "country": "Timor-Leste",
        "deathsPerOneMillion": 101,
        "casesPerOneMillion": 17131
    },
    {
        "country": "Togo",
        "deathsPerOneMillion": 33,
        "casesPerOneMillion": 4552
    },
    {
        "country": "Tokelau",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 58055
    },
    {
        "country": "Tonga",
        "deathsPerOneMillion": 121,
        "casesPerOneMillion": 156094
    },
    {
        "country": "Trinidad and Tobago",
        "deathsPerOneMillion": 3121,
        "casesPerOneMillion": 136143
    },
    {
        "country": "Tunisia",
        "deathsPerOneMillion": 2442,
        "casesPerOneMillion": 95741
    },
    {
        "country": "Turkey",
        "deathsPerOneMillion": 1194,
        "casesPerOneMillion": 201399
    },
    {
        "country": "Turks and Caicos Islands",
        "deathsPerOneMillion": 981,
        "casesPerOneMillion": 166830
    },
    {
        "country": "Tuvalu",
        "deathsPerOneMillion": 83,
        "casesPerOneMillion": 243909
    },
    {
        "country": "UAE",
        "deathsPerOneMillion": 233,
        "casesPerOneMillion": 105837
    },
    {
        "country": "UK",
        "deathsPerOneMillion": 3339,
        "casesPerOneMillion": 360179
    },
    {
        "country": "USA",
        "deathsPerOneMillion": 3506,
        "casesPerOneMillion": 322954
    },
    {
        "country": "Uganda",
        "deathsPerOneMillion": 75,
        "casesPerOneMillion": 3546
    },
    {
        "country": "Ukraine",
        "deathsPerOneMillion": 2603,
        "casesPerOneMillion": 128681
    },
    {
        "country": "Uruguay",
        "deathsPerOneMillion": 2184,
        "casesPerOneMillion": 297131
    },
    {
        "country": "Uzbekistan",
        "deathsPerOneMillion": 48,
        "casesPerOneMillion": 7378
    },
    {
        "country": "Vanuatu",
        "deathsPerOneMillion": 44,
        "casesPerOneMillion": 37346
    },
    {
        "country": "Venezuela",
        "deathsPerOneMillion": 200,
        "casesPerOneMillion": 18885
    },
    {
        "country": "Vietnam",
        "deathsPerOneMillion": 437,
        "casesPerOneMillion": 117458
    },
    {
        "country": "Wallis and Futuna",
        "deathsPerOneMillion": 728,
        "casesPerOneMillion": 323256
    },
    {
        "country": "Western Sahara",
        "deathsPerOneMillion": 2,
        "casesPerOneMillion": 16
    },
    {
        "country": "Yemen",
        "deathsPerOneMillion": 69,
        "casesPerOneMillion": 383
    },
    {
        "country": "Zambia",
        "deathsPerOneMillion": 209,
        "casesPerOneMillion": 17940
    },
    {
        "country": "Zimbabwe",
        "deathsPerOneMillion": 373,
        "casesPerOneMillion": 17332
    }
]

export default function App() {
    return (
        <div>
            <h2>Bi-Axial Bar Chart</h2>
            <BarChart
                width={1100}
                height={600}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="deathsPerOneMillion" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="casesPerOneMillion" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
