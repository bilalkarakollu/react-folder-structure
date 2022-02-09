import { Routes, Route } from "react-router-dom";
import AppProvider from "./layouts/App";
import {Home, Profil} from "./pages/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppProvider />}>
        <Route index element={<Home />} />
        <Route path="profil" element={<Profil />} />
      </Route>
    </Routes>
  );
}

export default App;
