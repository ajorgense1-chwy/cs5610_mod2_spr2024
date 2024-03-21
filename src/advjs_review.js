const randomCarColors = {
    lambo: 'green',
    ferrari: 'bright yellow',
    hondaFit: 'blue'
}

const lamboKey = 'lambo'
const lamboColor = randomCarColors.lambo;
const lamboColor1 = randomCarColors[lamboColor];

// const ferrari = randomCarColors.ferrari;

// const lambo = randomCarColors.lambo;
// const helicopter = randomColors.helicopter
const {
    lambo
} = randomCarColors;
lambo 
// hondaFit
// helicopter

const favCars = ['ferrari', 'mustang', 'motorcycle'];

// const firstFavCar = favCars[0];
// const secondFavCar = favCars[1];
const [firstFavCar, secondFavCar, ...remainingCars] = favCars; 
firstFavCar
remainingCars

function getFavCar() {
    return 'honda fit';
}

const generateFavCar = function() {
    return 'motorcycle';
}

const resultFavCar = generateFavCar();
resultFavCar

// const generateFavCar = () => 'motorcycle'

const add2Numbers = (firstNum, secondNum) => firstNum + secondNum;

const summation = add2Numbers(10, 5);

summation