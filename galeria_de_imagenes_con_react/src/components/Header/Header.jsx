import { Navbar, Container } from "react-bootstrap";

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <Navbar className="header flex-wrap">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white fs-3">{title}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end text-white">{subtitle}</Navbar.Collapse>
      </Container>
      </Navbar>
  );
};

export default Header;
