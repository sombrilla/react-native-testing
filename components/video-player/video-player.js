import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import main from './styles';

export default class VideoPlayer extends React.Component {
  render() {
    const { source } = this.props;
    
    return (
      <View style={main.container}>
        {/* <View style={main.background}> */}
        {source ? 
          <View style={main.videoWrapper}>

          </View>
          :
          <Text style={main.message}>Video not available right now</Text>
        }
        {/* </View> */}
      </View>
    );
  }
}

VideoPlayer.propTypes = {
    copy: PropTypes.string,
    source: PropTypes.string,
}

VideoPlayer.defaultProps = {
    copy: '',
    source: null,
}


