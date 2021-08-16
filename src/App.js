import "./App.less";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Box } from "./components/Box";
import { All } from "./All";
import { Cart } from "./components/Cart";
import Pay from "./components/Pay";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout" component={Pay} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Box} />
          <Route path="/" component={All} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
