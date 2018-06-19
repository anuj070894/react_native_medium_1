import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { parseString } from 'react-native-xml2js';
import BlogDetail from './BlogDetail';

class BlogList extends Component { // Component is actually React.Component but as babel transpiles the jsx to React.createElement it expects an import of React

  state = {
    blogs: [],
  }

  componentWillMount() {
    axios.get('https://medium.com/feed/@anujbaranwal?format=json')
      .then((response) => {
        parseString(response.data, (err, data) => {
          this.setState({ blogs: data.rss.channel[0].item });
        });
      });
  }

  renderBlogs = () => {
    return this.state.blogs.map((blog) => {
      return <BlogDetail key={blog.title[0]} blog={blog} />;
	});
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderBlogs()}
      </ScrollView>
    );
  }
}

export default BlogList;
