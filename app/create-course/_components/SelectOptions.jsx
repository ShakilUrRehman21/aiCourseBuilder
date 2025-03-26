import React, { useContext } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { HiOutlineAdjustments, HiOutlineClock, HiOutlineVideoCamera, HiOutlineBookOpen } from 'react-icons/hi'; // Import icons
import { UserInputContext } from '@/app/_context/UserInputContext';

function SelectOptions() {
    const {UserCourseInput,setUserCourseInput}=useContext(UserInputContext)
    const handleInputChange=(fieldName,value)=>{
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <div className='flex items-center'>
                        <HiOutlineAdjustments className='text-gray-500 mr-2' /> {/* Icon for Difficulty Level */}
                        <label className='text-sm'>Difficulty Level</label>
                    </div>
                    <Select onValueChange={(value)=>handleInputChange('level',value)}
                    defaultValue={UserCourseInput?.level}>
                        <SelectTrigger className="h-14 text-lg">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <div className='flex items-center'>
                        <HiOutlineClock className='text-gray-500 mr-2' /> {/* Icon for Course Duration */}
                        <label className='text-sm'>Course Duration</label>
                    </div>
                    <Select 
                    defaultValue={UserCourseInput?.duration}
                    onValueChange={(value)=>handleInputChange('duration',value)}>
                        <SelectTrigger className="h-14 tx-lg">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hours">1 Hour</SelectItem>
                            <SelectItem value="2 Hours">2 Hours</SelectItem>
                            <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <div className='flex items-center'>
                        <HiOutlineVideoCamera className='text-gray-500 mr-2' /> {/* Icon for Add Video */}
                        <label className='text-sm'>Add Video</label>
                    </div>
                    <Select 
                    defaultValue={UserCourseInput?.displayVideo}
                    onValueChange={(value)=>handleInputChange('displayVideo',value)}>
                        <SelectTrigger className="h-14 text-lg">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <div className='flex items-center'>
                        <HiOutlineBookOpen className='text-gray-500 mr-2' /> {/* Icon for Number of Chapters */}
                        <label className='text-sm'>No of Chapters</label>
                    </div>
                    <Input type="number" className='h-14 text-lg'
                        defaultValue={UserCourseInput?.noOfChapters}
                        onChange={(event)=>handleInputChange('noOfChapters',event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SelectOptions;
