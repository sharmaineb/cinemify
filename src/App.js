import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
