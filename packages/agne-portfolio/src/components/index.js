import React from "react";
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import SaolDisplay from "../fonts/SaolDisplay-Regular.ttf";
import MalayalamSangamMN from "../fonts/MalayalamSangamMN.ttf";
import Helvetica from "../fonts/Helvetica-400.ttf";
import Works from "./works";
import Info from "./info";
import Loading from "./preloader";
import Footer from "./footer";
import { useTransition, animated } from "react-spring";

const Theme = ({ state, actions }) => {
  console.log(state);
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const pageTransitions = useTransition(state.router.link, null, {
    config: { duration: 1000 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "none" },
  });

  let bckColor = data.isHome ? "#f6f3ec" : "#e6a3c7";

  const globalStyles = css`
    @font-face {
      font-family: "SaolDisplay";
      src: url(${SaolDisplay});
    }

    @font-face {
      font-family: "MalayalamSangamMN";
      src: url(${MalayalamSangamMN});
    }

    @font-face {
      font-family: "Helvetica";
      src: url(${Helvetica});
    }

    body {
      margin: 0;
      font-family: "SaolDisplay";
      background-color: ${bckColor};
    }

    header {
      background-color: ${bckColor};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal;
      margin: 0;
    }
  `;
  return (
    <>
      <Head>
        <title>Agne Siupsinskaite</title>
        <html lang="en" />
      </Head>
      <Global styles={globalStyles}></Global>

      <Header></Header>
      {pageTransitions.map(({ props, key }) => (
        <animated.div style={props} key={key}>
          <Switch>
            <Loading when={data.isFetching} />
            <Works when={data.isHome} />
            <Info when={data.id == 22} />
          </Switch>
        </animated.div>
      ))}
      <Footer />
    </>
  );
};

export default connect(Theme);
