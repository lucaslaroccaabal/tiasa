function ConsultaSection() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        margin: "20px 0px",
      }}
    >
      <p style={{ fontSize: "2rem", fontFamily: "exoBold" }}>
        ¿Alguna consulta?
      </p>
      <p style={{ fontSize: "1.5rem" }}>¡Contactate Ahora!</p>
      <button
        style={{
          width: "70%",
          padding: "5px 0px",
          fontSize: "2rem",
          fontFamily: "exoBlack",
          backgroundColor: "#26c159",
          border: "3px solid black",
          borderRadius: "30px",
        }}
      >
        CLIC AQUÍ
      </button>
    </section>
  );
}
export default ConsultaSection;
