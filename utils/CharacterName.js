export function getCharactersNames(characters) {

    // Récupération de la liste de character en param
    const characterList = characters;
    const charactersNames = characterList.map(char => char.name);
    
    return charactersNames;
}