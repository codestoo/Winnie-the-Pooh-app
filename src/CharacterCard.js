import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CharacterCard({ characterObject }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={characterObject.image} />
      <Card.Body>
        <Card.Title>{characterObject.name}</Card.Title>
        <Card.Text>Species: {characterObject.species}</Card.Text>
        <Card.Text>Occupation: {characterObject.occupation}</Card.Text>
        <Card.Text>Introduction: {characterObject.introduction}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
