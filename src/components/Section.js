import React from "react";

const Section = ({ children, color }) => {
  return (
    <section className={`w-full ${color}`}>
      <div className="max-w-[85rem] mx-auto">{children}</div>
    </section>
  );
};

export default Section;