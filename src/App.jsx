import CarList from './CarList';
import CarHeader from './CarHeader';
import { useState } from 'react';

export function App() {
  const [carNumberCount, setCarNumberCount] = useState(2);

  // let carNumberCount = 2;
  let iLikeCarsComponent = (
    <div>I love my cars!</div>
  )

  function increaseCarAmount() {
    // carNumberCount = carNumberCount + 1;
    console.log(carNumberCount)
    setCarNumberCount(carNumberCount + 1);
    // console.log("car number before", carNumbers);
    // carNumbers = carNumbers + 1;
    // console.log("car number after", carNumbers);

  }

  if(carNumberCount > 3) {
    iLikeCarsComponent = (<div>I really, really love cars!</div>)
  }

  return (<div>
    <CarHeader />
    <CarList />
    <div>The number of cars I have is: {carNumberCount}</div>
    {iLikeCarsComponent}
    <button onClick={() => increaseCarAmount()}>Click to increase car count</button>
  </div>)
}


export const FavNumber = 5;

let globalCounter = 5;

function getGlobalCounter() {
  return globalCounter;
}

const result = getGlobalCounter();

globalCounter = 1000;

console.log(result);