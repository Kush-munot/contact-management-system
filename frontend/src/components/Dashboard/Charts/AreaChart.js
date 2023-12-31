
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        "country": "Afghanistan",
        "casesPerOneMillion": 5530
    },
    {
        "country": "Albania",
        "casesPerOneMillion": 116777
    },
    {
        "country": "Algeria",
        "casesPerOneMillion": 5995
    },
    {
        "country": "Andorra",
        "casesPerOneMillion": 619844
    },
    {
        "country": "Angola",
        "casesPerOneMillion": 3009
    },
    {
        "country": "Anguilla",
        "casesPerOneMillion": 256336
    },
    {
        "country": "Antigua and Barbuda",
        "casesPerOneMillion": 91509
    },
    {
        "country": "Argentina",
        "casesPerOneMillion": 218755
    },
    {
        "country": "Armenia",
        "casesPerOneMillion": 151177
    },
    {
        "country": "Aruba",
        "casesPerOneMillion": 410969
    },
    {
        "country": "Australia",
        "casesPerOneMillion": 450863
    },
    {
        "country": "Austria",
        "casesPerOneMillion": 670727
    },
    {
        "country": "Azerbaijan",
        "casesPerOneMillion": 80793
    },
    {
        "country": "Bahamas",
        "casesPerOneMillion": 95087
    },
    {
        "country": "Bahrain",
        "casesPerOneMillion": 407163
    },
    {
        "country": "Bangladesh",
        "casesPerOneMillion": 12183
    },
    {
        "country": "Barbados",
        "casesPerOneMillion": 380188
    },
    {
        "country": "Belarus",
        "casesPerOneMillion": 105381
    },
    {
        "country": "Belgium",
        "casesPerOneMillion": 412012
    },
    {
        "country": "Belize",
        "casesPerOneMillion": 171722
    },
    {
        "country": "Benin",
        "casesPerOneMillion": 2191
    },
    {
        "country": "Bermuda",
        "casesPerOneMillion": 304493
    },
    {
        "country": "Bhutan",
        "casesPerOneMillion": 79571
    },
    {
        "country": "Bolivia",
        "casesPerOneMillion": 100662
    },
    {
        "country": "Bosnia",
        "casesPerOneMillion": 124046
    },
    {
        "country": "Botswana",
        "casesPerOneMillion": 135275
    },
    {
        "country": "Brazil",
        "casesPerOneMillion": 175394
    },
    {
        "country": "British Virgin Islands",
        "casesPerOneMillion": 238757
    },
    {
        "country": "Brunei",
        "casesPerOneMillion": 697127
    },
    {
        "country": "Bulgaria",
        "casesPerOneMillion": 191525
    },
    {
        "country": "Burkina Faso",
        "casesPerOneMillion": 998
    },
    {
        "country": "Burundi",
        "casesPerOneMillion": 4296
    },
    {
        "country": "Cabo Verde",
        "casesPerOneMillion": 113159
    },
    {
        "country": "Cambodia",
        "casesPerOneMillion": 8093
    },
    {
        "country": "Cameroon",
        "casesPerOneMillion": 4482
    },
    {
        "country": "Canada",
        "casesPerOneMillion": 122601
    },
    {
        "country": "Caribbean Netherlands",
        "casesPerOneMillion": 438398
    },
    {
        "country": "Cayman Islands",
        "casesPerOneMillion": 467797
    },
    {
        "country": "Central African Republic",
        "casesPerOneMillion": 3063
    },
    {
        "country": "Chad",
        "casesPerOneMillion": 442
    },
    {
        "country": "Channel Islands",
        "casesPerOneMillion": 576421
    },
    {
        "country": "Chile",
        "casesPerOneMillion": 274869
    },
    {
        "country": "China",
        "casesPerOneMillion": 347
    },
    {
        "country": "Colombia",
        "casesPerOneMillion": 123814
    },
    {
        "country": "Comoros",
        "casesPerOneMillion": 10038
    },
    {
        "country": "Congo",
        "casesPerOneMillion": 4377
    },
    {
        "country": "Cook Islands",
        "casesPerOneMillion": 407034
    },
    {
        "country": "Costa Rica",
        "casesPerOneMillion": 239058
    },
    {
        "country": "Croatia",
        "casesPerOneMillion": 313955
    },
    {
        "country": "Cuba",
        "casesPerOneMillion": 98634
    },
    {
        "country": "Curaçao",
        "casesPerOneMillion": 277812
    },
    {
        "country": "Cyprus",
        "casesPerOneMillion": 540184
    },
    {
        "country": "Czechia",
        "casesPerOneMillion": 432575
    },
    {
        "country": "Côte d'Ivoire",
        "casesPerOneMillion": 3184
    },
    {
        "country": "DRC",
        "casesPerOneMillion": 1026
    },
    {
        "country": "Denmark",
        "casesPerOneMillion": 545566
    },
    {
        "country": "Diamond Princess",
        "casesPerOneMillion": 0
    },
    {
        "country": "Djibouti",
        "casesPerOneMillion": 15441
    },
    {
        "country": "Dominica",
        "casesPerOneMillion": 217848
    },
    {
        "country": "Dominican Republic",
        "casesPerOneMillion": 60332
    },
    {
        "country": "Ecuador",
        "casesPerOneMillion": 59024
    },
    {
        "country": "Egypt",
        "casesPerOneMillion": 4861
    },
    {
        "country": "El Salvador",
        "casesPerOneMillion": 30805
    },
    {
        "country": "Equatorial Guinea",
        "casesPerOneMillion": 11512
    },
    {
        "country": "Eritrea",
        "casesPerOneMillion": 2782
    },
    {
        "country": "Estonia",
        "casesPerOneMillion": 468674
    },
    {
        "country": "Ethiopia",
        "casesPerOneMillion": 4147
    },
    {
        "country": "Falkland Islands (Malvinas)",
        "casesPerOneMillion": 545352
    },
    {
        "country": "Faroe Islands",
        "casesPerOneMillion": 703959
    },
    {
        "country": "Fiji",
        "casesPerOneMillion": 75997
    },
    {
        "country": "Finland",
        "casesPerOneMillion": 267208
    },
    {
        "country": "France",
        "casesPerOneMillion": 612013
    },
    {
        "country": "French Guiana",
        "casesPerOneMillion": 312065
    },
    {
        "country": "French Polynesia",
        "casesPerOneMillion": 276675
    },
    {
        "country": "Gabon",
        "casesPerOneMillion": 21013
    },
    {
        "country": "Gambia",
        "casesPerOneMillion": 4935
    },
    {
        "country": "Georgia",
        "casesPerOneMillion": 467476
    },
    {
        "country": "Germany",
        "casesPerOneMillion": 458119
    },
    {
        "country": "Ghana",
        "casesPerOneMillion": 5301
    },
    {
        "country": "Gibraltar",
        "casesPerOneMillion": 609720
    },
    {
        "country": "Greece",
        "casesPerOneMillion": 591412
    },
    {
        "country": "Greenland",
        "casesPerOneMillion": 210117
    },
    {
        "country": "Grenada",
        "casesPerOneMillion": 173545
    },
    {
        "country": "Guadeloupe",
        "casesPerOneMillion": 508349
    },
    {
        "country": "Guatemala",
        "casesPerOneMillion": 68658
    },
    {
        "country": "Guinea",
        "casesPerOneMillion": 2781
    },
    {
        "country": "Guinea-Bissau",
        "casesPerOneMillion": 4659
    },
    {
        "country": "Guyana",
        "casesPerOneMillion": 92419
    },
    {
        "country": "Haiti",
        "casesPerOneMillion": 2937
    },
    {
        "country": "Holy See (Vatican City State)",
        "casesPerOneMillion": 36295
    },
    {
        "country": "Honduras",
        "casesPerOneMillion": 46330
    },
    {
        "country": "Hong Kong",
        "casesPerOneMillion": 383723
    },
    {
        "country": "Hungary",
        "casesPerOneMillion": 229388
    },
    {
        "country": "Iceland",
        "casesPerOneMillion": 605661
    },
    {
        "country": "India",
        "casesPerOneMillion": 31989
    },
    {
        "country": "Indonesia",
        "casesPerOneMillion": 24408
    },
    {
        "country": "Iran",
        "casesPerOneMillion": 88506
    },
    {
        "country": "Iraq",
        "casesPerOneMillion": 58474
    },
    {
        "country": "Ireland",
        "casesPerOneMillion": 342276
    },
    {
        "country": "Isle of Man",
        "casesPerOneMillion": 443335
    },
    {
        "country": "Israel",
        "casesPerOneMillion": 518334
    },
    {
        "country": "Italy",
        "casesPerOneMillion": 430709
    },
    {
        "country": "Jamaica",
        "casesPerOneMillion": 52213
    },
    {
        "country": "Japan",
        "casesPerOneMillion": 269169
    },
    {
        "country": "Jordan",
        "casesPerOneMillion": 169597
    },
    {
        "country": "Kazakhstan",
        "casesPerOneMillion": 73514
    },
    {
        "country": "Kenya",
        "casesPerOneMillion": 6118
    },
    {
        "country": "Kiribati",
        "casesPerOneMillion": 41201
    },
    {
        "country": "Kuwait",
        "casesPerOneMillion": 152072
    },
    {
        "country": "Kyrgyzstan",
        "casesPerOneMillion": 30750
    },
    {
        "country": "Lao People's Democratic Republic",
        "casesPerOneMillion": 29250
    },
    {
        "country": "Latvia",
        "casesPerOneMillion": 529173
    },
    {
        "country": "Lebanon",
        "casesPerOneMillion": 185277
    },
    {
        "country": "Lesotho",
        "casesPerOneMillion": 15990
    },
    {
        "country": "Liberia",
        "casesPerOneMillion": 1525
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "casesPerOneMillion": 72048
    },
    {
        "country": "Liechtenstein",
        "casesPerOneMillion": 559408
    },
    {
        "country": "Lithuania",
        "casesPerOneMillion": 497191
    },
    {
        "country": "Luxembourg",
        "casesPerOneMillion": 498091
    },
    {
        "country": "MS Zaandam",
        "casesPerOneMillion": 0
    },
    {
        "country": "Macao",
        "casesPerOneMillion": 23101
    },
    {
        "country": "Macedonia",
        "casesPerOneMillion": 167383
    },
    {
        "country": "Madagascar",
        "casesPerOneMillion": 2340
    },
    {
        "country": "Malawi",
        "casesPerOneMillion": 4402
    },
    {
        "country": "Malaysia",
        "casesPerOneMillion": 154403
    },
    {
        "country": "Maldives",
        "casesPerOneMillion": 345087
    },
    {
        "country": "Mali",
        "casesPerOneMillion": 1544
    },
    {
        "country": "Malta",
        "casesPerOneMillion": 270374
    },
    {
        "country": "Marshall Islands",
        "casesPerOneMillion": 268395
    },
    {
        "country": "Martinique",
        "casesPerOneMillion": 615777
    },
    {
        "country": "Mauritania",
        "casesPerOneMillion": 12998
    },
    {
        "country": "Mauritius",
        "casesPerOneMillion": 33631
    },
    {
        "country": "Mayotte",
        "casesPerOneMillion": 146815
    },
    {
        "country": "Mexico",
        "casesPerOneMillion": 58021
    },
    {
        "country": "Micronesia",
        "casesPerOneMillion": 225808
    },
    {
        "country": "Moldova",
        "casesPerOneMillion": 154757
    },
    {
        "country": "Monaco",
        "casesPerOneMillion": 424830
    },
    {
        "country": "Mongolia",
        "casesPerOneMillion": 299275
    },
    {
        "country": "Montenegro",
        "casesPerOneMillion": 465599
    },
    {
        "country": "Montserrat",
        "casesPerOneMillion": 282578
    },
    {
        "country": "Morocco",
        "casesPerOneMillion": 33769
    },
    {
        "country": "Mozambique",
        "casesPerOneMillion": 7054
    },
    {
        "country": "Myanmar",
        "casesPerOneMillion": 11610
    },
    {
        "country": "N. Korea",
        "casesPerOneMillion": 183636
    },
    {
        "country": "Namibia",
        "casesPerOneMillion": 65302
    },
    {
        "country": "Nauru",
        "casesPerOneMillion": 494635
    },
    {
        "country": "Nepal",
        "casesPerOneMillion": 33198
    },
    {
        "country": "Netherlands",
        "casesPerOneMillion": 500270
    },
    {
        "country": "New Caledonia",
        "casesPerOneMillion": 274726
    },
    {
        "country": "New Zealand",
        "casesPerOneMillion": 501061
    },
    {
        "country": "Nicaragua",
        "casesPerOneMillion": 2728
    },
    {
        "country": "Niger",
        "casesPerOneMillion": 381
    },
    {
        "country": "Nigeria",
        "casesPerOneMillion": 1230
    },
    {
        "country": "Niue",
        "casesPerOneMillion": 545006
    },
    {
        "country": "Norway",
        "casesPerOneMillion": 269798
    },
    {
        "country": "Oman",
        "casesPerOneMillion": 75028
    },
    {
        "country": "Pakistan",
        "casesPerOneMillion": 6892
    },
    {
        "country": "Palau",
        "casesPerOneMillion": 341578
    },
    {
        "country": "Palestine",
        "casesPerOneMillion": 116173
    },
    {
        "country": "Panama",
        "casesPerOneMillion": 235677
    },
    {
        "country": "Papua New Guinea",
        "casesPerOneMillion": 5043
    },
    {
        "country": "Paraguay",
        "casesPerOneMillion": 111367
    },
    {
        "country": "Peru",
        "casesPerOneMillion": 134158
    },
    {
        "country": "Philippines",
        "casesPerOneMillion": 37100
    },
    {
        "country": "Poland",
        "casesPerOneMillion": 172740
    },
    {
        "country": "Portugal",
        "casesPerOneMillion": 552351
    },
    {
        "country": "Qatar",
        "casesPerOneMillion": 172664
    },
    {
        "country": "Romania",
        "casesPerOneMillion": 179555
    },
    {
        "country": "Russia",
        "casesPerOneMillion": 157673
    },
    {
        "country": "Rwanda",
        "casesPerOneMillion": 9793
    },
    {
        "country": "Réunion",
        "casesPerOneMillion": 535854
    },
    {
        "country": "S. Korea",
        "casesPerOneMillion": 670887
    },
    {
        "country": "Saint Helena",
        "casesPerOneMillion": 354211
    },
    {
        "country": "Saint Kitts and Nevis",
        "casesPerOneMillion": 122645
    },
    {
        "country": "Saint Lucia",
        "casesPerOneMillion": 162344
    },
    {
        "country": "Saint Martin",
        "casesPerOneMillion": 310194
    },
    {
        "country": "Saint Pierre Miquelon",
        "casesPerOneMillion": 599410
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "casesPerOneMillion": 86337
    },
    {
        "country": "Samoa",
        "casesPerOneMillion": 82961
    },
    {
        "country": "San Marino",
        "casesPerOneMillion": 716327
    },
    {
        "country": "Sao Tome and Principe",
        "casesPerOneMillion": 28971
    },
    {
        "country": "Saudi Arabia",
        "casesPerOneMillion": 23475
    },
    {
        "country": "Senegal",
        "casesPerOneMillion": 5042
    },
    {
        "country": "Serbia",
        "casesPerOneMillion": 294112
    },
    {
        "country": "Seychelles",
        "casesPerOneMillion": 512311
    },
    {
        "country": "Sierra Leone",
        "casesPerOneMillion": 934
    },
    {
        "country": "Singapore",
        "casesPerOneMillion": 430001
    },
    {
        "country": "Sint Maarten",
        "casesPerOneMillion": 251353
    },
    {
        "country": "Slovakia",
        "casesPerOneMillion": 341936
    },
    {
        "country": "Slovenia",
        "casesPerOneMillion": 647028
    },
    {
        "country": "Solomon Islands",
        "casesPerOneMillion": 34077
    },
    {
        "country": "Somalia",
        "casesPerOneMillion": 1623
    },
    {
        "country": "South Africa",
        "casesPerOneMillion": 67095
    },
    {
        "country": "South Sudan",
        "casesPerOneMillion": 1581
    },
    {
        "country": "Spain",
        "casesPerOneMillion": 297840
    },
    {
        "country": "Sri Lanka",
        "casesPerOneMillion": 31173
    },
    {
        "country": "St. Barth",
        "casesPerOneMillion": 553746
    },
    {
        "country": "Sudan",
        "casesPerOneMillion": 1391
    },
    {
        "country": "Suriname",
        "casesPerOneMillion": 138378
    },
    {
        "country": "Swaziland",
        "casesPerOneMillion": 63201
    },
    {
        "country": "Sweden",
        "casesPerOneMillion": 265684
    },
    {
        "country": "Switzerland",
        "casesPerOneMillion": 502613
    },
    {
        "country": "Syrian Arab Republic",
        "casesPerOneMillion": 2982
    },
    {
        "country": "Taiwan",
        "casesPerOneMillion": 428720
    },
    {
        "country": "Tajikistan",
        "casesPerOneMillion": 1786
    },
    {
        "country": "Tanzania",
        "casesPerOneMillion": 681
    },
    {
        "country": "Thailand",
        "casesPerOneMillion": 67873
    },
    {
        "country": "Timor-Leste",
        "casesPerOneMillion": 17131
    },
    {
        "country": "Togo",
        "casesPerOneMillion": 4552
    },
    {
        "country": "Tokelau",
        "casesPerOneMillion": 58055
    },
    {
        "country": "Tonga",
        "casesPerOneMillion": 156094
    },
    {
        "country": "Trinidad and Tobago",
        "casesPerOneMillion": 136143
    },
    {
        "country": "Tunisia",
        "casesPerOneMillion": 95741
    },
    {
        "country": "Turkey",
        "casesPerOneMillion": 201399
    },
    {
        "country": "Turks and Caicos Islands",
        "casesPerOneMillion": 166830
    },
    {
        "country": "Tuvalu",
        "casesPerOneMillion": 243909
    },
    {
        "country": "UAE",
        "casesPerOneMillion": 105837
    },
    {
        "country": "UK",
        "casesPerOneMillion": 360179
    },
    {
        "country": "USA",
        "casesPerOneMillion": 322954
    },
    {
        "country": "Uganda",
        "casesPerOneMillion": 3546
    },
    {
        "country": "Ukraine",
        "casesPerOneMillion": 128681
    },
    {
        "country": "Uruguay",
        "casesPerOneMillion": 297131
    },
    {
        "country": "Uzbekistan",
        "casesPerOneMillion": 7378
    },
    {
        "country": "Vanuatu",
        "casesPerOneMillion": 37346
    },
    {
        "country": "Venezuela",
        "casesPerOneMillion": 18885
    },
    {
        "country": "Vietnam",
        "casesPerOneMillion": 117458
    },
    {
        "country": "Wallis and Futuna",
        "casesPerOneMillion": 323256
    },
    {
        "country": "Western Sahara",
        "casesPerOneMillion": 16
    },
    {
        "country": "Yemen",
        "casesPerOneMillion": 383
    },
    {
        "country": "Zambia",
        "casesPerOneMillion": 17940
    },
    {
        "country": "Zimbabwe",
        "casesPerOneMillion": 17332
    }
]

export default function App() {
    return (
        <div>
            <h3>Country Name vs COVID Cases</h3>
            <AreaChart
                width={1100}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="cases"
                    stroke="#000"
                    fill="#FDE5EC"
                    activeDot={{ r: 8 }}
                />
                <Area type="monotone" dataKey="casesPerOneMillion" stroke="#000" fill="#E48586" />
            </AreaChart>
        </div>
    );
}
