import { NavLink } from "react-router-dom";
import SimpleMap from "../../components/Maps/LeafletMaps";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./OpenStreetMapsPage.css";

const OpenStreetMapsPage = () => {
  return (
    <>
      <div
        className="floating-scroll-button-map flex-r flex-center flex-w100 flex-h100"
        style={{
          borderRadius: "50%",
          aspectRatio: "1/1",
          border: "none",
          background: "tomato",
        }}
      >
        <a
          className="flex-r flex-center flex-w100 flex-h100"
          style={{
            width: "100%",
          }}
        >
          <NavLink
            to={"/contact"}
            className="nav-tab flex-r w100 flex-h100 bsbb flex-center"
          >
            <div
              className="flex-r flex-w100 flex-h100 bsbb flex-center gap-15"
              style={{ fontSize: "35px" }}
            >
              <div className="flex-r">
                <IoIosCloseCircleOutline
                  className="flex-r flex-center"
                  style={{ fontSize: "30px", width: "30px", height: "30px" }}
                />
              </div>
            </div>
          </NavLink>
        </a>
      </div>
      <div className="felx-r flex-w100" style={{ height: "60px" }}></div>
      <div className="os-maps-container felx-center  bsbb border-3-white">
        <div className="flex-r flex-center border-3-whitye ">
          <SimpleMap
            lat={-33.082991}
            lng={-60.698481}
            zoom={15}
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </>
  );
};

export default OpenStreetMapsPage;
