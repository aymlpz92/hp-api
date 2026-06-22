const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getCharacters() {

    const response = await fetch(API_URL);
    const characterList = await response.json();

    
    for (const character of characterList) {
        const name = character.name;
        const address = character.address;
        const street = address.street;
        const suite = address.suite;
        const city = address.city;
        const zipcode = address.zipcode;
        console.log(name + ", " + street + ", " + suite + ", " + city + ", " + zipcode + ".");
    }
    return characterList;
}

async function getCharactersNames() {
    const response = await fetch(API_URL);
    const characterList = await response.json();

    const charactersNames = [];

    for (const character of characterList) {
        charactersNames.push(character.name);
    }
    console.log(charactersNames) ;
}

async function searchByEmail(email) {
    const response = await fetch(API_URL);
    const characterList = await response.json();


    for (const character of characterList) {
        if (email === character.email)
            email = character.email
    }
    console.log(email);
}

async function getUsername(username) {
    const response = await fetch(API_URL);
    const characterList = await response.json();

    for (const character of characterList) {
        name = character.name;
        if (name.includes(username)) {
            username = name;
        }
    }
    console.log(username);
}

getUsername("Leanne");
// searchByEmail("Shanna@melissa.tv");
// getCharacters();
// getCharactersNames();