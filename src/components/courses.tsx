import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function Courses() {
  const featuredCourses = courseData.courses.filter((course : Course) => course.isFeatured);
  return (
    <div className="py-12 ">
      <div>
        <div className="text-center">
          <h2 className="text-3xl text-teal-400">FEATURED COURSES</h2>
          <p className="mt-5 text-xl text-slate-200">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course)=> {
                return (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text center flex-grow">
                                <p className="text-3xl">{course.title}</p>
                                <p className="mt-5">{course.description}</p>
                                <Link className="mt-5" href={`/courses/${course.slug}`}>
                                Learn More</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                )
            })}
        </div>
      </div>
      <div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-5 py-4 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
