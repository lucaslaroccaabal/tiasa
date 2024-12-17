import imgEstrategiasAvanzadas from "./assets/archivoswebcelular/img_seccion1.png";
import corner from "./assets/archivoswebcelular/cornerBox.png";
function EstrategiasAvanzadasSection() {
  const estrategiasAvanzadasPoints = [
    { id: 1, title: "Diseño de red logística", text: "" },
    {
      id: 2,
      title: "Análisis y optimización de la cadena de suministro",
      text: "",
    },
    {
      id: 3,
      title: "Selección y gestión de  proveedores de servicios",
      text: "",
    },
    { id: 4, title: "Implementación de tecnología logística", text: "" },
    { id: 5, title: "Capacitación y mejora de procesos", text: "" },
    { id: 6, title: "Gestión de riesgos y continuidad", text: "" },
  ];
  return (
    <section>
      <div style={{ position: "relative" }}>
        <img style={{ width: "100vw" }} src={imgEstrategiasAvanzadas} alt="" />
        <p
          style={{
            padding: "2px 4px",
            margin: "4px 0",
            position: "absolute",
            bottom: "15%",
            left: "10%",
            textAlign: "start",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            Estrategias
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            avanzadas para
          </span>{" "}
          <br />
          <span
            style={{
              backgroundColor: "black",
              padding: "0px 10px",
              fontFamily: "exoSemiBold",
              fontSize: "2rem",
            }}
          >
            la gestión
          </span>{" "}
          <br />
          <span
            style={{
              backgroundColor: "black",
              padding: "0px 10px",
              fontFamily: "exoSemiBold",
              fontSize: "2rem",
            }}
          >
            logística
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            eficiente
          </span>
        </p>
      </div>
      <div
        style={{
          borderRadius: "8px",
          position: "relative",
          backgroundColor: "#d9de3e",
          padding: "40px 5px",
          paddingLeft: "20px",
          margin: "0 10%",
          marginTop: "-50px",
        }}
      >
        <p style={{ fontFamily: "exoSemiBold", textAlign: "start" }}>
          Brindamos asesoramiento especializado para desarrollar, mejorar y
          optimizar las operaciones logísticas y de la cadena de suministro de
          sus clientes, con foco en el diseño y aplicación de tecnologías de
          última generación.
        </p>
        <img
          src={corner}
          alt=""
          style={{
            position: "absolute",
            width: "40px",
            right: "0",
            bottom: "0",
          }}
        />
      </div>
      <div>
        {estrategiasAvanzadasPoints.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                textAlign: "start",
                margin: "0 10%",
                padding: "10% 5%",
                borderBottom: "1px dotted gray",
              }}
            >
              <span
                style={{
                  fontSize: "4rem",
                  fontFamily: "ExoBlack",
                  color: "#d9de3e",
                }}
              >
                {item.id}.
              </span>
              <br />
              <span style={{ fontFamily: "ExoSemibold", fontSize: "1.4rem" }}>
                {item.title}:
              </span>
              {/* <p>{item.text}</p> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptas quaerat beatae unde dicta quo, cum facere vitae eum
                consequuntur dolore. Illum commodi modi rem cupiditate nesciunt
                ea? Quis, accusantium!
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default EstrategiasAvanzadasSection;
