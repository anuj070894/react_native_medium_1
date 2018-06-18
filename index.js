// import libraries to create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import BlogList from './src/components/BlogList';
// create the component

const App = () => {
  return (
    <View>
      <Header headerText="Blogs!" />
      <BlogList />
    </View>
  );
};

// render the component
AppRegistry.registerComponent('albums', () => App);
