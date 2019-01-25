import React from "react";
let date = new Date();
export default function Footer(props) {
  return (
    <footer className="section section--footer">
      &copy; {date.getFullYear()} FoxChrisRealThe - Website Design by Fox Design
      Agency
    </footer>
  );
}
