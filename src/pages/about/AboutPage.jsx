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
                <h2>C Y S T E M E T S .</h2>
              </div>

              <div>
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
                    LA PLANTA
                  </h4>
                  Contamos con una planta industrial ubicada estratégicamente
                  para tener acceso a todas las rutas nacionales y provinciales,
                  lo cuál nos permite llegar con nuestra producción a cualquier
                  parte del país sin ningún inconveniente.
                  <br />
                  Nuestras instalaciones se asientan en un predio de una
                  hectárea con doble acceso, optimizando la logística y el flujo
                  de trabajo.
                  <br />
                  Área Cubierta y Equipamiento Principal:
                  <br /> El corazón de nuestras operaciones es un galpón
                  cubierto de 3.000 m², diseñado para maximizar la eficiencia en
                  el manejo de materiales. Este espacio está equipado con:
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
                  <br />- Autoelevadores: Disponemos de dos autoelevadores con
                  una capacidad de izaje de 3,5 toneladas cada uno, y un tercero
                  con capacidad de 4 toneladas, garantizando versatilidad en el
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
                  <br />- Baños para el personal.
                  <br />- Oficinas distribuidas en dos plantas para los sectores
                  de producción, calidad, almacenes y mantenimiento, promoviendo
                  la integración de equipos.
                  <br />- 300 m² de oficinas adicionales dedicados a recepción,
                  gerencias, administración, oficina técnica, presupuestos,
                  compras y una sala de reuniones, entre otros espacios
                  funcionales, diseñados para soportar todas las áreas
                  administrativas y de gestión.
                  {/* La misma se constituye en un predio de una hectárea con doble
                  acceso, en el cual se levanta un galpón cubierto de 3.000 m²,
                  asistida por un semipórtico de 18m de luz entre carrileras más
                  extensión de 2m en voladizo sobre toda la longitud de la
                  planta, altura de elevación de 6 metros, capacidad de izaje de
                  5 toneladas. Más un portico móvil de 5m de luz entre vigas, alzada
                  5m, capacidad de izaje 3Ton, 2 Grúas Plumas de 5,5 m. de radio
                  de giro, capacidad de izaje 1 tonelada con aparejos
                  eléctricos. 2 autoelevadores capacidad de izaje 3Ton y media,
                  y uno de 4Ton; Desarrolando a futuro una cabina (Línea de
                  granallado y pintura de 5m de luz por 5m de altura libre y 50m
                  de longitud) Las instalaciones incluyen baños para el
                  personal, oficinas distribuidas en dos plantas para los
                  sectores de producción, calidad, almacenes y mantenimiento.
                  Además, disponemos de 300 m² de oficinas destinadas a
                  recepción, gerencias, administración, oficina técnica,
                  presupuestos, compras y una sala de reuniones, entre otros
                  espacios funcionales. */}
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
                  Gracias a nuestro personal idóneo y el uso de sistemas de
                  proyectos avanzados, garantizamos resultados óptimos para
                  nuestros clientes. Contamos con:
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
                  Vapacidad de producción: Nos distinguimos por nuestras amplias
                  naves fabriles, equipadas con maquinaria de última generación.
                  Esto nos permite llevar a cabo construcciones metalmecánicas y
                  desarrollar equipos especiales llave en mano con la máxima
                  eficiencia y precisión.
                  {/* Nos destacamos por contar, con importantes naves fabriles
                  equipadas con maquinarias de última generación, con el
                  objetivo de realizar construcciones metalmecánicas y de
                  equipos especiales llave en mano. */}
                  <br />
                  <br />
                  Nuestro proceso productivo está cuidadosamente planificado y
                  organizado mediante sistemas interactivos que coordinan cada
                  etapa de la cadena. Esto nos permite alcanzar una eficiencia
                  superior y ofrecer resultados altamente ventajosos para
                  nuestros clientes. Nos adaptamos completamente a las
                  necesidades y exigencias de cada cliente en el desarrollo de:
                  Cálculos estructurales / Ingeniería / Construcción / Montaje.
                  Ya sea para proyectos metalmecánicos o de equipos especiales,
                  garantizamos la calidad en todo momento, respaldados por
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
                  Nuestra empresa cuenta con un sistema de calidad y el personal
                  propicio para llevar adelante la producción a nuestros
                  clientes, asegurando plenamente la calidad requerida por los
                  mismos. Para ello aseguramnos la trazabilidad de la
                  produccion, desarrollando:
                  <br />
                  <br />
                  Plan de inspección y ensayos:
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
