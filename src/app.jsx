import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Search from "./components/search/search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
