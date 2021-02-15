## Index
1. [Operators](#operators)
   * [Arithmetic](#arithmetic)
   * [Comparison](#comparison)
   * [Logical](#logical)
   * [Type](#type)
2. [Declarations](#declarations)
3. [Strings](#strings)
   * [Escape Sequences in Strings](#escape-equences-in-strings)
   * [Word Blanks](#word-blanks)
4. [Array](#arrays)
   * [Shopping List](#shopping-list)
5. [Functions](#functions)
   * [Stand in Line](#stand-in-line)
6. [Control Structures](#control-structures)
   * [If](#if)
   * [Switch](#switch)

## Credits
[freeCodeCamp](https://www.freecodecamp.org/)

## Operators
### Arithmetic
|Operator|Description|
|--------|-----------|
|`+`|addition|
|`-`|subtraction|
|`*`|multiplication|
|`**`|exponentiation|
|`/`|division|
|`%`|modulus|
|`++`|increment|
|`--`|decrement|

### Comparison
|Operator|Description|
|--------|-----------|
|`==`|equal|
|`===`|equal value and equal type|
|`!=`|not equal|
|`!==`|not equal value or not equal type|
|`<`|less than|
|`<=`|less than or equal|
|`>`|greater than|
|`>=`|greater than or equal|
|`?`|ternary operator|

### Logical
|Operator|Description|
|--------|-----------|
|`&&`|logical and|
|`\|\|`|logical or|
|`!`|logical not|

### Type
|Operator|Description|
|--------|-----------|
|`typeof`|returns the type of a variable|
|`instanceof`|returns true if an object is an instance of an object type|

## Declarations
When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

```js
var x // declaration without initialization
var y = 7 // numbers
var z = "z" // strings
```

## Strings
In JavaScript, String values are immutable, which means that they cannot be altered once created.

### Escape Sequences in Strings
|Code|Output|
|----|------|
|`\'`|single quotes|
|`\"`|double quotes|
|`\\`|backlash|
|`\n`|newline|
|`\r`|carriage return|
|`\t`|tab|
|`\b`|word boundary|
|`\f`|form feed|

Concatenating Strings
```js
var ourStr = "I come first. " + "I come second."
// ourStr is "I come first. I come second."
```

```js
var ourStr = "I come first. "
ourStr += "I come second." 
// ourStr is now "I come first. I come second."
```

Constructing Strings with Variables
```js
var ourName = "freeCodeCamp"
var ourStr = "Hello, our name is " + ourName + ", how are you?"
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
```

Appending Variables to Strings
```js
var anAdjective = "awesome!"
var ourStr = "freeCodeCamp is "
ourStr += anAdjective
// ourStr is now "freeCodeCamp is awesome!"
```

Strings Examples
```js
var lastName = "Lovelace"

// Find the Length of a String
lastNameLength = lastName.length

// Use Bracket Notation to Find the First Character in a String
firstLetterOfLastName = lastName[0]

// Use Bracket Notation to Find the Last Character in a String
var lastLetterOfLastName = lastName[lastName.length - 1]
```

### Word Blanks
```js
var myNoun = "dog"
var myAdjective = "big"
var myVerb = "ran"
var myAdverb = "quickly"

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". "
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard."
```

## Array
```js
// Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["string", 1]

// Nest one Array within Another Array
var myArray = [["Bulls", 23], ["White Sox", 45]]

// Manipulate Arrays With push()
var myArray = [["John", 23], ["cat", 2]]
myArray.push(["dog", 3]) // adds the element at the end of the array

// Manipulate Arrays With pop()
var myArray = [["John", 23], ["cat", 2]]
var removedFromMyArray = myArray.pop() // removes the last element of an array

// Manipulate Arrays With shift()
var myArray = [["John", 23], ["dog", 3]]
var removedFromMyArray = myArray.shift() // removes the first element of an array

// Manipulate Arrays With unshift()
var myArray = [["John", 23], ["dog", 3]]
myArray.unshift(["Paul", 35]) // adds the element at the beginning of the array
```

### Shopping List
```js
var myList = [
  ["Chocolate", 15],
  ["Milk", 2],
  ["Eggs", 12],
  ["Bread", 1],
  ["Butter", 1]
]
```

## Functions
```js
// Write Reusable JavaScript with Functions
function functionName() {
  console.log("Hello World")
}

// Passing Values to Functions with Arguments
function testFun(param1, param2) {
  console.log(param1, param2)
}
```

### Stand in Line
```js
function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift()
}

var testArr = [1,2,3,4,5]
console.log(nextInLine(testArr, 6)) // testArr = [2,3,4,5,6]
```

### Returning Boolean Values from Functions
You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.
```js
function isEqual(a,b) {
  return a === b
}
```
The above outputs "Hello" to the console, returns "World", but "byebye" is never output, because the function exits at the return statement.

### Return Early Pattern for Functions
When a return statement is reached, the execution of the current function stops and control returns to the calling location.
```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
```

## Control Structures

### If
Golf Code
```js
function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return "Eagle"
  } else if (strokes == par - 1) {
    return "Birdie"
  } else if (strokes === par) {
    return "Par"
  } else if (strokes == par + 1) {
    return "Bogey"
  } else if(strokes == par + 2) {
    return "Double Bogey"
  } else return "Go Home!";
}
```

### Switch
Counting Cards
```js
var count = 0

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
  }
  if(count > 0) {
    return count + " Bet"
  } else {
    return count + " Hold"
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A')
```
