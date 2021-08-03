import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import { SearchPart } from "./components/SearchPart";
import { Products } from "./components/Products";
import "./App.less";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchPart /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
