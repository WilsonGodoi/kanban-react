import React from "react";

const DropdownItem = ({ title, onClick }) => (
  <label className="dropdown-item" onClick={onClick}>
    {title}
  </label>
);

export default DropdownItem;
