import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/img/png/logo_img.png";
import heart from "../assets/img/png/heart.png";
import icon from "../assets/img/png/icon.png";

function Mynav() {
  return (
    <Navbar className="nav_bg py-4" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto py-4 py-lg-0 ">
            <Nav.Link
              className="ff_opensans fw-semibold fs-md text-white mx-lg-4 px_lg_0 line_hover position-relative"
              href="#home"
            >
              LEARN
            </Nav.Link>
            <Nav.Link
              className="ff_opensans fw-semibold fs-md text-white mx-lg-4 px_lg_0 line_hover position-relative"
              href="#link"
            >
              LISTINGS
            </Nav.Link>
            <Nav.Link
              className="ff_opensans fw-semibold fs-md text-white mx-lg-4 px_lg_0 line_hover position-relative"
              href="#link"
            >
              COMMUNITIES
            </Nav.Link>
            <Nav.Link
              className="ff_opensans fw-semibold fs-md text-white mx-lg-4 px_lg_0 line_hover position-relative"
              href="#link"
            >
              CONTACT
            </Nav.Link>
            <Nav.Link
              className="ff_opensans fw-semibold fs-md text-white mx-lg-4 "
              href="#link"
            >
              <img src={heart} alt="heart" />
            </Nav.Link>
            <NavDropdown
              className="ff_opensans fw-semibold fs-md text-white mx-lg-4 line_hover position-relative px_lg_0"
              title="$ USD"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>{" "}
          <Nav.Link
            className="ff_open fw-semibold fs-md text-white d-none d-lg-flex ms-lg-4 "
            href="#link"
          >
            <img src={icon} alt="icon" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
