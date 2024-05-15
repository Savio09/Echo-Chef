import "./App.css";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <div className="Application">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Recipes />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/details/:id">
              <RecipeDetails />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
