// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:

var printNumbers = function (x, y) {
    var num = x
    while (num <= y) {
        console.log(num);
        num ++;
    }
};

printNumbers(1, 10);

// Write two versions of the above function. 
// One using a while loop and the other using a for loop.

var printNumbers1 = function (x, y) {
    for (var num = x; num <= y; num ++) {
        console.log(num);
    }
};

printNumbers1(1, 10);

// Write a function printSquare which is given a size and 
// prints a square of that size using asterisks.

var printSquare = function (x) {
    for (var num = 1; num <= x; num++) {
        console.log('*'.repeat(x));
    }
};

printSquare(5);

// Write function printBox which is given a width and 
// height and prints a hollow box of those given dimensions.

var printBox = function (x, y) {
    console.log('*'.repeat(x))
    for (var height=1; height <= (y - 2); height++) {
        console.log('*' + ' '.repeat(x-2) + '*');
    }
    console.log('*'.repeat(x))
};

printBox(6, 4);

// Write a function printBanner which is given some text 
// and prints a banner with a border surrounding the text. 
// The border has to stretch to the length of the text.

var printBanner = function (text) {
    console.log('*'.repeat(text.length + 2));
    console.log(`*${text}*`);
    console.log('*'.repeat(text.length + 2));
};

printBanner('Welcome to DigitalCrafts');

// Write a function factors which is given a number 
// and returns an array containing all its factors.

var factors = function (num) {
    var factorList = [];
    var x = 1;
    while (x <= num) {
        if (num % x == 0) {
            factorList.push(x);
        }
        x++;
    } 
return factorList;
};

console.log(factors(6));

// Write a function cipher which is given a string, 
// an offset, and returns the Caesar cipher of the string.

var plaintext = 'Genius without education';
var ciphertext = '';
var shift = 11;

var cipher = function (plaintext, shift) {
    for (var i = 0; i < plaintext.length; i++) {
        var newChar = plaintext.charCodeAt(i);
	    var shiftChar = newChar + shift;
	    ciphertext += String.fromCharCode(shiftChar);
	}
return ciphertext;
};

console.log(cipher(plaintext, shift));

// Write a function decipher which is given a string, an offset, 
// and returns the original message.

var shiftedText = ciphertext;
var shift1 = -11;
var fixed = '';

var decipher = function (shiftedText, shift1) {
    for (var i = 0; i < shiftedText.length; i++) {

        var newChar = shiftedText.charCodeAt(i);
        var shiftChar = newChar + shift1;
        fixed += String.fromCharCode(shiftChar);
    }
return fixed;   
};

console.log(decipher(shiftedText, shift1));


// Write a function leetspeak which is given a string, and 
// returns the leetspeak equivalent of the string.


var leetString = 'LEET';

var leetSpeek = function (str) {
    var str = str.toLowerCase();
    var str = str.replace(/a/g, 4);
    var str = str.replace(/e/g, 3);
    var str = str.replace(/g/g, 6);
    var str = str.replace(/i/g, 1);
    var str = str.replace(/o/g, 0);
    var str = str.replace(/s/g, 5);
    var str = str.replace(/t/g, 7);
    return str;
};

console.log(leetSpeek(leetString));

// Write a function, which is given a string, return the result of 
// extending any long vowels to the length of 5.

var vowels = function(str) {
    var str = str.replace(/oo/g, 'o'.repeat(5));
    var str = str.replace(/ee/g, 'e'.repeat(5));
    return str;
};

console.log(vowels('Good'));
console.log(vowels('man'));

// Write a function sumNumbers which is given an array of numbers and 
// returns the sum of the numbers.

var sumNumbers = function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
return sum;
};

console.log(sumNumbers([1, 4, 8]));

// Write a function positiveNumbers which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.

var positiveNumbers = function (numbers) {
    var newArray = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
};

console.log(positiveNumbers([1, -3, 5, -3, 0]));
console.log(positiveNumbers([1, 2, 3]));
console.log(positiveNumbers([-1, -2, -3]));

// Write a function matrixAdd which is given 
// two two-dimensional arrays, and returns a new 
// two-dimensional array containing their matrix sum.



var matrixAdd = function (matrix1, matrix2) {
    var newMatrix = [];
    for (var i = 0; i < matrix1.length; i++) {
        newMatrix[i] = [];
        for (var j=0; j < matrix1[0].length; j++) {
            var cell1 = matrix1[i][j]
            var cell2 = matrix2[i][j]
            newMatrix[i].push(cell1 + cell2);
        }
    }
    return newMatrix;
}

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

// Write a function matrixMultiply which is given two two-dimensional 
// arrays - you can assume the matricies are of size 2x2. It will return 
// the result of matrix multiplication between the two given matricies.


var matrixMultiply = function (matrix1, matrix2) {
    var multiplied = [[0,0], [0,0]];
    multiplied[0][0] = (matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1] * matrix2[1][0]);
    multiplied[0][1] = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1] * matrix2[1][1]);
    multiplied[1][0] = (matrix1[1][0] * matrix2[0][0]) + (matrix1[1][1] * matrix2[1][0]);
    multiplied[1][1] = (matrix1[1][0] * matrix2[0][1]) + (matrix1[1][1] * matrix2[1][1]);
    return multiplied;
};

console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));

// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. 
// A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 
// 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

var rockPaperScissors = function (x, y) {
    if (x == 'rock') {
        if (y == 'scissors') {
            console.log('Player 1 Wins');
        } else if (y == 'paper') {
            console.log('Player 2 Wins');
        } else if (y == 'rock') {
            console.log('Draw');
        }
    } else if (x == 'paper') {
        if (y == 'scissors') {
            console.log('Player 2 Wins');
        } else if (y == 'paper') {
            console.log('Draw');
        } else if (y == 'rock') {
            console.log('Player 1 Wins');
        }
    } else if (x == 'scissors') {
        if (y == 'scissors') {
            console.log('Draw');
        } else if (y == 'paper') {
            console.log('Player 1 Wins');
        } else if (y == 'rock') {
            console.log('Player 2 Wins');
        }
    }
};

rockPaperScissors('paper', 'scissors');

// Write a function ticTacToe which takes a two-dimensional array of size 3x3. Each cell 
// in the two dimensional array can be one of 'O', 'X', or null. The ticTacToe function will 
// determine the winner by

// returning 'O' if O makes a row
// returning 'X' if X makes a row
// return null if neither makes a row



var ticTacToe = function (x) {
    for (var i=0; i < x.length; i++) {
        if (x[i][0] == x[i][1] && x[i][0] == x[i][2]) {
            console.log(x[i][0]);
        } else if (x[0][i] == x[1][i] && x[1][i] == x[2][i]) {
            console.log(x[0][i]);
        } else if (x[0][i] == x[1][i+1] && x[1][i+1] == x[2][i+2]) {
            console.log(x[0][i]);
        } else if (x[i][2] == x[1][1] && x[1][1] == x[2][0]) {
            console.log(x[1][i+1]);
    }
}
};

ticTacToe([
    ['X', 'O', 'O'],
    [null, 'O', 'X'],
    ['O', 'X', 'X']
]);
