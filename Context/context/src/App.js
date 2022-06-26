import "./App.css";
import "./Components/NavbarContext.css";
//react
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import HomeContext from "./Pages/HomeContext";
import ContactsContext from "./Pages/ContactsContext";
import AboutContext from "./Pages/AboutContext";

//Components

import NavbarContext from "./Components/NavbarContext";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <NavbarContext />
        <Routes>
          <Route path="/" element={<HomeContext />} />
          <Route path="/contacts" element={<ContactsContext />} />
          <Route path="/about" element={<AboutContext />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
