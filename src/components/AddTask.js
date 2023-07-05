import React, { useState } from 'react'
import './AddTask.css'
import Button from './Button'

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleAddTaskClcik = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <div className='add-task-container'>
      <input onChange={handleInputChange}
        className='add-task-input' 
        type="text"
        value={inputData} 
      />
      <Button onClick={handleAddTaskClcik}>
        Adicionar
      </Button>
    </div>
  )
}

export default AddTask