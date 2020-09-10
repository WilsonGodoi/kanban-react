import "@fortawesome/fontawesome-free/js/all.js";
import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Kanban from "./Kanban";

// const state = [
//   {
//     type: "TODO",
//     tasks: [
//       { id: "1", title: "Wilson" },
//       { id: "2", title: "Daniela" },
//     ],
//   },
//   {
//     type: "DOING",
//     tasks: [
//       { id: "3", title: "Pedro" },
//       { id: "4", title: "Leonel" },
//     ],
//   },
// ];

const App = () => {
  const [columns, setColumns] = useState(
    JSON.parse(localStorage.getItem("kanbanData")) || []
  );
  return (
    <>
      <Header columns={columns} setColumns={atualizaBD} />
      <Kanban columns={columns} setColumns={atualizaBD} />
    </>
  );

  function atualizaBD(data) {
    setColumns(data);
    localStorage.setItem("kanbanData", JSON.stringify(data));
  }
};

export default App;
