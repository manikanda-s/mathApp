import React, { useEffect, useState } from "react";
import "./DesktopNumberPad.css";
import NumberKey from "../NumberKey/NumberKey";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function DesktopNumberPad({setAnswer, backSpace, allClear, checkAnswer}) {

  return (
    <div className="desktopNumberPad">
      <div className="desktopNumberPad__row">
        <NumberKey num={1} setAnswer={setAnswer}/>
        <NumberKey num={2} setAnswer={setAnswer}/>
        <NumberKey num={3} setAnswer={setAnswer}/>
        <NumberKey num={4} setAnswer={setAnswer}/>
        <NumberKey num={5} setAnswer={setAnswer}/>
        <NumberKey
          num={<BackspaceOutlinedIcon className="desktopNumberPad__icon"/>}
          btn_name={'BS'}
          backSpace={backSpace}
        />
      </div>

      <div className="desktopNumberPad__row">
        <NumberKey num={6} setAnswer={setAnswer}/>
        <NumberKey num={7} setAnswer={setAnswer}/>
        <NumberKey num={8} setAnswer={setAnswer}/>
        <NumberKey num={9} setAnswer={setAnswer}/>
        <NumberKey num={'AC'} btn_name={'AC'} allClear={allClear}/>
      </div>

      <div className="desktopNumberPad__row">
        <NumberKey num={'.'} setAnswer={setAnswer}/>
        <NumberKey num={0} setAnswer={setAnswer}/>
        <NumberKey num={'-'} setAnswer={setAnswer}/>
        <NumberKey 
        num={<ArrowCircleRightOutlinedIcon className="desktopNumberPad__icon" />} 
        btn_name={'OK'}
        checkAnswer={checkAnswer}
        />
      </div>
    </div>
  );
}

export default DesktopNumberPad;
