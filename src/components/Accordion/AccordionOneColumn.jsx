import { useEffect, useState } from "react";
import "./Accordion.css";
import { RiArrowDownSLine } from "react-icons/ri";

function SingleColumnAccordion({ columnItems, openIndices, toggleAccordion }) {
  return (
    <div className="single-accordion bsbb bord">
      {columnItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${openIndices[index] ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="header-content">
              <div className="title">{item.title}</div>
              <div className="icon-container">
                <RiArrowDownSLine
                  className={`accordion-icon ${
                    openIndices[index] ? "open" : ""
                  }`}
                />
              </div>
            </div>
          </button>
          <div
            className={`accordion-content ${
              openIndices[index] ? "active" : ""
            }`}
          >
            <div className="content-divider"></div>
            <div className="content-inner">
              {item.content.map((subItem, i) => (
                <div key={i}>- {subItem}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AccordionOneColumn({ items }) {
  const [openIndices, setOpenIndices] = useState({});

  // useEffect(() => {
  //   openAll();
  // }, []);

  const toggleAccordion = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openAll = () => {
    const allOpen = {};
    items.forEach((_, i) => (allOpen[i] = true));
    setOpenIndices(allOpen);
  };

  const closeAll = () => {
    const allClosed = {};
    items.forEach((_, i) => (allClosed[i] = false));
    setOpenIndices(allClosed);
  };

  return (
    <div
      className="flex-c flex-w100 flex-h100 flexc-wcenter"
      style={{ minHeight: "100%" }}
    >
      {/* <div className="flex-r flex-w100" style={{ height: "30px" }}></div> */}

      <div
        className="accordion-container  accrad"
        style={
          {
            // background: "#252121",
          }
        }
      >
        <div
          className="flex-r flex-w100 font-inter500-17 flexr-hcenter border-3-yellow forcell "
          style={{
            border: "solid 2px rgb(108, 173, 233)",
            padding: "15px 15px",
            background: "rgb(108, 173, 233)",
            color: "#fff",
          }}
        >
          <div style={{ width: "100%" }}>Clientes / Trabajos realizados.</div>
        </div>

        <div
          className="flex-r flex-w100 font-inter500-20 flexr-hcenter border-3-yellow hide-on-phone"
          style={{
            border: "solid 2px rgb(108, 173, 233)",
            padding: "20px",
            background: "rgb(108, 173, 233)",
            color: "#fff",
          }}
        >
          <div style={{ width: "50%" }}>Clientes / Trabajos realizados.</div>
          <div
            className="flex-r flexr-hcenter flex-end gap-15"
            style={{ width: "50%" }}
          >
            <button
              className="btn-1"
              onClick={openAll}
              style={{
                borderRadius: 0,
                background: "none",
                borderBottom: "solid 2px #ffffff",
                borderTop: "solid 2px #ffffff",
              }}
            >
              Abrir todos +
            </button>
            <button
              className="btn-1"
              onClick={closeAll}
              style={{
                borderRadius: 0,
                background: "none",
                borderBottom: "solid 2px #ffffff",
                borderTop: "solid 2px #ffffff",
              }}
            >
              Cerrar todos -
            </button>
          </div>
        </div>

        <div className="accordion-wrapper flex-h100">
          <SingleColumnAccordion
            columnItems={items}
            openIndices={openIndices}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>

      {/* <div className="flex-r flex-w100" style={{ height: "30px" }}></div> */}
    </div>
  );
}

export default AccordionOneColumn;
