"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { and } from 'drizzle-orm';
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'
import { Button } from '@/components/ui/button'
import { index } from 'drizzle-orm/pg-core'
import { GenerateChapterContent_AI } from '@/configs/AiModel'
import LoadingDialog from '../_components/LoadingDialog'
import service from '@/configs/service'
import { useRouter } from 'next/navigation'

function CourseLayout({params}) {
    const {user}=useUser();
    const [course,setCourse]=useState(null);
    const [loadig, setLoading]=useState(false);
    const router=useRouter();
    useEffect(()=>{
        params&&GetCourse();
    },[params,user])
const GetCourse = async () => {
    const result = await db.select().from(CourseList)
        .where(and(
            eq(CourseList.courseId, params?.courseId),
            eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress),
        ));

        if (result.length > 0) {
            setCourse(result[0]);
        } else {
            console.log("No course found for the provided criteria");
            setCourse(null); // Set to null if no course is found
        }
        console.log(result); // Log the result to see what is returned
};

const GenerateChapterContent =() => {
    setLoading(true);
    const chapters = course?.courseOutput?.chapters; // Adjusted the path to match the schema
    if (chapters && chapters.length > 0) {
        chapters.forEach(async(chapter, index) => {
            const PROMPT = `Explain the concept in detail on Topic: ${course?.courseOutput?.course_name}, Chapter: ${chapter?.chapter_name} in JSON format with list of array with fields as title, description in detail, and code example (Code field <precode> format) if applicable.`;
            console.log(PROMPT);
                try{
                    //Generate Video URL
                    let videoId='';
                    service.getVideos(course?.name+':'+chapter?.name).then(resp=>{
                        console.log(resp);
                        videoId=resp[0]?.id?.videoId
                    })

                    //Generate chapter content
                    const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
                    console.log(result?.response?.text());
                    const content=JSON.parse(result?.response?.text());
                    
                    //Save chapter content + Video Url
                    await db.insert(Chapters).values({
                        chapterId:index,
                        courseId:course?.courseId,
                        content:content,
                        videoId:videoId
                    })
                    setLoading(false)
                }catch(e){
                    setLoading(false)
                    console.log(e);
                }
                await db.update(CourseList).set({
                    publish:true
                })
                router.replace('/create-course/'+course?.courseId+"/finish")
            
        });
    }
};

    return (
        <div className='mt-10 px-7 md:px-20 lg:px-44'>
            <h2 className='font-bold text-center text-2xl'>Course Layout</h2>
            
            <LoadingDialog loading={loadig}/>
            {/* Basic Info */}
            <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>

            {/* Course Detail */}
            <CourseDetail course={course}/>
            {/* List of Lesson */}
            <ChapterList course={course}/>

            <Button onClick={GenerateChapterContent} className='my-10'>Generate Course Content</Button>
        </div>
    )
}

export default CourseLayout