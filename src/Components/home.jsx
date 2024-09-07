import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home(){
    return (
      <>
        <div className="row">
          <h3 className="p-8 col align-self-center">
            React Basics
            <small className="text-body-secondary"> Cheat sheet</small>
          </h3>
        </div>
        <p>
          Hello class, this is a collection of the concepts covered in our react
          class. The project contains barebone react styled with bootstrap. you
          might find some new concepts here. and you can always refer to the
          resources.
        </p>

        <h6>
          below is the navigation panel click on the links to see the details of
          the components. and also the sample source code.
        </h6>
        <nav className="container">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/add">Addition</Link>
            </li>
            <li className="list-group-item">
              <Link to="/subtract">Subtraction</Link>
            </li>
            <li className="list-group-item">
              <Link to="/multiply">Multiplication</Link>
            </li>
            <li className="list-group-item">
              <Link to="/divide">Division</Link>
            </li>
            <li className="list-group-item">
              <Link to="/todo">simple todo app hooks example</Link>
            </li>
            <li className="list-group-item">
              <Link to="/counter-redux">simple counter redux example </Link>
            </li>
            <li className="list-group-item">
              <Link to="/posts-redux">Crud operation from placeholder api redux example</Link>
            </li>
          </ul>
        </nav>
        <h5>Explanation</h5>
        <h5>Resources</h5>
        <nav className="container">
          <ul className="list-group">
            <li className="list-group-item">
              <a
                href="https://www.w3schools.com/react/default.asp"
                target="_blank"
              >
                W3 schools{" "}
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://www.youtube.com/watch?v=5ZdHfJVAY-s"
                target="_blank"
              >
                youtube
              </a>
            </li>
            <li className="list-group-item">
              <a href="https://react.dev/learn" target="_blank">
                {" "}
                React Documentation
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                target="_blank"
              >
                Bootstrap Documentation
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Home;