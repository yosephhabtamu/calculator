
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './Components/add';
import Divide from './Components/divide';
import Multiply from './Components/multiply';
import Subtract from './Components/subtract';
import Home from './Components/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path='add' element={<Add />} />
          <Route path="subtract" element={<Subtract />} />
          <Route path="multiply" element={<Multiply />} />
          <Route path="divide" element={<Divide />} />
      </Routes>
    </BrowserRouter> 
   
  );
}

export default App;
