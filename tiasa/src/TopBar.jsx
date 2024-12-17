import { useRef, useState } from "react";
import logo from "./assets/archivoswebcelular/logo_01.svg";
import barsImage from "./assets/archivoswebcelular/menu_bar.png";
function TopBar() {
  const barsButton = useRef(null);
  const [borderProperty, setBorderProperty] = useState("none");
  const logoContainer = {
    backgroundColor: "#222221",
    borderRadius: "8px",
    width: "150px",
    padding: "5px 8px",
  };
  const header = {
    backgroundColor: "#d9de3e",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "3px solid black",
    position: "fixed",
    top: "0",
    zIndex: "100",
    width: "100vw",
    height: "75px",
  };
  const bars = {
    height: "30px",
    width: "30px",
  };
  const button = {
    height: "30px",
    width: "30px",
    background: "none",
    padding: "0",
    cursor: "pointer",
    border: borderProperty,
    transition: "all 1s linear",
    height: "fit-content",
  };

  function barsButtonHover(e) {
    console.log(e.target);
    if (e._reactName === "onMouseEnter") {
      setBorderProperty("1px solid black");
    } else {
      setBorderProperty("none");
    }
  }
  return (
    <header style={header}>
      <div style={logoContainer}>
        <img src={logo} alt="Logo Tiasa" />
      </div>
      <button
        onMouseEnter={barsButtonHover}
        onMouseLeave={barsButtonHover}
        onClick={() => {
          scroll(2000, 0);
        }}
        ref={barsButton}
        style={button}
      >
        <img style={bars} src={barsImage} alt="bars" />
      </button>
    </header>
  );
}
export default TopBar;
