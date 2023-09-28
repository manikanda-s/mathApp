import React, { useEffect, useRef, useState } from "react";
import "./QuestionComponent.css";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import SportsScoreSharpIcon from "@mui/icons-material/SportsScoreSharp";
 
function QuestionComponent({num1, num2, answer, score}) {


  return (
    <div className="questionComponent">
      <div className="questionComponent__header">
        <div className="questionComponent__score">
          <SportsScoreSharpIcon className="questionComponent__scoreIcon" />
          <div className="questionComponent__scoreText">
            <span>SCORE</span>
            <span>{score}</span>
          </div>
        </div>
        <div className="questionComponent__timer">
          <TimerIcon className="questionComponent__timerIcon" />
          <div className="questionComponent__timerText">
            <span>TIMER</span>
            <span>00:00</span>
          </div>
        </div>
        <div className="questionComponent__options">
          <SettingsIcon className="questionComponent__icon" />
          <DisabledByDefaultIcon className="questionComponent__icon" />
        </div>
      </div>
      <div className="questionComponent__numbers">
        {num1} {'+'} {num2}
      </div>
      <div className="questionComponent__answer">{answer}</div>
     
    </div>
  );
}

export default QuestionComponent;
