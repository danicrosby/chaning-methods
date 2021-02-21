const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


const numEl = document.getElementById("integers")
numEl.innerHTML += "<h1>Integers</h1>";


// Sort the numbers in descending order (10, 9, 8, 7, etc).
numEl.innerHTML += "<h3>Acending</h3>";
const sortNumbers = integers.sort( (a, b) => a - b );
numEl.innerHTML += `${sortNumbers}`;



// Remove any integers greater than 19.
numEl.innerHTML += "<h3>Numbers Under 19</h3>";
const removeNumbers = integers.splice(0, 10);
numEl.innerHTML += `${removeNumbers}`;



// Multiply each remaining number by 1.5 and then subtract 1.
numEl.innerHTML += "<h3>Multiply 1.5 & Subtract 1</h3>";
const multiplyNumbers = integers.map(integer => integer * 1.5 - 1)
numEl.innerHTML += `${multiplyNumbers}`;



// Then output (either in the DOM or the console) the sum of all the resulting numbers.
numEl.innerHTML += "<h3>Sum Of Remaining Numbers</h3>";
const sum = integers.reduce((total, amount) => total + amount); 
numEl.innerHTML += `${sum}`;




// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
