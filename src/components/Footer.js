import React from "react";
import footerCurv from "../images/Shape_04@2x.png";

function Footer() {
  return (
    <footer
      className="text-white h-80 flex justify-center items-center"
      style={{
        width: "100%",

        backgroundImage: `url(${footerCurv}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="footer_content text-center mt-4 ">
        <h1
          style={{
            borderBottom: "2px solid #d8b8ef",
            width: "220px",
            margin: " 30px auto",
          }}
          className="font-bold pb-1 text-lg pt-6"
        >
          Start a project with me
        </h1>
        <p className="my-5 w-92 text-sm mx-4">
          let's discuss our ideas for presenting your bussiness to the <br />{" "}
          world in an attractive, efficient and effective way.
        </p>
        <button className="bg-white shadow-2xl hover:text-purple-900 text-purple-500 text-sm font-bold mt-5 px-10 py-2  rounded-full">
          HIRE ME
        </button>
      </div>
    </footer>
  );
}

export default Footer;
