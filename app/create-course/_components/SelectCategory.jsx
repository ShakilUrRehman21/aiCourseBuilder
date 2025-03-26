import { UserInputContext } from '@/app/_context/UserInputContext';
import CategoryList from '@/app/_shared/CategoryList';
import Image from 'next/image';
import React, { useContext } from 'react';

function SelectCategory() {
  const {UserCourseInput,setUserCourseInput}=useContext(UserInputContext)
  const handleCategoryChange=(category)=>{
      setUserCourseInput(prev=>({
        ...prev,
        category:category
      }))
  } 
  return (
    <div className='px-10 md:px-20'>
      
  <h2 className='my-5'>Select the Course Category</h2>
    <div className='grid grid-cols-3 gap-10 '>
      {CategoryList.map((item, index) => (
        <div key={index} className={`flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer ${UserCourseInput?.category==item.name&&'border-primary bg-blue-50'}`}
         onClick={()=>handleCategoryChange(item.name)}
        >
          <div className='relative w-[80px] h-[80px]'>
            <Image src={item.icon} alt={item.name} fill style={{ objectFit: 'contain' }}/>
          </div>
          <h2 className='mt-4 text-center'>{item.name}</h2>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SelectCategory;
