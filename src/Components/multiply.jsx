import React from 'react';
import CodePreview from './snippetPreview/codePreview';
import { useState } from 'react';
import ShowResult from './showResult';

function Multiply(){

    const [firstNumber, setFirstNumber] = useState(0);
    function handleFirstNumberInput(event) {
      const firstNumber = parseInt(event.target.value);
      setFirstNumber(firstNumber);
    }

    const [secondNumber, setSecondNumber] = useState(0);
    function handleSecondNumberInput(event) {
      const secondNumber = parseInt(event.target.value);
      setSecondNumber(secondNumber);
    }

    const [result, setResult] = useState(0);
    function handleProduct() {
      const product = firstNumber * secondNumber;
      setResult(product);
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
        <button onClick={() => handleProduct()}> Multiply </button>
        <ShowResult result={result} />
        <div className="container" style={{marginTop:"3rem"}}>
          <h6>Multiply Component code</h6>
          <CodePreview path="src/Components/multiply.jsx" />
          <h6>showResult Component code</h6>
          <CodePreview path="src/Components/showResult.jsx" />
        </div>  
      </>
    );
}

export default Multiply;