import imgConsultoriaInnovacion from "./assets/archivoswebcelular/img_seccion1.png";
import corner from "./assets/archivoswebcelular/cornerBox.png";
function ConsultoriaInnovacionSection() {
  return (
    <section>
      <div style={{ position: "relative" }}>
        <img style={{ width: "100vw" }} src={imgConsultoriaInnovacion} alt="" />
        <p
          style={{
            padding: "2px 4px",
            margin: "4px 0",
            position: "absolute",
            bottom: "15%",
            left: "10%",
            textAlign: "start",
            color: "white",
            fontSize: "1.8rem",
          }}
        >
          <span
            style={{
              backgroundColor: "black",
              padding: "0px 10px",
              fontSize: "1.5rem",
              marginBottom: "-500px",
            }}
          >
            Consultoría
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            Innovación
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            Y Desarrollo
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            Industrial
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            Vinculado a
          </span>{" "}
          <br />
          <span style={{ backgroundColor: "black", padding: "0px 10px" }}>
            la Tecnología
          </span>{" "}
          <br />
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
    </section>
  );
}
export default ConsultoriaInnovacionSection;
