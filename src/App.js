import "./App.less";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPart } from "./components/SearchPart";
import { TopCateg } from "./components/TopCateg";
import { Products } from "./components/Products";
import { Box } from "./components/Box";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPart />
      <TopCateg />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
