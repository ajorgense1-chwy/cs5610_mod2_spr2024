import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (<div>
        <b>This is the nav bar</b>
        <div><NavLink to="/help">Help Page</NavLink></div>
        <div><NavLink to="/">Home Page</NavLink></div>
    </div>)
}
