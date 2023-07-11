import React, { FunctionComponent } from "react";
import { TaskInterface } from "@/app/page";
import Task from "./Task";

interface TasksProps {
  tasks: TaskInterface[];
  handleTaskDeletion: (taskId: string) => void;
  handleTaskStatus: (taskId: string) => void;
}

const Tasks: FunctionComponent<TasksProps> = ({
  tasks,
  handleTaskDeletion,
  handleTaskStatus,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskStatus={handleTaskStatus}
        />
      ))}
    </div>
  );
};

export default Tasks;
