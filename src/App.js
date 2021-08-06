import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPart } from "./components/SearchPart";
import { Products } from "./components/Products";
import "./App.less";
// import Splide from "./components/TopCateg";
import { TopCateg } from "./components/TopCateg";

//layouts
import { MainLayout } from "./layouts/MainLayout/index.jsx";
import { SectionLayout } from "./layouts/SectionLayout/index.jsx";

//pages
import { Home } from "./pages/Home";
//baby
import { Sections } from "./pages/Sections";
import { BabyWear } from "./pages/BabyWear";
import { BabySwimWear } from "./pages/BabySwimWear";
//girls
import { GirlsDresses } from "./pages/GirlsDresses";
import { GirlsTops } from "./pages/GirslTops";
import { GirlsAccessories } from "./pages/GirlsAccessories";
//boys
import { BoysTops } from "./pages/BoysTops";
import { BoysBottoms } from "./pages/BoysBottoms";
import { BoysWear } from "./pages/BoysWear";

//diapers
import { SwimDiaper } from "./pages/SwimDiaper";
import { ReusableDiaper } from "./pages/ReusableDiaper";
import { PowerBaby } from "./pages/PowerBaby";
import { BabyRushCream } from "./pages/BabyRushCream";

//toys

import { BabyParms } from "./pages/BabyParms";
import { ActionToy } from "./pages/ActionToy";
import { Dolls } from "./pages/Dolls/index.jsx";
import { Sale } from "./pages/Sale";

function App() {
  return (
    <div className="App">
       <Header />
      <SearchPart />
      <Products /> 
      <TopCateg/>
      {/* <Splide/>  */}
       <Footer />
    </div>
  );
}

export default App;
