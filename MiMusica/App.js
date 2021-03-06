/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
    <Scene key="home" component={HomeView} hideNavBar />
  </Scene>
)

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes}/>
  }
}