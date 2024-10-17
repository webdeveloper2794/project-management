import React from 'react'
import TaskHeader from './Components/TaskHeader'
import TaskSubHeader from './Components/TaskSubHeader'
import TaskList from './Components/TaskList'

const AllTasks = () => {
  return (
    <div className='bg-slate-50 w-full p-10'>
        <TaskHeader/>
        <TaskSubHeader/>
        <TaskList/>
    </div>
  )
}

export default AllTasks