import React from "react";
import "./styles.css";
class TodoInput extends React.Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add to do"
            value={item}
            onChange={handleChange}
          />
          <button type="submit" className={editItem ? "edit" : "add"}>
            {editItem ? "edit todo" : "add todo"}
          </button>
        </form>
      </div>
    );
  }
}
export default TodoInput;
