"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Message, User } from "tabler-icons-react";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Our Courses",
      link: "/courses",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Message className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems}
        />
    </div>
  );
}

export default Navbar;
