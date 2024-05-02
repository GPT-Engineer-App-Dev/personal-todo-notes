import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Todo from "./pages/Todo.jsx";
import Notes from "./pages/Notes.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;