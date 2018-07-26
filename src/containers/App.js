import React, { Component } from "react";
import classes from './App.scss';
import Layout from "../components/Layout/Layout";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  

  render () {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
