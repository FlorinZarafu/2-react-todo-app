import React from "react";
import TodoItem from "../todo-item/todo-item.component";

class TodoList extends React.Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul
          style={{
            width: "500px",
            textAlign: "center",
            backgroundColor: "goldenrod",
          }}
        >
          <h3>Todo List</h3>
          {items.map((item) => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}

          <button
            style={{ display: "block", width: "100%" }}
            onClick={clearList}
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}
export default TodoList;
