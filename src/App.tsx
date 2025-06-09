import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar"; // ⬅️ importa o menu

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20"> {/* espaço para não ficar atrás do menu */}
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
