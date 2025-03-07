"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

function NavBar() {
  const links = [
    {
      route: "/",
      name: "Home",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "About",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Forum",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Sponsors",
      badgeCount: 0,
    },
    {
      route: "/",
      name: "Contact Us",
      badgeCount: 0,
    },
  ];

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20 mt-[5rem] md:mt-0">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-4 items-center">
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map((item, index) => (
              <div key={index} className="flex gap-2">
                <Link href={item.route}>
                  <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                    {item.name}
                  </p>
                </Link>
                {item.badgeCount ? (
                  <div className="h-8 w-8 rounded-full bg-primary flex justify-center items-center font-semibold text-white">
                    {item.badgeCount}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[20px] select-none">
            <Link href="/registration-form">
              <MainButton text="Register for Event" width="contain" />
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
          menu ? "bg-primary py-2" : ""
        }`}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/menu.svg"
                alt="menu"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Link href={item.route}>
                    <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray">
                      {item.name}
                    </p>
                  </Link>
                  {item.badgeCount ? (
                    <div className="h-8 w-8 rounded-full bg-primary flex justify-center items-center font-semibold text-white">
                      {item.badgeCount}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-[20px] select-none">
                <Link href="/registration-form">
                  <MainButton text="Register for Event" width="contain" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
