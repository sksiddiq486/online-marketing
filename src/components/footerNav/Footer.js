import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const data = [
  {
    id: 1,
    title: "Who We Are",
    content: [
      {
        id: 1,
        name: "Who We Are",
      },
      {
        id: 2,
        name: "Our Work",
      },
      {
        id: 3,
        name: "Our Clients",
      },
      {
        id: 4,
        name: "Our Blog",
      },
      {
        id: 5,
        name: "Contact US",
      },
      {
        id: 5,
        name: "Careers",
      },
      {
        id: 6,
        name: "Privacy Policy",
      },
    ],
  },
  {
    id: 2,
    title: "What We Do",
    content: [
      {
        id: 1,
        name: "Creative Strategy",
      },
      {
        id: 2,
        name: "Ecommerce Web Design",
      },
      {
        id: 3,
        name: "Digital Marketing",
      },
      {
        id: 4,
        name: "SEO Company Dubai",
      },
      {
        id: 5,
        name: " Web Design & Development",
      },
      {
        id: 6,
        name: "Web Application Development",
      },
      {
        id: 7,
        name: "Content Marketing",
      },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    content: [
      {
        id: 1,
        name: "3401, Latifa Towers",
      },
      {
        id: 2,
        name: "Sheikh Zayed Road, Dubai",
      },
      {
        id: 3,
        name: "United Arab Emirates",
      },
      {
        id: 4,
        name: "04 3545956 ",
      },
      {
        id: 5,
        name: "058 5221919",
      },
      {
        id: 6,
        name: "info@element8.ae",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Container className="main-container pb-5 pt-3" fluid>
      <Row>
        {data.map((item, i) => {
          return (
            <Col className="justify-content-center d-flex">
              <div>
                <div className="title">{item.title}</div>
                <div>
                  {item.content.map((content, index) => {
                    return <div className="content-name">{content.name}</div>;
                  })}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="rights-reserved">
        2021 Element 8 - Digital Web Agency. All Rights Reserved
      </div>
    </Container>
  );
};

export default Footer;
