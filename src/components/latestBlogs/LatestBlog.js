import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./LatestBlog.css";

const LatestBlog = () => {
  return (
    <Container className="blog-container" fluid>
      <Col className="d-flex align-items-center justify-content-center blog-title">
        Latest Blogs
      </Col>
      <Row className="d-flex align-items-center justify-content-center">
        <Card style={{ width: "18rem", padding: 0, margin: "5px" }}>
          <Card.Img
            variant="top"
            src="https://www.volgatigris.com/public/uploads/blog-34.jpg"
            style={{ width: "100%" }}
          />
          <Card.Body>
            <Card.Text>
              Volga Tigris- Why Choose Them To Revamp Your Site
            </Card.Text>
            <Card.Text className="date">March 27th, 2021 </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", padding: 0, margin: "5px" }}>
          <Card.Img
            variant="top"
            src="https://www.volgatigris.com/public/uploads/blog-48.jpg"
            style={{ width: "100%" }}
          />
          <Card.Body>
            <Card.Text>
              Why Is SEO Important for Websites: 5 Powerful Tips for Any
              Business
            </Card.Text>
            <Card.Text className="date">March 27th, 2021 </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", padding: 0, margin: "5px" }}>
          <Card.Img
            variant="top"
            src="https://www.volgatigris.com/public/uploads/blog-15.jpg"
            style={{ width: "100%" }}
          />
          <Card.Body>
            <Card.Text>
              5 Reasons Why Every Business Needs To Invest In Professional...
            </Card.Text>
            <Card.Text className="date">March 27th, 2021 </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      {/* <div style={{ height: "100px" }}></div> */}
    </Container>
  );
};

export default LatestBlog;
