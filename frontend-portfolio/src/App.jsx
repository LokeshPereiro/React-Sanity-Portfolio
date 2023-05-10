import { Navbar } from "./components";
// import { Header, About, Footer, Skills, Testimonial, Work } from "./container";
// import Header from "./container/Header/Header";
// import About from "./container/About/About";
import { Header, About, Work, Skills } from "./appComponents";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
