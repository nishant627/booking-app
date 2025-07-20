import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="animate-spin rounded-full h-18 w-18 border-4 border-t-transparent border-primary"></div>
    </div>
  );
};

export default Loading;
