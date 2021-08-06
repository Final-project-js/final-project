import "./App.less";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPart } from "./components/SearchPart";
import { Products } from "./components/Products";
import { TopCateg } from "./components/TopCateg";

function App() {
  return (
    <div className="App">
       <Header />
      <SearchPart />
      <Products /> 
      <TopCateg/>
       <Footer />
    </div>
  );
}

export default App;
