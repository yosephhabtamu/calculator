import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Components/add";
import Divide from "./Components/divide";
import Multiply from "./Components/multiply";
import Subtract from "./Components/subtract";
import Home from "./Components/home";
import TodoApp from "./Components/todoList";
import Counter from "./Components/reduxCounter";
import PostsList from "./Components/posts/postsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="subtract" element={<Subtract />} />
        <Route path="multiply" element={<Multiply />} />
        <Route path="divide" element={<Divide />} />
        <Route path="todo" element={<TodoApp />} />
        <Route path="counter-redux" element={<Counter />} />
        <Route path="Posts-redux" element={<PostsList />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
