import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BlogDetail = (props) => {
  const { blog } = props;
  return (
    <Card>
	  <CardSection>
		<Text>{props.blog.title}</Text>
	  </CardSection>


	  <CardSection>
		<Text>{props.blog.title}</Text>
	  </CardSection>
    </Card>
  )
}

export default BlogDetail;
