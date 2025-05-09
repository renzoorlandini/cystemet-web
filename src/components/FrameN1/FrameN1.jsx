import "./FrameN1.css";
import FloatingButton from "../FloatingElements/FloatingButton/FloatingButton";
import Slider from "../Slider/Slider";
// import { useNavigate } from "react-router-dom";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiMailLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { BsArrowBarDown } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import { FaBandcamp } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";

const FrameN1 = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleWorks = () => {
    navigate("/works");
  };

  return (
    <>
      <div className="container-f1">
        <div className="flex-r flex-center" style={{ height: "60px" }}>
          NAVBAR
        </div>

        <div className="main-f12">
          <div className="wrapper-f1">
            <div
              className="left-box  flex-center"
              style={{ minHeight: "400px", color: "white" }}
            >
              <div className="cell-highbox flex-r flex-center ">
                <div className="flex-r w100 flex-end f1-tbtn">
                  <div
                    className="btn-2 "
                    style={{
                      borderRadius: "6px",
                      // padding: "10px 30px",
                      // background: "#45a8f8",
                      gap: "10px",
                      height: "auto",
                    }}
                  >
                    <Link to="/works" className="flex-r flex-center gap-10">
                      <div className="flex-r">Trabajos</div>
                      <div className="flex-r">
                        <FaArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="f1-upbox">
                  <div className="f1-cell flex-center">
                    <Link to="https://wa.me/+5493413444428">
                      <IoLogoWhatsapp />
                    </Link>
                  </div>

                  <div className="f1-cell flex-center">
                    <Link to="/contact">
                      <RiMailLine />
                    </Link>
                  </div>

                  <div className="f1-cell flex-center">
                    <Link to="/accordion">
                      <IoIosListBox />
                    </Link>
                  </div>
                  <div className="f1-cell flex-center">
                    <Link to="/works">
                      <MdOutlineWork />
                    </Link>
                  </div>
                  <div className="f1-cell flex-center ">
                    <Link to="/equipment-c">
                      <FaTools />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className=" cystemet-box flexc-wcenter flex-center"
                style={{
                  height: "40%",
                  borderBottom: "solid 3px white",
                  borderTop: "solid 3px white",
                  // border: "solid 1px blue",
                  margin: 0,
                }}
              >
                <div>
                  <div className="cystemet-box-font1">CYSTEMET S.R.L.</div>
                  <div className="flex-r" style={{ height: "10px" }}></div>
                  <div className="cystemet-box-font2">
                    Construcciones y servicios tecnológicos
                    electro-metalmecánicos
                  </div>
                </div>
              </div>

              <div
                className="cell-highbox flex-center "
                style={{ padding: "20px 0px" }}
              >
                <div className="flex-r w100 flex-end f1-tbtn">
                  <div
                    className="btn-2 flex-r flex-center "
                    style={{
                      borderRadius: "6px",
                      gap: "10px",
                      height: "auto",
                    }}
                  >
                    <Link to="/accordion" className="flex-r flex-center gap-10">
                      <div className="flex-r">Clientes</div>
                      <div className="flex-r">
                        <FaArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="f1-tbtn-cell">
                  <div
                    className="btn-2 flex-r flex-center "
                    style={{
                      borderRadius: "6px",
                      gap: "10px",
                      height: "auto",
                      background: "#1d1f24",
                    }}
                  >
                    <Link to="/works" className="flex-r flex-center gap-10">
                      <div className="flex-r">Trabajos </div>
                      <div className="flex-r">
                        <FaArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="flex-r flex-w50 flex-end">
                <button
                  onClick={handleContactRoute}
                  className="btn-1"
                  style={{
                    width: "auto",
                    background: "#000000",
                    color: "#ffffff",
                  }}
                >
                  <RiMailLine /> Contacto <FaArrowRight />
                </button>
              </div> */}
            </div>
            <div
              className="flex-c flex-w60 flex-h100 hide-on-phone"
              style={{ minHeight: "400px", background: "#302a2a" }}
            >
              <Slider />
              <div
                className="flex-r flex-w100 flex-h100 "
                style={{
                  color: "#fff",
                  minHeight: "170px",
                  // borderBottom: "solid 2px white",
                }}
              >
                <div
                  className="flex-c flex-h100 flex-w50 flex-center"
                  style={{
                    borderRight: "solid 2px #a5a5a5",
                    // borderLeft: "solid 6px #ffffff",
                    // borderTop: "solid 6px #ffffff",
                  }}
                >
                  <div className="flex-c flex-w100 flex-h100  flex-center ">
                    <div
                      onClick={handleAbout}
                      className="flex-r flex-center flex-w60 flex-h50  gap-15 "
                      style={{
                        borderBottom: "solid 1px #a5a5a5",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="flex-r flex-end"
                        style={{
                          fontSize: "30px",
                          width: "auto",
                        }}
                      >
                        <BsBox />
                      </div>
                      <div className="flex-r" style={{ width: "auto" }}>
                        Acerca de nosotros
                      </div>
                    </div>

                    <div
                      onClick={handleWorks}
                      className="flex-r flex-center flex-w60 flex-h50  gap-15 "
                      style={{
                        // borderBottom: "solid 6px #ffffff",
                        borderTop: "solid 1px #a5a5a5",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="flex-r flex-end"
                        style={{ fontSize: "30px", width: "auto" }}
                      >
                        <FaChartLine />
                      </div>
                      <div className="flex-r" style={{ width: "auto" }}>
                        Trabajos
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="flex-c flex-h100 flex-w50 flex-center"
                  style={{ fontSize: "30px" }}
                >
                  <div
                    onClick={handleContact}
                    className="border-2-white p-30 flex-center"
                    style={{ borderRadius: "50%", cursor: "pointer" }}
                  >
                    <RiMailLine className="flex-r" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FRAME 2*/}

      {/* <div className="container-f1">
        <div className="main-f1">
          <div className="wrapper-f1">
            <div
              className="flex-c flex-w50 border-3-green flex-center"
              style={{ minHeight: "400px", width: "50%" }}
            ></div>
            <div
              className="flex-c flex-w50 border-3-green flex-center"
              style={{ minHeight: "400px", width: "50%" }}
            ></div>
            <FloatingButton />
          </div>
        </div>
      </div> */}
      {/* END FRAME 2*/}
    </>
  );
};

export default FrameN1;
