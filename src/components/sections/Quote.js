import React from "react";

import "../../css/blockquote.css";
export default function Quote(props) {
  return (
    <div className="section section--quote">
      <blockquote>
        <div className="section section--column section--quote ">
          <p>
            I'm believing <strong>past impossible</strong>, no matter how
            statistically <strong>improbable</strong>,
          </p>
          <p>
            because when it all comes down to it... as long as I believe in
            myself, <strong>I'm unstoppable.</strong>
          </p>
        </div>
        <span>Christopher Fox</span>
      </blockquote>
    </div>
  );
}
