import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import FeatureCards from "./components/FeatureCards";
import Noticias from "./components/Noticias";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner text="Portal de Datos Abiertos" />
      <FeatureCards />
      <Noticias />
    </>
  )
}

export default App