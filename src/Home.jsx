import { useContext, useState } from "react";
import FavNumberHighlighter from "./FavNumberHighlighter";
import './Home.css';
import { NumberContext } from "./NumberTrackerProvider";

export default function Home() {
    const [numberTrackerState, setNumberTrackerState] = useContext(NumberContext);

    // let favNumber = 15;
    // const [favNumberState, setFavNumberState] = useState(7);
    // const [secondFavNumberState, setSecondFavNumberState] = useState(20);

    // const [numberTrackerState, setNumberTrackerStat] = useState({
    //     firstFavNumber: 7, secondFavNumber: 10,
    // })

    // function doubleNumber() {
    //     favNumber = favNumber * 2;
    //     console.log(favNumber);
    // }

    // function modifyNumberTracker() {
    //     const newState = {
    //         ...numberTrackerState,
    //         firstFavCar: 11
    //     }
    //     setNumberTrackerStat(newState)
    // }

    // function modifyFavNumberState () {
    //     setFavNumberState(favNumberState * 3);
    // } 

    // function modifySecFavNumberState () {
    //     setSecondFavNumberState(secondFavNumberState * 4);
    // } 

    // const favCars = ['motorcycle', 'fit', 'porsche', 'tesla'];

    // const carComponents = []

    // for(let i = 0; i < favCars.length; i++) {
    //     const carName = favCars[i]
    //     let className = 'carClass' 
    //     if (carName === 'porsche') {
    //         className = 'porscheClass'
    //     }

    //     carComponents.push((
    //         <div className={className} onClick={() => console.log("My favorite car is " + favCars[i])}>{favCars[i]}</div>
    //     ))
    // }

    function doubleFirstNumber() {
        const newFirstNumber = numberTrackerState.firstNumber * 2; 
        setNumberTrackerState({
            ...numberTrackerState,
            firstNumber: newFirstNumber
        })
    }

    function tripleSecondNumber() {
        const newSecondNumber = numberTrackerState.secondNumber * 3; 
        setNumberTrackerState({
            ...numberTrackerState,
            secondNumber: newSecondNumber
        })
    }

    return (<div>
        <FavNumberHighlighter numInput={numberTrackerState.firstNumber} />
        <FavNumberHighlighter numInput={numberTrackerState.secondNumber} />
        <button onClick={doubleFirstNumber}>Click me to double first number</button>
        <button onClick={tripleSecondNumber}>Click me to triple second number</button>
        {/* {carComponents} */}
    </div>)
}



/*
    <div class='FunClass' type='number' id='FunClass1' />
*/

// const Home = <div>Home</div>