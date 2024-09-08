import React from 'react';
import CodePreview from './snippetPreview/codePreview';
import { useState } from 'react';
import ShowResult from './showResult';

function Divide(){
    const [firstNumber, setFirstNumber] = useState(0);
    function handleFirstNumberInput(event) {
      const firstNumber = parseInt(event.target.value);
      setFirstNumber(firstNumber);
    }

    // Disable the divide button if the second number is zero
    const [disableDivideButton, setDisableDivideButton] = useState(false);


    const [secondNumber, setSecondNumber] = useState(0);
    function handleSecondNumberInput(event) {
      const secondNumber = parseInt(event.target.value);
      if(secondNumber === 0){
        alert("Cannot divide by zero");
        setDisableDivideButton(true);
        return;
        }
        setDisableDivideButton(false);
      setSecondNumber(secondNumber);
    }

    const [result, setResult] = useState(0);
    function handleQuotient() {
      const quotient = firstNumber / secondNumber;
      setResult(quotient);
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
        <button disabled={disableDivideButton} onClick={() => handleQuotient()}>
          {" "}
          Divide{" "}
        </button>
        <ShowResult result={result} />
        <div className="container" style={{ marginTop: "3rem" }}>
          <h6>Divide Component code</h6>
          <CodePreview path="src/Components/divide.jsx" />
          <h6>showResult Component code</h6>
          <CodePreview path="src/Components/showResult.jsx" />
        </div>
      </>
    );
}

export default Divide;