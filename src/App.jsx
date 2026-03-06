import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./styles/global.css";
function App() {
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#3f2a66_0%,_#241a3d_40%,_#0a0a0f_85%)] backdrop-blur-md text-white">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;