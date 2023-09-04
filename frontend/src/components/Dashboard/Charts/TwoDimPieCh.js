import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    null,
    {
        "country": "Afghanistan",
        "deathsPerOneMillion": 195,
        "casesPerOneMillion": 5530,
        "testsPerOneMillion": 31857
    },
    {
        "country": "Albania",
        "deathsPerOneMillion": 1257,
        "casesPerOneMillion": 116777,
        "testsPerOneMillion": 677173
    },
    {
        "country": "Algeria",
        "deathsPerOneMillion": 152,
        "casesPerOneMillion": 5995,
        "testsPerOneMillion": 5093
    },
    {
        "country": "Andorra",
        "deathsPerOneMillion": 2130,
        "casesPerOneMillion": 619844,
        "testsPerOneMillion": 3225256
    },
    {
        "country": "Angola",
        "deathsPerOneMillion": 55,
        "casesPerOneMillion": 3009,
        "testsPerOneMillion": 42818
    },
    {
        "country": "Anguilla",
        "deathsPerOneMillion": 788,
        "casesPerOneMillion": 256336,
        "testsPerOneMillion": 3373736
    },
    {
        "country": "Antigua and Barbuda",
        "deathsPerOneMillion": 1467,
        "casesPerOneMillion": 91509,
        "testsPerOneMillion": 189943
    },
    {
        "country": "Argentina",
        "deathsPerOneMillion": 2838,
        "casesPerOneMillion": 218755,
        "testsPerOneMillion": 776264
    },
    {
        "country": "Armenia",
        "deathsPerOneMillion": 2945,
        "casesPerOneMillion": 151177,
        "testsPerOneMillion": 1091164
    },
    {
        "country": "Aruba",
        "deathsPerOneMillion": 2714,
        "casesPerOneMillion": 410969,
        "testsPerOneMillion": 1653068
    },
    {
        "country": "Australia",
        "deathsPerOneMillion": 869,
        "casesPerOneMillion": 450863,
        "testsPerOneMillion": 3142326
    },
    {
        "country": "Austria",
        "deathsPerOneMillion": 2486,
        "casesPerOneMillion": 670727,
        "testsPerOneMillion": 23302116
    },
    {
        "country": "Azerbaijan",
        "deathsPerOneMillion": 1000,
        "casesPerOneMillion": 80793,
        "testsPerOneMillion": 744822
    },
    {
        "country": "Bahamas",
        "deathsPerOneMillion": 2107,
        "casesPerOneMillion": 95087,
        "testsPerOneMillion": 643767
    },
    {
        "country": "Bahrain",
        "deathsPerOneMillion": 880,
        "casesPerOneMillion": 407163,
        "testsPerOneMillion": 6112666
    },
    {
        "country": "Bangladesh",
        "deathsPerOneMillion": 176,
        "casesPerOneMillion": 12183,
        "testsPerOneMillion": 90862
    },
    {
        "country": "Barbados",
        "deathsPerOneMillion": 2153,
        "casesPerOneMillion": 380188,
        "testsPerOneMillion": 2782594
    },
    {
        "country": "Belarus",
        "deathsPerOneMillion": 755,
        "casesPerOneMillion": 105381,
        "testsPerOneMillion": 1446722
    },
    {
        "country": "Belgium",
        "deathsPerOneMillion": 2946,
        "casesPerOneMillion": 412012,
        "testsPerOneMillion": 3172590
    },
    {
        "country": "Belize",
        "deathsPerOneMillion": 1669,
        "casesPerOneMillion": 171722,
        "testsPerOneMillion": 1397453
    },
    {
        "country": "Benin",
        "deathsPerOneMillion": 13,
        "casesPerOneMillion": 2191,
        "testsPerOneMillion": 47268
    },
    {
        "country": "Bermuda",
        "deathsPerOneMillion": 2664,
        "casesPerOneMillion": 304493,
        "testsPerOneMillion": 16622128
    },
    {
        "country": "Bhutan",
        "deathsPerOneMillion": 27,
        "casesPerOneMillion": 79571,
        "testsPerOneMillion": 2923739
    },
    {
        "country": "Bolivia",
        "deathsPerOneMillion": 1868,
        "casesPerOneMillion": 100662,
        "testsPerOneMillion": 225993
    },
    {
        "country": "Bosnia",
        "deathsPerOneMillion": 5032,
        "casesPerOneMillion": 124046,
        "testsPerOneMillion": 580036
    },
    {
        "country": "Botswana",
        "deathsPerOneMillion": 1147,
        "casesPerOneMillion": 135275,
        "testsPerOneMillion": 830300
    },
    {
        "country": "Brazil",
        "deathsPerOneMillion": 3275,
        "casesPerOneMillion": 175394,
        "testsPerOneMillion": 296146
    },
    {
        "country": "British Virgin Islands",
        "deathsPerOneMillion": 2092,
        "casesPerOneMillion": 238757,
        "testsPerOneMillion": 3508269
    },
    {
        "country": "Brunei",
        "deathsPerOneMillion": 505,
        "casesPerOneMillion": 697127,
        "testsPerOneMillion": 1611437
    },
    {
        "country": "Bulgaria",
        "deathsPerOneMillion": 5618,
        "casesPerOneMillion": 191525,
        "testsPerOneMillion": 1656051
    },
    {
        "country": "Burkina Faso",
        "deathsPerOneMillion": 18,
        "casesPerOneMillion": 998,
        "testsPerOneMillion": 11265
    },
    {
        "country": "Burundi",
        "deathsPerOneMillion": 3,
        "casesPerOneMillion": 4296,
        "testsPerOneMillion": 27386
    },
    {
        "country": "Cabo Verde",
        "deathsPerOneMillion": 731,
        "casesPerOneMillion": 113159,
        "testsPerOneMillion": 707482
    },
    {
        "country": "Cambodia",
        "deathsPerOneMillion": 178,
        "casesPerOneMillion": 8093,
        "testsPerOneMillion": 180062
    },
    {
        "country": "Cameroon",
        "deathsPerOneMillion": 71,
        "casesPerOneMillion": 4482,
        "testsPerOneMillion": 62762
    },
    {
        "country": "Canada",
        "deathsPerOneMillion": 1390,
        "casesPerOneMillion": 122601,
        "testsPerOneMillion": 1728207
    },
    {
        "country": "Caribbean Netherlands",
        "deathsPerOneMillion": 1426,
        "casesPerOneMillion": 438398,
        "testsPerOneMillion": 1130559
    },
    {
        "country": "Cayman Islands",
        "deathsPerOneMillion": 550,
        "casesPerOneMillion": 467797,
        "testsPerOneMillion": 3311280
    },
    {
        "country": "Central African Republic",
        "deathsPerOneMillion": 23,
        "casesPerOneMillion": 3063,
        "testsPerOneMillion": 16205
    },
    {
        "country": "Chad",
        "deathsPerOneMillion": 11,
        "casesPerOneMillion": 442,
        "testsPerOneMillion": 10988
    },
    {
        "country": "Channel Islands",
        "deathsPerOneMillion": 1292,
        "casesPerOneMillion": 576421,
        "testsPerOneMillion": 7099551
    },
    {
        "country": "Chile",
        "deathsPerOneMillion": 3350,
        "casesPerOneMillion": 274869,
        "testsPerOneMillion": 2595800
    },
    {
        "country": "China",
        "deathsPerOneMillion": 4,
        "casesPerOneMillion": 347,
        "testsPerOneMillion": 110461
    },
    {
        "country": "Colombia",
        "deathsPerOneMillion": 2775,
        "casesPerOneMillion": 123814,
        "testsPerOneMillion": 717327
    },
    {
        "country": "Comoros",
        "deathsPerOneMillion": 177,
        "casesPerOneMillion": 10038,
        "testsPerOneMillion": 0
    },
    {
        "country": "Congo",
        "deathsPerOneMillion": 67,
        "casesPerOneMillion": 4377,
        "testsPerOneMillion": 59991
    },
    {
        "country": "Cook Islands",
        "deathsPerOneMillion": 114,
        "casesPerOneMillion": 407034,
        "testsPerOneMillion": 1120596
    },
    {
        "country": "Costa Rica",
        "deathsPerOneMillion": 1819,
        "casesPerOneMillion": 239058,
        "testsPerOneMillion": 899158
    },
    {
        "country": "Croatia",
        "deathsPerOneMillion": 4507,
        "casesPerOneMillion": 313955,
        "testsPerOneMillion": 1386346
    },
    {
        "country": "Cuba",
        "deathsPerOneMillion": 754,
        "casesPerOneMillion": 98634,
        "testsPerOneMillion": 1268918
    },
    {
        "country": "Curaçao",
        "deathsPerOneMillion": 1782,
        "casesPerOneMillion": 277812,
        "testsPerOneMillion": 3000640
    },
    {
        "country": "Cyprus",
        "deathsPerOneMillion": 1115,
        "casesPerOneMillion": 540184,
        "testsPerOneMillion": 7879860
    },
    {
        "country": "Czechia",
        "deathsPerOneMillion": 3988,
        "casesPerOneMillion": 432575,
        "testsPerOneMillion": 5332724
    },
    {
        "country": "Côte d'Ivoire",
        "deathsPerOneMillion": 30,
        "casesPerOneMillion": 3184,
        "testsPerOneMillion": 60951
    },
    {
        "country": "DRC",
        "deathsPerOneMillion": 15,
        "casesPerOneMillion": 1026,
        "testsPerOneMillion": 8890
    },
    {
        "country": "Denmark",
        "deathsPerOneMillion": 1508,
        "casesPerOneMillion": 545566,
        "testsPerOneMillion": 22164190
    },
    {
        "country": "Diamond Princess",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 0,
        "testsPerOneMillion": 0
    },
    {
        "country": "Djibouti",
        "deathsPerOneMillion": 186,
        "casesPerOneMillion": 15441,
        "testsPerOneMillion": 301094
    },
    {
        "country": "Dominica",
        "deathsPerOneMillion": 1023,
        "casesPerOneMillion": 217848,
        "testsPerOneMillion": 3170187
    },
    {
        "country": "Dominican Republic",
        "deathsPerOneMillion": 397,
        "casesPerOneMillion": 60332,
        "testsPerOneMillion": 338350
    },
    {
        "country": "Ecuador",
        "deathsPerOneMillion": 1990,
        "casesPerOneMillion": 59024,
        "testsPerOneMillion": 170173
    },
    {
        "country": "Egypt",
        "deathsPerOneMillion": 232,
        "casesPerOneMillion": 4861,
        "testsPerOneMillion": 34792
    },
    {
        "country": "El Salvador",
        "deathsPerOneMillion": 646,
        "casesPerOneMillion": 30805,
        "testsPerOneMillion": 398467
    },
    {
        "country": "Equatorial Guinea",
        "deathsPerOneMillion": 122,
        "casesPerOneMillion": 11512,
        "testsPerOneMillion": 244342
    },
    {
        "country": "Eritrea",
        "deathsPerOneMillion": 28,
        "casesPerOneMillion": 2782,
        "testsPerOneMillion": 6470
    },
    {
        "country": "Estonia",
        "deathsPerOneMillion": 2270,
        "casesPerOneMillion": 468674,
        "testsPerOneMillion": 2824136
    },
    {
        "country": "Ethiopia",
        "deathsPerOneMillion": 63,
        "casesPerOneMillion": 4147,
        "testsPerOneMillion": 46053
    },
    {
        "country": "Falkland Islands (Malvinas)",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 545352,
        "testsPerOneMillion": 2439107
    },
    {
        "country": "Faroe Islands",
        "deathsPerOneMillion": 569,
        "casesPerOneMillion": 703959,
        "testsPerOneMillion": 15802409
    },
    {
        "country": "Fiji",
        "deathsPerOneMillion": 973,
        "casesPerOneMillion": 75997,
        "testsPerOneMillion": 739866
    },
    {
        "country": "Finland",
        "deathsPerOneMillion": 1831,
        "casesPerOneMillion": 267208,
        "testsPerOneMillion": 2178453
    },
    {
        "country": "France",
        "deathsPerOneMillion": 2556,
        "casesPerOneMillion": 612013,
        "testsPerOneMillion": 4139547
    },
    {
        "country": "French Guiana",
        "deathsPerOneMillion": 1337,
        "casesPerOneMillion": 312065,
        "testsPerOneMillion": 2072951
    },
    {
        "country": "French Polynesia",
        "deathsPerOneMillion": 2284,
        "casesPerOneMillion": 276675,
        "testsPerOneMillion": 0
    },
    {
        "country": "Gabon",
        "deathsPerOneMillion": 132,
        "casesPerOneMillion": 21013,
        "testsPerOneMillion": 695641
    },
    {
        "country": "Gambia",
        "deathsPerOneMillion": 145,
        "casesPerOneMillion": 4935,
        "testsPerOneMillion": 60851
    },
    {
        "country": "Georgia",
        "deathsPerOneMillion": 4317,
        "casesPerOneMillion": 467476,
        "testsPerOneMillion": 4263340
    },
    {
        "country": "Germany",
        "deathsPerOneMillion": 2078,
        "casesPerOneMillion": 458119,
        "testsPerOneMillion": 1458359
    },
    {
        "country": "Ghana",
        "deathsPerOneMillion": 45,
        "casesPerOneMillion": 5301,
        "testsPerOneMillion": 78346
    },
    {
        "country": "Gibraltar",
        "deathsPerOneMillion": 3353,
        "casesPerOneMillion": 609720,
        "testsPerOneMillion": 15852213
    },
    {
        "country": "Greece",
        "deathsPerOneMillion": 3595,
        "casesPerOneMillion": 591412,
        "testsPerOneMillion": 9909078
    },
    {
        "country": "Greenland",
        "deathsPerOneMillion": 369,
        "casesPerOneMillion": 210117,
        "testsPerOneMillion": 2894810
    },
    {
        "country": "Grenada",
        "deathsPerOneMillion": 2097,
        "casesPerOneMillion": 173545,
        "testsPerOneMillion": 1612523
    },
    {
        "country": "Guadeloupe",
        "deathsPerOneMillion": 2554,
        "casesPerOneMillion": 508349,
        "testsPerOneMillion": 2346306
    },
    {
        "country": "Guatemala",
        "deathsPerOneMillion": 1090,
        "casesPerOneMillion": 68658,
        "testsPerOneMillion": 408622
    },
    {
        "country": "Guinea",
        "deathsPerOneMillion": 34,
        "casesPerOneMillion": 2781,
        "testsPerOneMillion": 47607
    },
    {
        "country": "Guinea-Bissau",
        "deathsPerOneMillion": 86,
        "casesPerOneMillion": 4659,
        "testsPerOneMillion": 70385
    },
    {
        "country": "Guyana",
        "deathsPerOneMillion": 1636,
        "casesPerOneMillion": 92419,
        "testsPerOneMillion": 923396
    },
    {
        "country": "Haiti",
        "deathsPerOneMillion": 74,
        "casesPerOneMillion": 2937,
        "testsPerOneMillion": 11337
    },
    {
        "country": "Holy See (Vatican City State)",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 36295,
        "testsPerOneMillion": 0
    },
    {
        "country": "Honduras",
        "deathsPerOneMillion": 1092,
        "casesPerOneMillion": 46330,
        "testsPerOneMillion": 162472
    },
    {
        "country": "Hong Kong",
        "deathsPerOneMillion": 1817,
        "casesPerOneMillion": 383723,
        "testsPerOneMillion": 10011143
    },
    {
        "country": "Hungary",
        "deathsPerOneMillion": 5088,
        "casesPerOneMillion": 229388,
        "testsPerOneMillion": 1186160
    },
    {
        "country": "Iceland",
        "deathsPerOneMillion": 663,
        "casesPerOneMillion": 605661,
        "testsPerOneMillion": 5780036
    },
    {
        "country": "India",
        "deathsPerOneMillion": 378,
        "casesPerOneMillion": 31989,
        "testsPerOneMillion": 661721
    },
    {
        "country": "Indonesia",
        "deathsPerOneMillion": 580,
        "casesPerOneMillion": 24408,
        "testsPerOneMillion": 408975
    },
    {
        "country": "Iran",
        "deathsPerOneMillion": 1701,
        "casesPerOneMillion": 88506,
        "testsPerOneMillion": 661854
    },
    {
        "country": "Iraq",
        "deathsPerOneMillion": 602,
        "casesPerOneMillion": 58474,
        "testsPerOneMillion": 463523
    },
    {
        "country": "Ireland",
        "deathsPerOneMillion": 1829,
        "casesPerOneMillion": 342276,
        "testsPerOneMillion": 2606161
    },
    {
        "country": "Isle of Man",
        "deathsPerOneMillion": 1353,
        "casesPerOneMillion": 443335,
        "testsPerOneMillion": 1758422
    },
    {
        "country": "Israel",
        "deathsPerOneMillion": 1355,
        "casesPerOneMillion": 518334,
        "testsPerOneMillion": 4436346
    },
    {
        "country": "Italy",
        "deathsPerOneMillion": 3174,
        "casesPerOneMillion": 430709,
        "testsPerOneMillion": 4560908
    },
    {
        "country": "Jamaica",
        "deathsPerOneMillion": 1205,
        "casesPerOneMillion": 52213,
        "testsPerOneMillion": 396633
    },
    {
        "country": "Japan",
        "deathsPerOneMillion": 595,
        "casesPerOneMillion": 269169,
        "testsPerOneMillion": 799578
    },
    {
        "country": "Jordan",
        "deathsPerOneMillion": 1371,
        "casesPerOneMillion": 169597,
        "testsPerOneMillion": 1669945
    },
    {
        "country": "Kazakhstan",
        "deathsPerOneMillion": 721,
        "casesPerOneMillion": 73514,
        "testsPerOneMillion": 602707
    },
    {
        "country": "Kenya",
        "deathsPerOneMillion": 101,
        "casesPerOneMillion": 6118,
        "testsPerOneMillion": 70569
    },
    {
        "country": "Kiribati",
        "deathsPerOneMillion": 194,
        "casesPerOneMillion": 41201,
        "testsPerOneMillion": 0
    },
    {
        "country": "Kuwait",
        "deathsPerOneMillion": 587,
        "casesPerOneMillion": 152072,
        "testsPerOneMillion": 1930391
    },
    {
        "country": "Kyrgyzstan",
        "deathsPerOneMillion": 445,
        "casesPerOneMillion": 30750,
        "testsPerOneMillion": 283460
    },
    {
        "country": "Lao People's Democratic Republic",
        "deathsPerOneMillion": 101,
        "casesPerOneMillion": 29250,
        "testsPerOneMillion": 164845
    },
    {
        "country": "Latvia",
        "deathsPerOneMillion": 3457,
        "casesPerOneMillion": 529173,
        "testsPerOneMillion": 4262279
    },
    {
        "country": "Lebanon",
        "deathsPerOneMillion": 1636,
        "casesPerOneMillion": 185277,
        "testsPerOneMillion": 717380
    },
    {
        "country": "Lesotho",
        "deathsPerOneMillion": 332,
        "casesPerOneMillion": 15990,
        "testsPerOneMillion": 198199
    },
    {
        "country": "Liberia",
        "deathsPerOneMillion": 56,
        "casesPerOneMillion": 1525,
        "testsPerOneMillion": 26356
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "deathsPerOneMillion": 914,
        "casesPerOneMillion": 72048,
        "testsPerOneMillion": 352782
    },
    {
        "country": "Liechtenstein",
        "deathsPerOneMillion": 2449,
        "casesPerOneMillion": 559408,
        "testsPerOneMillion": 2929559
    },
    {
        "country": "Lithuania",
        "deathsPerOneMillion": 3644,
        "casesPerOneMillion": 497191,
        "testsPerOneMillion": 3936084
    },
    {
        "country": "Luxembourg",
        "deathsPerOneMillion": 1918,
        "casesPerOneMillion": 498091,
        "testsPerOneMillion": 7140959
    },
    {
        "country": "MS Zaandam",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 0,
        "testsPerOneMillion": 0
    },
    {
        "country": "Macao",
        "deathsPerOneMillion": 184,
        "casesPerOneMillion": 23101,
        "testsPerOneMillion": 11760
    },
    {
        "country": "Macedonia",
        "deathsPerOneMillion": 4649,
        "casesPerOneMillion": 167383,
        "testsPerOneMillion": 1069626
    },
    {
        "country": "Madagascar",
        "deathsPerOneMillion": 49,
        "casesPerOneMillion": 2340,
        "testsPerOneMillion": 18210
    },
    {
        "country": "Malawi",
        "deathsPerOneMillion": 133,
        "casesPerOneMillion": 4402,
        "testsPerOneMillion": 30959
    },
    {
        "country": "Malaysia",
        "deathsPerOneMillion": 1120,
        "casesPerOneMillion": 154403,
        "testsPerOneMillion": 2062094
    },
    {
        "country": "Maldives",
        "deathsPerOneMillion": 584,
        "casesPerOneMillion": 345087,
        "testsPerOneMillion": 4092223
    },
    {
        "country": "Mali",
        "deathsPerOneMillion": 35,
        "casesPerOneMillion": 1544,
        "testsPerOneMillion": 37483
    },
    {
        "country": "Malta",
        "deathsPerOneMillion": 1930,
        "casesPerOneMillion": 270374,
        "testsPerOneMillion": 4840363
    },
    {
        "country": "Marshall Islands",
        "deathsPerOneMillion": 283,
        "casesPerOneMillion": 268395,
        "testsPerOneMillion": 0
    },
    {
        "country": "Martinique",
        "deathsPerOneMillion": 2946,
        "casesPerOneMillion": 615777,
        "testsPerOneMillion": 2215870
    },
    {
        "country": "Mauritania",
        "deathsPerOneMillion": 203,
        "casesPerOneMillion": 12998,
        "testsPerOneMillion": 206030
    },
    {
        "country": "Mauritius",
        "deathsPerOneMillion": 824,
        "casesPerOneMillion": 33631,
        "testsPerOneMillion": 281374
    },
    {
        "country": "Mayotte",
        "deathsPerOneMillion": 657,
        "casesPerOneMillion": 146815,
        "testsPerOneMillion": 618038
    },
    {
        "country": "Mexico",
        "deathsPerOneMillion": 2541,
        "casesPerOneMillion": 58021,
        "testsPerOneMillion": 152124
    },
    {
        "country": "Micronesia",
        "deathsPerOneMillion": 553,
        "casesPerOneMillion": 225808,
        "testsPerOneMillion": 701598
    },
    {
        "country": "Moldova",
        "deathsPerOneMillion": 3022,
        "casesPerOneMillion": 154757,
        "testsPerOneMillion": 801437
    },
    {
        "country": "Monaco",
        "deathsPerOneMillion": 1684,
        "casesPerOneMillion": 424830,
        "testsPerOneMillion": 1976875
    },
    {
        "country": "Mongolia",
        "deathsPerOneMillion": 645,
        "casesPerOneMillion": 299275,
        "testsPerOneMillion": 1193000
    },
    {
        "country": "Montenegro",
        "deathsPerOneMillion": 4504,
        "casesPerOneMillion": 465599,
        "testsPerOneMillion": 4403172
    },
    {
        "country": "Montserrat",
        "deathsPerOneMillion": 1611,
        "casesPerOneMillion": 282578,
        "testsPerOneMillion": 3577442
    },
    {
        "country": "Morocco",
        "deathsPerOneMillion": 431,
        "casesPerOneMillion": 33769,
        "testsPerOneMillion": 344191
    },
    {
        "country": "Mozambique",
        "deathsPerOneMillion": 68,
        "casesPerOneMillion": 7054,
        "testsPerOneMillion": 41437
    },
    {
        "country": "Myanmar",
        "deathsPerOneMillion": 353,
        "casesPerOneMillion": 11610,
        "testsPerOneMillion": 202247
    },
    {
        "country": "N. Korea",
        "deathsPerOneMillion": 3,
        "casesPerOneMillion": 183636,
        "testsPerOneMillion": 0
    },
    {
        "country": "Namibia",
        "deathsPerOneMillion": 1556,
        "casesPerOneMillion": 65302,
        "testsPerOneMillion": 403460
    },
    {
        "country": "Nauru",
        "deathsPerOneMillion": 92,
        "casesPerOneMillion": 494635,
        "testsPerOneMillion": 1881042
    },
    {
        "country": "Nepal",
        "deathsPerOneMillion": 398,
        "casesPerOneMillion": 33198,
        "testsPerOneMillion": 200088
    },
    {
        "country": "Netherlands",
        "deathsPerOneMillion": 1336,
        "casesPerOneMillion": 500270,
        "testsPerOneMillion": 1509718
    },
    {
        "country": "New Caledonia",
        "deathsPerOneMillion": 1079,
        "casesPerOneMillion": 274726,
        "testsPerOneMillion": 340182
    },
    {
        "country": "New Zealand",
        "deathsPerOneMillion": 964,
        "casesPerOneMillion": 501061,
        "testsPerOneMillion": 1586011
    },
    {
        "country": "Nicaragua",
        "deathsPerOneMillion": 33,
        "casesPerOneMillion": 2728,
        "testsPerOneMillion": 0
    },
    {
        "country": "Niger",
        "deathsPerOneMillion": 12,
        "casesPerOneMillion": 381,
        "testsPerOneMillion": 9759
    },
    {
        "country": "Nigeria",
        "deathsPerOneMillion": 15,
        "casesPerOneMillion": 1230,
        "testsPerOneMillion": 26339
    },
    {
        "country": "Niue",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 545006,
        "testsPerOneMillion": 0
    },
    {
        "country": "Norway",
        "deathsPerOneMillion": 1021,
        "casesPerOneMillion": 269798,
        "testsPerOneMillion": 1996315
    },
    {
        "country": "Oman",
        "deathsPerOneMillion": 869,
        "casesPerOneMillion": 75028,
        "testsPerOneMillion": 4695724
    },
    {
        "country": "Pakistan",
        "deathsPerOneMillion": 134,
        "casesPerOneMillion": 6892,
        "testsPerOneMillion": 133256
    },
    {
        "country": "Palau",
        "deathsPerOneMillion": 494,
        "casesPerOneMillion": 341578,
        "testsPerOneMillion": 3872045
    },
    {
        "country": "Palestine",
        "deathsPerOneMillion": 1011,
        "casesPerOneMillion": 116173,
        "testsPerOneMillion": 575907
    },
    {
        "country": "Panama",
        "deathsPerOneMillion": 1947,
        "casesPerOneMillion": 235677,
        "testsPerOneMillion": 1752234
    },
    {
        "country": "Papua New Guinea",
        "deathsPerOneMillion": 72,
        "casesPerOneMillion": 5043,
        "testsPerOneMillion": 26813
    },
    {
        "country": "Paraguay",
        "deathsPerOneMillion": 2739,
        "casesPerOneMillion": 111367,
        "testsPerOneMillion": 363751
    },
    {
        "country": "Peru",
        "deathsPerOneMillion": 6582,
        "casesPerOneMillion": 134158,
        "testsPerOneMillion": 1158115
    },
    {
        "country": "Philippines",
        "deathsPerOneMillion": 592,
        "casesPerOneMillion": 37100,
        "testsPerOneMillion": 316944
    },
    {
        "country": "Poland",
        "deathsPerOneMillion": 3170,
        "casesPerOneMillion": 172740,
        "testsPerOneMillion": 1028745
    },
    {
        "country": "Portugal",
        "deathsPerOneMillion": 2672,
        "casesPerOneMillion": 552351,
        "testsPerOneMillion": 4549993
    },
    {
        "country": "Qatar",
        "deathsPerOneMillion": 232,
        "casesPerOneMillion": 172664,
        "testsPerOneMillion": 1364257
    },
    {
        "country": "Romania",
        "deathsPerOneMillion": 3587,
        "casesPerOneMillion": 179555,
        "testsPerOneMillion": 1462693
    },
    {
        "country": "Russia",
        "deathsPerOneMillion": 2743,
        "casesPerOneMillion": 157673,
        "testsPerOneMillion": 1875095
    },
    {
        "country": "Rwanda",
        "deathsPerOneMillion": 108,
        "casesPerOneMillion": 9793,
        "testsPerOneMillion": 442778
    },
    {
        "country": "Réunion",
        "deathsPerOneMillion": 1014,
        "casesPerOneMillion": 535854,
        "testsPerOneMillion": 1766027
    },
    {
        "country": "S. Korea",
        "deathsPerOneMillion": 698,
        "casesPerOneMillion": 670887,
        "testsPerOneMillion": 307892
    },
    {
        "country": "Saint Helena",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 354211,
        "testsPerOneMillion": 0
    },
    {
        "country": "Saint Kitts and Nevis",
        "deathsPerOneMillion": 891,
        "casesPerOneMillion": 122645,
        "testsPerOneMillion": 2356704
    },
    {
        "country": "Saint Lucia",
        "deathsPerOneMillion": 2209,
        "casesPerOneMillion": 162344,
        "testsPerOneMillion": 1139752
    },
    {
        "country": "Saint Martin",
        "deathsPerOneMillion": 1586,
        "casesPerOneMillion": 310194,
        "testsPerOneMillion": 2828643
    },
    {
        "country": "Saint Pierre Miquelon",
        "deathsPerOneMillion": 347,
        "casesPerOneMillion": 599410,
        "testsPerOneMillion": 4410488
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "deathsPerOneMillion": 1112,
        "casesPerOneMillion": 86337,
        "testsPerOneMillion": 1023720
    },
    {
        "country": "Samoa",
        "deathsPerOneMillion": 153,
        "casesPerOneMillion": 82961,
        "testsPerOneMillion": 926612
    },
    {
        "country": "San Marino",
        "deathsPerOneMillion": 3697,
        "casesPerOneMillion": 716327,
        "testsPerOneMillion": 5775414
    },
    {
        "country": "Sao Tome and Principe",
        "deathsPerOneMillion": 351,
        "casesPerOneMillion": 28971,
        "testsPerOneMillion": 127530
    },
    {
        "country": "Saudi Arabia",
        "deathsPerOneMillion": 269,
        "casesPerOneMillion": 23475,
        "testsPerOneMillion": 1268848
    },
    {
        "country": "Senegal",
        "deathsPerOneMillion": 112,
        "casesPerOneMillion": 5042,
        "testsPerOneMillion": 64946
    },
    {
        "country": "Serbia",
        "deathsPerOneMillion": 2087,
        "casesPerOneMillion": 294112,
        "testsPerOneMillion": 1507622
    },
    {
        "country": "Seychelles",
        "deathsPerOneMillion": 1730,
        "casesPerOneMillion": 512311,
        "testsPerOneMillion": 0
    },
    {
        "country": "Sierra Leone",
        "deathsPerOneMillion": 15,
        "casesPerOneMillion": 934,
        "testsPerOneMillion": 31296
    },
    {
        "country": "Singapore",
        "deathsPerOneMillion": 315,
        "casesPerOneMillion": 430001,
        "testsPerOneMillion": 4165302
    },
    {
        "country": "Sint Maarten",
        "deathsPerOneMillion": 2093,
        "casesPerOneMillion": 251353,
        "testsPerOneMillion": 1411454
    },
    {
        "country": "Slovakia",
        "deathsPerOneMillion": 3877,
        "casesPerOneMillion": 341936,
        "testsPerOneMillion": 1361601
    },
    {
        "country": "Slovenia",
        "deathsPerOneMillion": 3417,
        "casesPerOneMillion": 647028,
        "testsPerOneMillion": 1370382
    },
    {
        "country": "Solomon Islands",
        "deathsPerOneMillion": 212,
        "casesPerOneMillion": 34077,
        "testsPerOneMillion": 0
    },
    {
        "country": "Somalia",
        "deathsPerOneMillion": 81,
        "casesPerOneMillion": 1623,
        "testsPerOneMillion": 23778
    },
    {
        "country": "South Africa",
        "deathsPerOneMillion": 1689,
        "casesPerOneMillion": 67095,
        "testsPerOneMillion": 441027
    },
    {
        "country": "South Sudan",
        "deathsPerOneMillion": 12,
        "casesPerOneMillion": 1581,
        "testsPerOneMillion": 35313
    },
    {
        "country": "Spain",
        "deathsPerOneMillion": 2606,
        "casesPerOneMillion": 297840,
        "testsPerOneMillion": 10082298
    },
    {
        "country": "Sri Lanka",
        "deathsPerOneMillion": 782,
        "casesPerOneMillion": 31173,
        "testsPerOneMillion": 300619
    },
    {
        "country": "St. Barth",
        "deathsPerOneMillion": 603,
        "casesPerOneMillion": 553746,
        "testsPerOneMillion": 7908095
    },
    {
        "country": "Sudan",
        "deathsPerOneMillion": 110,
        "casesPerOneMillion": 1391,
        "testsPerOneMillion": 12240
    },
    {
        "country": "Suriname",
        "deathsPerOneMillion": 2359,
        "casesPerOneMillion": 138378,
        "testsPerOneMillion": 405822
    },
    {
        "country": "Swaziland",
        "deathsPerOneMillion": 1204,
        "casesPerOneMillion": 63201,
        "testsPerOneMillion": 885119
    },
    {
        "country": "Sweden",
        "deathsPerOneMillion": 2424,
        "casesPerOneMillion": 265684,
        "testsPerOneMillion": 1908301
    },
    {
        "country": "Switzerland",
        "deathsPerOneMillion": 1647,
        "casesPerOneMillion": 502613,
        "testsPerOneMillion": 2716487
    },
    {
        "country": "Syrian Arab Republic",
        "deathsPerOneMillion": 163,
        "casesPerOneMillion": 2982,
        "testsPerOneMillion": 7553
    },
    {
        "country": "Taiwan",
        "deathsPerOneMillion": 796,
        "casesPerOneMillion": 428720,
        "testsPerOneMillion": 1286903
    },
    {
        "country": "Tajikistan",
        "deathsPerOneMillion": 13,
        "casesPerOneMillion": 1786,
        "testsPerOneMillion": 0
    },
    {
        "country": "Tanzania",
        "deathsPerOneMillion": 13,
        "casesPerOneMillion": 681,
        "testsPerOneMillion": 0
    },
    {
        "country": "Thailand",
        "deathsPerOneMillion": 492,
        "casesPerOneMillion": 67873,
        "testsPerOneMillion": 246450
    },
    {
        "country": "Timor-Leste",
        "deathsPerOneMillion": 101,
        "casesPerOneMillion": 17131,
        "testsPerOneMillion": 203391
    },
    {
        "country": "Togo",
        "deathsPerOneMillion": 33,
        "casesPerOneMillion": 4552,
        "testsPerOneMillion": 93641
    },
    {
        "country": "Tokelau",
        "deathsPerOneMillion": 0,
        "casesPerOneMillion": 58055,
        "testsPerOneMillion": 0
    },
    {
        "country": "Tonga",
        "deathsPerOneMillion": 121,
        "casesPerOneMillion": 156094,
        "testsPerOneMillion": 4965327
    },
    {
        "country": "Trinidad and Tobago",
        "deathsPerOneMillion": 3121,
        "casesPerOneMillion": 136143,
        "testsPerOneMillion": 649295
    },
    {
        "country": "Tunisia",
        "deathsPerOneMillion": 2442,
        "casesPerOneMillion": 95741,
        "testsPerOneMillion": 416164
    },
    {
        "country": "Turkey",
        "deathsPerOneMillion": 1194,
        "casesPerOneMillion": 201399,
        "testsPerOneMillion": 1902052
    },
    {
        "country": "Turks and Caicos Islands",
        "deathsPerOneMillion": 981,
        "casesPerOneMillion": 166830,
        "testsPerOneMillion": 15471478
    },
    {
        "country": "Tuvalu",
        "deathsPerOneMillion": 83,
        "casesPerOneMillion": 243909,
        "testsPerOneMillion": 0
    },
    {
        "country": "UAE",
        "deathsPerOneMillion": 233,
        "casesPerOneMillion": 105837,
        "testsPerOneMillion": 19910389
    },
    {
        "country": "UK",
        "deathsPerOneMillion": 3339,
        "casesPerOneMillion": 360179,
        "testsPerOneMillion": 7628357
    },
    {
        "country": "USA",
        "deathsPerOneMillion": 3506,
        "casesPerOneMillion": 322954,
        "testsPerOneMillion": 3542384
    },
    {
        "country": "Uganda",
        "deathsPerOneMillion": 75,
        "casesPerOneMillion": 3546,
        "testsPerOneMillion": 62198
    },
    {
        "country": "Ukraine",
        "deathsPerOneMillion": 2603,
        "casesPerOneMillion": 128681,
        "testsPerOneMillion": 754855
    },
    {
        "country": "Uruguay",
        "deathsPerOneMillion": 2184,
        "casesPerOneMillion": 297131,
        "testsPerOneMillion": 1749083
    },
    {
        "country": "Uzbekistan",
        "deathsPerOneMillion": 48,
        "casesPerOneMillion": 7378,
        "testsPerOneMillion": 40077
    },
    {
        "country": "Vanuatu",
        "deathsPerOneMillion": 44,
        "casesPerOneMillion": 37346,
        "testsPerOneMillion": 77606
    },
    {
        "country": "Venezuela",
        "deathsPerOneMillion": 200,
        "casesPerOneMillion": 18885,
        "testsPerOneMillion": 114771
    },
    {
        "country": "Vietnam",
        "deathsPerOneMillion": 437,
        "casesPerOneMillion": 117458,
        "testsPerOneMillion": 867342
    },
    {
        "country": "Wallis and Futuna",
        "deathsPerOneMillion": 728,
        "casesPerOneMillion": 323256,
        "testsPerOneMillion": 1867419
    },
    {
        "country": "Western Sahara",
        "deathsPerOneMillion": 2,
        "casesPerOneMillion": 16,
        "testsPerOneMillion": 0
    },
    {
        "country": "Yemen",
        "deathsPerOneMillion": 69,
        "casesPerOneMillion": 383,
        "testsPerOneMillion": 10579
    },
    {
        "country": "Zambia",
        "deathsPerOneMillion": 209,
        "casesPerOneMillion": 17940,
        "testsPerOneMillion": 211244
    },
    {
        "country": "Zimbabwe",
        "deathsPerOneMillion": 373,
        "casesPerOneMillion": 17332,
        "testsPerOneMillion": 164744
    }
]

export default function App() {
    return (
        <div>
            <h2>casesPerOneMillion , deathsPerOneMillion, testsPerOneMillion Chart</h2>
            <AreaChart
                width={1100}
                height={1100}
                data={data01}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="deathsPerOneMillion" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="casesPerOneMillion" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="casesPerOneMillion" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </div>
    );
}
