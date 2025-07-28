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
          minWidth: "1300px",
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
              {/* <div className="about-title">
                <h2>C Y S T E M E T .</h2>
              </div> */}

              <div>
                <div
                  style={{
                    borderBottom: "3px solid #807272",
                    paddingBottom: "30px",
                    paddingTop: "10px",
                  }}
                >
                  <h1
                    style={{
                      width: "max-content",
                      color: " #509adf",
                    }}
                  >
                    CYSTEMET SRL
                  </h1>
                  <h2
                    style={
                      {
                        // width: "max-content",
                        // borderBottom: "solid 2px #509adf",
                      }
                    }
                  >
                    Expertos en construcción de estructuras metalúrgicas,
                    metálicas, metal-mecánicas y electromecánicas.
                  </h2>
                  {/* <br /> */}
                  Nos especializamos en la construcción de estructuras
                  metalúrgicas, metálicas, metal-mecánicas, personalizadas según
                  planos y/o especificaciones de nuestros clientes. Con años de
                  experiencia y un equipo de expertos en metalúrgica, nos
                  enfocamos en brindar soluciones de alta calidad y precisión.
                  La estrategia de nuestra empresa está centrada en mantener con
                  nuestros clientes una relación basada en la confianza mutua,
                  en la calidad de los productos y en el nivel de servicio,
                  brindando como resultado relaciones sostenibles en el largo
                  plazo.
                  <br />
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    NUESTRA MISIÓN
                  </h4>
                  - Desarrollar soluciones personalizadas de alto rendimiento,
                  confiabilidad y excelente relación costo/beneficio, para
                  satisfacer las necesidades cspecíficas de nuestros clientes.
                  <br />- Innovar y mejorar continuamente nuestros procesos y
                  productos.
                  <br />- Brindar un servicio de alta calidad y atención
                  personalizada.
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    VALORES
                  </h4>
                  Alcanzar nuestras metas basándonos en la honestidad,
                  profesionalismo, relación de confianza con nuestros clientes,
                  espíritu innovador y mejora continua de procesos y productos.
                  <br />
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    VENTAJAS
                  </h4>
                  - Alta precisión y calidad en la construcción de estructuras
                  metalúrgicas.
                  <br />
                  - Cumplimiento de plazos y presupuestos.
                  <br />- Innovar y mejorar continuamente nuestros procesos y
                  productos.
                  <br />- Equipo de expertos con amplia experiencia en el sector
                  metalúrgico.
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    LA PLANTA
                  </h4>
                  Contamos con una planta industrial ubicada estratégicamente
                  para tener acceso a todas las rutas nacionales y provinciales,
                  lo cual nos permite llegar con nuestra producción a cualquier
                  parte del país sin ningún inconveniente.
                  <br />
                  Nuestras instalaciones se asientan en un predio de una
                  hectárea con doble acceso, optimizando la logística y el flujo
                  de trabajo.
                  <br />
                  El corazón de nuestras operaciones es un galpón cubierto de
                  3.000 m², diseñado para maximizar la eficiencia en el manejo
                  de materiales. Este espacio está equipado con:
                  <br />- Un semipórtico: Con una luz de 18 metros entre
                  carrileras y una extensión en voladizo de 2 metros a lo largo
                  de toda la planta. Ofrece una altura de elevación de 6 metros
                  y una capacidad de izaje de 5 toneladas.
                  <br />- Un pórtico móvil: Con una luz de 5 metros entre vigas,
                  una alzada de 5 metros y una capacidad de izaje de 3
                  toneladas.
                  <br />- Dos grúas pluma: Cada una con un radio de giro de 5,5
                  metros y una capacidad de izaje de 1 tonelada, equipadas con
                  aparejos eléctricos para mayor precisión.
                  <br />- Autoelevadores: garantizando versatilidad en el
                  movimiento de cargas.
                  <br />
                  Proyectos Futuros:
                  <br />
                  Estamos desarrollando una cabina de granallado y pintura de 5
                  metros de luz por 5 metros de altura libre y 50 metros de
                  longitud, lo que nos permitirá ampliar nuestras capacidades de
                  acabado.
                  <br />
                  Oficinas y Servicios:
                  <br />
                  Las instalaciones no solo se enfocan en la producción, sino
                  también en brindar un ambiente de trabajo completo y cómodo.
                  Incluyen:
                  <br />- Oficinas distribuidas en dos plantas para los sectores
                  de producción, calidad, almacenes y mantenimiento, promoviendo
                  la integración de equipos.
                  <br />- 300 m² de oficinas adicionales dedicados a recepción,
                  gerencias, administración, oficina técnica, presupuestos,
                  compras y una sala de reuniones, entre otros espacios
                  funcionales, diseñados para soportar todas las áreas
                  administrativas y de gestión.
                </div>
                <div
                  style={{
                    borderBottom: "3px solid #807272",
                    paddingBottom: "30px",
                    paddingTop: "10px",
                  }}
                >
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    DEPARTAMENTO DE INGENIERÍA
                  </h4>
                  Gracias a nuestro personal idóneo y el uso de sistemas
                  avanzados, garantizamos resultados óptimos para nuestros
                  clientes. Contamos con:
                  {/* Contando con el personal idóneo, utilizando modernos sistemas
                  para los proyectos a fines de lograr la condición óptima para
                  nuestros clientes, contamos con: */}
                  <br />
                  <br />
                  • ingeniería de detalle.
                  <br />• Ingeniería constructiva y de montaje.
                  <br />• Planos conforme a obra.
                  <br />• Cálculo e ingeniería estructural.
                </div>
                <div
                  style={{
                    borderBottom: "3px solid #807272",
                    paddingBottom: "30px",
                    paddingTop: "10px",
                  }}
                >
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    DEPARTAMENTO DE PRODUCCIÓN
                  </h4>
                  Nos distinguimos por nuestra amplia nave fabril, equipada con
                  maquinaria de última generación. Esto nos permite llevar a
                  cabo construcciones metal-mecánicas y desarrollar equipos
                  especiales con la máxima eficiencia y precisión.
                  {/* Nos destacamos por contar, con importantes naves fabriles
                  equipadas con maquinarias de última generación, con el
                  objetivo de realizar construcciones metalmecánicas y de
                  equipos especiales llave en mano. */}
                  <br />
                  <br />
                  Nuestro proceso productivo está cuidadosamente planificado y
                  organizado mediante sistemas interactivos que coordinan cada
                  etapa de la cadena productiva. Esto nos permite alcanzar una
                  eficiencia superior y ofrecer resultados altamente ventajosos
                  para nuestros clientes. Nos adaptamos completamente a las
                  necesidades y exigencias de cada cliente en el desarrollo de:
                  cálculos estructurales / ingeniería / construcción / montaje.
                  ya sea para proyectos metal-mecánicos o de equipos especiales,
                  garantizando la calidad en todo momento, respaldados por
                  nuestras tecnologías de última generación.
                  {/* Nuestro proceso productivo se encuentra planificado y
                  organizado a través de sistemas interactivos que elaboran los
                  distintos sectores de la cadena productiva, obteniendo con
                  ello eficiencia y rindes altamente ventajosos para nuestros
                  clientes. Es por ello que tanto para el desarrollo de cálculos
                  estructurales, ingeniería, construcción y montaje, de
                  cualquier tipo de proyecto metalmecánico y/o de equipos
                  especiales, nuestra empresa se adapta a necesidades y
                  exigencias del cliente, en un marco de aseguramiento de la
                  calidad otorgado por nuestras tecnologías de ultima generación
                  adquiridas. */}
                  <br />
                  <br />
                  Por otra parte, queremos destacar que nuestra empresa está
                  enfocada en brindar servicios a grandes compañías de los
                  siguientes sectores de la industria: Construcción, caucho,
                  química, siderúrgica, minería, petróleo, gas y energía. Esto
                  lo hacemos con el respaldo de una sólida trayectoria,
                  responsabilidad comprobada y un equipo conformado por
                  profesionales altamente capacitados. En los últimos años,
                  hemos participado activamente como proveedores estratégicos
                  para diversospProyectos de gran envergadura.
                  <br />
                  <br />
                  Nuestra empresa está dedicada a brindar soluciones integrales
                </div>
                <div
                  style={{
                    // borderBottom: "3px solid #807272",
                    paddingBottom: "30px",
                    paddingTop: "10px",
                  }}
                >
                  <h4
                    style={{
                      width: "max-content",
                      borderBottom: "solid 2px #509adf",
                    }}
                  >
                    CONTROL DE CALIDAD
                  </h4>
                  Aseguramos la trazabilidad de la producción, así como también
                  un plan de inspección y ensayos.
                  <br />
                  <br />
                  • Recepción e inspección de insumos y materiales.
                  <br />
                  • Control de calidad preventivo según plan inspección y
                  ensayos.
                  <br />• Trazabilidad
                  <br />• Ensayos no destructivos de acuerdo a especificación
                  del cliente
                  <br />• Inspección final del producto y su correcto embalaje
                  para el transporte al sitio que el cliente requiera.
                  <br />• Elaboración de protocolo de control de calidad.
                  <br />• Elaboración Data Book a solicitud del cliente
                  <br />
                  <br />
                  Si bien nuestra empresa no tiene certificación ISO9000,
                  estamos en vía de realizar la certificación.
                  <br />
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
