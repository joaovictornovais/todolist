import React from 'react'
import { BiCircle, BiCheckCircle} from 'react-icons/bi'

const Card = () => {
  return (
    <main className="flex w-screen items-center justify-center h-screen">
      <div className="bg-[#ffffff] w-[450px] rounded-lg">
        <div className="flex items-center gap-2 justify-between mb-10 px-6 pt-6">
          <div className="flex gap-2">
            <h1 className="text-5xl">10</h1>
            <div>
              <p className="font-semibold">ABR</p>
              <p>2023</p>
            </div>
          </div>
          <p className="font-semibold">SEGUNDA-FEIRA</p>
        </div>
        <div className="flex flex-col gap-5 px-6">
          <div className="flex justify-between items-center">
            <p className="text-lg">Estudar Java</p>
            <BiCircle />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg">Praticar React</p>
            <BiCircle />
          </div>
        </div>
        <div className="flex mt-20 relative">
          <button className="bg-[#50e3a4] rounded-full w-20 h-20 font-bold text-[#2e9b6b]
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">+</button>
        </div>
      </div>
    </main>
  )
}

export default Card