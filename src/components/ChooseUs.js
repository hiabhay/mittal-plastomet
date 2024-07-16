import React from "react";
import Zero1 from "./Zero1";
import Zero2 from "./Zero2";
import Zero3 from "./Zero3";
import Zero4 from "./Zero4";
import Reason from "./Reason";

const ChooseUs = () => {
  return (
    <div>
      <Reason/>
      <div className="mt-12 sm:mr-2 sm:ml-2">
        <Zero1 />
        <Zero2 />
        <Zero3 />
        <Zero4 />
      </div>
    </div>
  );
};

export default ChooseUs;
