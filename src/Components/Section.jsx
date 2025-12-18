import React, { Children } from "react";

const Section = ({ children, className }) => {
  return (
    <section className={`max-w-7xl mx-auto ${className}`}>{children}</section>
  );
};

export default Section;
