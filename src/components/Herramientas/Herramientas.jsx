import "./Herramientas.css";
import data from "../../data/equipmentData";
import { FaCirclePlus } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const Herramientas = () => {
  const items = data();

  return (
    <>
      <div className="flex-r flex-w100 flex-h100 ">
        <div
          className="flex-c gap-15 font-inter600-20 flex-start hide-on-mobile "
          style={{
            minHeight: "min-comtent",
            padding: "0px 0px 30px 0px",
            width: "25%",
            background: " #252121",
            // borderRadius: "18px",
            // borderBottom: "solid 2px black",
            // borderTop: "solid 2px grey",
            // borderLeft: "solid 2px grey",
            borderRight: "solid 2px grey",
            display: "none",
            // borderTop: "solid 2px grey",

            // borderTop: "solid 2px black",
          }}
        >
          {/* <div style={{ fontSize: "30px" }}>
            <RiToolsFill />
          </div> */}

          <div
            className="flex-c flex-end p-50 gap-15 "
            style={{ position: "fixed", width: "20%" }}
          >
            <div
              style={{
                borderTop: "solid 2px white",
                borderBottom: "solid 2px white",
                paddingTop: "25px",
                paddingBottom: "25px",
                zIndex: 0,
              }}
            >
              <div
                className="flex-r font-inter-tight600-30 flex-center"
                style={{ color: "#61c6f5" }}
              >
                Listado de
                <br />
                maquinaria y
                <br />
                herramientas
                <br />
              </div>
              {/* <div style={{ fontSize: "30px", color: "white" }}>
            <RiToolsFill />
          </div> */}
            </div>
            <div
              className="flex-r flex-end"
              style={{ fontSize: "30px", color: "white" }}
            >
              <div className="flex-r flex-w50 flex-start">
                <RiToolsFill />
              </div>
              <div className="flex-r flex-w50 flex-end">
                <FaArrowRight />
              </div>
            </div>
            <div
              className="flex-c flex-w80 h200 font-inter600-14 p-15"
              style={{ color: "white" }}
            >
              <div
                style={{
                  padding: "5px 0px",
                  borderBottom: "solid 2px white",
                  borderTop: "solid 2px white",
                }}
              >
                Todas las herramientas{" "}
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Corte de materia
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Arranque de viruta
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Conformado de materiales
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Generación de aire comprimido
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Para unir metales
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Tratamiento superficial y pintura
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Medicion
              </div>
              <div
                style={{ padding: "5px 0px", borderBottom: "solid 2px white" }}
              >
                Manuales
              </div>
            </div>
          </div>
        </div>

        <div
          className="tools-list flex-center"
          style={{
            minHeight: "100%",
            width: "100%",
            flexGrow: 1,
            background: "#443d3d",
          }}
        >
          <div
            className="flex-c w100 gap-15 flexc-hcenter"
            style={{ width: "100%", background: "none", color: "#fff" }}
          >
            {/* <br /> */}
            {items.map((item) => (
              <div
                className="p-50"
                style={{
                  borderBottom: "solid 2px black",
                  borderTop: "solid 2px grey",
                  borderLeft: "solid 2px grey",
                  borderRight: "solid 2px black",
                  background: "#252121",
                }}
              >
                <div className="flex-r font-inter600-17 gap-15">
                  <div style={{ color: "#61c6f5" }}>
                    <FaCirclePlus />
                    {/* <IoMapOutline /> */}
                  </div>
                  {item.title}
                </div>
                <br />
                {item.content.map((a) => (
                  <>
                    <div className="font-inter500-14">- {a}</div>
                  </>
                ))}

                <br />
                <div style={{ borderBottom: "solid 1px #61c6f5" }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Herramientas;
