import {NavLink} from 'react-router-dom';
import {Navbar, Nav } from 'react-bootstrap';

function NavigationBar () {
    return(
        <Navbar>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={NavLink}>
                        Home
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}
export default NavigationBar