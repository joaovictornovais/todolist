import React from "react";
import "./Task.css";
import { AiOutlineInfoCircle, AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navigate = useNavigate()
  
  const HandleTaskDetailsClick = () => {
    navigate(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>{task.title}</div>
      <div className='buttons-container'>
        <button onClick={HandleTaskDetailsClick}>
          <AiOutlineInfoCircle size={17} />
        </button>
        <button onClick={() => handleTaskDeletion(task.id)}>
          <AiOutlineClose size={17} />
        </button>
      </div>
    </div>
  );
};

export default Task;
