import { Link } from "react-router-dom";
import './menu.css'

const Menu = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/todolist">To Do List</Link>
      </li>
    </ul>
  );
};

export default Menu;