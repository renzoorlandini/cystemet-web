import { RiArrowRightLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

import "./ContactForm.css";
import TextArea from "../TextArea/TextArea";
import SimpleMap from "../Maps/LeafletMaps";
import OpenStreetMapsPage from "../../pages/maps/OpenStreetMapsPage";

const ContactForm = () => {
  return (
    <>
      <div
        className="flex-r flex-w100  bsbb  p-30 "
        style={{
          minHeight: "calc( 100vh - 60px )",
          background: "rgb(36, 34, 34)",
        }}
      >
        {/* <div
          className="flex-r flex-end gap-5 text-color-black flexr-wcenter flex-w50 bsbb  p-50 font-inter400 minh-500  border-1-black"
          style={{ border: "solid 1px white", minWidth: "max-content" }}
        > */}
        {/* <div className="flex-r w100 " style={{ minWidth: "max-content" }}> */}
        {/* <div className="flex-c flex-start gap-15 pad-15 w50 "> */}
        {/* <h1
                className="font-inter600-30"
                style={{ color: "#ffffff", minWidth: "200px" }}
              >
                Consulta.
              </h1>
              <div className="flex-r flexr-hcenter font-inter600-17">
                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  className="input-contact font-inter500-14 w100"
                />
              </div> */}
        {/* <div className="flex-r flexr-hcenter gap-10">
                <input
                  type="text"
                  placeholder="e-mail"
                  className="input-contact font-inter500-14 w100"
                />
              </div>
              <div className="flex-r flexr-hcenter ">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="input-contact font-inter500-14 w100"
                />
              </div>
              <div className="flex-r h100"></div>
              <div className="flex-r w100 flex-start  ">
                <button className="btn-1">
                  Enviar <RiArrowRightLine /> <RiMailLine />
                </button>
              </div> */}
        {/* </div> */}

        {/* <div className="flex-r bsbs flex-w100   ">
              <div
                className="flex-c pad-15 bsbb gap-30"
                style={{ padding: " 15px 40px" }}
              >
                <div
                  className="textarea-container flex-r h100 p-15 w100"
                  style={{ minWidth: "200px" }}
                >
                  <textarea
                    className="w100 h100 font-inter400 p-15 contact-textarea bsbb"
                    name=""
                    id=""
                    placeholder="Escriba su consulta aquí."
                  />
                </div>
              </div>
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div
          className="flex-r flex-center gap-5 text-color-black flexr-wcenter flex-w100 bsbb  p-50 contact-font minh-500  "
          style={{ border: "solid 1px geyrey", color: "white" }}
        >
          <div className="flex-c  flex-center" style={{ textAlign: "center" }}>
            <div className="f1-cell flex-center">
              <Link to="https://wa.me/+5493413444428">
                <IoLogoWhatsapp
                  style={{ fontSize: "40px", width: "40px", height: "40px" }}
                />
              </Link>
            </div>
            <br />
            <div>Fabrica, Admin. y Dir. Fiscal:</div>
            <div>Ruta Provinvial N°18, Km. 6.1 - 2119 Piñero (Sta. Fe)</div>
            <br />
            <div>
              <NavLink to={"/maps"} element={<OpenStreetMapsPage />}>
                <div className="btn-1 letter-s4 font-inter500-17">
                  ver mapa{" "}
                  <div
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    <FaMapMarkerAlt />
                  </div>
                </div>
              </NavLink>
            </div>
            <br />
            <div>Teléfono : 0341 3175894</div>
            <br />
            <div>E-Mail: </div>
            <div>ventas@cystemetsrl.com</div>
            {/* <div>cystemetsrl@outlook.com.ar / </div>
            <div>rodectm@outlook.com</div> */}
          </div>
        </div>
        <div className="h30"></div>
      </div>
    </>
  );
};

export default ContactForm;
