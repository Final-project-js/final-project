import "./App.less";
import { BrowserRouter as Router ,  Switch } from "react-router-dom";
import "./App.less";
import {Route} from 'react-router'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchPart } from "./components/SearchPart";
import { TopCateg } from "./components/TopCateg";
import { Products } from "./components/Products";
import { Box } from "./components/Box";
import { All } from "./All";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/basket' component={Box} />
           {/* <Route path="/sign_up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={UserProfile} /> */}
          <Route path="/" exact component={All} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
