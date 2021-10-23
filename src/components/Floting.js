import React from "react";
import {
  Container,
  lightColors,
  darkColors,
  Button,
  Link,
} from "react-floating-action-button";
import "./Floating.css";
import Fab from "@mui/material/Fab";

// import Button from "@restart/ui/esm/Button";

const Floating = () => {
  const linkClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };
  return (
    <Container>
      <div style={{ zIndex: -1 }}>
        <Button
          styles={{
            backgroundColor: "transparent",
            height: "30px",
            width: "30px",
            borderRadius: "50px",
            left: "100px",
            top: "-150px",
          }}
          onClick={(e) =>
            linkClick(
              e,
              "https://www.linkedin.com/company/digital-traffic-makers"
            )
          }
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfcwxpxBo_uFK-p4fNNG-2XEJvhLq01ypfQ&usqp=CAU"
            className="logo"
            style={{ height: "20px", width: "20px" }}
          />
        </Button>
        <Button
          tooltip="The big plus button!"
          styles={{
            backgroundColor: "transparent",
            height: "30px",
            width: "30px",
            borderRadius: "50px",
            left: "100px",
            top: "-150px",
          }}
          onClick={(e) =>
            linkClick(e, "https://www.instagram.com/digitaltrafficmakers/")
          }
        >
          <img
            src="/assets/instagram.png"
            className="logo"
            style={{ height: "20px", width: "20px" }}
          />
        </Button>
        <Button
          styles={{
            backgroundColor: "transparent",
            height: "30px",
            width: "30px",
            borderRadius: "50px",
            left: "100px",
            top: "-150px",
          }}
          onClick={(e) =>
            linkClick(e, "https://www.facebook.com/digitaltrafficmakers")
          }
        >
          <img
            src="/assets/facebook.png"
            className="logo"
            style={{ height: "20px", width: "20px" }}
          />
        </Button>
        <Button
          styles={{
            backgroundColor: darkColors.lighterRed,
            height: "30px",
            width: "30px",
            borderRadius: "50px",
            left: "100px",
            top: "-150px",
          }}
        >
          +
        </Button>
      </div>
    </Container>
  );
};

export default Floating;
