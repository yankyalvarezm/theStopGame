console.log('data.js connected');

const countries = {
    "Afghanistan": "A",
    "Albania": "A",
    "Algeria": "A",
    "Andorra": "A",
    "Angola": "A",
    "Antigua and Barbuda": "A",
    "Argentina": "A",
    "Armenia": "A",
    "Australia": "A",
    "Austria": "A",
    "Azerbaijan": "A",
    "Bahamas": "B",
    "Bahrain": "B",
    "Bangladesh": "B",
    "Barbados": "B",
    "Belarus": "B",
    "Belgium": "B",
    "Belize": "B",
    "Benin": "B",
    "Bhutan": "B",
    "Bolivia": "B",
    "Bosnia and Herzegovina": "B",
    "Botswana": "B",
    "Brazil": "B",
    "Brunei": "B",
    "Bulgaria": "B",
    "Burkina Faso": "B",
    "Burundi": "B",
    "Cabo Verde": "C",
    "Cambodia": "C",
    "Cameroon": "C",
    "Canada": "C",
    "Central African Republic": "C",
    "Chad": "C",
    "Chile": "C",
    "China": "C",
    "Colombia": "C",
    "Comoros": "C",
    "Congo": "C",
    "Costa Rica": "C",
    "Croatia": "C",
    "Cuba": "C",
    "Cyprus": "C",
    "Czechia": "C",
    "Denmark": "D",
    "Djibouti": "D",
    "Dominica": "D",
    "Dominican Republic": "D",
    "Ecuador": "E",
    "Egypt": "E",
    "El Salvador": "E",
    "Equatorial Guinea": "E",
    "Eritrea": "E",
    "Estonia": "E",
    "Eswatini": "E",
    "Ethiopia": "E",
    "Fiji": "F",
    "Finland": "F",
    "France": "F",
    "Gabon": "G",
    "Gambia": "G",
    "Georgia": "G",
    "Germany": "G",
    "Ghana": "G",
    "Greece": "G",
    "Grenada": "G",
    "Guatemala": "G",
    "Guinea": "G",
    "Guinea-Bissau": "G",
    "Guyana": "G",
    "Haiti": "H",
    "Honduras": "H",
    "Hungary": "H",
    "Iceland": "I",
    "India": "I",
    "Indonesia": "I",
    "Iran": "I",
    "Iraq": "I",
    "Ireland": "I",
    "Israel": "I",
    "Italy": "I",
    "Ivory Coast": "I",
    "Jamaica": "J",
    "Japan": "J",
    "Jordan": "J",
    "Kazakhstan": "K",
    "Kenya": "K",
    "Kiribati": "K",
    "Kosovo": "K",
    "Kuwait": "K",
    "Kyrgyzstan": "K",
    "Laos": "L",
    "Latvia": "L",
    "Lebanon": "L",
    "Lesotho": "L",
    "Liberia": "L",
    "Libya": "L",
    "Liechtenstein": "L",
    "Lithuania": "L",
    "Luxembourg": "L",
    "Madagascar": "M",
    "Malawi": "M",
    "Malaysia": "M",
    "Maldives": "M",
    "Mali": "M",
    "Malta": "M",
    "Marshall Islands": "M",
    "Mauritania": "M",
    "Mauritius": "M",
    "Mexico": "M",
    "Micronesia": "M",
    "Moldova": "M",
    "Monaco": "M",
    "Mongolia": "M",
    "Montenegro": "M",
    "Morocco": "M",
    "Mozambique": "M",
    "Myanmar": "M",
    "Namibia": "N",
    "Nauru": "N",
    "Nepal": "N",
    "Netherlands": "N",
    "New Zealand": "N",
    "Nicaragua": "N",
    "Niger": "N",
    "Nigeria": "N",
    "North Korea": "N",
    "North Macedonia": "N",
    "Norway": "N",
    "Oman": "O",
    "Pakistan": "P",
    "Palau": "P",
    "Palestine": "P",
    "Panama": "P",
    "Papua New Guinea": "P",
    "Paraguay": "P",
    "Peru": "P",
    "Philippines": "P",
    "Poland": "P",
    "Portugal": "P",
    "Qatar": "Q",
    "Romania": "R",
    "Russia": "R",
    "Rwanda": "R",
    "Saint Kitts and Nevis": "S",
    "Saint Lucia": "S",
    "Saint Vincent and the Grenadines": "S",
    "Samoa": "S",
    "San Marino": "S",
    "Sao Tome and Principe": "S",
    "Saudi Arabia": "S",
    "Senegal": "S",
    "Serbia": "S",
    "Seychelles": "S",
    "Sierra Leone": "S",
    "Singapore": "S",
    "Slovakia": "S",
    "Slovenia": "S",
    "Solomon Islands": "S",
    "Somalia": "S",
    "South Africa": "S",
    "South Korea": "S",
    "South Sudan": "S",
    "Spain": "S",
    "Sri Lanka": "S",
    "Sudan": "S",
    "Suriname": "S",
    "Sweden": "S",
    "Switzerland": "S",
    "Syria": "S",
    "Taiwan": "T",
    "Tajikistan": "T",
    "Tanzania": "T",
    "Thailand": "T",
    "Timor-Leste": "T",
    "Togo": "T",
    "Tonga": "T",
    "Trinidad and Tobago": "T",
    "Tunisia": "T",
    "Turkey": "T",
    "Turkmenistan": "T",
    "Tuvalu": "T",
    "Uganda": "U",
    "Ukraine": "U",
    "United Arab Emirates": "U",
    "United Kingdom": "U",
    "United States": "U",
    "Uruguay": "U",
    "Uzbekistan": "U",
    "Vanuatu": "V",
    "Vatican City": "V",
    "Venezuela": "V",
    "Vietnam": "V",
    "Yemen": "Y",
    "Zambia": "Z",
    "Zimbabwe": "Z"
};


function verifyCountry(inputCountry, startingLetter) {
    if (countries[inputCountry] === startingLetter) {
        console.log('Valid Country')
    } else if (inputCountry.charAt(0) !== startingLetter) {
        console.log(`Remember, now it's letter:  `)
    } else {
        console.log('Invalid Country')
    }
}