import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="flex-r flex-w100  bsbb hide-on-mobile footer-wrapper"
      style={{ zIndex: 3 }}
    >
      <div className="footer-container flex-start flex-w100 flwx-h100 bsbb ">
        <div
          className="flex-c bsbb flex-w100 flex-h100 flex-center gap-30 font-inter600-14"
          style={{
            padding: "50px 50px 50px 0px",
          }}
        >
          <div
            className="flex-r flex-w100 flex-h100 flex-center"
            style={{ borderRight: "solid 2px rgb(255, 255, 255)" }}
          >
            <div className="flex-r flex-w50">
              <div style={{ textAlign: "center" }}>
                CYSTEMET S.R.L.
                <br />
                CONSTRUCCIONES Y SERVICIOS TECNOLOGICOS ELECTRO - METALMECÁNICOS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container flex-end ">
        <div
          className="flex-c bsbb  flex-w100 flex-h100 flex-start flexc-hcenter font-inter600-14"
          style={{
            // border: "solid 2px rgb(255, 255, 255)",
            padding: "50px 50px",
            justifyContent: "center",
          }}
        >
          <div>
            Admin. y Dir. Fiscal: Olegario Victor Andrade 255 - 2000 Rosario
            (Sta. Fe).
          </div>
          <div>Teléfono: Rita B. Fenoglio 0341 (15)5445524</div>
          <div>
            Fabrica: Olegario Victor Andrade 255 - 2000 Rosario (Sta. Fe)
          </div>
          <div>Daniel Esteban Roberto – Móvil: 0341 (15)3444428</div>
          <div>E-Mail: cystemetsrl@outlook.com.ar / rodectm@outlook.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
