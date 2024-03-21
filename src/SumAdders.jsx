import { useContext } from "react"
import { SumContext } from "./SumProvider"

export default function SumAdders(props) {

    const increaseAmount = props.increaseAmount;

    const [countState, setCountState] = useContext(SumContext);

    function addToCount(num) {
        setCountState(countState + num)
    }

    return (<button onClick={() => addToCount(increaseAmount)}>Click to increase by {increaseAmount}</button>)


}