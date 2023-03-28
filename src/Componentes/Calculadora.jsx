import react from "react";
import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculadora() {
  return (
    <div>
      <Box className m={10} />
      <Container maxWidth="xs">
        <div className="wrapper">
        <Box className m={1} />
            <h1 className="resultado">01</h1>
          <button className="other2">AC</button>
          <button className="other2">+/-</button>
          <button className="other2">%</button>
          <button className="mainOperator">/</button>
          <button className="other">7</button>
          <button className="other">8</button>
          <button className="other">9</button>
          <button className="mainOperator">X</button>
          <button className="other">4</button>
          <button className="other">5</button>
          <button className="other">6</button>
          <button className="mainOperator">-</button>

          <button className="other">1</button>
          <button className="other">2</button>
          <button className="other">3</button>

          <button className="mainOperator">+</button>
          <button className="other">0</button>
          <button className="other">,</button>
          <button className="other2">=</button>
        </div>
      </Container>
    </div>
  );
}
