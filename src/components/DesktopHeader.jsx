import { useRef, useState, useContext } from "react";
// them custom hook
import useTheme from "../hooks/useTheme";
// close header input custom hook
import useCloseHeaderInput from "../hooks/useCloseHeaderInput";
// desktop menu drop down
import MenuDropdown from "./MenuDropdown";
// all icons
import allIcons from "../data/icons";
// // import swiper for sliders
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
// dropdown componet
import Dropdown from "./Dropdown";
// link componet form react-router-dom
import { Link } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";

function DesktopHeader({ hideBlur, showBlur }) {
  // states for dropdown
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showBasketDropdown, setShowBasketDropdown] = useState(false);
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
      {/* DESKTOP-HEADER */}
      <div className="desktop-header hidden lg:block">
        {/* DESKTOP-HEADER-TOP */}
        <div className="flex-center-between">
          {/* HEADER-ICONS */}
          <div className="header-icons flex-align-center gap-x-3">
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
                className="user-icon"
                onClick={() => setShowUserDropdown(true)}
              >
                {allIcons.user}
              </div>

              {/* USER-DROPDOWN */}
              <Dropdown
                showDropdown={showUserDropdown}
                setShowDropdown={setShowUserDropdown}
                dropdownType={"user"}
                padding={2}
              >
                <ul>
                  <li className="p-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    <img
                      src="/images/user.png"
                      className="w-10 h-10"
                      alt="user-image"
                    />
                    <span className="ml-2">Alireza Delf</span>
                    {allIcons.arrowForward}
                  </li>
                  <li className="p-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.bag}
                    <span className="ml-2">Order</span>
                  </li>
                  <li className="p-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.heart}
                    <span className="ml-2">Favorites</span>
                  </li>
                  <li className="p-4 flex-align-center cursor-pointer text-zinc-700 hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400">
                    {allIcons.notifications}
                    <span className="ml-2">Messages</span>
                  </li>
                  <li className="p-4 flex-align-center cursor-pointer text-red-500 hover:bg-red-500/10 rounded-lg">
                    {allIcons.exit}
                    <span className="ml-2">Exit</span>
                  </li>
                </ul>
              </Dropdown>
            </div>

            {/* BASKET-ICON-BOX */}
            <div className="basket-box relative">
              {/* BASKET-ICON-BADGE-WRAPPPER */}
              <div
                onClick={() => setShowBasketDropdown(true)}
                className="relative"
              >
                {/* BASKET-ICON */}
                {allIcons.shoppingCard}

                {/* BASKET-BADGE */}
                <span className="absolute cursor-pointer -top-4 -right-5 inline-block bg-primary rounded-full text-white grid-center text-xs w-6 h-6 font-bold">
                  {basket.length ? basket.length : 0}
                </span>
              </div>

              {/* BASKET-DROPDOWN */}
              <Dropdown
                showDropdown={showBasketDropdown}
                setShowDropdown={setShowBasketDropdown}
                padding={5}
                dropdownType={"basket"}
              >
                {/* BASKET-DROPDOWN-HEADER */}
                <div className="flex-center-between">
                  <div className="flex-align-center text-primary space-x-2">
                    <span>Shopping Card</span>
                    {allIcons.arrowForwardTab}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {basket.length} Item
                  </p>
                </div>

                {/* BASKET-DROPDOWN-HEADER */}
                <ul className="h-60 overflow-auto mt-6 mb-0">
                  {basket.map((basketItem) => (
                    <li className="flex py-3 gap-x-2.5 border-b border-b-gray-100 dark:border-b-white/5">
                      {/* PRODUCT-IMAGE */}
                      <div className="relative">
                        <img
                          src={basketItem.img}
                          className="w-[120px] h-[120px] -scale-x-100"
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
                      <div className="flex flex-col gap-4 flex-1">
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
                              className={`w-4 h-4 shadow rounded-full ${
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
                        <div className="flex-center-between">
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

                {/* BASKET-DROPDOWN-FOOTER */}
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
              </Dropdown>
            </div>
          </div>

          {/* HEADER-INPUT-BOX */}
          <div
            className={`relative w-[36rem] flex-align-center px-2 rounded-lg border-gray-200 border-b-transparent dark:border-white/10 dark:border-b-transparent ${
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
              className={`absolute z-30 w-full inset-x-0 top-full overflow-hidden rounded-b-lg border border-gray-200 bg-white border-t-transparent dark:border-t-transparent dark:bg-zinc-900 dark:border-white/10 ${
                showHeaderInputDropdown ? "block" : "hidden"
              }`}
            >
              <div className="overflow-y-auto p-5 max-h-[450px]">
                {/* LAST-SEARCH-BOX */}
                <div className="last-search mb-4">
                  {/* LAST-SEARCH-HEADER */}
                  <div className="flex-align-center text-zinc-600 py-2.5 gap-x-3 dark:text-zinc-300">
                    {allIcons.clock}
                    <span>Lastes Search</span>
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
                          <span>{shoe.name}</span>
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
                    <span>Most Popular</span>
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
                          <span>{shoe.name}</span>
                          {allIcons.arrowForwardSwiper}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HEADER-IMAGE */}
          <div className="header-image">
            <Link to={"/"}>
              <img
                src="/images/logo.svg"
                alt="header-logo"
                className="w-44 object-cover"
              />
            </Link>
          </div>
        </div>

        {/* DESKTOP-HEADER-BOTTOM */}
        <ul className="flex-align-center mt-4">
          <li
            onMouseEnter={showBlur}
            onMouseLeave={hideBlur}
            className="bottom-list-item flex-align-center gap-x-2 text-zinc-700 dark:text-white p-3 pl-0 relative"
          >
            {allIcons.hamburgerMenu}
            <span className="cursor-pointer">Categorys</span>
            <MenuDropdown />
          </li>
          <Link className="bottom-list-item relative" to={"/home"}>
            <li className="text-zinc-700 dark:text-white p-3 relative cursor-pointer">
              <span>Home</span>
            </li>
          </Link>
          <Link className="bottom-list-item relative" to={"/products"}>
            <li className="text-zinc-700 dark:text-white p-3 relative cursor-pointer">
              <span>All Products</span>
            </li>
          </Link>
          <li className="bottom-list-item text-zinc-700 dark:text-white p-3 relative cursor-pointer">
            <span>Special Sale</span>
          </li>
          <li className="bottom-list-item text-zinc-700 dark:text-white p-3 relative cursor-pointer">
            <span>Why Rotikala</span>
          </li>
          <li className="bottom-list-item text-zinc-700 dark:text-white p-3 relative cursor-pointer">
            <span>Purchase guide</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DesktopHeader;
