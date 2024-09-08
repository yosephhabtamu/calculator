import React from 'react';
import CodePreview from './snippetPreview/codePreview';
import { useState } from 'react';
import ShowResult from './showResult';

function Subtract(){
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
function handleDifference() {
  const difference = firstNumber - secondNumber;
  setResult(difference);
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
    <button onClick={() => handleDifference()}> Subtract </button>
    <ShowResult result={result} />
    <div className="container" style={{ marginTop: "3rem" }}>
      <h6>subtract Component code</h6>
      <CodePreview path="src/Components/subtract.jsx" />
      <h6>showResult Component code</h6>
      <CodePreview path="src/Components/showResult.jsx" />
    </div>
  </>
);
}

export default Subtract;