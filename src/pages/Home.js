import React from "react";

import Section from "../components/Section";
import Footer from "../components/Footer";
import HeroTwoLines from "../components/HeroTwoLines";
import CrossSection from "../components/CrossSection";
import CalendarsLike from "../components/CalendarsLike";
import CrossSectionShape from "../components/CrossSectionShape";
import Persons from "../components/Persons";

const Home = props => {
  const calendars = [
    {
      id: 1,
      text: "Horizontal",
      type: "horizontal"
    },
    {
      id: 2,
      text: "Diagonal",
      type: "diagonal"
    },
    {
      id: 3,
      text: "Vertical",
      type: "vertical"
    }
  ];
  const persons = [
    {
      id: 1,
      text: "Lorem ipsum",
      imgSrc: "/images/person.jpg",
      moveable: false
    },
    {
      id: 2,
      text: "Lorem ipsum",
      imgSrc: "/images/person.jpg",
      moveable: true
    }
  ];
  return (
    <>
      <Section container={false}>
        <div id="special">
          <i className="fas fa-egg"></i>
        </div>
      </Section>

      <Section theme="dark">
        <HeroTwoLines upperText="Upper text" bottomText="Bottom text" />
      </Section>

      <Section theme="light">
        <CrossSection
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud"
        />
      </Section>

      <Section theme="dark">
        <CalendarsLike calendars={calendars} />
      </Section>

      <Section theme="dark">
        <CrossSectionShape
          title="Lorem ipsum"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        />
      </Section>

      <Section theme="light">
        <Persons persons={persons} />
      </Section>

      <Footer />
    </>
  );
};

export default Home;
