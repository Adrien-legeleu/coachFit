"use client";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconAlertCircleFilled,
  IconMenu2,
  IconSquareRoundedPlus,
  IconSwitchHorizontal,
  IconX,
} from "@tabler/icons-react";
import { useUserSettingContext } from "@/context/userSettingContext";
import { useCoachSettingContext } from "@/context/coachSettingContext";
import { Button } from "@/components/ui/button";
import Loading from "@/app/components/Others/Loading";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden rounded-r-3xl rounded-l-lg md:flex md:flex-col bg-white dark:bg-neutral-800  border-r-[1px] border-neutral-100 dark:border-neutral-800 w-[300px] flex-shrink-0",
          className
        )}
        animate={{
          width: animate ? (open ? "300px" : "60px") : "300px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between  bg-neutral-[175%]   dark:bg-neutral-900 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <IconMenu2
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center justify-start gap-2  group/sidebar py-2",
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

export const SideBarHandleForClient = () => {
  const { user } = useUserSettingContext();
  const { coach } = useCoachSettingContext();
  const { open, animate } = useSidebar();
  return (
    <div className=" flex items-center justify-center">
      {user ? (
        coach?.isQuiz ? (
          <Link
            href="/coach/dashboard"
            className="flex items-center justify-start gap-2  group/sidebar py-2"
          >
            <motion.div
              animate={{
                display: animate
                  ? open
                    ? "none"
                    : "inline-block"
                  : "inline-block",
                opacity: animate ? (open ? 0 : 1) : 1,
              }}
            >
              <IconSwitchHorizontal className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            </motion.div>
            <motion.div
              animate={{
                display: animate
                  ? open
                    ? "inline-block"
                    : "none"
                  : "inline-block",
                opacity: animate ? (open ? 1 : 0) : 1,
              }}
              className=" text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
            >
              <Button>
                <IconSwitchHorizontal className="text-neutral-200 h-5 w-5 flex-shrink-0" />
                Aller sur votre compte Coach{" "}
              </Button>
            </motion.div>
          </Link>
        ) : (
          <Link
            href="/coach/information"
            className="flex items-center justify-start gap-2  group/sidebar py-2"
          >
            <motion.div
              animate={{
                display: animate
                  ? open
                    ? "none"
                    : "inline-block"
                  : "inline-block",
                opacity: animate ? (open ? 0 : 1) : 1,
              }}
            >
              <IconSquareRoundedPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            </motion.div>
            <motion.div
              animate={{
                display: animate
                  ? open
                    ? "inline-block"
                    : "none"
                  : "inline-block",
                opacity: animate ? (open ? 1 : 0) : 1,
              }}
              className=" text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
            >
              <Button>
                <IconSquareRoundedPlus className="text-neutral-200 h-5 w-5 flex-shrink-0" />
                Devenir Coach{" "}
              </Button>
            </motion.div>
          </Link>
        )
      ) : (
        <div className="flex items-center justify-start gap-2  group/sidebar py-2">
          <Loading />
        </div>
      )}
    </div>
  );
};
