import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./Project-card";
import BlogProjectImg from "../../assets/BlogProject.png";
import TicTacToeImg from "../../assets/TicTacToe.png";
import RealEstateProjectImg from "../../assets/RealEstateProject.png";
import BasicWebsiteImg from "../../assets/BasicWebsite.png";
import "./Project-list.css";
function ProjectListPage() {
  return (
    <div className="projectBackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={RealEstateProjectImg}
                isBlog={false}
                title="Real Estate website"
                description="This project is a realestate website where users can buy and sell properties online. Users can create profiles, upload photos, send messages, and search for properties by name. The admin can manage everything on the website, including users, properties, and categories. Each property has a page with more details and a buy button that sends a message to the seller. I made this project with Angular, Node.js, and MySQL"
                ghLink="https://github.com/kensi1995/RealEstate-Website-Angular-Node.js-mySql"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BlogProjectImg}
                isBlog={false}
                title="Blogs"
                description="This project is a blog website that allows users to register and create their own blogs on various topics. Users can also interact with other blogs by liking, disliking, and commenting on them. Users can also search for blogs by their name or keywords. I made this project using only vanilla JavaScript, which is the pure form of JavaScript without any libraries or frameworks. I used local storage, which is a web storage API that lets me store data in the browser, to store the data of the users and the blogs. My project aims to provide a simple and user-friendly platform for blogging and sharing ideas."
                ghLink="https://github.com/kensi1995/Blog-Website-VanillaJS"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BasicWebsiteImg}
                isBlog={false}
                title="HTML/CSS Website"
                description="This project is basic HTML/CSS website. It has a basic menu navigation that allows users to access different pages of the website. The pages contain static content such as images, text, google map, and videos."
                ghLink="https://github.com/kensi1995/HTML-CSS-BasicWebsite"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={TicTacToeImg}
                isBlog={false}
                title="TicTacToe"
                description="This project is a tic-tac-toe game that I created using JavaScript. It is a fun and interactive game that can be played by two human players. The game has a simple UI that shows the game board and the player’s turn. The game also has a menu that provides options to start a new game or exit the game."
                ghLink="https://github.com/kensi1995/My-Projects/tree/main/Tic%20Tac%20Toe"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default ProjectListPage;
