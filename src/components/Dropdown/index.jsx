import React from "react";

const Dropdown = ({ icon, children }) => (
  <div className="dropdown">
    <i
      className={icon}
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    ></i>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {children}
    </div>
  </div>
);

export default Dropdown;
