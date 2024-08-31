import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home(){
    const targetDate = new Date('2024-09-06T15:00:00'); 
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
    return (
        <>
        <div className="row">  
        <h3 className="p-8 col align-self-center">
       React Basics
        <small className="text-body-secondary"> Assignment</small>
      </h3>
      <h6 className="col align-self-center justify-self-end">
     Deadline: {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds.
      </h6>
      </div>
      <p>
        Hello class, this is your first react assignment. The project is
        a simple calculator that does the following operations.  
      </p>

      <h6>below is the navigation panel click on the operations to see the components.
      </h6>
       <nav className="container">
        <ul className="list-group">
          <li  className="list-group-item">
            <Link to="/add">Addition</Link>
          </li>
          <li  className="list-group-item">
            <Link to="/subtract">Subtraction</Link>
          </li>
          <li  className="list-group-item">
            <Link to="/multiply">Multiplication</Link>
          </li>
           <li  className="list-group-item">
            <Link to="/divide">Division</Link>
          </li>
        </ul>
      </nav>
      <h5>Explanation</h5>
      <p>Bootstrap is installed in this application and you can style your application using bootstrap however you want.</p>
      <p>The addition operation is done as example for you please check the add.jsx file inside the components folder.</p>
      <h5>Deliverables</h5>
      <p>implement the remaining operations. i.e. subtraction, multiplication and division </p>
    <h5>Resources</h5>
    <nav className="container">
        <ul className="list-group">
          <li  className="list-group-item">
            <a href="https://www.w3schools.com/react/default.asp" target="_blank">W3 schools </a>
          </li>
          <li  className="list-group-item">
            <a href="https://www.youtube.com/watch?v=5ZdHfJVAY-s" target="_blank">youtube</a>
          </li>
          <li  className="list-group-item">
            <a href="https://react.dev/learn" target="_blank"> React Documentation</a>
          </li>
           <li  className="list-group-item">
            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">Bootstrap Documentation</a>
          </li>
        </ul>
      </nav>
      </>
    )
}

export default Home;