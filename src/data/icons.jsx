import { LuShoppingCart , LuCompass } from "react-icons/lu";
import { FaRegUser , FaInstagram , FaFacebookF , FaYoutube , FaRegHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { GoClock , GoSortDesc } from "react-icons/go";
import { IoMoonOutline,IoSunnyOutline,IoBagOutline,IoExitOutline,} from "react-icons/io5";
import { IoMdNotificationsOutline, IoMdClose , IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import { RiHomeLine, RiMenuSearchLine , RiStackshareLine } from "react-icons/ri";
import { AiOutlineFire , AiOutlineGlobal } from "react-icons/ai";
import { MdDevices, MdOutlinePhoneInTalk } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";






const allIcons = {
  shoppingCard: <LuShoppingCart className="text-lg sm:text-xl text-zinc-700 dark:text-white cursor-pointer" />,
  user: <FaRegUser className="text-lg sm:text-xl text-zinc-700 dark:text-white cursor-pointer" />,
  hamburgerMenu: <RxHamburgerMenu className="text-lg sm:text-xl cursor-pointer text-zinc-700 dark:text-white" />,
  search: <CiSearch className="w-6 h-6 text-zinc-700 dark:text-white" />,
  clock: <GoClock className="text-lg sm:text-xl" />,
  moon: <IoMoonOutline className="text-xl sm:text-2xl text-zinc-700 dark:text-white cursor-pointer" />,
  sunny: <IoSunnyOutline className="text-xl sm:text-2xl text-zinc-700 dark:text-white cursor-pointer" />,
  bag: <IoBagOutline className="text-xl" />,
  exit: <IoExitOutline className="text-2xl" />,
  arrowForward: <IoIosArrowForward className="ml-auto" />,
  arrowForwardTab: <IoIosArrowForward className="text-primary" />,
  arrowForwardSwiper: <IoIosArrowForward className="text-lg sm:text-xl" />,
  heart: <FaRegHeart className="text-xl" />,
  notifications: <IoMdNotificationsOutline className="text-2xl" />,
  close: <IoMdClose className="text-red-600 text-xl"  />,
  closeToastIcon: <IoMdClose className="text-lg text-black dark:text-white"  />,
  homeLine: <RiHomeLine className="text-2xl" />,
  menuSearchLine: <RiMenuSearchLine className="text-2xl" />,
  Fire: <AiOutlineFire className="text-2xl" />,
  devices: <MdDevices className="text-2xl" />,
  phoneInTalk: <MdOutlinePhoneInTalk className="text-2xl" />,
  shop: <BsShop className="text-2xl" />,
  heroPrev : <IoIosArrowBack  /> ,
  heroNext : <IoIosArrowBack className="rotate-180" /> ,
  footerIcon : <AiOutlineGlobal className="text-gray-500 dark:text-gray-100 text-2xl" /> ,
  footerGoToTopIcon : <IoIosArrowUp  /> ,
  instagramIcon : <FaInstagram className="cursor-pointer transition-all duration-200 hover:text-rose-700" /> ,
  facebookIcon : <FaFacebookF className="cursor-pointer transition-all duration-200 hover:text-blue-700" /> ,
  youtubeIcon : <FaYoutube className="cursor-pointer transition-all duration-200 hover:text-rose-700" /> ,
  compassIcon : <LuCompass className="cursor-pointer dark:text-white text-zinc-700 text-xl" /> ,
  heartIcon : <FaRegHeart className="cursor-pointer dark:text-white text-zinc-700 text-xl" /> ,
  stackshareIcon : <RiStackshareLine className="cursor-pointer dark:text-white text-zinc-700 text-xl" /> ,
  check : <FaCheck className="text-lg hidden md:block" /> ,
  sortIcon : <GoSortDesc className="text-zinc-600 dark:text-zinc-300 text-xl" />
};


export default allIcons;
