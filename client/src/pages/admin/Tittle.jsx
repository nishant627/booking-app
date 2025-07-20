import React from "react";

const Tittle = ({ text1, text2 }) => {
  return (
    <h1 className="font-medium text-2xl">
      {text1}
      <spam className="underline text-primary">{text2}</spam>
    </h1>
  );
};

export default Tittle;
