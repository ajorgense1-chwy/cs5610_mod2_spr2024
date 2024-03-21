const obj = {
    tesla: 'red',
    honda: 'green',
}

obj.ford = 'blue';
// obj['ford'] = 'blue';
obj.tesla = 'purple'

const toyota = obj.toyota;

toyota

const list = [
    'fit', 'mustang', 
]

function returnWord() {

    return "word";

}

let returnNumber = function() {
    12;
}

returnNumber()

const checkTruthyValue = NaN;

if(checkTruthyValue) {
    console.log(checkTruthyValue + " is truthy")
} else {
    console.log(checkTruthyValue + " is falsy")
}

const passyByRef = {
    banana: 'yellow',
}

function updateObject(obj) {
    obj.apple = 'red';
}

updateObject(passyByRef)

passyByRef

const passyByValue = 'string';

function updateString(str) {
    str = str + "!"
    console.log(str);
}

updateString(passyByValue);

passyByValue

/*

const obj = {
    tesla: 'red',
    honda: 'green',
}

obj.ford = 'blue';
// obj['ford'] = 'blue';
obj.tesla = 'purple'
*/

// const tesla = obj.tesla;
// const honda = obj.honda;
// const mitsubishi = obj.mitsubishi;
obj 
const {mitsubishi, honda} = obj;
mitsubishi 

const favColors = ['green', 'red', 'purple', 'azul'];

// const firstFavColor = favColors[0];
// const secondFavColor = favColors[1];
const [firstColor, secondColor] = favColors;

firstColor
secondColor

const fiveOrMoreLetters = [];
for(let i = 0; i < favColors.length; i++) {
    const color = favColors[i];
    if(color.length >= 5) {
        fiveOrMoreLetters.push(color);
    }
}

const fiveMoreLetters = favColors.filter((color) => color.length >= 5);

fiveOrMoreLetters
fiveMoreLetters

function returnTrue() {
    return true;
} 


const returnFalse = () => false;

