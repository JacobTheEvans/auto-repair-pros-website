import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import CustomMap from "./components/CustomMap";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
        <div className="container container-spacing">
          <CustomMap/>
          <Hours/>
        </div>
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
