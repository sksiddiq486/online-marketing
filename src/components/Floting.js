import React from "react";
import {
  Container,
  lightColors,
  darkColors,
  Button,
} from "react-floating-action-button";
// import Button from "@restart/ui/esm/Button";

const Floating = () => {
  return (
    <Container>
      <Button
        tooltip="The big plus button!"
        styles={{
          backgroundColor: "transparent",
          height: "30px",
          width: "30px",
          borderRadius: "50px",
        }}
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
        }}
      >
        <img
          src="/assets/facebook.png"
          className="logo"
          style={{ height: "20px", width: "20px" }}
        />
      </Button>
      <Button
        // tooltip="The big plus button!"
        styles={{
          backgroundColor: darkColors.lighterRed,
          //   color: lightColors.white,
          height: "30px",
          width: "30px",
          borderRadius: "50px",
        }}
      >
        +
      </Button>
    </Container>
  );
};

export default Floating;
