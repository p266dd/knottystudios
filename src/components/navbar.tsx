"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MenuIcon } from "@/components/icons/menu";
import { AsteriskIcon } from "@/components/icons/asterisk";

export default function Navbar() {
  const navigation = useTranslations("Navigation");
  const navbarRef = useRef(null);

  const mobileMenuContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.25,
      },
    },
  };

  const mobileMenuItem = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        window.scrollY > 50
          ? (navbarRef.current as HTMLElement).setAttribute(
              "style",
              "background: 'transparent'; backdrop-filter: blur(24px); border-bottom: 1px solid rgba(255, 255, 255, 0.15);"
            )
          : (navbarRef.current as HTMLElement).setAttribute("style", "");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b border-transparent"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-6 sm:px-12 sm:py-12">
        <div className="flex items-center gap-4">
          <span className="inline-block w-8 h-8 bg-white rounded-full sm:w-10 sm:h-10" />
          <h1 className="flex items-center gap-2 gap-y-0 text-3xl tracking-wider font-black uppercase sm:flex-col sm:items-start">
            Knotty{" "}
            <span className="hidden text-xl font-normal sm:inline-block">
              Studios
            </span>
          </h1>
        </div>
        <div className="hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/services"
                    className="text-lg uppercase tracking-wider"
                    passHref
                  >
                    {navigation("services")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/projects"
                    className="text-lg uppercase tracking-widest"
                    passHref
                  >
                    {navigation("projects")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="about"
                    className="text-lg uppercase tracking-wider"
                    passHref
                  >
                    {navigation("about")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/contact"
                    className="text-lg uppercase tracking-wider"
                    passHref
                  >
                    {navigation("contact")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <motion.span
                whileTap={{ scale: 0.95 }}
                className="block p-3 bg-white text-black rounded-full"
              >
                <MenuIcon />
              </motion.span>
            </SheetTrigger>
            <SheetContent
              side="right"
              onOpenAutoFocus={(e) => e.preventDefault()}
              className="bg-white/5 backdrop-blur-xl border-white/10 py-14 px-4"
            >
              <SheetHeader className="h-full">
                <div className="hidden">
                  <SheetTitle>{navigation("mobile.menuTitle")}</SheetTitle>
                  <SheetDescription>
                    {navigation("mobile.menuDescription")}
                  </SheetDescription>
                </div>
                <div className="h-full flex flex-col justify-center">
                  <motion.ul
                    variants={mobileMenuContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center gap-12 mb-12"
                  >
                    <motion.li variants={mobileMenuItem}>
                      <Link
                        href="/services"
                        className="text-2xl text-white/70 tracking-wide font-semibold"
                      >
                        {navigation("services")}
                      </Link>
                    </motion.li>
                    <motion.li variants={mobileMenuItem}>
                      <Link
                        href="/projects"
                        className="text-2xl text-white/70 tracking-wide font-semibold"
                      >
                        {navigation("projects")}
                      </Link>
                    </motion.li>
                    <motion.li variants={mobileMenuItem}>
                      <Link
                        href="/about"
                        className="text-2xl text-white/70 tracking-wide font-semibold"
                      >
                        {navigation("about")}
                      </Link>
                    </motion.li>
                    <motion.li variants={mobileMenuItem}>
                      <Link
                        href="/contact"
                        className="text-2xl text-white/70 tracking-wide font-semibold"
                      >
                        {navigation("contact")}
                      </Link>
                    </motion.li>
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.4, duration: 0.4 },
                    }}
                  >
                    <Card className="bg-transparent text-white/70 border-white/10">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-4 mb-4">
                          <AsteriskIcon />
                          {navigation("mobile.subscribe")}
                        </CardTitle>
                        <CardDescription>
                          {navigation("mobile.subscribeDescription")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form action="">
                          <div className="flex flex-col gap-2">
                            <Input
                              name="email"
                              type="email"
                              placeholder="Email"
                              className="border-white/30"
                              required={true}
                              autoComplete="email"
                            />
                            <Button tabIndex={-1} type="submit">
                              {navigation("mobile.subscribe")}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
