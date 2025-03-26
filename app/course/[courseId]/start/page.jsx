"use client";
import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/schema";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState();

  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db
      .select()
      .from(Chapters)
      .where(and(eq(Chapters.chapterId, chapterId), eq(Chapters.courseId, course?.courseId)));
    setChapterContent(result[0]);
  };

  useEffect(() => {
    GetCourse();
  }, []);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, params?.courseId));
    setCourse(result[0]);
  };

  return (
    <div className="flex h-screen">
      <div className="md:w-64 hidden md:block h-full border-r shadow-sm overflow-y-auto">
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput?.course_name}
        </h2>
        <div>
          {course?.courseOutput?.chapters?.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-purple-50 ${
                selectedChapter?.chapter_name === chapter?.chapter_name && "bg-purple-100"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Content Div */}
      <div className="flex-1 overflow-y-auto">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
}

export default CourseStart;
