import corchete from "./assets/archivoswebcelular/corchete1.svg";
import icono1 from "./assets/archivoswebcelular/icono1.svg";
import icono2 from "./assets/archivoswebcelular/icono2.svg";
import icono3 from "./assets/archivoswebcelular/icono3.svg";
function StartText() {
  return (
    <div style={{ padding: "0 9% " }}>
      <img src={corchete} alt="corchete verde" />
      <p style={{ padding: "2% 9%", textAlign: "start", fontSize: "1.4rem" }}>
        En TIASA,{" "}
        <span style={{ fontFamily: "ExoBold" }}>
          somos un equipo de profesionales altamente capacitados,
        </span>{" "}
        con amplia experiencia en sectores industriales y en la gestión de
        proyectos de gran envergadura. <br />
        <br />
        Nuestro equipo está compuesto por profesionales de diversas ramas como
        <span style={{ fontFamily: "ExoBold" }}>
          la ingeniería, las ciencias económicas y sistemas
        </span>{" "}
        y respaldados por trayectorias sólidas en industrias, empresas
        logisticas, el sector ferroviario y organismos de innovación de
        prestigio nacional. Además, nuestras{" "}
        <span style={{ fontFamily: "ExoBold" }}>
          colaboraciones con universidades de renombre
        </span>{" "}
        nos permiten mantenernos a la vanguardia en tecnologia y desarrollo
        industrial.
        <br />
        <br />
        Nos comprometemos a{" "}
        <span style={{ fontFamily: "ExoBold" }}>
          ofrecer soluciones integrales en tecnología, logística e innovación
          industrial
        </span>{" "}
        para potenciar el crecimiento de nuestros clientes.
      </p>
      <img
        style={{ transform: "rotate(180deg)" }}
        src={corchete}
        alt="corchete verde"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12%",
          margin: "5% 10%",
        }}
      >
        <img src={icono1} alt="" />
        <img src={icono2} alt="" />
        <img src={icono3} alt="" />
      </div>
    </div>
  );
}
export default StartText;
