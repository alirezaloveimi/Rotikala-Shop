import { useState, useEffect } from 'react'

function useCloseHeaderInput(dropdownRef, hideBlur) {
    const [showHeaderInputDropdown, setShowHeaderInputDropdown] = useState(false);

    useEffect(() => {
        const mouseDownHandler = (e) => {
            const inputElem = dropdownRef.current.previousElementSibling;
            const svgElem =
                dropdownRef.current.previousElementSibling.previousElementSibling;
            if (
                showHeaderInputDropdown &&
                !dropdownRef.current.contains(e.target) &&
                !inputElem.contains(e.target) &&
                !svgElem.contains(e.target)
            ) {
                setShowHeaderInputDropdown(false);
                hideBlur();
                document.body.style.overflow = "visible";

            }
        }
        window.addEventListener('mousedown', mouseDownHandler)
        return () => {
            window.removeEventListener('mousedown', mouseDownHandler)
        }

    }, [showHeaderInputDropdown])


    useEffect(() => {
        hideBlur()
    }, [])

    return [showHeaderInputDropdown, setShowHeaderInputDropdown]
}

export default useCloseHeaderInput