import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CourseList } from '@/configs/schema';
import { db } from '@/configs/db';
import { eq } from 'drizzle-orm'; // Make sure to import eq for the where condition

function EditCourseBasicInfo({ course, refreshData }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        // Check if the course and courseOutput exist before setting state
        if (course && course.courseOutput) {
            setName(course.courseOutput.course_name);
            setDescription(course.courseOutput.description);
        }
    }, [course]);

    const onUpdateHandler = async () => {
        if (course && course.courseOutput) {
            course.courseOutput.course_name = name;
            course.courseOutput.description = description;

            const result = await db.update(CourseList)
                .set({
                    courseOutput: course?.courseOutput,
                })
                .where(eq(CourseList?.id, course?.id))
                .returning({ id: CourseList.id });

                refreshData(true);
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <HiMiniPencilSquare />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Course Title & Description</DialogTitle>
                    <DialogDescription>
                        <div>
                            <label className='mt-3'>Course Title</label>
                            <Input
                                value={name} // Use value instead of defaultValue
                                onChange={(event) => setName(event?.target.value)}
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <Textarea
                                className='h-40'
                                value={description} // Use value instead of defaultValue
                                onChange={(event) => setDescription(event?.target.value)}
                            />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button onClick={onUpdateHandler}>Update</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default EditCourseBasicInfo;
