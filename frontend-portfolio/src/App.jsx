import { Navbar } from "./components";
import "./App.scss";

import { Header, About, Work, Skills, Testimonial, Footer } from "./helpers";
// import { WaveNav } from "./components/waveNav/waveNav";

function App() {
  return (
    <>
      <section className="app">
        {/* <WaveNav /> */}
        <Navbar />
        <Header />
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
