import React from "react";
import FontAwesome from "react-fontawesome";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="col-3">
          <h3>Quality Work</h3>
          <p>Actually listicle woke artisan, bushwick fashion axe XOXO vegan ramps. Pabst man braid waistcoat readymade. Austin echo park cold-pressed lomo vaporware pickled post-ironic kitsch fingerstache.</p>
        </div>
        <div className="col-3">
          <h3>Free Estimates</h3>
          <p>Actually listicle woke artisan, bushwick fashion axe XOXO vegan ramps. Pabst man braid waistcoat readymade. Austin echo park cold-pressed lomo vaporware pickled post-ironic kitsch fingerstache.</p>
        </div>
        <div className="col-3">
          <h3>Lifetime Paint Warranty</h3>
          <p>Actually listicle woke artisan, bushwick fashion axe XOXO vegan ramps. Pabst man braid waistcoat readymade. Austin echo park cold-pressed lomo vaporware pickled post-ironic kitsch fingerstache. </p>
        </div>
      </section>
    )
  }
}

export default About;
