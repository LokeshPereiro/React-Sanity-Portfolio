import { Navbar } from "./components";

import {
  Header,
  About,
  Work,
  Skills,
  Testimonial,
  Footer,
} from "./appComponents";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
