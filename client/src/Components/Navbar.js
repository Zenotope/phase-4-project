
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/NavBar';

function Navbar(){
    return(
        <Navbar>
            <Navbar.item>
                <Link>Search</Link> 
            </Navbar.item>
            <Navbar.item>
                <Link>Favorites</Link>
            </Navbar.item>
        </Navbar>
    )
}

export default Navbar