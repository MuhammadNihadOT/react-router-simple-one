import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Header from "./Header/Header";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={ <h1>new page</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
