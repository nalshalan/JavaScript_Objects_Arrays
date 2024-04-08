console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function arraySum(arr) {
    let sum = 0;

    arr.forEach(function(number) {
        sum += number;
    });
    return sum;
}
const numbers = [2, 22, 12, 17, 18, 39, 129];
console.log(arraySum(numbers));

// Exercise 2 Section 
console.log("EXERCISE 2:\n==========\n");

const book = {}

book.title = "The Kid in the Red Jacket";
book.author = "Barbara Park";
book.pages = 144;
book.readCount = 1;

book.info = function () {
        return `${this.title} by  ${this.author}, ${this.pages} pages, read ${this.readCount} time`;
}
console.log(book.info()); 

// Exercise 3 Section 
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

let wordsArray = sentence.split(" ");

for(let i = 0; i < wordsArray.length; i++) {
    words = wordsArray[i].split("");

    words.reverse();

    wordsArray[i] = words.join("");
}

let reversedWords = wordsArray.join(" ");

console.log(reversedWords);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let rowsArray = csvData.split("\n");

let headersArray = rowsArray[0].split(",");

let objectsArray = [];

for(let i = 1; i < rowsArray.length; i++) {
    let dataValuesArray = rowsArray[i].split(",");

    let rowObject = {
        name: dataValuesArray[0],
        age: dataValuesArray[1]
    }

    objectsArray.push(rowObject);
}
console.log(objectsArray);