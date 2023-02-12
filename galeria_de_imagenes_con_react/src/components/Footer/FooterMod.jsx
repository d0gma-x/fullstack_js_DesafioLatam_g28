import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const FooterMod = (props) => {
  return (
    <Container fluid className="footer text-white">
      <Row>
        <Col lg={12} className="d-flex justify-content-center">
          <p className="fs-5 m-0 pt-4 pb-2">by AvaxScript with ❤️</p>
        </Col>

        <Col lg={6} className="d-flex justify-content-center py-3">
          <a href="https://github.com/d0gma-x" target="_blank" rel="noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a
            href="https://www.linkedin.com/in/gerardo-apablaza-mena-578a71b6/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a
            href="https://www.instagram.com/avaxscript/?igshid=ZDdkNTZiNTM%3D"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </Col>

        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center text-center py-3"
        >
          <p className="m-0">Todos los Derechos Reservados © 2023</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterMod;
