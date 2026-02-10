import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/wrapers/ScrollToTop";
import { Home } from "./components/pages/home/page";



function App() {
  return (
    <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
  );
}

export default App
