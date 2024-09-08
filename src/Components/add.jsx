import ShowResult from "./showResult";
import { useState } from "react";
import CodePreview from "./snippetPreview/codePreview";



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
        <input
          onChange={(event) => handleFirstNumberInput(event)}
          type="text"
          placeholder="first number"
        />
        <input
          onChange={(event) => handleSecondNumberInput(event)}
          type="text"
          placeholder="second number"
        />
        <button onClick={() => handleSum()}> Add </button>
        <ShowResult result={result} />
        <div className="container" style={{ marginTop: "3rem" }}>
          <h6>Add Component code</h6>
          <CodePreview path="src/Components/add.jsx" />
          <h6>showResult Component code</h6>
          <CodePreview path="src/Components/showResult.jsx" />
        </div>
      </>
    );

}

export default Add;