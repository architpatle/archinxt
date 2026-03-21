import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import './index.css'
import ScrollToTop from "./utils/ScrollToTop";
import FloatingProfileBtn from "./components/FloatingProfileBtn/FloatingProfileBtn";

function App() {
  return (
    <div className="bg-bgPrimary min-h-screen text-white">
      
      <Navbar />
<ScrollToTop />
      <main>
        <AppRoutes />
        <FloatingProfileBtn />
      </main>

      <Footer />

    </div>
  );
}

export default App;