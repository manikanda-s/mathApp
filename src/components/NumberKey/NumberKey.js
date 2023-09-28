import React, { useState } from "react";
import "./NumberKey.css";
import Button from "@mui/material/Button";
 
function NumberKey({num, setAnswer, btn_name, backSpace, allClear, checkAnswer}) {
  
  const handleClick = () => {
    if (isNaN(num) && num !== '.' && num !== '-') {
      if (btn_name === 'BS') backSpace()
      else if (btn_name === 'AC') allClear()
      else checkAnswer()
    }else {
    setAnswer(prev => {
      if (prev && num === '-'){
        return prev
      }else if (prev.includes('.') && num === '.'){
        return prev
      }
      else {
        return prev.concat(num)
      }
    })
    }
  }

  return (
    <Button variant="contained" className="numberKey" onClick={handleClick} >
      {num}
    </Button>
  );
}

export default NumberKey;
