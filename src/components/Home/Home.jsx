import React from "react";
import "./Home.css";

export const Home = () => {
  const myBio = {
    name: "David",
    surname: "Un Ninja Coder Cualquiera",
    bio: "«Sólo un ninja puede detener a un ninja».",
    imageUrl:
      "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f977.png",
  };
  // const info = props.myBio.map((item) => <li>{item.name}</li>)
  return (
    <div className="container-fluid bg-primary bg-secondary">
      <div className="description">
        <h1>Quien Soy?</h1>
        <div className="bio">
          <div className="image-bio">
            <img src={myBio.imageUrl} alt="" id="avatar" />
          </div>
          <div className="data">
            <span>{myBio.name}, </span>
            <span>{myBio.surname} </span>
          </div>
        </div>
        <br />
        <div class="card">
          <div class="card-header">Quote</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{myBio.bio}</p>
              <footer class="blockquote-footer">
                Sho Kosugi. <cite title="Source Title">Source</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
