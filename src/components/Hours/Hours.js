import React from "react";
import "./Hours.css";

const time = [
  {
    day: "Monday",
    start: "8AM",
    end: "5PM"
  }, {
    day: "Tuesday",
    start: "8AM",
    end: "5PM"
  }, {
    day: "Thursday",
    start: "8AM",
    end: "5PM"
  }, {
    day: "Friday",
    start: "8AM",
    end: "5PM"
  }, {
    day: "Saturday",
    start: "Closed",
    end: "Closed"
  }, {
    day: "Sunday",
    start: "Closed",
    end: "Closed"
  }
];

class Hours extends React.Component {
  render() {
    return (
      <section className="col-2 hours-sec">
        <h2>Business Hours</h2>
        <aside>
          {time.map((item) => (
            <div className="hours">
              <h3>{item.day}</h3>
              {item.start === "Closed" ? <p>{item.start}</p> : <p>{item.start} to {item.end}</p> }
            </div>
          ))}
        </aside>
      </section>
    )
  }
}

export default Hours;
