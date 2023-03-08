import "./styles.css";
import * as utility from "./AppFunctions.js";

function AboutMe() {
  return (
    <utility.Box
      style={{
        backgroundColor: "#794a2c",
        minHeight: 100,
        padding: 18,
        margin: 12
      }}
    >
      <span className="font-link-Franklin-header">ABOUT ME</span>
      <utility.ColoredLine color="white" />
      <span className="font-link-Helvetica">
        I am a driven, thoughtful individual with a love for knowledge and self
        learning.
      </span>
    </utility.Box>
  );
}

export default AboutMe;
