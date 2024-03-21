import { useContext, useEffect, useState } from "react";
import SumComponent from "./SumComponent";
import { SumContext } from "./SumProvider";
import SumAdders from "./SumAdders";
import "./Project.css"
import NavBar from "./Nav";
import axios from "axios";

export default function Project() {

    const [userName, setUserName] = useState();

    async function getRandomUserData() {

        // axios.get(...)
        //    .then(response => {
        //       console.log("SEcond ling")
        //       const firstName = response.data.results[0].name.first;
        //       setUserName(firstName);
        //       return axios.get(URL + firstName)
        //})
        //    .then(response => {
        //    
        //})
        const response = await axios.get('https://randomuser.me/api/');
        console.log("Second ling")
        const firstName = response.data.results[0].name.first;

        setUserName(firstName);

        const firstNameResponse = await axios.get(URL + first)

        // fetch(URL, function(response) {
        //       console.log("SEcond ling")
        //       const firstName = response.data.results[0].name.first;
        //       setUserName(firstName);
                 fetch(URL + "first", function(){ 

                 })
        //})
    }

    useEffect(function() {
        console.log('first line')
        getRandomUserData();
        getRandomImage();
        console.log("third line")
    }, [])

    getRandomUserData();

    return <div>Hello from Project, {userName}!</div>
//     //value={[countStateContext, setCountStateContext]}
//     const sumContext = useContext(SumContext);
//     const countState = sumContext.countStateContext;

//     const gridComponent = [];

//     for(let i = 0; i < countState.boxGrid.length; i++) {
//         const rowComponent = [];
//         const row = countState.boxGrid[i];
        
//         for(let j = 0; j < row.length; j++) {
//             rowComponent.push(<Box x={i} y={j}  />)
//         }
//         gridComponent.push(<div className="BoxRow">{rowComponent}</div>);
//     }
//     // for(let i = 0; i < 4; i++) {
//     //     boxComponent.push(<Box />)
//     // }

//     return (<div>
//         <NavBar />

//         {gridComponent}
//         <button onClick={() => sumContext.increaseBoxGridSize()}>Increase Grid Size By 1</button>
//     </div>)

//     // return (<div>
//     //     <SumComponent valueToShow={countState} />
//     //     <SumAdders increaseAmount={1}/>
//     //     <SumAdders increaseAmount={2}/>
//     //     <SumAdders increaseAmount={5}/>
//     // </div>)
// }

// function Box(props) {
//     const sumStateContextValue = useContext(SumContext);
//     const stateContext = sumStateContextValue.countStateContext;
//     const setStateContext = sumStateContextValue.setCountStateContext;

//     const isAlive = stateContext.boxGrid[props.x][props.y];
//     const boxGrid = stateContext.boxGrid;
    
//     function onClick() {
//         boxGrid[props.x][props.y] = !isAlive;
//         console.log("on click")
//         setStateContext({
//             ...stateContext,
//             boxGrid: boxGrid,
//         })
//     }

//     let className = "Box";
//     if(isAlive) {
//         className += " Alive"
//     }

//     return (<div className={className} onClick={onClick}></div>)
}


// function WelcomeToMyWebsite() {
//     return (<div>Welcome to my website</div>)
// }

// function BorderComponent(props) {
//     return (<div>------------------{props.children}-------------------</div>)

// }