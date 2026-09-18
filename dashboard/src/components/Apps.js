import React from "react";

const Apps = () => {
  const handleExplore = () => {
    window.location.href = "http://localhost:3000/products";
  }
  return (
    <>
      <p>Explore our other products</p>
      <button type="button" className="logout-btn" onClick={handleExplore}>
        Explore more
      </button>
    </>
  );
};

export default Apps;
