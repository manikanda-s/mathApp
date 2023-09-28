import React, { useEffect, useState } from "react";
import "./Problems.css";
import Header from "../../components/Header/Header";
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";
import DesktopNumberPad from "../../components/DesktopNumberPad/DesktopNumberPad";
 
function Problems() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [attempt, setAttempt] = useState(0)

  const scores = [10, 5, 2]

  // to generate random number 
  const randomNum = () => Math.floor(Math.random() * 10)

  // to set the random value for the two state variables 
  const setRandomNum = () => {
    setNum1(randomNum())
    setNum2(randomNum())
  }

  // to set values initially
  useEffect(() => setRandomNum(), [])

  // to remove last entered value
  const backSpace = () => {
    setAnswer(prev => {
      return prev.slice(0, prev.length-1)
    })
  }

  // to remove the entire value
  const allClear = () => {
    setAnswer('')
  }

  // to check the entered value is correct or not
  const checkAnswer = () => {
    // console.log(attempt+1)
    // console.log(`${(num1 + num2)} and ${Number(answer)}`)
    if (answer === '' ) return
    if ((num1 + num2) === Number(answer)){
      console.log(`prev ${score} and current score ${(attempt <= 3) ? scores[attempt] : 1} total score ${score + ( (attempt <= 3) ? scores[attempt] : 1)}`)
      setScore(prev => prev + ( (attempt < 3) ? scores[attempt] : 1))
      allClear()
      setRandomNum()
      setAttempt(0)
    }
    else {
      setAttempt(prev => prev + 1)
      allClear()
    }
  } 
  
  // to enter the values using keyboard
  const handleKeyPress = (event) => {
    const num = event.key
    // console.log(num)
    if (isNaN(num) && num !== '.' && num !== '-') {
      if (num === 'Backspace') backSpace()
      else if (num === 'Delete') allClear()
      else if (num === 'Enter') checkAnswer()
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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [answer])

  

  return (
    <div className="problems">
      <Header />
      <QuestionComponent num1={num1} num2={num2} answer={answer} score={score} />
      <DesktopNumberPad setAnswer={setAnswer} backSpace={backSpace} allClear={allClear} checkAnswer={checkAnswer} />
    </div>
  );
}

export default Problems;
