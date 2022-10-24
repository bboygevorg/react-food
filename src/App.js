import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import NotFound from "../src/pages/NotFound";
import Category from "./pages/Category";
import Reciepe from "./pages/Reciepe";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/meal/:id" element={<Reciepe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
