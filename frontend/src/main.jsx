import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HeroSection from "./components/HeroSection.jsx";
import Courses from "./components/Courses.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <HeroSection />
      <Courses />
      <ContactForm />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
