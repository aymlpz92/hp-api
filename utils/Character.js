import { searchByEmail, searchByName } from "./Search.js";
import { getCharactersNames } from "./CharacterName.js";

export async function getCharacters(url) {

    // Appel de l'url de l'api définit en param
    const response = await fetch(url);
    // Récupération du body de la requete
    const characterList = await response.json();

    // Pour chaque personnage, je récupère le nom et l'adresse complète puis je les affiche
    for (const character of characterList) {
        const name = character.name;
        const address = character.address;
        const street = address.street;
        const suite = address.suite;
        const city = address.city;
        const zipcode = address.zipcode;
        console.log(name + ", " + street + ", " + suite + ", " + city + ", " + zipcode + ".");
    }
    // Affichage de la liste de nom
    console.log(getCharactersNames(characterList));
    // Récupérations des noms dans une liste
    const nameList = getCharactersNames(characterList);
    //Appel de la mthode de recherche par nom
    searchByName(nameList, "Cl");

    // Appel de la méthode d erehcerche par email
    searchByEmail(characterList, "Shanna@melissa.tv");

    
}