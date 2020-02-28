import React from 'react';
import './App.css';
import { Switch, Route, NavLink } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DiscoverMoviesPage from './pages/DiscoverMoviesPage';



function App() {
  return (
    <div className="App">
      {/* <HomePage />
      <AboutPage />
      <DiscoverMoviesPage /> */}
      <nav>
        <NavLink to="/HomePage" activeStyle={{ fontweight: "bold", backgroundcolor: "light blue" }}> Home </NavLink>
        <NavLink to="/AboutPage"> About </NavLink>
        <NavLink to="/DiscoverMoviesPage"> Discover Movies </NavLink>
      </nav>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact={true} component={HomePage} />

      </Switch>
    </div >
  );
}

export default App;
