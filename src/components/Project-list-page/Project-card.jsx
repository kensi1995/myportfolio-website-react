import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Project-list.css";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text
          style={{
            textAlign: "justify",
            height: "250px",

            overflow: "auto",
            overflowx: "hidden",
            overflowy: "hidden",
            whitespace: "nowrap",
          }}
        >
          {props.description}
        </Card.Text>

        <Button
          className="viewbtn"
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          View on GitHub
        </Button>
        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
