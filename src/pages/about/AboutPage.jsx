import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <div className="flex-r" style={{ height: "60px" }}></div>
      <div
        className="flex-c w100  flex-center"
        style={{
          minHeight: "calc(100vh - 60px)",
          color: "#fff",
          background: "#161414",
          borderBottom: "3px solid #807272",
          // minWidth: "1200px",
          // padding: "10px",
          // border: "3px solid #1f1d1d",
        }}
      >
        <div className="flex-r flex-center ">
          <div
            className="flex-r  about-wrapper flex-center "
            // style={{ border: "3px solid #807272" }}
          >
            <div className=" flex-c about flexc-hcenter ">
              <div className="about-title">
                <h2>A quien corresponda,</h2>
              </div>

              <div>
                <h4
                  style={{ borderBottom: "3px solid #807272", padding: "30px" }}
                >
                  Nos dirigimos a usted con el agrado de comunicarle que, tras
                  un exhaustivo análisis de las necesidades del mercado y de
                  nuestros clientes en el sector Metalmecánico, hemos conformado
                  un equipo de trabajo altamente capacitado. Este equipo está
                  integrado por profesionales con amplia trayectoria, muchos de
                  ellos ex integrantes de la reconocida empresa Rode S.R.L.
                </h4>
                <div
                  style={{ borderBottom: "3px solid #807272", padding: "30px" }}
                >
                  Además de nuestra experiencia en la fabricación de
                  estructuras, tanques y repuestos industriales bajo plano,
                  contamos con capacidad para ofrecer los siguientes servicios:
                  <br />
                  - Desarrollo de ingeniería de proyecto, básica y de detalle,
                  así como fabricación de: Recipientes a presión / Cañerías /
                  Tanques de almacenamiento / Equipos para transporte a granel /
                  Tolvas / Estructuras metálicas en general.
                  <br />- Inspección e ingeniería de soldadura para el control
                  de calidad de los trabajos. <br />- Activación de suministros
                  y supervisión de obra. <br />- Implementación de sistemasde
                  calidad. - Más de 30 años de experiencia en fabricación bajo
                  normas y códigos internacionales como ASME, API, TEMA, AWS
                  D1.1, entre otros.
                </div>

                <div
                  style={{
                    borderBottom: "3px solid #8072720",
                    padding: "30px",
                  }}
                >
                  Contamos con una planta industrial ubicada en un predio de una
                  hectárea con doble acceso, en el cual se levanta un galpón
                  cubierto de 2.500 m². Las instalaciones incluyen baños para el
                  personal, oficinas distribuidas en dos plantas para los
                  sectores de producción, calidad, almacenes y mantenimiento.
                  Además, disponemos de 300 m² de oficinas destinadas a
                  recepción, gerencias, administración, oficina técnica,
                  presupuestos, compras y una sala de reuniones, entre otros
                  espacios funcionales.
                  <br />
                  <br />
                  Por otra parte, queremos destacar que nuestra empresa está
                  enfocada en brindar servicios a grandes compañías del sector
                  de construcciones metálicas y equipos industriales. Esto lo
                  hacemos con el respaldo de una sólida trayectoria,
                  responsabilidad comprobada y un equipo conformado por
                  profesionales altamente capacitados. En los últimos años,
                  hemos participado activamente como proveedores estratégicos
                  para diversos proyectos de gran envergadura.
                  <br />
                  <br />
                  Nuestra empresa está dedicada a brindar soluciones integrales
                  a grandes compañías del rubro de construcciones metálicas y
                  equipos industriales, ofreciendo un servicio respaldado por
                  una sólida trayectoria, compromiso y profesionalismo.
                  <br />
                  <br />
                  Quedamos a disposición para ampliar cualquier información o
                  coordinar una reunión.
                </div>
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
