import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import main from './styles';
import VideoPlayer from '../../components/video-player/video-player';

export default class Event extends React.Component {
  render() {
    
    return (
      <View style={main.container}>
        <VideoPlayer />
      </View>
    );
  }
}

// Event.propTypes = {}

// Event.defaultProps = {}


