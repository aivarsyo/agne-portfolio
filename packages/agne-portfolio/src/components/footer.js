import React from "react";
import { connect, css } from "frontity";

const Footer = ({}) => {
  return (
    <footer
      css={css`
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20vh;
      `}
    >
      <p
        css={css`
          font-family: "Helvetica";
          opacity: 0.5;
          font-size: 12px;
        `}
      >
        Copyright &#169; Agne Siupsinskaite
      </p>
    </footer>
  );
};

export default connect(Footer);
