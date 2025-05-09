import "./FloatingButton.css";

const FloatingButton = () => {
  return (
    <>
      <div className="hide-on-phone">
        <a
          className="floating-button hide-on-phone"
          href="https://wa.me/+5493413444428" /*LINK*/
          target="_blank"
        >
          <img src="/icons/whatsapp-brands.svg" alt="WhatsApp" /> {/*ICON*/}
        </a>
      </div>
    </>
  );
};

export default FloatingButton;
