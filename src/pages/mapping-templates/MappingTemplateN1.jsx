import { ScrollingLoop } from "../../components/ScrollingLoop/ScrollingLoop";
import CardGrid from "../../components/CardGrid/CardGrid";
import { featureItems, promoText } from "../../../data/items-scroll-loop";
import "./MappingTemplateN1.css";

const MappingTemplateN1 = () => {
  // Render function for feature items
  const renderFeatureItem = (item) => (
    <div className="feature-item">
      <item.icon
        className="feature-icon"
        style={item.color ? { color: item.color } : undefined}
      />
      <span>{item.text}</span>
    </div>
  );

  // Render function for promo text
  const renderPromoItem = (text) => <div className="feature-item">{text}</div>;
  return (
    <div className="view-port-limit">
      <div className="mapping-t1-wrapper">
        <div className="navbar-space"></div>

        {/* Feature items scroll */}
        <ScrollingLoop items={featureItems} renderItem={renderFeatureItem} />

        {/* Promo text scroll - commented out as in original */}
        {/* <ScrollingLoop 
          items={promoText}
          renderItem={renderPromoItem}
        /> */}

        <div className="mapping-t1-navbar">
          Some Navbar / Mapping Template N1
        </div>

        <div className="mapping-t1-container">
          <div className="mapping-t1-side-menu">
            <div className="mapping-t1-menu-tab">Side Menu</div>
            <div className="mapping-t1-menu-tab">menu tab 1</div>
            <div className="mapping-t1-menu-tab">menu tab 2</div>
          </div>

          <div className="mapping-t1-mapping">
            {" "}
            <CardGrid />{" "}
          </div>

          <div className="mapping-t1-left">Left Stuff</div>
        </div>

        <div className="mapping-t1-navbar">Some Footer</div>
      </div>
    </div>
  );
};

export default MappingTemplateN1;
