import React, { FunctionComponent } from "react";
import { TaskInterface } from "@/app/page";
import { AiOutlineClose } from "react-icons/ai";

interface TaskProps {
  task: TaskInterface;
  handleTaskDeletion: (taskId: string) => void;
  handleTaskStatus: (taskId: string) => void;
}

const Task: FunctionComponent<TaskProps> = ({
  task,
  handleTaskDeletion,
  handleTaskStatus,
}) => {
  return (
    <div
      className={
        task.isCompleted
          ? "bg-neutral-800 rounded-sm px-3 py-2 flex justify-between border-l-8 border-blue-600 transition-all duration-200"
          : "bg-neutral-800 rounded-sm px-3 py-2 flex justify-between border-l-0 border-blue-600 transition-all duration-200"
      }
    >
      <p onClick={() => handleTaskStatus(task.id)} className="flex flex-1">
        {task.title}
      </p>
      <div className='flex gap-1 items-center text-blue-600'>
        <button
          onClick={() => handleTaskDeletion(task.id)}
        >
          <AiOutlineClose size={21} />
        </button>
      </div>
    </div>
  );
};

export default Task;
