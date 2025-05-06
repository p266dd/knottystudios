"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { motion, AnimatePresence } from "motion/react";
import { FaInstagram, FaBars, FaX } from "react-icons/fa6";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const path = usePathname();

  const t = useTranslations("Navigation");

  const menuList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut" },
    },
  };

  const menuItems = [
    {
      title: t("services"),
      link: "/services",
    },
    {
      title: t("clients"),
      link: "/clients",
    },
    {
      title: t("about"),
      link: "/about",
    },
    {
      title: t("contact"),
      link: "/contact",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setMenuOpen}
      isBlurred={false}
      isBordered={true}
      disableAnimation={true}
      maxWidth="full"
      classNames={{
        base: "px-10 py-5 text-white bg-black border-gray-900",
        menu: "bg-black text-white flex items-center justify-center overflow-hidden",
        menuItem: "p-4 data-active:text-green-700 hover:pl-6 transition-all",
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <span className="font-black text-4xl">K.</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          icon={
            menuOpen ? (
              <FaX className="text-2xl" />
            ) : (
              <FaBars className="text-3xl" />
            )
          }
        />
      </NavbarContent>
      <AnimatePresence>
        <NavbarMenu>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-full"
          >
            <div className="w-full flex gap-4">
              <motion.div
                variants={menuList}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center w-full sm:w-4/12"
              >
                {menuItems.map((item, i) => (
                  <motion.div key={`menuItem-${i}`} variants={menuItem}>
                    <NavbarMenuItem isActive={path === item.link}>
                      <Link
                        className="w-full text-2xl font-light"
                        href={item.link}
                      >
                        {" "}
                        {item.title}
                      </Link>
                    </NavbarMenuItem>
                  </motion.div>
                ))}
                <motion.div variants={menuItem}>
                  <NavbarMenuItem>
                    <a
                      href="https://www.instagram.com/knotty.japan/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </NavbarMenuItem>
                </motion.div>
              </motion.div>
              <div className="hidden sm:block sm:w-8/12">
                Large Screens Only
              </div>
            </div>
          </motion.div>
        </NavbarMenu>
      </AnimatePresence>
    </Navbar>
  );
}
