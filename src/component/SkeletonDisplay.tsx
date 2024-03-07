import React from "react";

const SkeletonDisplay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="animate-pulse rounded-full bg-blue-500 h-10 w-10"></div>
    </div>
  );
};

export default SkeletonDisplay;
