import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Estudar programação",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Ler livros",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );

      setTasks(data)
    };
    fetchTasks()
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => taskId !== task.id);
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header>Minhas tarefas</Header>
                <Home
                  tasks={tasks}
                  handleTaskAddition={handleTaskAddition}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
