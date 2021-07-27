import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Globals/Navbar'
import CatalogList from './components/Pages/CatalogList'
import SingleCatalogPage from './components/Pages/SingleCatalogPage';
import FavoritesPage from './components/Pages/FavoritesPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={CatalogList} />
        <Route path="/singleCatalogPage/:id" component={SingleCatalogPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Router>
  );
}

export default App;
