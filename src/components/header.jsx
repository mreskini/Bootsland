import image from "../images/logo.png"
import { Navbar,Nav,NavDropdown,Button } from 'react-bootstrap'

export default function  Header(){
    window.onscroll = () => {
        let header = document.getElementById("header")
        let sticky = header.offsetTop
        window.pageYOffset > sticky ? (header.classList.add("sticky")) : (header.classList.remove("sticky"))
    };
    return(
        <div className="container-fluid pt-1 bg-white z-999" id="header">
            <div className="col-11 mx-auto">
                <Navbar variant="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">
                    <a className="navbar-brand">
                        <img id="header-logo" src={image} className="img-fluid w-100" alt="Logo" />
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-5">
                            <Nav.Link className="h6 my-auto bold-600">Home</Nav.Link>
                            <Nav.Link className="h6 my-auto bold-600">Pages</Nav.Link>
                            <Nav.Link className="h6 my-auto bold-600">Shop</Nav.Link>
                                <NavDropdown title="Features" className="h6 my-auto bold-600">
                                    <NavDropdown.Item className="h6 my-auto">Blog</NavDropdown.Item>
                                    <NavDropdown.Item className="h6 my-auto">Counter</NavDropdown.Item>
                                    <NavDropdown.Item className="h6 my-auto">Team</NavDropdown.Item>
                                </NavDropdown>
                        </Nav>
                        <Button className="btn btn-primary-color h5 my-auto">Buy Now</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}