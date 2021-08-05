import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPart } from "./components/SearchPart";
import { Products } from "./components/Products";
import "./App.less";
// import Splide from "./components/TopCateg";
import { TopCateg } from "./components/TopCateg";

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
