import React from "react";
import { Global, connect, styled, css } from "frontity";

const Info = ({ state }) => {
  console.log(state);
  const data = state.source.get(state.router.link);
  console.log(data);
  const page = state.source[data.type][data.id];
  console.log(page);

  return (
    <>
      <Container>
        <About dangerouslySetInnerHTML={{ __html: page.acf.about }}></About>
        <ContactSocial
          dangerouslySetInnerHTML={{ __html: page.acf.contact_social }}
        ></ContactSocial>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Info);

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 15vh;
  padding-left: 15vw;
  padding-right: 15vw;

  @media only screen and (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  @media only screen and (max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const About = styled.div`
  margin-top: 5vh;

  p:nth-child(1) {
    margin: 0;
    margin-left: 10px;
    font-family: "MalayalamSangamMN";
  }

  p:nth-child(2) {
    margin: 0;
    font-size: 20px;
  }
`;

const ContactSocial = styled.div`
  margin-top: 10vh;

  p:nth-child(1) {
    margin: 0;
    margin-left: 10px;
    font-family: "MalayalamSangamMN";
  }

  p:nth-child(2) {
    margin-block-start: 0;
    font-size: 20px;

    a {
      text-decoration: none;
      color: black;
    }
  }

  p:nth-child(3) {
    margin: 0;
    margin-left: 10px;
    font-family: "MalayalamSangamMN";
  }

  p:nth-child(4) {
    margin: 0;
    font-size: 20px;

    a {
      text-decoration: none;
      color: black;
    }
  }
`;
