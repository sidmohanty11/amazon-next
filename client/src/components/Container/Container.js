import React from "react";

const Container = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
