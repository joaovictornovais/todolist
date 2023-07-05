import React from "react";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

const Home = ({ tasks, handleTaskAddition, handleTaskDeletion, handleTaskClick }) => {
  return (
    <>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
      />
    </>
  );
};

export default Home;
