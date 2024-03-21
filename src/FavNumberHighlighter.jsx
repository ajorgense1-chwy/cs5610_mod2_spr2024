import { useContext } from 'react';
import './FavNumberHighlighter.css'
import { NumberContext } from './NumberTrackerProvider';

/* props = {
    numInput = //someNumber
    favColor = //
    backgroundColor = //
}
*/

export default function FavNumberHighlighter(props) {
    const num = props.numInput;

    const [numberTrackerState, setNumberTrackerState] = useContext(NumberContext);

    function resetNumbers() {
        setNumberTrackerState({
            firstNumber: 7, secondNumber: 10,
        })
    }

    return (
        <div onClick={() => props.handleClick()} className={props.background + 'Class'}>
            My favorite number is <span className='favNumber'>{num}</span>
            <button onClick={() => resetNumbers()}>Reset all numbers</button>
            {/* {props.children} */}
        </div>
    )

}


//


//