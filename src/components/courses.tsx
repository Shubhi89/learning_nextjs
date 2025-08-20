import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music.json";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export default function Courses() {
  return (
    <div className="py-12 ">
      <div>
        <div className="text-center">
          <h2 className="text-3xl text-teal-400">FEATURED COURSES</h2>
          <p className="mt-5 text-xl text-slate-200">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
        
      </div>
      <div>
        <div className="mt-20 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white px-2 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-white/[0.2]"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
