import vineta1 from "./assets/archivoswebcelular/vineta1.png";
import vineta2 from "./assets/archivoswebcelular/vineta2.png";
import vineta3 from "./assets/archivoswebcelular/vineta3.png";
import button from "./assets/archivoswebcelular/bot_masinfo_1.png";
function MainCards() {
  const cardsInfo = [
    {
      text1: ["Medición de", false],
      text2: [" parámetros", false],
      text3: [" de vía", true],
      text4: [" ferroviaria", true],
      img: vineta1,
      id: "1",
    },
    {
      text1: ["Estrategias para", false],
      text2: [" la gestión", true],
      text3: [" logística", true],
      text4: [" eficiente", false],
      img: vineta2,
      id: "2",
    },
    {
      text1: ["Consultoría en", false],
      text2: [" innovación y", false],
      text3: [" desarrollo", true],
      text4: [" industrial", true],
      img: vineta3,
      id: "3",
    },
  ];
  const spanStyle = {
    backgroundColor: "black",
    padding: "2px 4px",
    margin: "4px 0",
  };
  const spanStyleMarked = {
    backgroundColor: "black",
    fontSize: "2rem",
    fontFamily: "exoSemiBold",
    padding: "2px 4px",
    margin: "4px 0",
  };

  return (
    <div
      style={{
        marginTop: "-5rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {cardsInfo.map((card) => {
        return (
          <div
            key={card.id}
            style={{
              width: "80vw",
              position: "relative",
              marginBottom: "2rem",
            }}
          >
            <img
              src={card.img}
              alt={card.text}
              style={{ width: "80vw", boxShadow: "none" }}
            />
            <p
              style={{
                position: "absolute",
                bottom: "25%",
                left: "5%",
                width: "75%",
                textAlign: "left",
                color: "white",
                fontSize: "1.5rem",
              }}
            >
              <span style={!card.text1[1] ? spanStyle : spanStyleMarked}>
                {card.text1[0]}
              </span>
              <br />
              <span style={!card.text2[1] ? spanStyle : spanStyleMarked}>
                {card.text2[0]}
              </span>
              <br />
              <span style={!card.text3[1] ? spanStyle : spanStyleMarked}>
                {card.text3[0]}
              </span>
              <br />
              <span style={!card.text4[1] ? spanStyle : spanStyleMarked}>
                {card.text4[0]}
              </span>
            </p>
            <button
              style={{
                border: "none",
                background: "none",
                position: "Absolute",
                bottom: "12%",
                left: "8%",
                width: "5rem",
              }}
            >
              <img src={button} alt="" style={{ width: "100%" }} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default MainCards;
