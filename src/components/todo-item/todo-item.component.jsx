import React from "react";

class TodoItem extends React.Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "red",
        }}
      >
        <h6>{title}</h6>
        <span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </span>
      </li>
    );
  }
}
export default TodoItem;
