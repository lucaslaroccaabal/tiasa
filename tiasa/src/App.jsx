import "./App.css";
import Hero from "./Hero";
import TopBar from "./TopBar";
import MainCards from "./MainCards";
import StartText from "./StartText";
import EstrategiasAvanzadasSection from "./EstrategiasAvanzadasSection";
import ConsultaSection from "./ConsultaSection";
import ConsultoriaInnovacionSection from "./ConsultoriaInnovacionSection";

function App() {
  return (
    <>
      <TopBar />
      <Hero />
      <MainCards />
      <StartText />
      <EstrategiasAvanzadasSection />
      <ConsultaSection />
      <ConsultoriaInnovacionSection />
    </>
  );
}

export default App;
