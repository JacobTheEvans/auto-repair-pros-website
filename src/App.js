import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import CustomMap from "./components/CustomMap";
import Hours from "./components/Hours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: false
    };
  }
  checkMobile = () => {
    let width = window.innerWidth || document.body.clientWidth;
    if (width <= 1024) {
      this.setState(prevState => ({isMobile: true}));
    } else if (this.state.isMobile === true) {
      this.setState(prevState => ({isMobile: false}));
    }
  }
  componentDidMount() {
    this.checkMobile();
    window.onresize = (event) => this.checkMobile();
  }
  render() {
    return (
      <div>
        <Header/>
        <About/>
          {
            this.state.isMobile ?
            (<div className="container container-spacing"><Hours/><CustomMap/></div>) :
            (<div className="container container-spacing"><CustomMap/><Hours/></div>)
          }
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default App;
