// import libraries to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// create the component

const App = () => <Header headerText="Blogs!" />;

// render the component
AppRegistry.registerComponent('albums', () => App);
