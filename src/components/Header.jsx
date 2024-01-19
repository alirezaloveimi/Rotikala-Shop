import { useEffect, useRef, useState } from "react";
// mobile header componet
import MobileHeader from "./MobileHeader";
// desktop header componet
import DesktopHeader from "./DesktopHeader";

function Header({ headerStatic }) {
  // state for check window width to set the mobile header or desktop header
  const [resizeValue, setResizeValue] = useState(window.innerWidth);

  // useRef for blur box
  const blurElemRef = useRef(null);

  // functions for show or hide blur box
  const showBlurRef = () => blurElemRef.current.classList.remove("hidden");
  const hideBlurRef = () => blurElemRef.current.classList.add("hidden");

  // whene the page mounted set the resize and load event
  useEffect(() => {
    const resizeHandler = () => {
      setResizeValue(window.innerWidth);
    };
    window.addEventListener("load", resizeHandler);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("load", resizeHandler);
    };
  }, []);

  return (
    <header
      className={`w-full ${
        headerStatic ? "static" : "fixed"
      } left-0 top-0 z-40 py-4 bg-white dark:bg-zinc-900 lg:pt-4 lg:pb-0`}
    >
      <div className="container-fluid">
        {resizeValue >= 1024 ? (
          <>
            {/* DESKTOP-HEADER */}
            <DesktopHeader hideBlur={hideBlurRef} showBlur={showBlurRef} />
          </>
        ) : (
          <>
            {/* MOBILE-HEADER */}
            <MobileHeader hideBlur={hideBlurRef} showBlur={showBlurRef} />
          </>
        )}
      </div>
      {/* BLUR OVERLAY */}
      <div
        ref={blurElemRef}
        className="fixed w-full h-full top-[125px] sm:top-[133px] bg-black/40 backdrop-blur-md dark:bg-zinc-900/40 hidden"
      ></div>
    </header>
  );
}

export default Header;
