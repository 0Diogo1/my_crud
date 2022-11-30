import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <ul>
                <li><Link to="/">Registrar</Link></li>
                <li><Link to="/students">Alunos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar