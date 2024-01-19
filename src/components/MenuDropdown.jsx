import { useState } from "react";
import allIcons from "../data/icons";

function MenuDropdown() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="menu-dropdown hidden absolute bottom-0.5">
      <div className="menu-dropdown-box fixed flex w-4/5 z-20 rounded-b-lg shadow-xl xl:w-3/5">
        {/* MENU-DROPDOWN-LEFT-SIDE */}
        <div className="menu-dropdown-left flex-[2] bg-gray-100 dark:bg-mainDark">
          <ul className="space-y-2">
            <li
              onMouseEnter={() => setTabIndex(1)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 1 && "active"
              }`}
            >
              for men
            </li>
            <li
              onMouseEnter={() => setTabIndex(2)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 2 && "active"
              }`}
            >
              for woman
            </li>
            <li
              onMouseEnter={() => setTabIndex(3)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 3 && "active"
              }`}
            >
              childish
            </li>
            <li
              onMouseEnter={() => setTabIndex(4)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 4 && "active"
              }`}
            >
              watch
            </li>
            <li
              onMouseEnter={() => setTabIndex(5)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 5 && "active"
              }`}
            >
              bag
            </li>
            <li
              onMouseEnter={() => setTabIndex(6)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 6 && "active"
              }`}
            >
              Beauty
            </li>
            <li
              onMouseEnter={() => setTabIndex(7)}
              className={`menu-dropdown-item capitalize py-3 px-4 cursor-pointer text-zinc-700 dark:text-white ${
                tabIndex === 7 && "active"
              }`}
            >
              Perfume and cologne
            </li>
          </ul>
        </div>

        {/* MENU-DROPDOWN-right-SIDE */}
        <div className="menu-dropdown-right flex-[5] bg-white dark:bg-zinc-900">
          <div className="flex-align-center gap-x-1 px-4 py-3">
            <h6 className="text-primary text-sm">See All</h6>
            {allIcons.arrowForwardTab}
          </div>
          <div className="w-full py-3 px-4">
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 1 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Menswear
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Pants
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    under wear
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Shirt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    vest
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    shorts
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    socks
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  men's shoes
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Sports shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    walking shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sport shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Formal shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sandal
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  accessory
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    glass
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hat
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Belt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Umbrella
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Croatia
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 2 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  woman swear
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Pants
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    under wear
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Shirt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    vest
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    shorts
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    socks
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  woman's shoes
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Sports shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    walking shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sport shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Formal shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sandal
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  accessory
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    glass
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hat
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Belt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Umbrella
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Croatia
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 3 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Boys clothes
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Pants
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    under wear
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Shirt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    vest
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    shorts
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    socks
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  boys's shoes
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Sports shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    walking shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sport shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Formal shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sandal
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  boy accessory
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    glass
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hat
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Belt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Umbrella
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Croatia
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Girl clothes
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Pants
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    under wear
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Shirt
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    vest
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    shorts
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    socks
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Girl's shoes
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Sports shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    walking shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sport shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Formal shoes
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    sandal
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 4 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  men's watch
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  woman's watch
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Boy's watch
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  girls watch
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury watch
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 5 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  men's bag
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  woman's bag
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Boy's bag
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  girls bag
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Rolex bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Luxury bag
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Assembly clock
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 6 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  make up
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Face Makeup
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Lip Makeup
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Cosmetic
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Eye makeup
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    nail care
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Skin
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    skin care
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Skin moisturizer
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[30%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Hair
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hair hygiene
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hair care
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hair Styler
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    hair shampoo
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`overflow-auto flex-wrap h-[320px] gap-4 ${
                tabIndex === 7 ? "flex" : "hidden"
              } `}
            >
              <div className="flex flex-col gap-3 basis-[40%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  Men's perfume
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Men's pocket perfume
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    Men's gift set
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 basis-[40%]">
                <h3 className="px-3 border-l-2 border-primary text-base text-zinc-700 dark:text-white">
                  woman's perfume
                </h3>
                <ul className="flex flex-col">
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    woman's pocket perfume
                  </li>
                  <li className="p-[10px] pl-0 text-sm text-zinc-600 dark:text-zinc-300 hover:text-primary cursor-pointer">
                    woman's gift set
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MenuDropdown;
