import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <h4 className="mt-3">
      {todos.length >= 6 ? "All Done!" : `Done: ${todos.length}`}
    </h4>
  );
};

export default TotalCompleteItems;
