import React from "react";
import { Global, css, connect } from "frontity";
import { useLottie } from "lottie-react";
import animation from "../lottie-animations/cat-preloader.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <Global styles={globalStyles}></Global>
      <div
        css={css`
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {View}
      </div>
    </>
  );
};

export default connect(Loading);

const globalStyles = css`
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
