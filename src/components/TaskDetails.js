import React from "react";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <>
      <Header>Detalhes da tarefa</Header>
      <div className="back-button-container" onClick={handleBackButton}>
          <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quia
          necessitatibus rem quos aliquam veritatis.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
