import Herramientas from "../../components/Herramientas/Herramientas";
import "./EquipmentPage.css";

const EquipmentPage = () => {
  return (
    <>
      <div className="flex-c  ">
        <div className="flex-r flex-center" style={{ minHeight: "60px" }}>
          NAVBAR
        </div>

        <div className="tools-page-wrapper ">
          <Herramientas />
        </div>
      </div>
    </>
  );
};

export default EquipmentPage;
