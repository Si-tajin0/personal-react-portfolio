import { useContext, useEffect } from "react";
import "./App.css";
import { ThemeContext } from "./Context";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle"; // টগল বাটনটি ইম্পোর্ট করুন

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const location = useLocation();

  // Tailwind-এর ডার্ক মোড ক্লাস হ্যান্ডেল করার জন্য useEffect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // প্রতিবার রাউট চেঞ্জ হলে পেজের একদম উপরে চলে যাওয়ার জন্য (Optional but good UX)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* নেভবার সবার উপরে থাকবে */}
      <Navbar />

      {/* ডার্ক মোড টগল বাটন (যদি নেভবারে না থাকে, তবে এখানে থাকবে) */}
      {/* <Toggle /> */}

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<ProductList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* আপনি চাইলে এখানে একটি গ্লোবাল ফুটার যোগ করতে পারেন */}
    </div>
  );
}

export default App;
