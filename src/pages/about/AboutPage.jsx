import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <div
        className="flex-c w100"
        style={{
          minHeight: "100vh",
          color: "#fff",
          background: "#161414",
          // minWidth: "1200px",
        }}
      >
        <div className="flex-r" style={{ height: "60px" }}></div>
        <div className="flex-r flex-center">
          <div className="flex-r  about-wrapper flex-center">
            <div className=" flex-c about flexc-hcenter ">
              <div className="about-title">
                Gerente de Compra o a quien corresponda:
              </div>
              <br />
              <div>
                Es de nuestro agrado, comunicarles que luego de un análisis
                profundo de las necesidades de nuestros clientes y de la
                observación de las oportunidades de los mercados en las áreas de
                Metalmecánica, es que, en un esfuerzo hemos conformado un grupo
                de trabajo, con personal con Una Amplia Experiencia en el Rubro,
                Ex Pertenecientes a la Afamada y de Amplia Trayectoria Empresa
                Rode S.R.L., para poder aportar además de nuestra Fabricacíon de
                Estructuras, Tanques y Repuestos Industriales, Bajo Plano:
              </div>
              <br />
              <div>
                <div>
                  - Desarrollo de ingeniería de proyecto, básica y fabricación
                  para equipos y estructuras de: Recipientes a Presión,
                  Cañerías, Tanques de Almacenamientos, Equipos de Transporte a
                  Granel , Tolvas, Estructuras Metálicas en general.
                </div>
                <div>
                  - Inspección e Ingeniería de soldadura. Para control de los
                  distintos trabajos de soldaduras • Activación de suministros y
                  supervisión de Obra. • Implementación de sistema de Calidad.
                </div>
                <div>
                  - Experiencia de más de 30 años en Fabricación de acuerdo a
                  CÓDIGO ASME, API, TEMA, AWS D.1.1, etc.
                </div>
              </div>
              <br />
              <div>
                Por la otra parte, también queremos mencionarle que la empresa
                esta dedicada al servicio de las grandes empresas en el rubro de
                construcciones metálicas y equipos industriales: Cuenta para
                ello, con la experiencia adquirida, garantía de trayectoria y
                responsabilidad demostrada a lo largo de todos esos años, la
                misma está formada por Profesionales.
              </div>
            </div>
          </div>
          <div className="about-image w100">
            {/* <img src={"/images/Tanque/12.jpg"} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
