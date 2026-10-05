import { Fejlec } from "./components/Fejlec";
import { Katrya } from "./components/kartya";
import { KisCard1 } from "./components/kiskartya1";
import { KisCard2 } from "./components/kisKartya2";
import { KisCard3 } from "./components/kiskartya3";
import { Mibol } from "./components/mibol";
import { Kepek } from "./components/kepek";
import "bootstrap/dist/css/bootstrap.min.css";
import { Erdemes } from "./components/Erdemes";
import { Lablec } from "./components/lablec";
function App() {
  const tart =
    "A pálinka a magyar gasztronómiai és kulturális hagyományok egyik ismert itala. Készítése során erjesztett gyümölcsből lepárlással állítanak elő gyümölcspárlatot" +
    "A pálinka készítésének egyik fontos alapanyaga a megfelelő minőségű, érett gyümölcs. Gyakori alapanyag például az alma, a szilva, a körte, a meggy és a kajszibarack" +
    "A jó minőségű pálinka készítésénél az alapanyag minősége és a megfelelő technológia egyaránt fontos.";
  return (
    <>
      <div className="mt-2 mb-1 p-5 bg-primary text-white rounded">
        <Fejlec
          cim={"REACT gyakorlás: Komponensekre bontás"}
          alcim={"Téma: Pálinkák és gyümölcspárlatok"}
        ></Fejlec>
      </div>
      <Katrya cim={"Mit érdemes tudni a pálinkáról?"} content={tart}></Katrya>
      <div className="row mb-2">
        <KisCard1
          cim={"Gyakori alapanyagok"}
          elemek={["alma", "körte", "szilva", "meggy", "barack"]}
        ></KisCard1>

        <KisCard2
          cim={"Népszerű pálinkák"}
          elemek={[
            "Szilvapálinka",
            "Barackpálinka",
            "Körtepálinka",
            "Almapálinka",
            "Birsalmapálinka",
          ]}
        ></KisCard2>
        <KisCard3
          cim={"Íz- és illatjegyek"}
          elemek={[
            "Gyümölcsös",
            "Illatos",
            "Érett gyümölcsre jellemző",
            "Harmonikus",
            "Tiszta lecsengésű",
          ]}
        ></KisCard3>
      </div>
      <Mibol
        cim="Miből készülhet gyümölcspárlat?"
        elemek={[
          "Alma",
          "Szilva",
          "Körte",
          "Meggy",
          "Kajszi",
          "Birsalma",
          "Cseresznye",
          "Őszibarack",
          "Szőlő",
        ]}
      ></Mibol>
      <Kepek
        banan="banan"
        bananleiras="A banán trópusi gyümölcs, amely Magyarországon nem jellemző pálinkaalapanyag."
        birsalma="Birsalma"
        birsleiras="A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is készíthető."
        mogyoro="Mogyoró"
        mogyoroleiras="A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok alapanyagai közé tartozik."
        granatalma="Gránátalma"
        granatalmaleiras="A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró maggal."
      ></Kepek>


    <Erdemes
      cim="Amit érdemes megjegyezni"
      erdemes1="A pálinka gyümölcsből készített párlat."
      erdemes2="Az alapanyag minősége jelentősen befolyásolja a késztermék tulajdonságait."
      erdemes3="A gyümölcsöt először elő kell készíteni és erjeszteni kell."
      erdemes4="Az erjesztett gyümölcscefréből lepárlással készül a párlat."
      erdemes5="A pálinka megnevezés használatát jogszabály szabályozza."
    />
    <Lablec
      author="Melhem Mohamed"
      date="2026.10.05."
    />
    </>
  );
}

export default App;
