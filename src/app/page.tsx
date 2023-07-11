"use client"

import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import Tasks from "@/components/Tasks";
import { uuid } from 'uuidv4';
import { useState } from "react";

export interface TaskInterface {
  id: string;
  title: string;
  isCompleted: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    { 
      id: uuid(), 
      title: 'Estudar programação', 
      isCompleted: true
    },
    {
      id: uuid(),
      title: 'Ler livros',
      isCompleted: false
    }
  ])

  const handleTaskAddition = (taskName:string) => {
    const newTasks:TaskInterface[] = [ ... tasks, {
      id: uuid(),
      title: taskName,
      isCompleted: false
    }]
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId:string) => {

    const newTasks:TaskInterface[] = tasks.filter((task) => {
      if (task.id !== taskId) return task
    })
    setTasks(newTasks)
  }

  const handleTaskStatus = (taskId:string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, isCompleted: !task.isCompleted}
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className='max-w-[500px] min-h-[300px] border-2 border-blue-600 rounded-md mx-auto mt-6 p-6 flex flex-col gap-4'>
      <Header>To-do List</Header>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} handleTaskDeletion={handleTaskDeletion} handleTaskStatus={handleTaskStatus}/>
    </div>
  )
}
