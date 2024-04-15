import { Route, Routes } from "react-router-dom";

import {Home, About, Projects, Dashboard, SignIn, SignUp} from './pages/imports';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />


      </Routes>
      <h1 className="text-3xl">App</h1>
    </>
  );
}

export default App;
