import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Profile from "../pages/Profile";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:artistName" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
