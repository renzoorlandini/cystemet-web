import "./NavbarResponsive.css";
import { NavLink, useNavigate } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FaBars } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";

const NavbarResponsive = () => {
  const navigate = useNavigate();
  //TOP TO SIDE CHANGE//
  const showSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const navbar = document.getElementById("navbar-wrapper");

    if (sidebar && navbar) {
      sidebar.style.display = "flex";
      navbar.style.display = "none";
    }
  };

  const closeSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    const navbar = document.getElementById("navbar-wrapper");

    if (sidebar && navbar) {
      sidebar.style.display = "none";
      navbar.style.display = "flex";
    }
  };
  //TOP TO SIDE CHANGE END//
  const handleCellNav = (event) => {
    const page = event.currentTarget.getAttribute("data-page");
    navigate(`/${page}`);
    const sidebar = document.getElementById("sidebar");
    const navbar = document.getElementById("navbar-wrapper");

    if (sidebar && navbar) {
      sidebar.style.display = "none";
      navbar.style.display = "flex";
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="navbar-wrapper bsbb" id="navbar-wrapper">
        <div className="navbar-phone" style={{ width: "100vw" }}>
          <div
            onClick={handleHome}
            className="cystemetsrl-phone "
            style={{ cursor: "pointer" }}
          >
            CYSTEMET S.R.L.
          </div>

          <div
            onClick={showSidebar}
            className="icon-menu-navbar hideBarsIcon flex-r p-15 flex-center"
          >
            <div
              className="flex-r flex-center gap-10 border-2-white"
              style={{ padding: "5px 10px", border: "solid 1px #ffffff6a" }}
            >
              menu <FaBars />
            </div>
          </div>
        </div>
        <div className="navbar bsbb hide-on-mobile">
          <div className="navbar-left">
            <div className="nav-tab-separador hide-on-mobile"></div>

            <div
              className="nav-tab flex-r flex-center hide-on-mobile"
              style={{
                justifyContent: "center",
                alignContent: "center",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <div className="hide-on-mobile">
                <NavLink to={"/"} className="nav-tab hide-on-mobile">
                  <div className="cystemetsrl hide-on-mobile">
                    CYSTEMET S.R.L.
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="nav-tab-separador hide-on-mobile"></div>
          </div>
          <div className="navbar-center hide-on-mobile">
            <NavLink to={"/"} className="nav-tab ">
              <div className="flex-r flex-center gap-15">
                <MdHomeFilled style={{ fontSize: "15px" }} />
                Inicio
              </div>
            </NavLink>

            <NavLink to={"/works"} className="nav-tab ">
              <div className="flex-r flex-center gap-15">
                <MdOutlineWorkOutline style={{ fontSize: "15px" }} /> Trabajos
              </div>
            </NavLink>

            <NavLink to={"/equipment"} className="nav-tab ">
              <div className="flex-r flex-center gap-15">
                <FaTools style={{ fontSize: "15px" }} />
                Equipamiento
              </div>
            </NavLink>

            <NavLink to={"/accordion"} className="nav-tab">
              <div className="flex-r flex-center gap-15">
                <IoIosListBox style={{ fontSize: "15px" }} />
                Clientes
              </div>
            </NavLink>
            <NavLink to={"/about"} className="nav-tab ">
              <div className="flex-r flex-center gap-15">
                <FaRegDotCircle style={{ fontSize: "15px" }} /> La Empresa
              </div>
            </NavLink>
          </div>
          <div
            className="navbar-right gap-15"
            id="navbar-right"
            style={{ fontSize: "23px" }}
          >
            {/* <div className="flex-r flex-h100 flexr-hcenter p-15 gap-15  hide-on-mobile">
              <FaFacebookSquare />
              <FaInstagramSquare />
              <FaLinkedin />
            </div> */}
            <div
              className="nav-tab font-inter600-14 "
              style={{ padding: "10px 15px" }}
            >
              <div>
                <NavLink to={"/contact"} className="nav-tab ">
                  <div
                    className="flex-r flex-center gap-10"
                    style={{ padding: "10px" }}
                  >
                    <div className="flex-r">Contacto</div>
                    <div
                      className="flex-r border-2-white p-10"
                      style={{ padding: "8px" }}
                    >
                      <RiMailFill
                        className="flex-r"
                        style={{ fontSize: "15px" }}
                      />
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>

            {/* <div
              className=" flex-r flex-center bsbb hide-on-mobile "
              style={{ padding: "0px 12px" }}
            >
              <DropdownMenu />
            </div> */}
          </div>
        </div>
      </div>

      {/* SIDE NAVIGATION */}
      <ul className="side-nav" id="sidebar">
        <div style={{ padding: "30px" }}>
          <li
            data-page=""
            onClick={handleCellNav}
            className="nav-tab-side"
            style={{ borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <MdHomeFilled style={{ fontSize: "15px" }} />
              Inicio
            </div>
          </li>

          <li
            data-page="works"
            onClick={handleCellNav}
            className="nav-tab-side "
            style={{ borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <RiMailFill style={{ fontSize: "15px" }} /> Trabajos
            </div>
          </li>
          <li
            data-page="equipment-c"
            onClick={handleCellNav}
            className="nav-tab-side"
            style={{ borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <FaTools style={{ fontSize: "15px" }} />
              Equipamiento
            </div>
          </li>
          <li
            data-page="accordion"
            onClick={handleCellNav}
            className="nav-tab-side"
            style={{ borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <MdOutlineWork style={{ fontSize: "15px" }} />
              Clientes
            </div>
          </li>
          <li
            data-page="about"
            onClick={handleCellNav}
            className="nav-tab-side"
            style={{ borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <FaRegDotCircle style={{ fontSize: "15px" }} />
              <div>Empresa</div>
            </div>
          </li>
          <li
            data-page="contact"
            onClick={handleCellNav}
            className="nav-tab-side"
            style={{ borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <RiMailFill style={{ fontSize: "15px" }} />
              Contacto
            </div>
          </li>

          <li
            onClick={closeSidebar}
            className="nav-tab-side gap-15"
            style={{ width: "100vw", borderBottom: "solid 2px #fff" }}
          >
            <div
              className="flex-r flex-center gap-15"
              style={{ width: "min-content" }}
            >
              <IoMdClose style={{ fontSize: "20px" }} />
              Cerrar
            </div>
          </li>
        </div>
      </ul>
      {/* SIDE NAVIGATION END */}
    </>
  );
};

export default NavbarResponsive;
