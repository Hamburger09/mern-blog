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
import { Header, Footer, PrivateRoute } from "./components/imports";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
