import React from 'react'
import { HiOutlineChartBar, HiOutlineClock, HiOutlineBookOpen, HiOutlinePlay } from "react-icons/hi";

function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            <div className='flex gap-3'>
                <HiOutlineChartBar className='text-4xl text-primary'/>
              <div>
                <h2 className='text-xs text-gray-500'>Skill level</h2>
                <h2 className='font-medium text-lg'>{course?.level}</h2>
              </div>
            </div>
            <div className='flex gap-3'>
                <HiOutlineClock className='text-4xl text-primary'/>
              <div>
                <h2 className='text-xs text-gray-500'>Duration</h2>
                <h2 className='font-medium text-lg'>{course?.courseOutput?.duration}</h2>
              </div>
            </div>
            <div className='flex gap-3'>
                <HiOutlineBookOpen className='text-4xl text-primary'/>
              <div>
                <h2 className='text-xs text-gray-500'>No Of Chapters</h2>
                <h2 className='font-medium text-lg'>{course?.courseOutput?.no_of_chapters}</h2>
              </div>
            </div>
            <div className='flex gap-3'>
                <HiOutlinePlay className='text-4xl text-primary'/>
              <div>
                <h2 className='text-xs text-gray-500'>Video Included?</h2>
                <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail