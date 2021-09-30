import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
