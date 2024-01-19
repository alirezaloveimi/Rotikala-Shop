import { memo, useEffect, useRef } from "react";

function Dropdown({
  showDropdown,
  setShowDropdown,
  dropdownType,
  padding,
  children,
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdownMouseHandler = (e) => {
      if (
        !dropdownRef.current.contains(e.target) &&
        !dropdownRef.current.previousElementSibling.contains(e.target)
      )
        setShowDropdown(false);
    };

    window.addEventListener("mousedown", dropdownMouseHandler);

    return () => window.removeEventListener("mousedown", dropdownMouseHandler);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown absolute ${
        dropdownType === "user" ? "w-60" : "w-100"
      } p-${padding} ease-custom-ease top-full transition-all duration-300 -left-2.5 border-t-2 z-30 rounded-lg shadow-xl border-primary bg-white dark:bg-zinc-900 ${
        showDropdown
          ? "opacity-100 visible translate-y-3"
          : "opacity-0 invisible translate-y-1/4"
      }`}
    >
      {children}
    </div>
  );
}

export default memo(Dropdown);
