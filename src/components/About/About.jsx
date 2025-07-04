import "./About.css";

const About = () => {
  return (
    <>
      <div style={{ height: "60px" }}></div>

      <div
        className="flex-c flex-w100  bsbb  p-30 flex-center border-3-blue"
        style={{
          minHeight: "calc( 100vh - 60px )",
          background: "rgb(36, 34, 34)",
          color: "white",
        }}
      >
        <div className="border-3-green" style={{ width: "50%" }}>
          <div>
            <h3>Atte.: Gerente de Compra o a quien corresponda:</h3>
          </div>
          Es de nuestro agrado,comunicarles que luego de un análisis profundo de
          las necesidades de nuestros clientes y de la observación de las
          oportunidades de los mercados en las áreas de Metalmecánica, es que,
          en un esfuerzo hemos conformado un grupo de trabajo, con personal con
          Una Amplia Experiencia en el Rubro, Ex Pertenecientes a la Afamada y
          de Amplia Trayectoria Empresa Rode S.R.L., para poder aportar además
          de nuestra Fabricacíon de Estructuras, Tanques y Repuestos
          Industriales, Bajo Plano:
        </div>
        <ul div style={{ width: "50%" }}>
          <li>
            Desarrollo de ingeniería de proyecto, básica y fabricación para
            equipos y estructuras de: Recipientes a Presión, Cañerías, Tanques
            de Almacenamientos, Equipos de Transporte a Granel , Tolvas,
            Estructuras Metálicas en general.
          </li>
          <li>
            Inspección e Ingeniería de soldadura. Para control de los distintos
            trabajos de soldaduras.
          </li>
          <li>Activación de suministros y supervisión de Obra.</li>
          <li>Implementación de sistema de Calidad.</li>
          <li>
            Experiencia de más de 30 años en Fabricación de acuerdo a CÓDIGO
            ASME, API, TEMA, AWS D.1.1, etc.
          </li>
        </ul>
        <div style={{ width: "50%" }}>
          Por la otra parte, también queremos mencionarle que la empresa esta
          dedicada al servicio de las grandes empresas en el rubro de
          construcciones metálicas y equipos industriales: Cuenta para ello, con
          la experiencia adquirida, garantía de trayectoria y responsabilidad
          demostrada a lo largo de todos esos años, la misma está formada por
          Profesionales. También queremos mencionarle que durante los últimos
          años hemos tenido participación activa como proveedor entre otros de:
        </div>
        <ul div style={{ width: "50%" }}>
          <li>AVALIAN "ACA Salud"</li>
          <li>DEPAOLI & TROSCE S.R.L.</li>
          <li>ENRIQUE R. ZENI & CIA. S.A.C.I.A.F.</li>
          <li>IINDUSTRIAS J. F. SECCO S.A.</li>
          <li>INFYA S.R.L.</li>
        </ul>
      </div>
    </>
  );
};

export default About;
