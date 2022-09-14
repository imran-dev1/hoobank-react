import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { menuItems } from "../constants";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   return (
      <nav className="flex items-center justify-between">
         <img src={logo} alt="logo" className="h-10 sm:h-12" />
         <ul className="text-white hidden sm:flex items-center justify-end">
            {menuItems.map((item, index) => (
               <li
                  key={item.id}
                  className={`${
                     index === menuItems.length - 1 ? "mr-0" : "mr-10"
                  }`}
               >
                  <a href={`#${item.id}`}>{item.name}</a>
               </li>
            ))}
         </ul>
         <div className="sm:hidden mobile-menu flex-col">
            <img
               src={!toggle ? menu : close}
               alt="menu_icon"
               className="w-7"
               onClick={() => setToggle((prev) => !prev)}
            />
            <div
               className={
                  toggle
                     ? "block bg-black-gradient absolute right-5 mt-5 p-5 rounded-lg w-36"
                     : "hidden"
               }
            >
               <ul>
                  {menuItems.map((item, index) => (
                     <li
                        key={item.id}
                        className={`${
                           index === menuItems.length - 1 ? "mb-0" : "mb-3"
                        }`}
                     >
                        <a href={`#${item.id}`}>{item.name}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
