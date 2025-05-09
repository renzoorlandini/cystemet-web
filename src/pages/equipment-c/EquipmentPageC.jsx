import ToolsPhone from "../../components/ToolsPhone/ToolsPhone";
import "./EquipmentPageC.css";
import data from "../../data/equipmentData";
import { RiToolsFill } from "react-icons/ri";

const EquipmentPageC = () => {
  const toolsData = data();
  return (
    <>
      <div className="flex-c  ">
        <div className="flex-r flex-center" style={{ minHeight: "60px" }}>
          NAVBAR
        </div>
        <div
          className=" flex-r flex-center"
          style={{
            padding: "13px",
            color: "#fff",
            background: "#000",
            gap: "5px",
          }}
        >
          {/* <div className="" style={{ fontSize: "15px" }}>
            <RiToolsFill />
          </div> */}
          <div className="font-inter500-14">Herramientas</div>
        </div>

        <div className="tools-page-wrapper ">
          <ToolsPhone items={toolsData} />
        </div>
      </div>
    </>
  );
};

export default EquipmentPageC;
