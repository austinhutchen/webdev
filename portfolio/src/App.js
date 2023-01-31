import "./App.css";
import img from "./images/standing.jpg";

// components
const Head = () => {
  return (
    <>
      <header>
        <u>
          <h1 className="test">Austin Hutchen</h1>
          <hr></hr>
        </u>
        <h2 className="hlight">
          <u>About Me:</u>
        </h2>
        <p></p>
        <i>
          Prospective software engineer with passion for development and
          experience working with startups!
        </i>
        <h3>
          <a href="https://catalog.colorado.edu/undergraduate/colleges-schools/engineering-applied-science/programs-study/computer-science/computer-science-bachelor-science-bscs/">
            CU BOULDER BSCS STUDENT - CO 2025
          </a>
        </h3>
      </header>
      <hr></hr>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div style={{ margin: -5 }}>
        <img src={img} width="200" height="280" align="left" />
      </div>
      <body>
        <h2 className="hlight">Work Experience:</h2>
        <hr></hr>
        <ul>
          <li>
            <b>
              <u>
                Mobius Materials, Marketing Consultant (Summer 2020-Fall 2020)
              </u>
            </b>
            <article>
              <p>Worked as a marketing consultant, </p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
              <p>sss</p>
            </article>
          </li>
        </ul>
      </body>
      <hr></hr>
    </>
  );
};

const Foot = () => {
  return (
    <footer>
      <hr></hr>
      <div style={{ margin: 15 }}>
        <h2 className="hlight">
          <b>NOTABLE PROJECTS:</b>
        </h2>
      </div>
      <div style={{ margin: 15 }}>
        <ul>
          <li>
            <a href="https://github.com/austinhutchen/levelquest.git">
              Zelda clone (C++)
            </a>
          </li>
          <li>
            <a href="https://github.com/austinhutchen/IOS-calculator-app">
              Functional calculator App (FLUTTER/DART)
            </a>
          </li>
          <li>
            <a href="https://github.com/austinhutchen/About-Me.git">
              This Webpage (REACT/JS)
            </a>
            <li>
              <a href="https://github.com/austinhutchen/weather-native.git">
                Weather app (REACT NATIVE)
              </a>
            </li>
            <li>
              <a href="https://github.com/austinhutchen/redditsearch">
                Reddit search/statistics engine (PYTHON)
              </a>
            </li>
          </li>
        </ul>
      </div>
      <hr></hr>
    </footer>
  );
};

// main app
const MainApp = () => {
  // javascript goes here
  return (
    <div className="App">
      <Head />
      <Body />
      <Foot />
    </div>
  );
};

export default MainApp;
