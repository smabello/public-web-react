import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import React from "react";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Smart Bello </span>
            from <span className="purple"> Lagos,Nigeria.</span>
            <br />I am a full stack developer and a graphic designer.
            <br />
            <br />
            Apart from coding and designing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Knowledge is knowing you know nothing,never stop learning!"{" "}
          </p>
          <footer className="blockquote-footer">Smart Bello</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
