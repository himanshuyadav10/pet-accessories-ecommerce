import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Navbar, CheckOut, SearchResults, ProductPage } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route  path="/search" element={<SearchResults />} />
        <Route  path="/product/:id" element={<ProductPage />} />
        <Route  path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
