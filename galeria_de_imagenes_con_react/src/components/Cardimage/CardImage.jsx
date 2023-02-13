import { Button, Card, Col } from "react-bootstrap";
import logoSpotify from "./img/spotify.png";

const CardImage = (props) => {
  const { src, titleImg, comment, url, descriptionUrl, urlSpotify } = props;
  return (
    <Col className="d-flex justify-content-center p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{titleImg}</Card.Title>
          <Card.Text>{comment}</Card.Text>

          <a href={urlSpotify} target="_blank" rel="noreferrer">
            <img src={logoSpotify} alt="logo_spotify" width="40" height="40" />
          </a>

          <br />
          <br />

          <Button
            variant="warning"
            href={url}
            target="_blank"
            className="fw-bolder"
          >
            {descriptionUrl}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardImage;
