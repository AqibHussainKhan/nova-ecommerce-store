import { useState } from 'react'
import './App.css'

import Navbar from "./assets/components/navbar";
import Home from "./assets/components/home";
import About from "./assets/components/about";
import Skills from "./assets/components/skills";
import Projects from "./assets/components/projects";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#171717]">
      <Navbar
        cartCount={cartCount}
        search={search}
        setSearch={setSearch}
      />

      <main>
        <Home />

        <Skills
          category={category}
          setCategory={setCategory}
        />

        <Projects
          search={search}
          category={category}
          addToCart={addToCart}
        />

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;