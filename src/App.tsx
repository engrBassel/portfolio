import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Homepage, NotFound } from "./pages";
import "./css/style.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
