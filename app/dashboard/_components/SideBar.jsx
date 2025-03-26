"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { HiOutlineHome, HiOutlineSquare3Stack3D, HiMiniDevicePhoneMobile, HiOutlineEye } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress";
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

function SideBar() {

    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext);
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiOutlineHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineSquare3Stack3D />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Vision',
            icon: <HiOutlineEye />,
            path: '/dashboard/vision'
        },
        {
            id: 4,
            name: 'Contact',
            icon: <HiMiniDevicePhoneMobile />,
            path: '/dashboard/contact'
        }
    ];

    const path = usePathname(); // Get the current path

    return (
        <div className='fixed h-full md:w-64 p-5 shadow-md'>
            <Image src={'/logo.png'} width={160} height={100} alt="Logo" />
            <hr className='my-5' />

            <ul>
                {Menu.map((item) => (
                    <Link key={item.id} href={item.path}> {/* Added key prop here */}
                        <div
                            className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 mb-2 hover:text-black rounded-lg 
                            ${path === item.path ? 'bg-gray-100 text-black' : ''}`} /* Highlight active route */
                        >
                            <div className='text-2xl'>{item.icon}</div>
                            <div>{item.name}</div>
                        </div>
                    </Link>
                ))}
            </ul>
            <div className='absolute bottom-10 w-[80%]'>
                <Progress value={(userCourseList?.length/5)*100} />
                <h2 className='text-sm my-2'>{userCourseList?.length} out of 5 Course created</h2>
                <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited course generation</h2>
            </div>
        </div>
    )
}

export default SideBar;
