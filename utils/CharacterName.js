export function getCharactersNames(characters) {

    // Récupération de la liste de character en param
    const characterList = characters;
    const charactersNames = [];

    // Pour chaque character je récupère le nom et l'ajoute dans la liste que je vais retourner
    for (const character of characterList) {
        charactersNames.push(character.name);
    }
    return charactersNames;
}