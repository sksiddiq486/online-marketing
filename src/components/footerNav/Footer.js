import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { AiFillAccountBook } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

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
        imgLink:
          "data:image/png;base64,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",
      },
      {
        id: 5,
        name: "058 5221919",
        imgLink:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABZ0lEQVQ4jY2UvUpDQRCFN4IKKqa5pYIWyhX0GQIarkEbwc5OwRSWVrZa2sSkM3apfAtLURA7FZI8wE0ERcQQLfQMntVx2TW3+GB3duYwP7trom5qPCyDU9AEfdKkbcUX4xpicAE64BiUwDwp0dahTxwSKoAXUAMTgUwNz2r0LbhCov4EytyP/CNkKTMmtkI5cAlO6LDNnpxnEKswNiebIngEeTBKkU8yO0Aoz9iibOqgqg57SmgzQ1YSW5dFC6ypgxuK3IHJDELromFYypI6OKTQdQYRw9i+4Ri10LQqbyuD0KIVenBKEw4o1OMUDcvcADOe0tqyaDjNtlfiTDX9ij2ze301JLYhi1XQ5SjdtPfBmxKwvINhNf5EX8hKoAdT4Ajcgg+yo7L5uZD6iewOaOwQGOd6DzyDhSjwaKvK2ccYfbyPVmcmqabR7zcyR+w3ktIn+I3oiSXR99Nps7Gv4J62hD5/4r4AUvjJW1mdHgQAAAAASUVORK5CYII=",
      },
      {
        id: 6,
        name: "info@element8.ae",
        imgLink:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABIElEQVQ4jc3Uu0oDQRTG8VW8ENPpgI1BtEqRSn0aERHUyiJFGskLCIL4DJJHCAHBUlFBkah4abxgSBHyDLr+v+SsLJuos5LC4seyM3M+ljkzG4RhGAzCQEI6Qa7dWsADwj96xKKC6ljDGIKURq22rpd3DOMS6ylCtPbCaj8C+zw983jBtkeI1rxaTScjHiQ53GEfQ30CNLZna3Kx8Z4gmcQZKrYH0fgIDnCOqURN3yDJ4hA1TCCDKo5sLrn+26BpXOMepzjGFZ4w6xs047rnasf2ZNf2TN0pWUPmfwuawzPKP3RsC41Yx3qCNPGGokf7N9BEIR4UHcgTbHqERFZc9xB/HUhdkdVEq32NY1mN0csSbpTq0l9Y1dw6Xdp/9z/6BP4oECJ07zRKAAAAAElFTkSuQmCC",
      },
    ],
  },
];

const Footer = () => {
  const linkClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };
  return (
    <Container className="main-containers pb-5 pt-3" fluid>
      <Row>
        {data.map((item, i) => {
          return (
            <Col className="justify-content-center d-flex">
              <div>
                <div className="titles">{item.title}</div>
                <div>
                  {item.content.map((content, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {content.imgLink !== undefined ? (
                          <div style={{ paddingRight: "10px" }}>
                            <img src={content.imgLink} />
                          </div>
                        ) : null}
                        <div className="content-name">{content.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row className="d-flex align-items-center justify-content-center pt-4">
        <Button
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "#382e53",
            borderRadius: "60px",
            marginRight: "10px",
            borderWidth: 0,
            display: "flex",
          }}
          onClick={(e) =>
            linkClick(e, "https://www.facebook.com/digitaltrafficmakers")
          }
        >
          <FaFacebookF />
        </Button>
        <Button
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "#382e53",
            borderRadius: "60px",
            marginRight: "10px",
            borderWidth: 0,
            display: "flex",
          }}
          onClick={(e) =>
            linkClick(e, "https://www.instagram.com/digitaltrafficmakers/")
          }
        >
          <FaInstagram />
        </Button>
        <Button
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "#382e53",
            borderRadius: "60px",
            marginRight: "10px",
            borderWidth: 0,
            display: "flex",
          }}
          onClick={(e) =>
            linkClick(
              e,
              "https://www.linkedin.com/company/digital-traffic-makers"
            )
          }
        >
          <FaLinkedin />
        </Button>
      </Row>
      <div className="rights-reserved">
        2021 Element 8 - Digital Web Agency. All Rights Reserved
      </div>
    </Container>
  );
};

export default Footer;
