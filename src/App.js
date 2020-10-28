import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in&up/sign-in&up";
import { auth } from "./firebase/firebase";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user.email);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </div>
    );
  }
}

export default App;
