import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;



