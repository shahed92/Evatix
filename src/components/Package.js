import React from "react";

function Package() {
  ///card component
  const Card = ({ subtitle, title }) => {
    return (
      <div
        style={{ boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.14)" }}
        className="card h-44  shadow-2xl w-80 md:w-72 -400 md:mr-3 pl-5 py-4 my-2"
      >
        <h5 className="text-purple-500 text-sm">{subtitle}</h5>
        <h3 className="font-bold py-2">{title}</h3>
        <p className="capitalize leading-3" style={{ fontSize: "10px" }}>
          this package will suit you if you wnat asingle page simple website for
          your product. It will cover only one web UI. You can revise the design
          for 2 times after the initial draft discussion session...
        </p>
        <button
          className="card_btn  bg-gradient-to-r from-purple-700 to-pink-400  text-white  font-bold mt-5 px-4 py-1 rounded-full"
          style={{ fontSize: "10px" }}
        >
          SEE MORE
        </button>
      </div>
    );
  };
  ///card component end
  return (
    <div>
      <h1
        style={{
          borderBottom: "2px solid #bf80ed",
          width: "140px",
          margin: " 30px auto",
        }}
        className="text-center font-bold text-3xl mb-12 pb-1"
      >
        Packages
      </h1>
      <div className="cards mb-3 mx-8 flex flex-col md:flex-row md:justify-around justify-center items-center">
        {<Card subtitle="GETTING STARTED" title="Singularity" />}
        {<Card subtitle="BUSSINESS WORKFLOW" title="Plurality" />}
        {<Card subtitle="INTERACTIONS" title="Professional" />}
      </div>
    </div>
  );
}

export default Package;
