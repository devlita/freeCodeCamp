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

## Credits
freeCodeCamp (https://www.freecodecamp.org/)

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
var ourStr = "I come first. " + "I come second.";
// ourStr is "I come first. I come second."
```

```js
var ourStr = "I come first. "
ourStr += "I come second." 
// ourStr is now "I come first. I come second."
```

Constructing Strings with Variables
```js
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is now "Hello, our name is freeCodeCamp, how are you?"
```

Appending Variables to Strings
```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
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
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
