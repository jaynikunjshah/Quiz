import React,{useState, useEffect} from "react";
import axios from "axios";
import Login from "./Login";
import "./overall.css"

function QuizSingleCorr(){
    const [data,setData] = useState('')
    const [answers,setAnswers] = useState('')
    const [answers1,setAnswers1] = useState('')
    const [answers2,setAnswers2] = useState('')
    const [answers3,setAnswers3] = useState('')
    const [counter,setCounter] = useState(0)
    const [score,setScore] = useState(0)
    const [quit, setQuit] = useState('playing')

    useEffect(() =>{
    axios.get('https://the-trivia-api.com/api/questions')
    .then(res => {setData(res.data[counter]['question']); console.log(res.data); setAnswers(res.data[counter]['incorrectAnswers'][0]); setAnswers1(res.data[counter]['incorrectAnswers'][1]); setAnswers2(res.data[counter]['correctAnswer']); setAnswers3(res.data[counter]['incorrectAnswers'][2]);})
    .catch(err => {alert('Please connect to the internet and try again!')})
    },[counter])
    if (quit === 'playing'){
        return(
            <div>
                <div className="score">Your score is <b><u>{score}</u></b></div>
                <div className="quest">{data}</div>
                <ul>
                <li><button onClick={() => {alert("Wrong Answer. The correct answer is "+answers2); setCounter(counter+1)}} className="OpButton">{answers}</button></li>
                <br />
                <br />
                <li><button onClick={() => {alert("Correct Answer"); setScore(score+1); setCounter(counter+1)}} className="OpButton">{answers2}</button></li>
                <br />
                <br />
                <li><button onClick={() => {alert("Wrong Answer. The correct answer is "+answers2); setCounter(counter+1)}} className="OpButton">{answers1}</button></li>
                <br />
                <br />
                <li><button onClick={() => {alert("Wrong Answer. The correct answer is "+answers2); setCounter(counter+1)}} className="OpButton">{answers3}</button></li>
                </ul>
                <button onClick={() => setCounter(counter+1)} className="nexbutton">Next Question</button>
                <button onClick={() => {setQuit("Quit")}} className="quitbutton">Quit</button>
            </div>
        );
    }

    else if(quit === 'Quit'){
        return(
            <Login />
        )
    }
    
}

export default QuizSingleCorr