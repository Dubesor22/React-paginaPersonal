import React from "react";
import "./Home.css";

export const Home = (props) => {
  console.log(props);
  // const info = props.myBio.map((item) => <li>{item.name}</li>)
  return (
    <div className="container-fluid bg-primary bg-secondary">
      <div className="description">
        <h1>Quien Soy?</h1>
        <div className="bio">
          <div className="image-bio">
            <span>{props.myBio.imageUrl} </span>
          </div>
          <div className="data">
            <span>{props.myBio.name}, </span>
            <span>{props.myBio.surname} </span>
          </div>
        </div>
        <br />
        <span>{props.myBio.bio} </span>
      </div>
    </div>
  );
};
