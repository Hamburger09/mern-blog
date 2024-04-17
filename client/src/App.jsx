import { Route, Routes } from "react-router-dom";

import {
  About,
  Dashboard,
  Home,
  Projects,
  SignIn,
  SignUp,
} from "./pages/imports";

// components
import { Header, Footer } from "./components/imports";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
