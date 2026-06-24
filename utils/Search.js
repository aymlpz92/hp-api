export function searchByEmail(characterList, request) {

    const result = characterList
    .map((character) => character.email)
    .filter((charEmail) => charEmail === request);
    // Params : liste de character ainsi que de l'email rechercher
    // Pour chaque character, je vérifie si l'email est identique à celui fourni en param
    
    // for (const character of characterList) {
    //     if (request === character.email) {
    //         result = character.email;
    //         break;
    //     } else {
    //         result = "Email introuvable";
    //     }

    // }
    console.log(result.toString());


}

export function searchByName(nameList, request) {
    const result = nameList
    .filter((name) => name.includes(request));
    // Params : Liste de tous les noms puis nom recherché
    // Pour chaque nom de la liste, je vérifie si le nom correspond à celui fourni en param
    // si aucun ne correspond, j'affiche un message approprié
    // for (const name of nameList) {
    //     if (name.includes(request)) {
    //         result = name;
    //         break;
    //     } else {
    //         result = "Nom introuvable";
    //     }
    // }
    console.log(result);

}