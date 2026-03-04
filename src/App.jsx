import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="bg-bgPrimary min-h-screen text-white">
      
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />

    </div>
  );
}

export default App;