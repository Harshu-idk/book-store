import { NavLink } from "react-router-dom";
import dc from "./dc.jpg";


export const User = ({name,age}) => {
    return(
       <h1>
        This is user Component {name}{age}
        <NavLink to='/'>Home</NavLink>
        <br />
        <br />
        <img src={dc} alt=""/>
       </h1>
    );
};


export const Home = () => {
  return (
    <h1>
        Home Component <NavLink to="/user">User</NavLink><NavLink to="/profile">profile</NavLink>
    </h1>
  );
};

