import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ButtonComponent from './Button';

const BlogDetail = (props) => {
  const { blog } = props;
  const {
    thumbnailStyle,
    headerContentStyles,
    headerTextStyle,
    imageStyle,
    thumbnailContainerStyle,
  } = styles;
  const uri = 'https://picsum.photos/' + thumbnailStyle.height + "/" + thumbnailStyle.width + '/?random';
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: uri}}
          />
        </View>
        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{props.blog.title[0]}</Text>
          <Text>{props.blog['dc:creator'][0]}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: 'https://picsum.photos/300/300/?random' }}
          style={imageStyle}
        />
      </CardSection>
      <CardSection>
        <ButtonComponent
          onPress={() => Linking.openURL(blog.link[0])}
          text="Go to blog!!!"
        />
      </CardSection>
    </Card>
  )
}

const styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerTextStyle: {
    fontSize: 18,
  },
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
}

export default BlogDetail;
