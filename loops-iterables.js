/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


var sumOfArray = function(array) {
    var finalNumber = 0
    for (var i = 0; i < array.length; i++) {
        //finalNumber = finalNumber + array[i]
        finalNumber += array[i]
    }
    return finalNumber
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.


var maxOfArray = function(arrayOfNumbers) {
    var oneNumber = 0
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        var current = arrayOfNumbers[i]
        if (isNaN(current)) {
            return 'NaN'
        }
        if (current > oneNumber) {
            oneNumber = current
        }
    }
    // log('bye)
    return oneNumber
}

console.assert(maxOfArray([2, 4, 3]) === 4)
console.assert(maxOfArray([10, 9, 8, 100, 7, 6]) === 100)
console.assert(isNaN(maxOfArray([1, 2, 'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

// Test Code with Arrays

function isVowel(symbol) {
    var condition = false
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    for (i = 0; i < vowels.length; i++) {
        if (symbol === vowels[i]) {
            condition = true
        }

    } return condition 
}


// function isVowel(symbol) {
//     if ((symbol === 'A') || (symbol === 'a') || (symbol === 'E') || (symbol === 'e') || (symbol === 'I') || (symbol === 'i') || (symbol === 'O') || (symbol === 'o') || (symbol === 'U') || (symbol === 'u')) {
//         return true
//     } else {
//         return false
//     }
// }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

var reverse = function(string) {
    var solutionString = ''
    var len = string.length
    var end = len - 1
    for (var i = end; i >= 0; i--) {
        solutionString += string[i]
    }
    return solutionString
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(number) {
    var stringOutput = ''
    for (var i = 1; i <= number; i++) {
        var curNum = i
        if ((curNum % 3 === 0) && (curNum % 5 !== 0)) {
            stringOutput += 'fizz'
        } else if ((curNum % 3 !== 0) && (curNum % 5 === 0)) {
            stringOutput += 'buzz'
        } else if ((curNum % 3 === 0) && (curNum % 5 === 0)) {
            stringOutput += 'fizzbuzz'
        } else {
            stringOutput += '.'
        }
    }
    return stringOutput

}


console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

// var findLongestWord = function(string) {
//     var oneWord = ''
//     var arrayOfWords = string.split(" ")
//     for (var i = 0; i < arrayOfWords.length; i++) {
//         var current = arrayOfWords[i]
//         if (current.length > oneWord.length) {
//             oneWord = current
//         }
//     }
//     return oneWord
// }


var findLongestWord = function(sen) {
    var bestWord = null;
    var bestLength = 0;

    var matches = sen.match(/[a-z]+/gi);
    for (var i = 0; i < matches.length; i++){
        var word = matches[i];
        if (word.Length > bestLength)
        {
            bestLength = word.Length;
            bestWord = word;
        }
    }
    return bestWord;
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function gcd(num1, num2) {
    if (num1 == 0)
        return num2;

    while (num2 != 0) {
        if (num1 > num2)
            num1 = num1 - num2;
        else
            num2 = num2 - num1;
    } return num1;
}



console.assert(gcd(5, 1) === 1);
console.assert(gcd(15, 3) === 3);
console.assert(gcd(15, 5) === 5);
console.assert(gcd(50, 20) === 10);
