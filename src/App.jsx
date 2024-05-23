import Blog from "./components/Blog";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Company from "./components/Company";
import Journey from "./components/Journey";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-[#ededed] w-screen h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Packages />
      <Company />
      <Testimonials />
      <Features />
      <Blog />
      <Journey />
      <Footer />
    </div>
  );
};

export default App;
