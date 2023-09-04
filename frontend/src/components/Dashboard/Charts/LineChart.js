import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

const data01 = [
    {
        "country": "Afghanistan",
        "testsPerOneMillion": 31857
    },
    {
        "country": "Albania",
        "testsPerOneMillion": 677173
    },
    {
        "country": "Algeria",
        "testsPerOneMillion": 5093
    },
    {
        "country": "Andorra",
        "testsPerOneMillion": 3225256
    },
    {
        "country": "Angola",
        "testsPerOneMillion": 42818
    },
    {
        "country": "Anguilla",
        "testsPerOneMillion": 3373736
    },
    {
        "country": "Antigua and Barbuda",
        "testsPerOneMillion": 189943
    },
    {
        "country": "Argentina",
        "testsPerOneMillion": 776264
    },
    {
        "country": "Armenia",
        "testsPerOneMillion": 1091164
    },
    {
        "country": "Aruba",
        "testsPerOneMillion": 1653068
    },
    {
        "country": "Australia",
        "testsPerOneMillion": 3142326
    },
    {
        "country": "Austria",
        "testsPerOneMillion": 23302116
    },
    {
        "country": "Azerbaijan",
        "testsPerOneMillion": 744822
    },
    {
        "country": "Bahamas",
        "testsPerOneMillion": 643767
    },
    {
        "country": "Bahrain",
        "testsPerOneMillion": 6112666
    },
    {
        "country": "Bangladesh",
        "testsPerOneMillion": 90862
    },
    {
        "country": "Barbados",
        "testsPerOneMillion": 2782594
    },
    {
        "country": "Belarus",
        "testsPerOneMillion": 1446722
    },
    {
        "country": "Belgium",
        "testsPerOneMillion": 3172590
    },
    {
        "country": "Belize",
        "testsPerOneMillion": 1397453
    },
    {
        "country": "Benin",
        "testsPerOneMillion": 47268
    },
    {
        "country": "Bermuda",
        "testsPerOneMillion": 16622128
    },
    {
        "country": "Bhutan",
        "testsPerOneMillion": 2923739
    },
    {
        "country": "Bolivia",
        "testsPerOneMillion": 225993
    },
    {
        "country": "Bosnia",
        "testsPerOneMillion": 580036
    },
    {
        "country": "Botswana",
        "testsPerOneMillion": 830300
    },
    {
        "country": "Brazil",
        "testsPerOneMillion": 296146
    },
    {
        "country": "British Virgin Islands",
        "testsPerOneMillion": 3508269
    },
    {
        "country": "Brunei",
        "testsPerOneMillion": 1611437
    },
    {
        "country": "Bulgaria",
        "testsPerOneMillion": 1656051
    },
    {
        "country": "Burkina Faso",
        "testsPerOneMillion": 11265
    },
    {
        "country": "Burundi",
        "testsPerOneMillion": 27386
    },
    {
        "country": "Cabo Verde",
        "testsPerOneMillion": 707482
    },
    {
        "country": "Cambodia",
        "testsPerOneMillion": 180062
    },
    {
        "country": "Cameroon",
        "testsPerOneMillion": 62762
    },
    {
        "country": "Canada",
        "testsPerOneMillion": 1728207
    },
    {
        "country": "Caribbean Netherlands",
        "testsPerOneMillion": 1130559
    },
    {
        "country": "Cayman Islands",
        "testsPerOneMillion": 3311280
    },
    {
        "country": "Central African Republic",
        "testsPerOneMillion": 16205
    },
    {
        "country": "Chad",
        "testsPerOneMillion": 10988
    },
    {
        "country": "Channel Islands",
        "testsPerOneMillion": 7099551
    },
    {
        "country": "Chile",
        "testsPerOneMillion": 2595800
    },
    {
        "country": "China",
        "testsPerOneMillion": 110461
    },
    {
        "country": "Colombia",
        "testsPerOneMillion": 717327
    },
    {
        "country": "Comoros",
        "testsPerOneMillion": 0
    },
    {
        "country": "Congo",
        "testsPerOneMillion": 59991
    },
    {
        "country": "Cook Islands",
        "testsPerOneMillion": 1120596
    },
    {
        "country": "Costa Rica",
        "testsPerOneMillion": 899158
    },
    {
        "country": "Croatia",
        "testsPerOneMillion": 1386346
    },
    {
        "country": "Cuba",
        "testsPerOneMillion": 1268918
    },
    {
        "country": "Curaçao",
        "testsPerOneMillion": 3000640
    },
    {
        "country": "Cyprus",
        "testsPerOneMillion": 7879860
    },
    {
        "country": "Czechia",
        "testsPerOneMillion": 5332724
    },
    {
        "country": "Côte d'Ivoire",
        "testsPerOneMillion": 60951
    },
    {
        "country": "DRC",
        "testsPerOneMillion": 8890
    },
    {
        "country": "Denmark",
        "testsPerOneMillion": 22164190
    },
    {
        "country": "Diamond Princess",
        "testsPerOneMillion": 0
    },
    {
        "country": "Djibouti",
        "testsPerOneMillion": 301094
    },
    {
        "country": "Dominica",
        "testsPerOneMillion": 3170187
    },
    {
        "country": "Dominican Republic",
        "testsPerOneMillion": 338350
    },
    {
        "country": "Ecuador",
        "testsPerOneMillion": 170173
    },
    {
        "country": "Egypt",
        "testsPerOneMillion": 34792
    },
    {
        "country": "El Salvador",
        "testsPerOneMillion": 398467
    },
    {
        "country": "Equatorial Guinea",
        "testsPerOneMillion": 244342
    },
    {
        "country": "Eritrea",
        "testsPerOneMillion": 6470
    },
    {
        "country": "Estonia",
        "testsPerOneMillion": 2824136
    },
    {
        "country": "Ethiopia",
        "testsPerOneMillion": 46053
    },
    {
        "country": "Falkland Islands (Malvinas)",
        "testsPerOneMillion": 2439107
    },
    {
        "country": "Faroe Islands",
        "testsPerOneMillion": 15802409
    },
    {
        "country": "Fiji",
        "testsPerOneMillion": 739866
    },
    {
        "country": "Finland",
        "testsPerOneMillion": 2178453
    },
    {
        "country": "France",
        "testsPerOneMillion": 4139547
    },
    {
        "country": "French Guiana",
        "testsPerOneMillion": 2072951
    },
    {
        "country": "French Polynesia",
        "testsPerOneMillion": 0
    },
    {
        "country": "Gabon",
        "testsPerOneMillion": 695641
    },
    {
        "country": "Gambia",
        "testsPerOneMillion": 60851
    },
    {
        "country": "Georgia",
        "testsPerOneMillion": 4263340
    },
    {
        "country": "Germany",
        "testsPerOneMillion": 1458359
    },
    {
        "country": "Ghana",
        "testsPerOneMillion": 78346
    },
    {
        "country": "Gibraltar",
        "testsPerOneMillion": 15852213
    },
    {
        "country": "Greece",
        "testsPerOneMillion": 9909078
    },
    {
        "country": "Greenland",
        "testsPerOneMillion": 2894810
    },
    {
        "country": "Grenada",
        "testsPerOneMillion": 1612523
    },
    {
        "country": "Guadeloupe",
        "testsPerOneMillion": 2346306
    },
    {
        "country": "Guatemala",
        "testsPerOneMillion": 408622
    },
    {
        "country": "Guinea",
        "testsPerOneMillion": 47607
    },
    {
        "country": "Guinea-Bissau",
        "testsPerOneMillion": 70385
    },
    {
        "country": "Guyana",
        "testsPerOneMillion": 923396
    },
    {
        "country": "Haiti",
        "testsPerOneMillion": 11337
    },
    {
        "country": "Holy See (Vatican City State)",
        "testsPerOneMillion": 0
    },
    {
        "country": "Honduras",
        "testsPerOneMillion": 162472
    },
    {
        "country": "Hong Kong",
        "testsPerOneMillion": 10011143
    },
    {
        "country": "Hungary",
        "testsPerOneMillion": 1186160
    },
    {
        "country": "Iceland",
        "testsPerOneMillion": 5780036
    },
    {
        "country": "India",
        "testsPerOneMillion": 661721
    },
    {
        "country": "Indonesia",
        "testsPerOneMillion": 408975
    },
    {
        "country": "Iran",
        "testsPerOneMillion": 661854
    },
    {
        "country": "Iraq",
        "testsPerOneMillion": 463523
    },
    {
        "country": "Ireland",
        "testsPerOneMillion": 2606161
    },
    {
        "country": "Isle of Man",
        "testsPerOneMillion": 1758422
    },
    {
        "country": "Israel",
        "testsPerOneMillion": 4436346
    },
    {
        "country": "Italy",
        "testsPerOneMillion": 4560908
    },
    {
        "country": "Jamaica",
        "testsPerOneMillion": 396633
    },
    {
        "country": "Japan",
        "testsPerOneMillion": 799578
    },
    {
        "country": "Jordan",
        "testsPerOneMillion": 1669945
    },
    {
        "country": "Kazakhstan",
        "testsPerOneMillion": 602707
    },
    {
        "country": "Kenya",
        "testsPerOneMillion": 70569
    },
    {
        "country": "Kiribati",
        "testsPerOneMillion": 0
    },
    {
        "country": "Kuwait",
        "testsPerOneMillion": 1930391
    },
    {
        "country": "Kyrgyzstan",
        "testsPerOneMillion": 283460
    },
    {
        "country": "Lao People's Democratic Republic",
        "testsPerOneMillion": 164845
    },
    {
        "country": "Latvia",
        "testsPerOneMillion": 4262279
    },
    {
        "country": "Lebanon",
        "testsPerOneMillion": 717380
    },
    {
        "country": "Lesotho",
        "testsPerOneMillion": 198199
    },
    {
        "country": "Liberia",
        "testsPerOneMillion": 26356
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "testsPerOneMillion": 352782
    },
    {
        "country": "Liechtenstein",
        "testsPerOneMillion": 2929559
    },
    {
        "country": "Lithuania",
        "testsPerOneMillion": 3936084
    },
    {
        "country": "Luxembourg",
        "testsPerOneMillion": 7140959
    },
    {
        "country": "MS Zaandam",
        "testsPerOneMillion": 0
    },
    {
        "country": "Macao",
        "testsPerOneMillion": 11760
    },
    {
        "country": "Macedonia",
        "testsPerOneMillion": 1069626
    },
    {
        "country": "Madagascar",
        "testsPerOneMillion": 18210
    },
    {
        "country": "Malawi",
        "testsPerOneMillion": 30959
    },
    {
        "country": "Malaysia",
        "testsPerOneMillion": 2062094
    },
    {
        "country": "Maldives",
        "testsPerOneMillion": 4092223
    },
    {
        "country": "Mali",
        "testsPerOneMillion": 37483
    },
    {
        "country": "Malta",
        "testsPerOneMillion": 4840363
    },
    {
        "country": "Marshall Islands",
        "testsPerOneMillion": 0
    },
    {
        "country": "Martinique",
        "testsPerOneMillion": 2215870
    },
    {
        "country": "Mauritania",
        "testsPerOneMillion": 206030
    },
    {
        "country": "Mauritius",
        "testsPerOneMillion": 281374
    },
    {
        "country": "Mayotte",
        "testsPerOneMillion": 618038
    },
    {
        "country": "Mexico",
        "testsPerOneMillion": 152124
    },
    {
        "country": "Micronesia",
        "testsPerOneMillion": 701598
    },
    {
        "country": "Moldova",
        "testsPerOneMillion": 801437
    },
    {
        "country": "Monaco",
        "testsPerOneMillion": 1976875
    },
    {
        "country": "Mongolia",
        "testsPerOneMillion": 1193000
    },
    {
        "country": "Montenegro",
        "testsPerOneMillion": 4403172
    },
    {
        "country": "Montserrat",
        "testsPerOneMillion": 3577442
    },
    {
        "country": "Morocco",
        "testsPerOneMillion": 344191
    },
    {
        "country": "Mozambique",
        "testsPerOneMillion": 41437
    },
    {
        "country": "Myanmar",
        "testsPerOneMillion": 202247
    },
    {
        "country": "N. Korea",
        "testsPerOneMillion": 0
    },
    {
        "country": "Namibia",
        "testsPerOneMillion": 403460
    },
    {
        "country": "Nauru",
        "testsPerOneMillion": 1881042
    },
    {
        "country": "Nepal",
        "testsPerOneMillion": 200088
    },
    {
        "country": "Netherlands",
        "testsPerOneMillion": 1509718
    },
    {
        "country": "New Caledonia",
        "testsPerOneMillion": 340182
    },
    {
        "country": "New Zealand",
        "testsPerOneMillion": 1586011
    },
    {
        "country": "Nicaragua",
        "testsPerOneMillion": 0
    },
    {
        "country": "Niger",
        "testsPerOneMillion": 9759
    },
    {
        "country": "Nigeria",
        "testsPerOneMillion": 26339
    },
    {
        "country": "Niue",
        "testsPerOneMillion": 0
    },
    {
        "country": "Norway",
        "testsPerOneMillion": 1996315
    },
    {
        "country": "Oman",
        "testsPerOneMillion": 4695724
    },
    {
        "country": "Pakistan",
        "testsPerOneMillion": 133256
    },
    {
        "country": "Palau",
        "testsPerOneMillion": 3872045
    },
    {
        "country": "Palestine",
        "testsPerOneMillion": 575907
    },
    {
        "country": "Panama",
        "testsPerOneMillion": 1752234
    },
    {
        "country": "Papua New Guinea",
        "testsPerOneMillion": 26813
    },
    {
        "country": "Paraguay",
        "testsPerOneMillion": 363751
    },
    {
        "country": "Peru",
        "testsPerOneMillion": 1158115
    },
    {
        "country": "Philippines",
        "testsPerOneMillion": 316944
    },
    {
        "country": "Poland",
        "testsPerOneMillion": 1028745
    },
    {
        "country": "Portugal",
        "testsPerOneMillion": 4549993
    },
    {
        "country": "Qatar",
        "testsPerOneMillion": 1364257
    },
    {
        "country": "Romania",
        "testsPerOneMillion": 1462693
    },
    {
        "country": "Russia",
        "testsPerOneMillion": 1875095
    },
    {
        "country": "Rwanda",
        "testsPerOneMillion": 442778
    },
    {
        "country": "Réunion",
        "testsPerOneMillion": 1766027
    },
    {
        "country": "S. Korea",
        "testsPerOneMillion": 307892
    },
    {
        "country": "Saint Helena",
        "testsPerOneMillion": 0
    },
    {
        "country": "Saint Kitts and Nevis",
        "testsPerOneMillion": 2356704
    },
    {
        "country": "Saint Lucia",
        "testsPerOneMillion": 1139752
    },
    {
        "country": "Saint Martin",
        "testsPerOneMillion": 2828643
    },
    {
        "country": "Saint Pierre Miquelon",
        "testsPerOneMillion": 4410488
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "testsPerOneMillion": 1023720
    },
    {
        "country": "Samoa",
        "testsPerOneMillion": 926612
    },
    {
        "country": "San Marino",
        "testsPerOneMillion": 5775414
    },
    {
        "country": "Sao Tome and Principe",
        "testsPerOneMillion": 127530
    },
    {
        "country": "Saudi Arabia",
        "testsPerOneMillion": 1268848
    },
    {
        "country": "Senegal",
        "testsPerOneMillion": 64946
    },
    {
        "country": "Serbia",
        "testsPerOneMillion": 1507622
    },
    {
        "country": "Seychelles",
        "testsPerOneMillion": 0
    },
    {
        "country": "Sierra Leone",
        "testsPerOneMillion": 31296
    },
    {
        "country": "Singapore",
        "testsPerOneMillion": 4165302
    },
    {
        "country": "Sint Maarten",
        "testsPerOneMillion": 1411454
    },
    {
        "country": "Slovakia",
        "testsPerOneMillion": 1361601
    },
    {
        "country": "Slovenia",
        "testsPerOneMillion": 1370382
    },
    {
        "country": "Solomon Islands",
        "testsPerOneMillion": 0
    },
    {
        "country": "Somalia",
        "testsPerOneMillion": 23778
    },
    {
        "country": "South Africa",
        "testsPerOneMillion": 441027
    },
    {
        "country": "South Sudan",
        "testsPerOneMillion": 35313
    },
    {
        "country": "Spain",
        "testsPerOneMillion": 10082298
    },
    {
        "country": "Sri Lanka",
        "testsPerOneMillion": 300619
    },
    {
        "country": "St. Barth",
        "testsPerOneMillion": 7908095
    },
    {
        "country": "Sudan",
        "testsPerOneMillion": 12240
    },
    {
        "country": "Suriname",
        "testsPerOneMillion": 405822
    },
    {
        "country": "Swaziland",
        "testsPerOneMillion": 885119
    },
    {
        "country": "Sweden",
        "testsPerOneMillion": 1908301
    },
    {
        "country": "Switzerland",
        "testsPerOneMillion": 2716487
    },
    {
        "country": "Syrian Arab Republic",
        "testsPerOneMillion": 7553
    },
    {
        "country": "Taiwan",
        "testsPerOneMillion": 1286903
    },
    {
        "country": "Tajikistan",
        "testsPerOneMillion": 0
    },
    {
        "country": "Tanzania",
        "testsPerOneMillion": 0
    },
    {
        "country": "Thailand",
        "testsPerOneMillion": 246450
    },
    {
        "country": "Timor-Leste",
        "testsPerOneMillion": 203391
    },
    {
        "country": "Togo",
        "testsPerOneMillion": 93641
    },
    {
        "country": "Tokelau",
        "testsPerOneMillion": 0
    },
    {
        "country": "Tonga",
        "testsPerOneMillion": 4965327
    },
    {
        "country": "Trinidad and Tobago",
        "testsPerOneMillion": 649295
    },
    {
        "country": "Tunisia",
        "testsPerOneMillion": 416164
    },
    {
        "country": "Turkey",
        "testsPerOneMillion": 1902052
    },
    {
        "country": "Turks and Caicos Islands",
        "testsPerOneMillion": 15471478
    },
    {
        "country": "Tuvalu",
        "testsPerOneMillion": 0
    },
    {
        "country": "UAE",
        "testsPerOneMillion": 19910389
    },
    {
        "country": "UK",
        "testsPerOneMillion": 7628357
    },
    {
        "country": "USA",
        "testsPerOneMillion": 3542384
    },
    {
        "country": "Uganda",
        "testsPerOneMillion": 62198
    },
    {
        "country": "Ukraine",
        "testsPerOneMillion": 754855
    },
    {
        "country": "Uruguay",
        "testsPerOneMillion": 1749083
    },
    {
        "country": "Uzbekistan",
        "testsPerOneMillion": 40077
    },
    {
        "country": "Vanuatu",
        "testsPerOneMillion": 77606
    },
    {
        "country": "Venezuela",
        "testsPerOneMillion": 114771
    },
    {
        "country": "Vietnam",
        "testsPerOneMillion": 867342
    },
    {
        "country": "Wallis and Futuna",
        "testsPerOneMillion": 1867419
    },
    {
        "country": "Western Sahara",
        "testsPerOneMillion": 0
    },
    {
        "country": "Yemen",
        "testsPerOneMillion": 10579
    },
    {
        "country": "Zambia",
        "testsPerOneMillion": 211244
    },
    {
        "country": "Zimbabwe",
        "testsPerOneMillion": 164744
    }
]


export default function App() {
    return (
        <div>
            <h2>Tests Per One Million Pie Chart</h2>
            <LineChart
                width={1100}
                height={500}
                data={data01}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="testsPerOneMillion" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
        </div>
    );
}
