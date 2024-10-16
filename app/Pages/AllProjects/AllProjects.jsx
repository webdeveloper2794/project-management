import React from 'react'
import ProjectHeader from './Components/ProjectHeader'
import ProjectSUbHeader from './Components/ProjectSUbHeader'
import AllProjectSection from './Components/AllProjectSection'
import StatusRightSideBar from './Components/StatusRightSideBar'

const AllProjects = () => {
  return (
    <div className='bg-slate-50 w-full min-h-screen flex'>
        <AllProjectsArea/>
        <StatusRightSideBar/>
    </div>
  )
}

export default AllProjects

function AllProjectsArea() {
    return(
        <div className='w-[78%] p-10 flex flex-col gap-3 bordder'>
            {/* Search bar and add project button */}
            <ProjectHeader/>
            {/* My project title and add button */}
            <ProjectSUbHeader/>
            <AllProjectSection/>

        </div>
    )
}