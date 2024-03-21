import { useContext } from "react";
import { SumContext } from "./SumProvider";

export default function SumComponent(props) {
    // eslint-disable-next-line react/prop-types
    const [count] = useContext(SumContext);

    function randomizeCount() {
    }

    return (<div>Hello - {props.valueToShow} </div>)
}