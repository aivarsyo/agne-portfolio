import React, { useEffect } from "react";
import { Global, connect, styled, css } from "frontity";

import Glide from "@glidejs/glide";
import carousel from "@glidejs/glide";

import glideCore from "../../../../node_modules/@glidejs/glide/dist/css/glide.core.css";
import glideTheme from "../../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";

import arrowLeft from "../images/arrow_left.png";
import arrowRight from "../images/arrow_right.png";
import close from "../images/close.png";

var keygen = require("keygenerator");

const Works = ({ state }) => {
  console.log(state);
  const data = state.source.get(state.router.link);
  console.log(data);
  const page = state.source[data.type][data.id];
  console.log(page);
  // just stating a global variable, so it can be used later
  let startingPoint;

  let allWorks = [];
  page.acf.works.map((item) => {
    allWorks.push(item.name);
  });

  const glideStart = useEffect(() => {
    const config = {
      type: carousel,
      perView: 1,
    };

    const glide = new Glide(".glide", config);

    startingPoint = (event) => {
      document.querySelectorAll(".glide__slide").forEach((slide) => {
        if (slide.dataset.name == event.target.dataset.name) {
          glide.mount();
          glide.update({
            // start a slider with the same work that's clicked
            startAt: allWorks.indexOf(event.target.dataset.name),
          });
        }
      });
    };
  }, []);

  const openSlider = (event) => {
    document.querySelector(".white").style.opacity = "1";
    document.querySelector(".white").style.zIndex = "2";
  };

  const closeSlider = (event) => {
    document.querySelector(".white").style.opacity = "0";
    document.querySelector(".white").style.zIndex = "-1";
  };

  return (
    <>
      <Global styles={css(glideCore, glideTheme)}></Global>
      <Container>
        <Images>
          {page.acf.works.map((item) => {
            return (
              <Image
                key={keygen._()}
                src={item.image}
                data-name={item.name}
                onClick={(event) => {
                  openSlider(event), startingPoint(event);
                }}
              ></Image>
            );
          })}
        </Images>
      </Container>

      <White className="white">
        <div
          className="glide"
          css={css`
            height: 100%;
          `}
        >
          <div
            className="glide__track"
            data-glide-el="track"
            css={css`
              height: 100%;
            `}
          >
            <ul
              className="glide__slides"
              css={css`
                height: 100%;
                margin: 0;
                overflow: auto !important;

                ::-webkit-scrollbar {
                  display: none;
                }

                -ms-overflow-style: none;
                scrollbar-width: none;
              `}
            >
              {page.acf.works.map((item) => {
                return (
                  <li
                    key={keygen._()}
                    className="glide__slide"
                    data-name={item.name}
                    css={css`
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      margin: 0;
                    `}
                  >
                    <img
                      key={keygen._()}
                      src={item.image}
                      css={css`
                        width: 50vw;
                        height: auto;

                        @media only screen and (max-width: 425px) {
                          width: 100%;
                        }
                      `}
                    ></img>
                    <Name
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></Name>
                    <Type
                      dangerouslySetInnerHTML={{ __html: item.type }}
                    ></Type>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="glide__arrows"
            data-glide-el="controls"
            css={css`
              @media only screen and (max-width: 425px) {
                display: none;
              }
            `}
          >
            <Arrow
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
              src={arrowLeft}
            ></Arrow>
            <Arrow
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
              src={arrowRight}
            ></Arrow>
          </div>
        </div>

        <CloseButton
          src={close}
          className="close"
          onClick={closeSlider}
        ></CloseButton>
      </White>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Works);

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Images = styled.div`
  width: 50vw;
  margin-top: 40vh;

  @media only screen and (max-width: 425px) {
    width: 90vw;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: 1s;
  display: block;
  cursor: pointer;

  :hover {
    filter: none;
  }
`;

const White = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: -1;
  opacity: 0;
  transition: 1s;
`;

const Arrow = styled.img`
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  width: 50px;
  height: 50px;
`;

const Name = styled.p`
  color: #4aaf00;
  font-family: "MalayalamSangamMN";
`;

const Type = styled.p`
  color: #4aaf00;
  opacity: 0.5;
  font-family: "MalayalamSangamMN";
  margin-bottom: 40px;
  margin-top: 0;
`;

const CloseButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 40px;

  @media only screen and (max-width: 425px) {
    top: 20px;
    right: 20px;
  }
`;
