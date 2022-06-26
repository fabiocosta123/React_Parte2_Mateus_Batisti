import "./App.css";
import "./Components/Navbar.css";

// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Info from "./Pages/Info";
import Search from "./Pages/Search";
import NotFound from "./Pages/NotFound";

//  Components
import { Navbar } from "./Components/Navbar";
import SearchForm from "./Components/SearchForm";

//  Components

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/Info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
