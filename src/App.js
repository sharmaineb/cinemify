import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Account from "./components/pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
