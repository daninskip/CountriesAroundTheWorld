class Country {
    constructor(name, language, greeting, colors, code) {
        this.name = name;
        this.language = language;
        this.greeting = greeting;
        this.colors = colors;
        this.code = code;
    }
     displayColors(){
        document.getElementById('Color1').style.backgroundColor = this.colors[0]
        document.getElementById('Color2').style.backgroundColor = this.colors[1]
        document.getElementById('Color3').style.backgroundColor = this.colors[2]
        document.getElementById('CountryName').innerHTML = this.name;
        document.getElementById('OfficialLanguage').innerHTML = this.language;
        document.getElementById('HelloWorld').innerHTML = this.greeting;
        document.getElementById('countryFlag').setAttribute('src', `https://www.worldatlas.com/r/w425/img/flag/${this.code}-flag.jpg`);
     }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"],"us");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],"mx");
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "yellow"],"de");
let france = new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"],"fr");
let unitedKingdom = new Country("United Kingdom", "English", "Hello World!", ["red", "white", "blue"], "gb");
let iceland = new Country("Iceland", "Icelandic", "Halló heimur", ["blue", "white", "red"],"is");


function SwitchCountry() {
    let e = document.getElementById("CountryList");
    let option= e.options[e.selectedIndex];
    let input = option.getAttribute(`value`);
    let country;

    if (input === "USA") {
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Germany") {
        country = germany;
    }
    else if (input === "France") {
        country = france;
    }
    else if (input === "United Kingdom") {
        country = unitedKingdom;
    }
    else if (input === "Iceland") {
        country = iceland;
    }
    country.displayColors();

    // document.getElementById('Color1').style.backgroundColor = country.colors[0]
    // document.getElementById('Color2').style.backgroundColor = country.colors[1]
    // document.getElementById('Color3').style.backgroundColor = country.colors[2]



}