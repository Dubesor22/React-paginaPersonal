import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  const myBio = {
    name: "David",
    surname: "Un Ninja Cualquiera",
    bio: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageUrl: (
      <img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f977.png" />
    ),
  };
  return (
    <body>
      <Header />
      <div className="App">
        <Home myBio={myBio} />
      </div>
    </body>
  );
}

export default App;
