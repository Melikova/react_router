import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/pages/About";
import { Shop } from "./components/pages/Shop";
import { Contact } from "./components/pages/Contact";
import { Header } from "./components/common/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
