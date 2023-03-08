function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const ColoredLine = ({ color }) => (
  <hr
    style={{
      borderBlockColor: color,
      color: color,
      backgroundColor: color,
      height: 1
    }}
  />
);

function redirectIt(obj) {
  var goToLink = obj.getAttribute("href");
  window.location.href = goToLink;
}

export { Box, ColoredLine, redirectIt };
