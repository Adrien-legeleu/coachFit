"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/app/Logo.svg";
import { BicepsFlexed } from "lucide-react";
import {
  IconActivity,
  IconBooks,
  IconBrandTabler,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarBody,
  SideBarHandleForClient,
  SidebarLink,
} from "@/components/aceternity/sideBar";

import { useUserSettingContext } from "@/context/userSettingContext";
import { useCoachSettingContext } from "@/context/coachSettingContext";

export default function layout({ children }: { children: React.ReactNode }) {
  const { user } = useUserSettingContext();

  const links = [
    {
      label: "Accueil",
      href: "/client/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Mon Suivi",
      href: "#",
      icon: (
        <IconActivity className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Mes Programmes",
      href: "#",
      icon: (
        <BicepsFlexed className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Inspiration",
      href: "#",
      icon: (
        <IconBooks className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Mon Profile",
      href: "/client/dashboard/profil",
      icon: (
        <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Paramètre",
      href: "/client/dashboard",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 w-full flex-1 max-w-[1500px] mx-auto  overflow-hidden",
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
          <SideBarHandleForClient />
          <div>
            <SidebarLink
              link={{
                label: user?.name ?? "",
                href: "/client/dashboard/profil",
                icon: (
                  <Image
                    src={user?.image ?? ""}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Profil"
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
    <Link href="/client/dashboard">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="items-center  justify-start flex font-bold text-xl tracking-wide gap-2 "
      >
        <Image
          src={Logo}
          width={10}
          height={10}
          alt="logo de coachFit"
          className="h-6 w-6 object-cover"
        />
        CoachFit{" "}
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link href="/client/dashboard" className=" z-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={Logo}
          width={10}
          height={10}
          alt="logo de coachFit"
          className="h-6 w-6 object-cover"
        />
      </motion.div>
    </Link>
  );
};
