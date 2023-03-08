import './App.css';
import "./styles.css";
import AppLink from "./AppLink";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import picture from "./picture.jpg";

function App() {
  return (
    <div className="App">
      <span className="font-link-Title">LOW WEI KANG</span>
      <AppLink />
      <img
        style={{ width: 250, alignself: "right", margin: "auto" }}
        src={picture}
        alt="react logo"
      />

      <AboutMe />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
