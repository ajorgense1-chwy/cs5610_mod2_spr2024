import { createContext, useState } from "react";

export const NumberContext = createContext();

export function NumberTrackerProvider(props) {
    const [numbersState, setNumbersState] = useState({
        firstNumber: 7,
        secondNumber: 10,
    })

    return (
        <NumberContext.Provider value={[numbersState, setNumbersState]}>
            {props.children}
        </NumberContext.Provider>
    )
}

