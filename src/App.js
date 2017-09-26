import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import CustomMap from "./components/CustomMap";
import Hours from "./components/Hours";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
        <div className="container">
          <CustomMap/>
          <Hours/>
        </div>
      </div>
    )
  }
}

export default App;
