import React from "react";

export const Kconvertor = (num) => {
  if (num >= 1000) {
    return (num / 100).toFixed(1) + "k ";
  } else {
    return num;
  }
};
