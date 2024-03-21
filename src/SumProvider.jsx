import { createContext, useState } from "react";

export const SumContext = createContext();

export function SumProvider(props) {

    const [countStateContext, setCountStateContext] = useState({
        clickCount: 0,
        boxGrid: [[false, true], 
        [true, false]],
    });

    function increaseBoxGridSize() {
        const boxGrid = countStateContext.boxGrid;
        for(let i = 0; i < boxGrid.length; i++) {
            boxGrid[i].push(false);
        }
        setCountStateContext({
            ...countStateContext,
            boxGrid: boxGrid,
        })
    }

    const sumContextProviderValue = {
        countStateContext: countStateContext,
        increaseBoxGridSize: increaseBoxGridSize,
        setCountStateContext: setCountStateContext
    }

    // props.children = <Project />
    return (<SumContext.Provider value={sumContextProviderValue}>
        {props.children}
    </SumContext.Provider>)
}


// Amazon URL
// https://www.amazon.com/dp/B0CKZGY5B6

// Airbnb
// https://www.airbnb.com/rooms/48832774?adults=1&category_tag=Tag%3A5348&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1549931241&search_mode=flex_destinations_search&check_in=2024-04-14&check_out=2024-04-19&source_impression_id=p3_1710385586_EqgBeYUepyDSLnvW&previous_page_section_name=1000&federated_search_id=e1f31f73-fef8-4c05-92c4-b4c766227c8e

// Wiki URL
// https://en.wikipedia.org/wiki/PlayStation_5