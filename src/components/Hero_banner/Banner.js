import React from "react";

const Banner = () => {
  return (
    <div className="featured_wrapper">
      <img
        src="https://cdn-images-1.medium.com/max/1600/1*9ce5Yft8Cqg3Vt63pVGNkw.png"
        width={150}
      />
      <div className="fixMyStyle">
        $git commit -m{"  "}
        <span>'Welcome to our Project'</span>
      </div>
      <div>EmoSpherO</div>
      <div>
        <p>
          render <span> ( </span>
          <br />
          return <span>(</span>
          <br /> {"<"}
          <span> View </span>
          <span> {">"} </span>
          <br />
          {"<"}
          <span> ProjectDetails </span>
          <span> {">"} </span>
          <span> Yo yo yyo this is our project </span>
          <span>
            {" "}
            {"</"}
            <span> ProjectDetails </span>
            <span> {">"} </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
