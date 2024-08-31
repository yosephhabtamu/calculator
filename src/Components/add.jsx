import ShowResult from "./showResult";
import { useState } from "react";



function Add(){

    const [firstNumber, setFirstNumber] = useState(0);
    function handleFirstNumberInput(event){
        const firstNumber = parseInt(event.target.value)
        setFirstNumber(firstNumber);
    }

    const [secondNumber, setSecondNumber] = useState(0);
    function handleSecondNumberInput(event){
        const secondNumber= parseInt(event.target.value);
        setSecondNumber(secondNumber);
    }

    const [result, setResult] = useState(0);
    function handleSum(){
        const sum  = firstNumber + secondNumber;
        setResult(sum);
    }

    return (
        <>
        <input onChange={(event)=>handleFirstNumberInput(event)} type="text" placeholder="first number" />
        <input onChange={(event)=>handleSecondNumberInput(event)} type="text" placeholder="second number" />
        <button onClick={()=>handleSum()}> Add </button>
        <ShowResult result = {result}/>
        </>
    )

}

export default Add;