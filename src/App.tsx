import "./styles/App.css";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <h1>Hello World</h1>
      <p className="header-text">This is a header text</p>
    </div>
  );
};

export default App;
