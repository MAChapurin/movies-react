import React from 'react';
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

// don't change the Component name "App"
export default class App extends React.Component {

  render() {
    // TODO: implement component
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
