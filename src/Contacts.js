import "./styles.css";
import * as utility from "./AppFunctions.js";

function Contacts() {
  return (
    <utility.Box
      style={{
        backgroundColor: "#543722",
        minHeight: 100,
        padding: 8,
        margin: 12
      }}
    >
      <span className="font-link-Franklin-header">CONTACT</span>
      <utility.ColoredLine color="white" />
      <span
        className="font-link-Helvetica-small"
        // not sure why the following does not work
        // onclick="utility.redirectIt(this)"
        // href="http://google.com"
      >
        github: https://github.com/BowlOfOwls
        <br />
        email: weikang97@gmail.com - office number: 63785326 <br /> slack ID:
        WeiKangLow#326
      </span>
    </utility.Box>
  );
}

export default Contacts;
