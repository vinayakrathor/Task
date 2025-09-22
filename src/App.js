//   import logo from './logo.svg';
// import './App.css';
// import "./reg.css";



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );}




// import React from "react";
// import RegistrationForm from "./RegistrationForm";
// import "./reg.css"; // your CSS file

// function App() {
//   return (
//     <div>
//       <RegistrationForm />
//     </div>
//   );
// }

// // export default App;


// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./reg.css"; // your CSS file
import RegistrationForm from "./RegistrationForm"; // your form code
import AdminPage from "./AdminPage";
import Test from "./Test";
import Contact from "./Contact";
import Demo2 from "./demo2";
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar stays on top */}
      <Routes>
        <Route path="/" element={<RegistrationForm />} /> {/* Home page */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin page */}
        <Route path="/test" element={<Test />} /> {/* Admin page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo2 />} />
       
  </Routes>
    </Router>
  );
}

export default App;
