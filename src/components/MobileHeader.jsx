import { useState, useRef, useContext } from "react";
// them custom hook
import useTheme from "../hooks/useTheme";
// close header input custom hook
import useCloseHeaderInput from "../hooks/useCloseHeaderInput";
// sidebar componet
import Sidebar from "./Sidebar";
// all icons
import allIcons from "../data/icons";
// // import swiper for sliders
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
// import Link Componet Form React-router-dom
import { Link } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";

function MobileHeader({ hideBlur, showBlur }) {
  // states for sidebars
  const [showUserSidebar, setShowUserSidebar] = useState(false);
  const [showBasketSidebar, setShowBasketSidebar] = useState(false);
  const [showBergerSidebar, setShowBergerSidebar] = useState(false);

  // use theme custom hook
  const [theme, changeTheme] = useTheme();

  //   dropdownref
  const dropdownRef = useRef(null);

  // use show header input dropdown custom hook
  const [showHeaderInputDropdown, setShowHeaderInputDropdown] =
    useCloseHeaderInput(dropdownRef, hideBlur);

  // basket array and there function for change
  const { basket, setBasket } = useContext(BasketContext);

  // array of some shoe brand
  const shoeNameArray = [
    { name: "Nike", id: 1 },
    { name: "Puma", id: 2 },
    { name: "Addidas", id: 3 },
    { name: "Tantak", id: 4 },
    { name: "Armond", id: 5 },
  ];

  // function for sum the count of product
  const plusCountHanler = (basketObj) => {
    const copyBasket = [...basket];
    basketObj.count += 1;
    setBasket(copyBasket);
  };

  // function for mines the count of product
  const minesCountHanler = (basketObj) => {
    const copyBasket = [...basket];
    basketObj.count -= 1;

    if (basketObj.count === 0) {
      const filterBasket = copyBasket.filter((item) => item.count !== 0);
      setBasket(() => [...filterBasket]);
      return;
    }
    setBasket(copyBasket);
  };

  // function for calc all price of basket
  const calcAllPrice = () => {
    let sum = 0;
    basket.forEach((item) => {
      sum += item.price * item.count;
    });
    return sum;
  };

  // remove product form basket by click on close button
  const removeProductFromBasket = (productObj) => {
    const copyBasket = [...basket];
    const filterBasket = copyBasket.filter(
      (item) => item.textProductId !== productObj.textProductId
    );
    setBasket(() => [...filterBasket]);
  };

  return (
    <>
      {/* HEADER-MOBILE */}
      <div className="header-mobile lg:hidden">
        <div className="flex-align-center flex-wrap gap-4">
          {/* HEADER-ICONS */}
          <div className="header-icons flex-align-center gap-x-2 sm:gap-x-3">
            {/* DARK/LIGHT-MODE-ICON */}
            {theme === "light" ? (
              <div onClick={changeTheme}>{allIcons.moon}</div>
            ) : (
              <div onClick={changeTheme}>{allIcons.sunny}</div>
            )}
            {/* USER-ICON-BOX */}
            <div className="user-box relative">
              {/* USER-ICON */}
              <div
                onClick={() => setShowUserSidebar(true)}
                className="user-icon"
              >
                {allIcons.user}
              </div>

              {/* USER-SIDEBAR */}
              <Sidebar
                isShow={showUserSidebar}
                onHide={setShowUserSidebar}
                sidebarTitle={"Account"}
                sidebarSide={"left"}
              >
                <ul className="space-y-4">
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    <img
                      src="/images/user.png"
                      className="w-10 h-10"
                      alt="user-image"
                    />
                    <span className="ml-2">Alireza Delf</span>
                    {allIcons.arrowForward}
                  </li>
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.bag}
                    <span className="ml-2">Order</span>
                    <span className="account-badge ml-auto bg-primary text-white rounded-full w-5 h-5 grid-center text-xs font-bold relative">
                      2
                    </span>
                  </li>
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.heart}
                    <span className="ml-2">Favorites</span>
                  </li>
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.notifications}
                    <span className="ml-2">Messages</span>
                    <span className="account-badge ml-auto bg-primary text-white rounded-full w-5 h-5 grid-center text-xs font-bold relative">
                      5
                    </span>
                  </li>
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-red-500 hover:bg-red-500/10 rounded-lg">
                    {allIcons.exit}
                    <span className="ml-2">Exit</span>
                  </li>
                </ul>
              </Sidebar>
            </div>

            {/* BASKET-ICON-BOX */}
            <div className="basket-box relative">
              {/* BASKET-ICON-BADGE-WRAPPPER */}
              <div
                className="relative"
                onClick={() => setShowBasketSidebar(true)}
              >
                {/* BASKET-ICON */}
                {allIcons.shoppingCard}

                {/* BASKET-BADGE */}
                <span className="absolute cursor-pointer -top-3 -right-4 sm:-top-4 sm:-right-5 inline-block bg-primary rounded-full text-white grid-center text-xs w-5 h-5 sm:w-6 sm:h-6 font-bold">
                  {basket.length ? basket.length : 0}
                </span>
              </div>

              {/* BASKET-SIDEBAR */}
              <Sidebar
                isShow={showBasketSidebar}
                onHide={setShowBasketSidebar}
                sidebarTitle={"Shopping Cart"}
                sidebarSide={"left"}
              >
                {/* PRODUCT-ITEM-BOX */}
                <ul className="h-[77vh] overflow-y-auto">
                  {basket.map((basketItem, index) => (
                    <li
                      key={index}
                      className="flex py-3 gap-x-2.5 border-b border-b-gray-100 dark:border-b-white/5"
                    >
                      {/* PRODUCT-IMAGE */}
                      <div className="relative py-4">
                        <img
                          src={basketItem.img}
                          className="w-[100px] h-auto -scale-x-100"
                          alt="card-img"
                        />
                        <div
                          onClick={() => removeProductFromBasket(basketItem)}
                          className="absolute w-8 h-8 cursor-pointer grid-center -top-2 rounded-full bg-gray-100 dark:bg-black"
                        >
                          <div className="product-close-icon">
                            {allIcons.close}
                          </div>
                        </div>
                      </div>
                      {/* PRODUCT-CONTENT */}
                      <div className="flex flex-col gap-4">
                        {/* PRODUCT-NAME */}
                        <p className="text-zinc-700 dark:text-white text-xs sm:text-sm">
                          {basketItem.name}
                        </p>

                        {/* PRODUCT-COLOR */}
                        <div className="flex-align-center text-zinc-500 dark:text-gray-300 text-xs gap-x-2">
                          <span>Size : {basketItem.size}</span>
                          <div className="rounded-full bg-gray-200 w-px h-3"></div>
                          <div className="flex-align-center gap-x-2">
                            <div
                              className={`w-4 h-4 rounded-full shadow ${
                                basketItem.color === "black"
                                  ? "bg-black"
                                  : basketItem.color === "gray"
                                  ? "bg-[#808080]"
                                  : "bg-white"
                              }`}
                            ></div>
                            <span className="color">{basketItem.color}</span>
                          </div>
                        </div>

                        {/* PRODUCT-COUNT-PRICE */}
                        <div className="flex-align-center">
                          <span className="text-primary mr-3">
                            ${basketItem.price * basketItem.count}
                          </span>
                          <div className="flex-align-center rounded-lg border border-gray-100 dark:border-white/5 px-2 gap-x-5">
                            <span
                              onClick={() => plusCountHanler(basketItem)}
                              className="cursor-pointer text-green-500 text-[20px] select-none"
                            >
                              +
                            </span>
                            <span className="text-lg dark:text-white select-none">
                              {basketItem.count}
                            </span>
                            <span
                              onClick={() => minesCountHanler(basketItem)}
                              className="cursor-pointer text-red-600 text-[20px] select-none"
                            >
                              -
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* BASKET-FOOTER */}
                <div className="py-2 flex-center-between">
                  {/* BASKET-FOOTER-BUTTON */}
                  <button className="w-32 py-3 bg-primary text-white text-sm rounded-lg hover:bg-emerald-600">
                    See Shoing Cart
                  </button>

                  {/* BASKET-FOOTER-PRICE */}
                  <div className="flex flex-col">
                    <span className="text-sm capitalize text-zinc-500 dark:text-zinc-400">
                      amount payable
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-300">
                      {calcAllPrice()}$
                    </span>
                  </div>
                </div>
              </Sidebar>
            </div>
          </div>

          {/* HEADER-IMAGE */}
          <div className="header-image mx-auto">
            <Link to={"/"}>
              <img
                src="/images/logo.svg"
                alt="header-logo"
                className="w-full h-7 object-cover sm:h-10"
              />
            </Link>
          </div>

          {/* BERGER-BOX */}
          <div className="header-berger-box lg:hidden">
            {/* BERGER-ICON */}
            <div
              className="berger-icon"
              onClick={() => setShowBergerSidebar(true)}
            >
              {allIcons.hamburgerMenu}
            </div>

            {/* BERGER-SIDEBAR */}
            <Sidebar
              onHide={setShowBergerSidebar}
              isShow={showBergerSidebar}
              sidebarSide={"right"}
              imgSrc={"/images/logo.svg"}
            >
              <ul className="space-y-4">
                <Link to={"/"}>
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.homeLine}
                    <span className="ml-2">Home</span>
                  </li>
                </Link>
                <Link className="inline-block" to={"/products"}>
                  <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.Fire}
                    <span className="ml-2">All Products</span>
                  </li>
                </Link>
                <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                  {allIcons.menuSearchLine}
                  <span className="ml-2">Why Rotikala ?</span>
                </li>
                <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                  {allIcons.devices}
                  <span className="ml-2">Purchase Guide</span>
                </li>
                <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                  {allIcons.shop}
                  <span className="ml-2">About Us</span>
                </li>
                <li className="py-3 px-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                  {allIcons.phoneInTalk}
                  <span className="ml-2">Call Us</span>
                </li>
              </ul>
            </Sidebar>
          </div>

          {/* HEADER-INPUT-BOX */}
          <div
            className={`relative w-full flex-align-center px-2 rounded-lg border-gray-200 border-b-transparent dark:border-white/10 dark:border-b-transparent lg:max-w-[36rem] ${
              showHeaderInputDropdown
                ? "bg-white dark:bg-zinc-900 border rounded-b-none"
                : "bg-gray-100 dark:bg-mainDark"
            }`}
          >
            {/* HEADER-INPUT-ICON */}
            {allIcons.search}

            {/* HEADER-INPUT */}
            <input
              onFocus={() => {
                setShowHeaderInputDropdown(true);
                showBlur();
                document.body.style.overflow = "hidden";
              }}
              type="text"
              className="w-full outline-none px-2 py-3 bg-transparent text-zinc-700 placeholder:text-sm placeholder:text-zinc-500 placeholder:dark:text-zinc-400 dark:text-white"
              placeholder="Search..."
            />

            {/* HEADER-INPUT-DROPDOWN */}
            <div
              ref={dropdownRef}
              className={`absolute z-20 w-full inset-x-0 top-full overflow-hidden rounded-b-lg border border-gray-200 bg-white border-t-transparent dark:border-t-transparent dark:bg-zinc-900 dark:border-white/10 ${
                showHeaderInputDropdown ? "block" : "hidden"
              }`}
            >
              <div className="overflow-y-auto p-5 max-h-[450px]">
                {/* LAST-SEARCH-BOX */}
                <div className="last-search mb-4">
                  {/* LAST-SEARCH-HEADER */}
                  <div className="flex-align-center text-zinc-600 py-2.5 gap-x-3 dark:text-zinc-300">
                    {allIcons.clock}
                    <span className="text-sm sm:text-base">Lastes Search</span>
                  </div>
                  {/* LAST-SEARCH-BODY */}
                  <div>
                    <Swiper
                      modules={[FreeMode]}
                      freeMode={true}
                      spaceBetween={10}
                      slidesPerView={2}
                      scrollbar={{ draggable: true }}
                    >
                      {shoeNameArray.map((shoe) => (
                        <SwiperSlide
                          className="flex-center-center p-2 rounded-full gap-x-2 cursor-pointer text-zinc-500 border border-gray-100 hover:border-gray-200 dark:border-white/5 dark:hover:border-white/10 dark:text-zinc-400"
                          key={shoe.id}
                        >
                          <span className="text-sm sm:text-base">
                            {shoe.name}
                          </span>
                          {allIcons.arrowForwardSwiper}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* MOST-POPULAR-BOX */}
                <div className="most-popular">
                  {/* MOST-POPULAR-HEADER */}
                  <div className="flex-align-center text-zinc-600 py-2.5 gap-x-3 dark:text-zinc-300">
                    {allIcons.Fire}
                    <span className="text-sm sm:text-base">Most Popular</span>
                  </div>

                  {/* MOST-POPULAR-BODY */}
                  <div className="most-popular-body">
                    <Swiper
                      modules={[FreeMode]}
                      freeMode={true}
                      spaceBetween={10}
                      slidesPerView={2}
                      scrollbar={{ draggable: true }}
                    >
                      {shoeNameArray.reverse().map((shoe) => (
                        <SwiperSlide
                          className="flex-center-center p-2 rounded-full gap-x-2 cursor-pointer text-zinc-500 border border-gray-100 hover:border-gray-200 dark:border-white/5 dark:hover:border-white/10 dark:text-zinc-400"
                          key={shoe.id}
                        >
                          <span className="text-sm sm:text-base">
                            {shoe.name}
                          </span>
                          {allIcons.arrowForwardSwiper}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
