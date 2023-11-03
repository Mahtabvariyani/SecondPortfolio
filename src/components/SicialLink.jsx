import React from "react";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const SocialLink = ({ icon, link }) => {
  return (
    <div >
      {socialLinks.map((link, index) => (
        <Link key={index} to={link.url} >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLink;
