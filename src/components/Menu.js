import React,{useState} from "react";
import Quiz from "./Quiz";
import QuizSingleCorr from "./QuizSingleCorr";
import "./overall.css"

function Menu(){
    const [quizopt,setQuizopt] = useState('')
    if (quizopt === ''){
        return(
            <div>
                <h1 className="tit">Select Your Choice</h1>
                <button onClick={() => {setQuizopt('Quiz')}} className="menButton1">Quiz with Short and Long Ans</button>
                <br />
                <br />
                <button onClick={() => {setQuizopt('QuizSingleCorr')}} className="menButton2">Quiz with MCQ</button>
            </div>
        );
    }
    else if(quizopt === 'Quiz'){
        return(
            <Quiz />
        );
    }
    else if(quizopt === 'QuizSingleCorr'){
        return(
            <QuizSingleCorr />
        );
    }
}

export default Menu