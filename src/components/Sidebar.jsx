import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

function Sidebar({
  sidebarTitle,
  sidebarSide,
  imgSrc,
  isShow,
  onHide,
  children,
}) {
  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isShow]);

  return (
    <div
      className={`sidebar fixed inset-0 z-50 transition-all duration-300 ${
        isShow ? "translate-x-0 opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* SIDEBAR-OVERLAY */}
      <div
        onClick={() => onHide(false)}
        className="sidebar-overlay fixed indent-0 w-full h-full bg-black/40 dark:bg-zinc-900/40 backdrop-blur-md"
      ></div>

      {/* SIDEBAR-CONTENT-BOX */}
      <div
        className={`sidebar-content-box ${isShow ? "show" : ""} ${sidebarSide} 
        w-80 h-full p-4 overflow-auto relative transition-all duration-300 bg-white dark:bg-zinc-900`}
      >
        {/* SIDEBAR-HEADER */}
        <div className="sidebar-header flex-center-between pb-4 border-b-gray-100 text-zinc-700 dark:text-white border-b dark:border-b-white/5">
          {imgSrc ? (
            <img src={imgSrc} alt="logo image" className="w-112 h-10" />
          ) : (
            <h5 className="font-normal">{sidebarTitle}</h5>
          )}
          <IoMdClose
            onClick={() => onHide(false)}
            className="text-xl cursor-pointer"
          />
        </div>

        {/* SIDEBAR-BODY */}
        <div className="sidebar-body mt-6 ">{children}</div>
      </div>
    </div>
  );
}

export default Sidebar;
