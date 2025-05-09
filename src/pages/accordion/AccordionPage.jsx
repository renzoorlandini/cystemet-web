import Accordion from "../../components/Accordion/Accordion";
import "./AccordionPage.css";
import data from "../../data/accordionData";
import AccordionOneColumn from "../../components/Accordion/AccordionOneColumn";
const AccordionPage = () => {
  const items = data();

  return (
    <>
      <div className="flex-r flex-w100 bsbb" style={{ height: "60px" }}></div>

      <div className="accordion-page-wrapper bsbb flexr-hcenter ">
        <div className="flex-c bsbb flex-center accpad">
          <AccordionOneColumn items={items} />
        </div>
      </div>
    </>
  );
};

export default AccordionPage;
