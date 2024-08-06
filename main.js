function run(p) {
    // Helper function to check if a character is a vowel
    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
    }

    // Count vowels and consonants
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (const char of p) {
        if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            if (isVowel(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }

    // Reverse words order and reverse cases
    const reversedWordsOrder = p.split(' ').reverse().map(word => word.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')).join(' ');

    // Words separated by dashes
    const wordsWithDashes = p.split(' ').join('-');

    // Insert "pv" before each vowel
    const withPv = p.split('').map(char => isVowel(char) ? 'pv' + char : char).join('');

    // Combine all results
    const combined_queries = `${vowelsCount} ${consonantsCount}::${reversedWordsOrder}::${wordsWithDashes}::${withPv}`;

    return combined_queries;
}

module.exports = { run };
