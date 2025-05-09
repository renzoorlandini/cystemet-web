import { useState, useEffect, useRef } from "react";
import "./DropDownMenu.css";
import { RiArrowDownSLine } from "react-icons/ri";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="dropdown" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn"
          style={{ width: "150px" }}
        >
          <div className="flex-r flex-center gap-10">
            Usuario / Login
            <RiArrowDownSLine
              className={`dropdown-icon ${isOpen ? "open" : ""}`}
            />
          </div>
        </button>

        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
          <ul className="font-inter500-14">
            <li>Panel</li>
            <li>Administrar sitio</li>
            <li>Cerrar sesión</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
