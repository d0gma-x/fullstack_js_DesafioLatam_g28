import { Button, Card, Col } from "react-bootstrap";

const CardImage = (props) => {
  const { src, titleImg, comment, url, descriptionUrl } = props;
  return (
    <Col className="d-flex justify-content-center p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title>{titleImg}</Card.Title>
          <Card.Text>{comment}</Card.Text>
          <Button variant="warning" href={url} target="_blank" className="fw-bolder">{descriptionUrl}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardImage;
