import React, { useEffect, useState } from 'react'
import './MainContainer.css'

function MainContainer() {
    const [score, setScore] = useState(0)
    const [ques, setQues] = useState('')
    const [res, setRes] = useState(false)

    function handleSubmit(ans, event){
        event.preventDefault();
        if (eval(ques) == ans){
            setScore(prevScore => prevScore + 1)
            makeQues()
        }
        else {
            setRes(true)
            setTimeout(() => setRes(false), 1000)
        }
        // console.log(eval(ques), ans, eval(ques) == ans)
    }

    function makeQues(){
        let num1 = Math.floor(Math.random() * 100)
        let num2 = Math.floor(Math.random() * 100) 
        setQues(`${num1} + ${num2}`)
    }
    useEffect( () => {
        makeQues()
    }, [] )
  return (
    <div className='mainContainer'>
        <MainContainerHeader score={score}/>

        <Question ques={ques} res={res}/>

        <Answer ques={ques} handleSubmit={handleSubmit}/>
        
    </div>
  )
}


function MainContainerHeader({score}){
    
    return (
        <div className='mainContainerHeader'>
            <div className='score'>Score : {score}</div>
            <div className='timer'>000</div>
            <button className='settings'>#</button>
        </div>
    )
}

function Question({ques, res}){
    return (
        <div className={`question ${res && 'shake'}`} id='qid'>
            {ques}
        </div>
    )
}

function Answer({handleSubmit}){
    const [ans, setAns] = useState('')

    function checkAns(event){
        handleSubmit(ans, event)
        setAns('')
    }
    return (
        <form className='answer' onSubmit={checkAns}>
            <input 
            type='text'
            value={ans}
            onChange={(event) => setAns(event.target.value)}
            autoFocus            
            />
        </form>
    )
}

export default MainContainer