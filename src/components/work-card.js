import React from "react"

import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"

export default function WorkCard(props) {
  return (
    <Card className="work-card">
      <Card.Link
        className="work-card__thumb"
        href={props.linkUrl}
        target="_blank"
      >
        <Card.Img
          className="work-card__thumb-image"
          variant="top"
          src={props.imageUrl}
        />
      </Card.Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.bodyText}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.toolset}</ListGroupItem>
      </ListGroup>
      {props.linkUrl && (
        <Card.Body>
          <Card.Link href={props.linkUrl} target="_blank">
            Visit Website
          </Card.Link>
        </Card.Body>
      )}
    </Card>
  )
}
