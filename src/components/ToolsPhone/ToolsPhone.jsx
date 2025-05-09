import "./ToolsPhone.css";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { RiToolsFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

function ToolsAccordion({ columnItems, openIndices, toggleAccordion }) {
  return (
    <div className="single-accordion bsbb bord">
      {columnItems.map((item, index) => (
        <div
          key={index}
          className="accordion-item p-15"
          style={{
            borderBottom: "solid 2px black",
            borderTop: "solid 2px black",
            borderLeft: "solid 2px black",
            borderRight: "solid 2px black",
            background: "#252121",
          }}
        >
          <button
            className={`accordion-header ${openIndices[index] ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="header-content">
              <div className="flex-r font-inter600-15 gap-30 flexr-hcenter">
                <div style={{ color: "#61c6f5" }}>
                  <FaCirclePlus />
                  {/* <IoMapOutline /> */}
                </div>
                <div>{item.title}</div>
                <div className="icon-container">
                  <RiArrowDownSLine
                    className={`accordion-icon ${
                      openIndices[index] ? "open" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </button>
          <div
            className={`accordion-content ${
              openIndices[index] ? "active" : ""
            }`}
            style={{ background: "none" }}
          >
            <div className="content-divider"></div>
            <div className="content-inner">
              {item.content.map((subItem, i) => (
                <>
                  <div key={i} className="font-inter500-14 ">
                    - {subItem}
                  </div>
                </>
              ))}
              <br />
              <div style={{ borderBottom: "solid 2px #61c6f5" }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const ToolsPhone = ({ items }) => {
  const [openIndices, setOpenIndices] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="flex-c flex-w100 flex-h100 flexc-wcenter"
      style={{ minHeight: "100%" }}
    >
      <div
        className="accordion-container  accrad"
        style={{
          background: "#252121",
        }}
      >
        <div className="accordion-wrapper flex-h100">
          <ToolsAccordion
            columnItems={items}
            openIndices={openIndices}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolsPhone;
