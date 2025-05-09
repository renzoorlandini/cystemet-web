import { useEffect, useState } from "react";
import "./WorksPage.css";
import tanques from "./tanques.js";
import jaulas from "./jaulas.js";
import WorkGrid from "../../components/WorkGrid/WorkGrid.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";

const WorksPage = () => {
  const tanque = tanques;
  const [workData, setWorkData] = useState(tanque);
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
    if (id === "tanques") {
      setWorkData(tanques);
      setSelectedCategory(name);
      console.log(name);
    } else if (id === "jaulas") {
      setSelectedCategory(name);
      setWorkData(jaulas);
      console.log(name);
    } else if (id === "escaleras") {
      // setSelectedCategory("escaleras");
      setWorkData([]); // Replace with escaleras data when available
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
                  id="tanques"
                  name="tanques"
                  onClick={() => handleSelection("tanques", "tanques")}
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  TANQUES
                </div>
                <div
                  id="jaulas"
                  onClick={() => handleSelection("jaulas", "jaulas")}
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  JAULAS
                </div>
                <div
                  id="estructurasPesadas"
                  onClick={() => handleSelection("jaulas", "jaulas")}
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  ESTRUCTURAS PESADAS
                </div>
                <div
                  id="tuberias"
                  onClick={() => handleSelection("jaulas", "jaulas")}
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                    cursor: "pointer",
                  }}
                >
                  TUBERÍAS
                </div>

                <div
                  style={{
                    padding: "15px 0px",
                    borderBottom: "solid 2px #fff",
                  }}
                >
                  ESCALERAS
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
                {/* <div
                  className="flex-r backwork flex-center border-3-yellow"
                  style={{ height: "60px" }}
                >
                  NAVBAR
                </div> */}
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
