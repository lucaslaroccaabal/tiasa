import arrow from "./assets/archivoswebcelular/arrow.png";
import { useRef, useState } from "react";
import img1 from "./assets/archivoswebcelular/img_home.png";
function Hero() {
  const [order, setOrder] = useState(0);
  const amountOfSlides = 4;
  function changeOrder(direction) {
    if (direction === "left") {
      if (order === 0) {
        setOrder(-(amountOfSlides * 100 - 100));
      } else {
        setOrder(order + 100);
      }
    } else {
      if (order === -(amountOfSlides * 100 - 100)) {
        setOrder(0);
      } else {
        setOrder(order - 100);
      }
    }
  }
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "75px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            position: "relative",
            left: "0",
            transform: `translateX(${order}vw)`,
            transition: "1s all ease",
          }}
        >
          <>
            <img style={{ width: "100vw" }} src={img1} alt="obrero con casco" />
            <p
              style={{
                position: "absolute",
                bottom: "20%",
                left: "15%",
                textAlign: "start",
                color: "white",
                fontSize: "2rem",
              }}
            >
              <span style={{ fontFamily: "exoBold" }}>
                Potenciamos <br /> tus proyectos <br />
              </span>{" "}
              mediante soluciones <br /> avanzadas
            </p>
          </>
        </div>
        <div
          style={{
            position: "relative",
            left: "0",
            transform: `translateX(${order}vw)`,
            transition: "1s all ease",
          }}
        >
          <img style={{ width: "100vw" }} src={img1} alt="obrero con casco" />
          <p
            style={{
              position: "absolute",
              bottom: "20%",
              left: "15%",
              textAlign: "start",
              color: "white",
              fontSize: "2rem",
            }}
          >
            <span style={{ fontFamily: "exoBold" }}>
              Potenciamos <br /> tus proyectos <br />
            </span>{" "}
            mediante soluciones <br /> avanzadas
          </p>
        </div>
        <div
          style={{
            position: "relative",
            left: "0",
            transform: `translateX(${order}vw)`,
            transition: "1s all ease",
          }}
        >
          <img style={{ width: "100vw" }} src={img1} alt="obrero con casco" />
          <p
            style={{
              position: "absolute",
              bottom: "20%",
              left: "15%",
              textAlign: "start",
              color: "white",
              fontSize: "2rem",
            }}
          >
            <span style={{ fontFamily: "exoBold" }}>
              Potenciamos <br /> tus proyectos <br />
            </span>{" "}
            mediante soluciones <br /> avanzadas
          </p>
        </div>
        <div
          style={{
            position: "relative",
            left: "0",
            transform: `translateX(${order}vw)`,
            transition: "1s all ease",
          }}
        >
          <img style={{ width: "100vw" }} src={img1} alt="obrero con casco" />
          <p
            style={{
              position: "absolute",
              bottom: "20%",
              left: "15%",
              textAlign: "start",
              color: "white",
              fontSize: "2rem",
            }}
          >
            <span style={{ fontFamily: "exoBold" }}>
              Potenciamos <br /> tus proyectos <br />
            </span>{" "}
            mediante soluciones <br /> avanzadas
          </p>
        </div>
      </div>
      <button
        onClick={() => changeOrder("left")}
        style={{
          position: "absolute",
          left: "2%",
          bottom: "50%",
          background: "none",
          border: "none",
        }}
      >
        <img
          style={{
            transform: "rotate(180deg)",
            width: "2rem",
            filter: "invert(100%)",
          }}
          src={arrow}
          alt="left arrow"
        />
      </button>
      <button
        onClick={() => changeOrder("right")}
        style={{
          position: "absolute",
          right: "2%",
          bottom: "50%",
          background: "none",
          border: "none",
        }}
      >
        <img
          style={{ width: "2rem", filter: "invert(100%)" }}
          src={arrow}
          alt="right arrow"
        />
      </button>
    </div>
  );
}
export default Hero;
