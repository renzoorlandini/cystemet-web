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
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import FooterMobile from "../FooterMobile/FooterMobile";

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
        <div
          className="flex-r flex-center iscellhome"
          style={{ height: "60px" }}
        >
          NAVBAR
        </div>

        <div className="main-f12">
          <div className="wrapper-f1">
            <div
              className="left-box  flex-center"
              style={{ minHeight: "40px", color: "white" }}
            >
              <div className="cell-highbox flex-r flex-center">
                {/* <div className="flex-r w100 flex-end f1-tbtn">
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
                </div> */}

                <div
                  className="f1-upbox "
                  // style={{ padding: "10px 15px" }}
                >
                  <div className="f1-cell flex-start">
                    <Link to="https://wa.me/+5493413444428">
                      <IoLogoWhatsapp
                        className="flex-r flex-center"
                        style={{
                          border: "solid 2px #fff",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="f1-cell flex-center hide-on-mobile">
                    <Link to="/maps">
                      <FaMapMarkerAlt
                        className="flex-r flex-center"
                        style={{
                          border: "solid 2px #fff",
                          borderRadius: "50%",
                          padding: "6px",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="f1-cell flex-center contact-cell">
                    <Link to="/contact">
                      <RiMailLine
                        className="flex-r flex-center"
                        style={{
                          border: "solid 2px #fff",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
                    </Link>
                  </div>

                  {/* <div className="f1-cell flex-center">
                    <Link to="/accordion">
                      <IoIosListBox className="flex-r flex-center" />
                    </Link>
                  </div> */}

                  <div className="f1-cell flex-end equipment-cell">
                    <Link to="/equipment-c">
                      <RiToolsFill
                        className="flex-r flex-center"
                        style={{
                          border: "solid 2px #fff",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="f1-cell flex-end equipment-web">
                    <Link to="/equipment">
                      <RiToolsFill
                        className="flex-r flex-center"
                        style={{
                          border: "solid 2px #fff",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                      />
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
                className="cell-highbox flexr-hcenter flex-end"
                style={{ padding: "20px 0px" }}
              >
                <div
                  className="flex-r w100 flex-end f1-tbtn gap-10 "
                  style={{ width: "100%", padding: "0px 0px" }}
                >
                  <div className="flex-r flex-start" style={{ width: "33.3%" }}>
                    <div
                      className="btn-3 flex-r flex-center "
                      style={{
                        borderRadius: "6px",
                        gap: "10px",
                        height: "auto",
                        background: "none",
                      }}
                    >
                      <Link
                        to="/accordion"
                        className="flex-r flex-center gap-10 "
                      >
                        <div className="flex-r ">Clientes</div>
                        <div className="flex-r">
                          <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="flex-r flex-center "
                    style={{ width: "33.3%" }}
                  >
                    <div
                      className=" flex-r flex-center "
                      style={{
                        borderRadius: "6px",
                        gap: "10px",
                        height: "auto",
                      }}
                    >
                      <div className="flex-r flex-center">
                        <FaRegCircleDot />
                      </div>
                    </div>
                  </div>
                  <div className="flex-r flex-end" style={{ width: "33.3%" }}>
                    <div
                      className="btn-3 flex-r flex-center "
                      style={{
                        borderRadius: "6px",
                        gap: "10px",
                        height: "auto",
                        background: "none",
                      }}
                    >
                      <Link to="/works" className="flex-r flex-center gap-10 ">
                        <div className="flex-r ">Trabajos</div>
                        <div className="flex-r">
                          <FaArrowRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-r w100 work-button-cell">
                  <div style={{ width: "100%" }} className="flex-r  flex-end ">
                    <div className="f1-tbtn-cell w100 flex-center">
                      <div
                        className="btn-2 flex-r flex-center "
                        style={{
                          borderRadius: "6px",
                          gap: "10px",
                          height: "auto",
                          background: "#ffffff",
                          color: "rgb(32, 108, 179)",
                          // color: "none",
                          // background: "none",
                        }}
                      >
                        <Link
                          to="/works"
                          className="flex-r flex-center gap-10 "
                        >
                          <div className="flex-r">Trabajos </div>
                          <div className="flex-r">
                            <FaArrowRight />
                          </div>
                        </Link>
                      </div>
                    </div>
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
              {/* <div
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
                  <div className="flex-c flex-w100 flex-h100  flex-center">
                    <div
                      onClick={handleAbout}
                      className="flex-r flex-center flex-w60 flex-h50  gap-15 "
                      style={{
                        borderBottom: "solid 1px #a5a5a5",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="flex-r flex-end "
                        style={{
                          fontSize: "20px",
                          width: "auto",
                        }}
                      >
                        <FaArrowUpRightFromSquare />
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
                        style={{ fontSize: "25px", width: "auto" }}
                      >
                        <MdWorkOutline />
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
              </div> */}
            </div>
          </div>
        </div>
        {/* <FooterMobile /> */}
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
