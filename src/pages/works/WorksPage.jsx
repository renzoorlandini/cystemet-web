import { useEffect, useState } from "react";
import "./WorksPage.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import equiposdebombeo from "./equiposdebombeo.js";
import WorkGrid from "../../components/WorkGrid/WorkGrid.jsx";
import estructuraspesadas from "./estructuraspesadas.js";
import estructurasmediasylivianas from "./estructurasmedianasylivianas.js";
import ductosdechapaytolvas from "./ductosdechapaytolvas";
import cabinas from "./cabinas.js";
import maquinasyequipos from "./maquinasyequipos.js";
import piping from "./piping.js";
import tanquesydepositos from "./tanquesydepositos.js";

const WorksPage = () => {
  const def = estructuraspesadas;
  const [workData, setWorkData] = useState(def);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isPhoneSize, setIsPhoneSize] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsPhoneSize(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPhoneSize) {
      // Your function for phone size
      console.log("Phone-sized screen detected!");
    }
  }, [isPhoneSize]);

  const handleSelection = (id, name) => {
    if (id === "estructuraspesadas") {
      setWorkData(estructuraspesadas);
      setSelectedCategory(name);
      console.log(name);
    } else if (id === "estructurasmedianasylivianas") {
      setWorkData(estructurasmediasylivianas);
      setSelectedCategory(name);
      console.log(name);
    } else if (id === "tanquesydepositos") {
      setWorkData(tanquesydepositos);
      setSelectedCategory(name);
      console.log(name);
    } else if (id === "ductosdechapaytolvas") {
      setWorkData(ductosdechapaytolvas);
      setSelectedCategory(name);
      console.log(name);
    } else if (id === "equiposdebombeo") {
      setSelectedCategory(name);
      setWorkData(equiposdebombeo);
      console.log(name);
    } else if (id === "piping") {
      setSelectedCategory(name);
      setWorkData(piping);
      console.log(name);
    } else if (id === "cabinas") {
      setWorkData(cabinas); // Replace with escaleras data when available
      setSelectedCategory(name);
    } else if (id === "maquinasyequipos") {
      setWorkData(maquinasyequipos); // Replace with escaleras data when available
      setSelectedCategory(name);
    }
    if (isPhoneSize) {
      document.getElementById("workgrid").style.display = "flex";
      document.getElementById("worksmenu").style.display = "none";
    }

    // selectedCategory === name
    //   ? (document.getElementById(id).style.color = "blue")
    //   : (document.getElementById(id).style.color = "#fff");
  };
  const handleBack = () => {
    document.getElementById("workgrid").style.display = "none";
    document.getElementById("worksmenu").style.display = "flex";
  };
  return (
    <>
      {/* FRAME 2*/}

      <div className="container-f1">
        <div style={{ height: "60px" }}></div>

        <div className="main-f1">
          <div className="wrapper-f1" style={{ background: "#ffffff" }}>
            <div
              className="works-menu"
              id="worksmenu"
              style={{
                minHeight: "400px",
                // width: "30%",
                background: "#20272c",
                color: "#fff",
              }}
            >
              <div className="flex-c">
                <div
                  id="estructuraspesadas"
                  name="estructuraspesadas"
                  onClick={() =>
                    handleSelection("estructuraspesadas", "estructuraspesadas")
                  }
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  ESTRUCTURAS PESADAS (Edificios industriales, varios)
                </div>
                <div
                  id="estructurasmedianasylivianas"
                  name="estructurasmedianasylivianas"
                  onClick={() =>
                    handleSelection(
                      "estructurasmedianasylivianas",
                      "estructurasmedianasylivianas"
                    )
                  }
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  ESTRUCTURAS MEDIANAS Y LIVIANAS
                </div>
                <div
                  id="tanquesydepositos"
                  name="tanquesydepositos"
                  onClick={() =>
                    handleSelection("tanquesydepositos", "tanquesydepositos")
                  }
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  TANQUES Y DEPÓSITOS (Con y sin bateas)
                </div>
                <div
                  id="ductosdechapaytolvas"
                  name="ductosdechapaytolvas"
                  onClick={() =>
                    handleSelection(
                      "ductosdechapaytolvas",
                      "ductosdechapaytolvas"
                    )
                  }
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  DUCTOS DE CHAPA Y TOLVAS (Chutes)
                </div>
                <div
                  id="equiposdebombeo"
                  name="equiposdebombeo"
                  onClick={() =>
                    handleSelection("equiposdebombeo", "equiposdebombeo")
                  }
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  EQUIPOS DE BOMBEO (Eléctricos, neumáticos, skid, varios)
                </div>
                <div
                  id="piping"
                  name="piping"
                  onClick={() => handleSelection("piping", "piping")}
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  PIPING (Prefabricados)
                </div>
                <div
                  id="cabinas"
                  name="cabinas"
                  onClick={() => handleSelection("cabinas", "cabinas")}
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  CABINAS
                </div>
                <div
                  id="maquinasyequipos"
                  name="maquinasyequipos"
                  onClick={() =>
                    handleSelection("maquinasyequipos", "maquinasyequipos")
                  }
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  MAQUINAS Y EQUIPOS VARIOS (Transporte, Movimientos, etc.)
                </div>
              </div>
            </div>
            {/* <div
              className="flex-c flex-w50 border-3-green flex-center"
              style={{ minHeight: "400px", width: "10%" }}
            >
              2
            </div> */}
            <div
              className="works-grid bsbb"
              id="workgrid"
              style={{
                // display: "none",
                flexDirection: "column",
                minHeight: "100vh",
                color: "black",
                background: "#524a4a",
              }}
            >
              <div className="flex-c flex-start bsbb ">
                <div
                  className="flex-r backwork flex-center border-3-yellow"
                  style={{ height: "60px" }}
                >
                  NAVBAR
                </div>
                <div
                  className="flex-r backwork flex-center flexr-hcenter gap-5 font-inter600-12 "
                  style={{
                    padding: "10px 0px 10px 0px",
                    background: "#0a0a0a",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={handleBack}
                >
                  <div
                    className="flex-c flex-center"
                    style={{ width: "auto", fontSize: "20px" }}
                  >
                    <IoMdArrowRoundBack />
                  </div>
                  <div>Volver a categorías.</div>
                </div>
                <WorkGrid category={workData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FRAME 2*/}
    </>
  );
};

export default WorksPage;
