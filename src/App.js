import React, { useState } from "react";
import "./app.css";
function App() {
  const [background, setBackground] = useState("#cdc8c8");
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [color, setColor] = useState("#3f3b3b");

  ///handle background color
  const handleBackground = (e) => {
    const codeBG = document.querySelector(".codeBG");
    setBackground(e);
    codeBG.innerHTML = `background-color: '${background}' ;`;
  };
  ///handle font family

  const handleFontFamily = (e) => {
    const codeFont = document.querySelector(".codeFont");
    setFontFamily(e);
    codeFont.innerHTML = `font-family: '${fontFamily}' ;`;
  };

  ///handle color
  const handleColor = (e) => {
    const codeColor = document.querySelector(".codeColor");
    setColor(e);
    codeColor.innerHTML = `color: '${color}';`;
  };

  ///reset handle
  const handleReset = () => {
    setColor("#3f3b3b");
    setFontFamily("sans-serif");
    setBackground("#cdc8c8");
  };
  return (
    <div>
      <div className="text__card" style={{ background, color, fontFamily }}>
        <h3>Change text and generate code!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          ipsa quasi corporis fuga assumenda vel necessitatibus aspernatur
          consequuntur, earum dolorum!
        </p>
      </div>
      <div className="btnCode">
        <div className="code_box">
          <h5>Code:</h5>
          <p className="codeBG"></p>
          <p className="codeFont"></p>
          <p className="codeColor"></p>
        </div>
        <div className="buttons">
          <div className="background_color">
            <h5>background color:</h5>
            <ul>
              <li>
                <button
                  style={{ background: "#2980b9" }}
                  value="#2980b9"
                  onClick={(e) => handleBackground(e.target.value)}
                >
                  BLUE
                </button>
              </li>
              <li>
                <button
                  style={{ background: "green" }}
                  value="green"
                  onClick={(e) => handleBackground(e.target.value)}
                >
                  GREEN
                </button>
              </li>
              <li>
                <button
                  style={{ background: "#c0392b" }}
                  value="#c0392b"
                  onClick={(e) => handleBackground(e.target.value)}
                >
                  RED
                </button>
              </li>
            </ul>
          </div>
          <div className="font_family">
            <h5>font family:</h5>
            <ul>
              <li>
                <button
                  style={{ background: "black" }}
                  value="Ubuntu"
                  onClick={(e) => handleFontFamily(e.target.value)}
                >
                  UBUNTU
                </button>
              </li>
              <li>
                <button
                  style={{ background: "black" }}
                  value="Roboto"
                  onClick={(e) => handleFontFamily(e.target.value)}
                >
                  ROBOTO
                </button>
              </li>
              <li>
                <button
                  value="system-ui"
                  onClick={(e) => handleFontFamily(e.target.value)}
                  style={{ background: "black" }}
                >
                  COURIER NEW
                </button>
              </li>
            </ul>
          </div>
          <div className="FONT_COLOR">
            <h5>FONT COLOR:</h5>
            <ul>
              <li>
                <button
                  style={{ border: "2px solid #169a9a", color: "black" }}
                  value="#169a9a"
                  onClick={(e) => handleColor(e.target.value)}
                >
                  CYAN
                </button>
              </li>
              <li>
                <button
                  style={{ border: "2px solid purple", color: "black" }}
                  value="purple"
                  onClick={(e) => handleColor(e.target.value)}
                >
                  PURPLE
                </button>
              </li>
              <li>
                <button
                  style={{ border: "2px solid black", color: "black" }}
                  value="black"
                  onClick={(e) => handleColor(e.target.value)}
                >
                  BLACK
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleReset()}
        style={{
          background: "red",
          padding: "7px 23px",
          fontSize: ".8rem",
          fontWeight: "600",
          marginLeft: "30%",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
