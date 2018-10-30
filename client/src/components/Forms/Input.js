import React from "react";

export const Input = props => (
  <div className="form-group">
    <input className="form-control" {...props} style={{ width: 270, height: 40}} />
  </div>
);
