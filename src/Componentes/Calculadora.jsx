import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Calculadora() {
    const[oldNum, setOldnum] = useState(0);
    const[operador, setOperador] = useState(0);

    const[num, setNum] = useState(0);

    function inputNum(valor){
        var input = valor.target.value;
        if(num == 0){
            setNum(input);
        }else{
            setNum(num + input);    
        }
    }

    function porcentagem(){
        setNum(num / 100);
    }

    function limpar(e){
        setNum(0);
    }

    function mudarSinal(){
        if(num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e){
        var operadorInput = e.target.value
        setOperador(operadorInput);
        setOldnum(num);
        setNum(0);
    }

    function calcular(){
        if(operador==="/"){
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if(operador==="X"){
            setNum(parseFloat(oldNum) * parseFloat(num));
        }
        else if(operador==="+"){
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
        else if(operador==="-"){
            setNum(parseFloat(oldNum) - parseFloat(num));     
        }

        console.log("Calculou!!");
        console.log(oldNum)
        console.log(num);
        console.log(operador);
    }

  return (
    <div>
      <Box className m={10} />
      <Container maxWidth="xs">
        <div className="wrapper">
        <Box className m={1} />
            <h1 className="resultado">{num}</h1>
          <button className="other2" onClick={limpar}>AC</button>
          <button className="other2" onClick={mudarSinal}>+/-</button>
          <button className="other2" onClick={porcentagem}>%</button>
          <button className="mainOperator" onClick={operatorHandler} value="/">/</button>
          <button className="other" onClick={inputNum} value={7} >7</button>
          <button className="other" onClick={inputNum} value={8} >8</button>
          <button className="other" onClick={inputNum} value={9} >9</button>
          <button className="mainOperator" onClick={operatorHandler} value="X">X</button>
          <button className="other" onClick={inputNum} value={4} >4</button>
          <button className="other" onClick={inputNum} value={5} >5</button>
          <button className="other" onClick={inputNum} value={6} >6</button>
          <button className="mainOperator"onClick={operatorHandler}value="-">-</button>

          <button className="other" onClick={inputNum} value={1} >1</button>
          <button className="other" onClick={inputNum} value={2} >2</button>
          <button className="other" onClick={inputNum} value={3} >3</button>

          <button className="mainOperator"onClick={operatorHandler}value="+">+</button>
          <button className="other" onClick={inputNum} value={0} >0</button>
          <button className="other" onClick={inputNum} value={"."}>,</button>
          <button className="other2" onClick={calcular}>=</button>
        </div>
      </Container>
    </div>
  );
}
