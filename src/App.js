import "./assets/style/main.css";
import Draft from "./pages/Draft";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layoutt from "./components/Layoutt/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Workspaces from "./pages/Workspaces";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={/*<Layoutt isSidebarVisible={false}>*/<Landing />} />
          <Route path="/draft" element={<Layoutt><Draft/></Layoutt>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layoutt" element={<Layoutt />} />
          <Route path="/workspaces" element={<Layoutt isSidebarVisible={false}><Workspaces /></Layoutt>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
