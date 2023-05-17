import { Navbar } from "./components";
import "./App.scss";
// import { HoverText } from "./design/HoverText/HoverText";

import {
  LandingPage,
  About,
  Work,
  Skills,
  Testimonial,
  Footer,
} from "./helpers";

function App() {
  return (
    <>
      <section className="app">
        {/* <HoverText /> */}
        <Navbar />
        <LandingPage />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </section>
    </>
  );
}

export default App;
