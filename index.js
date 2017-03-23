var words = require('./words.json')
function anagramsSearch(given) {
    const alphabeticalGiven = given.split("").sort().join("");
    const anarams = [];
    for (let word of words) {
        const alphabeticalWord = word.split("").sort().join("");
        if (alphabeticalGiven === alphabeticalWord) {
            anarams.push(word);
        }
    }
    return anarams;
}
module.exports= anagramsSearch;