import React, { useRef, useEffect } from "react";
import { connect, css } from "frontity";
import Link from "./link";
import { TweenMax } from "gsap";

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);

  let hoverColor = data.isHome ? "#A8771B" : "#F56323";
  let menuBckColor = data.isHome ? "#264617" : "#F56323";
  let burgerPointColor = data.isHome ? "#A8771B" : "#F56323";

  const mobileMenu = useRef(null);
  const burgerPoint = useRef(null);

  const showMobileMenu = () => {
    document.querySelector(".mobileMenu").style.zIndex = "2";
    TweenMax.to([mobileMenu.current], 0.5, { opacity: 1 });
  };

  const hideMobileMenu = () => {
    document.querySelector(".mobileMenu").style.zIndex = "-1";
    TweenMax.to([mobileMenu.current], 0.5, { opacity: 0 });
  };

  const scaleUpBurgerPoint = () => {
    TweenMax.to([burgerPoint.current], 0.5, {
      scale: 120,
      backgroundColor: menuBckColor,
    });
  };

  const scaleDownBurgerPoint = () => {
    TweenMax.to([burgerPoint.current], 0.5, {
      scale: 1,
      backgroundColor: burgerPointColor,
    });
  };

  useEffect(() => {
    scaleDownBurgerPoint();
    hideMobileMenu();
  });

  return (
    <>
      <header
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 15vh;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <h1
          css={css`
            margin-left: 15vw;

            @media only screen and (max-width: 768px) {
              margin-left: 40px;
              font-size: 24px;
            }

            @media only screen and (max-width: 425px) {
              margin-left: 20px;
              font-size: 20px;
            }
          `}
        >
          AGNE SIUPSINSKAITE
        </h1>
        <nav
          css={css`
            margin-right: 15vw;

            a {
              margin-right: 40px;
              text-transform: uppercase;
              text-decoration: none;
              color: black;

              :hover {
                color: ${hoverColor};
              }
            }

            @media only screen and (max-width: 768px) {
              display: none;
            }
          `}
        >
          <Link href="/">Works</Link>
          <Link href="/info">Info</Link>
        </nav>

        <div
          ref={burgerPoint}
          onClick={() => {
            scaleUpBurgerPoint(), showMobileMenu();
          }}
          className="burgerPoint"
          css={css`
            margin-right: 20px;
            width: 20px;
            height: 20px;
            background-color: ${burgerPointColor};
            border-radius: 50%;
            cursor: pointer;

            @media only screen and (min-width: 769px) {
              display: none;
            }
          `}
        ></div>
      </header>

      <div
        ref={mobileMenu}
        className="mobileMenu"
        css={css`
          position: fixed;
          width: 100%;
          height: 100vh;
          z-index: -1;
          opacity: 0;

          @media only screen and (min-width: 769px) {
            display: none;
          }
        `}
      >
        <div
          css={css`
            height: 15vh;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          `}
        >
          <div
            onClick={() => {
              scaleDownBurgerPoint(), hideMobileMenu();
            }}
            className="burgerPoint"
            css={css`
              background-color: white;
              border-radius: 50%;
              cursor: pointer;
              margin-right: 20px;
              width: 20px;
              height: 20px;
            `}
          ></div>
        </div>
        <div
          className="mobileLinks"
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: flex-end;

            a {
              margin-right: 20px;
              text-transform: uppercase;
              text-decoration: none;
              color: white;
              font-size: 24px;
            }
          `}
        >
          <Link href="/">Works</Link>
          <Link href="/info">Info</Link>
        </div>
      </div>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
