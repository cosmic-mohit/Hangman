/**
 * 
 * @param { The input word that needed to be guessed by the player } originalWord 
 * @param { The letters that are already guessed } guessedLetters 
 * 
 * exp : word : A P P L E
 *       guessed letters : ['A' 'E' 'L']
 *       return of this fn : A _ _ L E
 */


function getMaskedString(originalWord, guessedLetters){
        if(!originalWord) return [];
        guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

        // we can avoid using this set and can directly use the array of js
        // that will also provide us with the features of searching
        // exp : const array1 = [5, 12, 8, 130, 44];
        // const found = array1.find((element) => element > 10);

        const guessedLettersSet = new Set(guessedLetters);

        const result = originalWord.toUpperCase().split('').map(char =>{
            if(guessedLettersSet.has(char)){
                return char;
            }
            else{
                return " _ ";
            }
        })

        return result;
}

export default getMaskedString;