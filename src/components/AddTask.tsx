import React, { ChangeEvent, FunctionComponent, useState } from "react";
import Button from "./Button";

interface AddTaskProps {
  handleTaskAddition: (taskName: string) => void;
}

const AddTask: FunctionComponent<AddTaskProps> = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState<string>("");
  const [isValidTry, setIsValidTry] = useState<boolean>(true);

  const handleInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleAddTask = () => {
    if (inputData.replace(/\s/g, '') !== "") {
      handleTaskAddition(inputData);
      setIsValidTry(true);
    } else { setIsValidTry(false) }
    setInputData("");
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <input
        value={inputData}
        onChange={handleInputData}
        className={isValidTry ? "col-span-2 bg-neutral-800 py-1.5 px-3 rounded-sm text-neutral-300 border-2 border-neutral-800" : "col-span-2 bg-neutral-800 py-1.5 px-3 rounded-sm text-neutral-300 border-2 border-red-700"}
        placeholder={isValidTry ? "Digite o título para a tarefa" : "Digite um título válido!"}
      />
      <Button onClick={() => handleAddTask()}>Adicionar</Button>
    </div>
  );
};

export default AddTask;
