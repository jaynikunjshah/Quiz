import React, {useState, useEffect} from "react";
import axios from "axios";
import Login from "./Login";
import "./overall.css"

function Quiz() {
    const [data,setData] = useState('')
    const [answers,setAnswers] = useState('')
    const [counter,setCounter] = useState(0)
    const [ans,setAns] = useState('')
    const [score,setScore] = useState(0)
    const [quit, setQuit] = useState('playing')


    useEffect(() =>{
    axios.get('https://opentdb.com/api.php?amount=100&category=9&difficulty=easy&type=multiple')
    .then(res => {setData(res.data.results[counter]['question']); setAnswers(res.data.results[counter]['correct_answer']);})
    .catch(err => {alert("Please Connect to the Internet and try again !")})
    },[counter])

    if (quit === 'playing'){
        return(
            <div>
                <div className="score">Your score is <b><u>{score}</u></b></div>
                <div className="quest">{data}</div>
                <input type="text" onChange={e => setAns(e.target.value)} value={ans} className="input"></input>
                <button onClick={(e) => {if(ans.toLocaleLowerCase() === answers.toLocaleLowerCase()){alert('Correct Answer'); setCounter(counter + 1); setScore(score + 1)} else{alert('Incorrect Answer. The correct answer is '+answers); setCounter(counter + 1);}}} className="SubButton">Submit</button>
                <br />
                <br />
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

export default Quiz