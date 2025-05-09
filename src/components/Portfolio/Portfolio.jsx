import Slider from "../Slider/Slider";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div style={{ height: "60px" }}></div>

      <div
        className="flex-c flex-w100  bsbb  p-30 flex-center"
        style={{
          minHeight: "calc( 100vh - 60px )",
          background: "rgb(36, 34, 34)",
          color: "white",
        }}
      >
        <br />
        <Slider />
      </div>
    </>
  );
};

export default Portfolio;
