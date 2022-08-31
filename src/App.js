import "./assets/style/main.css";
import Draft from "./pages/Draft";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layoutt from "./components/Layoutt/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layoutt isSidebarVisible={false}><Landing /></Layoutt>} />
          <Route path="/draft" element={<Layoutt><Draft/></Layoutt>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layoutt" element={<Layoutt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
