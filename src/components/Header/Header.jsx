import React, { useState } from "react";

function Header({ columns, setColumns }) {
  const [newColumnName, setNewColumnName] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setNewColumnName(e.target.value.toUpperCase())} />
      <button onClick={() => createColumn(newColumnName)}>Create Column</button>
    </div>
  );

  function createColumn(columnName) {
    const columnAlreadyExist = columns.some(
      (column) => column.type.toUpperCase() === columnName.toUpperCase()
    );
    if (columnAlreadyExist) {
      return alert("Nome da Coluna já existente");
    }
    const column = { type: columnName, tasks: [] };
    setColumns([...columns, column]);
  }
}
export default Header;
