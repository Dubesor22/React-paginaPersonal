import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Badges } from "./components/Badges/Badges";

function App() {
  const myBio = {
    name: "David",
    surname: "Un Ninja Coder Cualquiera",
    bio: "«Sólo un ninja puede detener a un ninja».",
    imageUrl:
      "https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f977.png",
  };
  const myBadges = [
    {
      nombre: "Html",
      img: "https://cdn.dribbble.com/users/66221/screenshots/1655593/html5.png",
    },
    {
      nombre: "Css",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    },
    {
      nombre: "Javascript",
      img: "https://realtoughcandy.com/wp-content/uploads/2020/05/logo-javascript-png-file-javascript-logo-png-1052-1024x1024.png",
    },
    {
      nombre: "Bootstrap",
      img: "https://iconape.com/wp-content/files/vp/370638/svg/bootstrap-logo-icon-png-svg.png",
    },
    {
      nombre: "NodeJs",
      img: "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png",
    },
    {
      nombre: "ExpressJs",
      img: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    },
    {
      nombre: "Sql",
      img: "https://teorema-rd.com/storage/2020/05/sql.jpg",
    },
    {
      nombre: "MongoDb",
      img: "https://keyholesoftware.com/wp-content/uploads/MongoDB.jpg.webp",
    },
    {
      nombre: "Sequelize",
      img: "https://google.github.io/sqlcommenter/images/sequelize-logo.png",
    },
    {
      nombre: "Mongoose",
      img: "https://ih1.redbubble.net/image.438912061.6243/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
  ];

  return (
    <body>
      <Header />
      <div className="App">
        <Home myBio={myBio} />
        <Badges myBadges={myBadges} />
      </div>
    </body>
  );
}

export default App;
