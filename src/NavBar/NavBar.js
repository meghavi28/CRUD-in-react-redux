import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

function handleLogout()
{
    localStorage.clear()

}


function NavBar() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Student Details</NavbarBrand>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                    </Nav>
                    
                    {localStorage.getItem('token') === null &&
                        (
                            <div>
                            <Link to="/"><Button color="secondary">Login</Button>{' '}</Link> &nbsp;&nbsp;
                            <Link to="/register"><Button color="secondary">Registration</Button>{' '}</Link>
                            </div>    
                             
                    )
                    ||
                    (
                        <Link to="/"><Button color="secondary" onClick={handleLogout}>Logout</Button>{' '}</Link>
                    )
                    }

                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavBar;
