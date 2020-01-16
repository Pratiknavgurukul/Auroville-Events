import "./App.css";
import Head from "./Components/Header";
import React, { Component } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import axios from "axios";
import Contact from "./Components/Contact";
export class App extends Component {
  state = {
    category: [],
    maindata: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:8090/events")
      .then(data => {
        console.log(data);
        var category = [];
        for (var dict of data.data) {
          if (!category.includes(dict.category)) {
            category.push(dict.category);
          }
        }
        this.setState({
          maindata: data.data,
          category
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route
            exact path="/"
            component={() => (
              <div>
                <Head List={this.state.category} />
                <Home
                  category={this.state.category}
                  maindata={this.state.maindata}
                />
              </div>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
