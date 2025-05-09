import { useEffect, useState } from "react";
import "./Accordion.css";
import { RiArrowDownSLine } from "react-icons/ri";

function SingleColumnAccordion({ columnItems, openIndices, toggleAccordion }) {
  const escapeHTML = (text) => {
    if (typeof text !== "string") return String(text); // Convert non-string values to string safely
    return text;
    // .replace(/&/g, "&amp;")
    // .replace(/</g, "&lt;")
    // .replace(/>/g, "&gt;")
    // .replace(/"/g, "&quot;")
    // .replace(/'/g, "&#39;")
    // .replace(/\(/g, "&#40;")
    // .replace(/\)/g, "&#41;");
  };

  return (
    <div className="single-accordion bsbb bord">
      {columnItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${openIndices[index] ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="header-content">
              <div className="title">{escapeHTML(item.title)}</div>
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
              {item.content.map((item) => (
                <div>- {item}</div>
              ))}
              {/* {escapeHTML(item.content)} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Accordion({ items }) {
  // State for managing all accordion items
  // const [openIndices, setOpenIndices] = useState({});

  // const toggleAccordion = (index) => {
  //   setOpenIndices((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  useEffect(() => {
    openAll();
  }, []);

  const [leftOpenIndices, setLeftOpenIndices] = useState({});
  const [rightOpenIndices, setRightOpenIndices] = useState({});

  const toggleLeftAccordion = (index) => {
    setLeftOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Toggle function for right column
  const toggleRightAccordion = (index) => {
    setRightOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Function to open all accordions
  const openAll = () => {
    const newLeftOpen = {};
    const newRightOpen = {};

    leftItems.forEach((_, index) => {
      newLeftOpen[index] = true;
    });

    rightItems.forEach((_, index) => {
      newRightOpen[index] = true;
    });

    setLeftOpenIndices(newLeftOpen);
    setRightOpenIndices(newRightOpen);
  };

  const closeAll = () => {
    const newLeftOpen = {};
    const newRightOpen = {};

    leftItems.forEach((_, index) => {
      newLeftOpen[index] = false;
    });

    rightItems.forEach((_, index) => {
      newRightOpen[index] = false;
    });

    setLeftOpenIndices(newLeftOpen);
    setRightOpenIndices(newRightOpen);
  };

  // Split items into two columns
  const leftItems = [];
  const rightItems = [];

  items.forEach((item, index) => {
    if (index % 2 === 0) {
      leftItems.push(item);
    } else {
      rightItems.push(item);
    }
  });

  return (
    <>
      <div
        className="flex-c flex-w100 flex-h100  flexc-wcenter "
        style={{
          minHeight: "100%",
          // background: "#828d91",
        }}
      >
        <div className="flex-r flex-w100 " style={{ height: "30px" }}></div>
        <div
          className="accordion-container p-30 "
          style={{
            // background: "rgb(238, 234, 234)",
            // background: "rgb(255, 255, 255)",
            background: "#252121",
            borderRadius: "8px",
          }}
        >
          <div
            className="flex-r flex-w100 font-inter500-20 flexr-hcenter  border-3-yellow"
            style={{
              border: "solid 2px rgb(108, 173, 233)",
              padding: "20px 20px",
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
            <div className="left-column">
              <SingleColumnAccordion
                columnItems={leftItems}
                openIndices={leftOpenIndices}
                toggleAccordion={toggleLeftAccordion}
              />
            </div>
            <div className="right-column">
              <SingleColumnAccordion
                columnItems={rightItems}
                openIndices={rightOpenIndices}
                toggleAccordion={toggleRightAccordion}
              />
            </div>
          </div>
        </div>
        <div className="flex-r flex-w100 " style={{ height: "30px" }}></div>

        {/* Open All Button */}
      </div>
    </>
  );
}

export default Accordion;
