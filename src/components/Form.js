import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 2rem;
  color: #f2f2f2;
  text-align: center;
  text-transform: uppercase;
`;
const TaskArea = styled.textarea``;
const Form = ({
  edition,
  editTask,
  addTask,
  task,
  title,
  setTask,
  setTitle,
}) => {
  return (
    <div className="col-12 m-auto col-md-7  col-lg-2 my-3">
      <Title>{edition === true ? "Edit Task" : "Add Task"}</Title>
      <form onSubmit={edition ? editTask : addTask}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control mb-2"
          type="text"
          placeholder="Title"
        />
        <TaskArea
          onChange={(e) => setTask(e.target.value)}
          value={task}
          className="form-control mb-2"
          type="text"
          placeholder="Notes"
        />

        {
          <button
            type="submit"
            className={
              edition === true
                ? "btn btn-warning btn-block"
                : "btn btn-dark btn-block"
            }
          >
            {edition === true ? "Edit" : "Add"}
          </button>
        }
      </form>
    </div>
  );
};

export default Form;
