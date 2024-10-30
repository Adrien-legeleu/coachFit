"use client";
import React, { useEffect, useState } from "react";

import Logo from "@/app/Logo.svg";

import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUser,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/aceternity/sideBar";

import { useCoachSettingContext } from "@/context/coachSettingContext";

export default function layout({ children }: { children: React.ReactNode }) {
  const { coach } = useCoachSettingContext();

  const links = [
    {
      label: "Dashboard",
      href: "/coach/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Setting",
      href: "/coach/dashboard",
      icon: (
        <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profil",
      href: "/coach/dashboard/profil",
      icon: (
        <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-950 w-full flex-1 max-w-[1500px] mx-auto  overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <LogoText /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: coach?.name ?? "",
                href: "/coach/dashboard/profil",
                icon: (
                  <Image
                    src={coach?.image ?? ""}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}

export const LogoText = () => {
  return (
    <Link href="/coach/dashboard">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="items-center justify-center text-3xl font-bold tracking-wide gap-2 "
      >
        <Image
          src={Logo}
          width={30}
          height={30}
          alt="logo de coachFit"
          className="h-10 w-10 object-cover"
        />
        CoachFit{" "}
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link href="/coach/dashboard" className=" z-20">
      <Image
        src={Logo}
        width={30}
        height={30}
        alt="logo de coachFit"
        className="h-10 w-10 object-cover"
      />
    </Link>
  );
};
