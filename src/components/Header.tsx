import React, { FunctionComponent } from 'react'

interface HeaderProps {
  children: string
}

const Header:FunctionComponent<HeaderProps> = ({ children }) => {
  return (
    <header className='flex flex-col gap-1'>
      <h1 className='text-3xl font-bold'>{children}</h1>
      <p className='tracking-wider uppercase text-neutral-500 text-sm'>Tarefas a serem feitas</p>
    </header>
  )
}

export default Header