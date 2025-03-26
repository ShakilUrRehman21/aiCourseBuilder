import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useContext } from 'react';
import { HiOutlineDocumentText, HiOutlineInformationCircle } from 'react-icons/hi'; // Import icons

function TopicDescription() {
    const {UserCourseInput,setUserCourseInput}=useContext(UserInputContext)
    const handleInputChange=(fieldName,value)=>{
        setUserCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
    return (
        <div className='mx-20 lg:md-44'>
            {/* Input Topic */}
            <div className='mt-5'>
                <div className='flex items-center'> {/* Flex container for icon and label */}
                    <HiOutlineDocumentText className='text-gray-500 mr-2' /> {/* Icon for Topic */}
                    <label>Write the topic for which you want to generate a course (e.g., Python Course, Yoga, etc.)</label>
                </div>
                <Input placeholder={'Topic'} className='h-14 text-xl'
                    defaultValue={UserCourseInput?.topic}
                    onChange={(e)=>handleInputChange('topic',e.target.value)}
                />
            </div>
            <div className='mt-5'>
                <div className='flex items-center'> {/* Flex container for icon and label */}
                    <HiOutlineInformationCircle className='text-gray-500 mr-2' /> {/* Icon for Course Details */}
                    <label>Tell us more about your course, what you want to include in the course (Optional)</label>
                </div>
                <Textarea placeholder={'About your course'} className='h-24 text-xl'
                defaultValue={UserCourseInput?.description}
                onChange={(e)=>handleInputChange('description',e.target.value)}
                />
            </div>
        </div>
    );
}

export default TopicDescription;
