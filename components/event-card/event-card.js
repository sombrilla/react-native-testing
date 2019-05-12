import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import main from './styles';

export default class EventCard extends React.Component {
  render() {
    const { copy } = this.props;

    const onPress = () => {
      this.props.navigation.navigate('Event');
    };
    
    return (
      <TouchableHighlight style={main.container} onPress={onPress}>
        <View>
          <View style={main.imageWrapper}>
            <Image style={main.image} source={{uri: "https://i.sportsbookreview.com/5cd73362fa71dd65a68975b7/original-blazers-vs-nuggets-game-7?d=800x800"}} />
          </View>
          <View style={main.copyWrapper}>
            <Text>{ copy }</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

EventCard.propTypes = {
    copy: PropTypes.string,
}

EventCard.defaultProps = {
    copy: '',
}


