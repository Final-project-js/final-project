import { routes } from "./routes.js";
import { BrowserRouter, Switch } from "react-router-dom";
// import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
// import { SearchPart } from "./components/SearchPart";
// import { Products } from "./components/Products";
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
      <BrowserRouter>
        <Switch>
          <SectionLayout path={routes.baby_clothes} component={Sections} />
          <SectionLayout path={routes.baby_sleepingwear} component={BabyWear} />
          <SectionLayout path={routes.baby_swimwear} component={BabySwimWear} />
          <SectionLayout path={routes.girls_dress} component={GirlsDresses} />
          <SectionLayout path={routes.girls_top} component={GirlsTops} />
          <SectionLayout path={routes.girls_acc} component={GirlsAccessories} />
          <SectionLayout path={routes.boys_top} component={BoysTops} />
          <SectionLayout path={routes.boys_bottom} component={BoysBottoms} />
          <SectionLayout path={routes.boys_activewear} component={BoysWear} />
          <SectionLayout path={routes.swim_diaper} component={SwimDiaper} />
          <SectionLayout
            path={routes.reusable_diaper}
            component={ReusableDiaper}
          />
          <SectionLayout path={routes.baby_powder} component={PowerBaby} />
          <SectionLayout path={routes.baby_cream} component={BabyRushCream} />
          <SectionLayout path={routes.fashion_dolls} component={Dolls} />
          <SectionLayout path={routes.baby_parms} component={BabyParms} />
          <SectionLayout path={routes.action_toy} component={ActionToy} />
          <SectionLayout path={routes.sale_items} component={Sale} />

          <MainLayout path={routes.home} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
