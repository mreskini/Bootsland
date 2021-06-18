import image from "../images/logo.png"
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

export default function  Header(){
    return(
        <div className="container-fluid mt-4">
            <div className="col-11 mx-auto">
                <Navbar variant="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">
                    <a className="navbar-brand">
                        <img id="header-logo" src={image} className="img-fluid w-100" alt="Logo" />
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="h5 my-auto">Home</Nav.Link>
                            <Nav.Link className="h5 my-auto">Pages</Nav.Link>
                            <Nav.Link className="h5 my-auto">Shop</Nav.Link>
                                <NavDropdown title="Features" className="h5 my-auto">
                                    <NavDropdown.Item className="h5 my-auto">Blog</NavDropdown.Item>
                                    <NavDropdown.Item className="h5 my-auto">Counter</NavDropdown.Item>
                                    <NavDropdown.Item className="h5 my-auto">Team</NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                        <Button className="btn btn-primary-color h5 my-auto ml-auto">Buy Now</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}