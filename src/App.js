import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import CameraPage from './CameraPage';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="loginPage" component={LoginPage} title="Login" initial={true} hideNavBar={true} />
          <Scene key="menuPage" component={MenuPage} title="Menu" hideNavBar={true} />
          <Scene key="cameraPage" component={CameraPage} title="Camera" hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}
