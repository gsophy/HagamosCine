import React from "react";
import './Container.css';

export const Container = ({ fluid, children }) => (
    <div className="principalContainer">
      {fluid}{children}
    </div>
  );




export default Container;