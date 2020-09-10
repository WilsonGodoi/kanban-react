import React from "react";

const DropdownItem = ({ title, onClick }) => (
  <label class="dropdown-item" onClick={onClick}>
    {title}
  </label>
);

export default DropdownItem;
