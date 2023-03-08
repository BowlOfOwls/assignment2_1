import "./styles.css";
import * as utility from "./AppFunctions.js";

function Portfolio() {
  return (
    <utility.Box
      style={{
        backgroundColor: "#613b23",
        minHeight: 100,
        padding: 12,
        margin: 12
      }}
    >
      <span className="font-link-Franklin-header">PORTFOLIO</span>
      <utility.ColoredLine color="white" />
      <span className="font-link-Helvetica">
        Bachelor with Merit Engineering
        <br />
      </span>
      <span className="font-link-Helvetica-small">
        University of Technology and Design
        <br />
      </span>
      <span className="font-link-Helvetica">
        Certified Data Analyst
        <br />
      </span>
      <span className="font-link-Helvetica-small">
        HeiCoders academy AI200
        <br />
        <br />
      </span>
      <span className="font-link-Helvetica-small">
        Skills Include:
        <br />
      </span>
      <span className="font-link-Helvetica">
        Python
        <br />
        Machine Learning
        <br />
        React
        <br />
        JavaS
        <br />
        Git
        <br />
        Agile Scrum
        <br />
      </span>
    </utility.Box>
  );
}

export default Portfolio;
