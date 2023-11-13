import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full" id="about">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>get to Know me</p>
        <h2 className={styles.sectionHeadText}>Insight.</h2>
      </div>

      <p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hey, I'm a budding web developer exploring the realms of front-end and
        back-end development. My educational background includes a Bachelor's in
        Business Administration, providing a well-rounded perspective. Within my
        portfolio, you'll discover my projects that reflect my journey in web
        development, showcasing a blend of technical skills and a strategic
        understanding of business principles and im learning and exploring the fusion of
        code and commerce
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
