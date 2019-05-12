import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import main from './styles';

export default class CopyTest extends React.Component {
  render() {
    const { copy } = this.props;
    
    return (
      <View style={main.container}>
        <Text>{ copy }</Text>
      </View>
    );
  }
}

CopyTest.propTypes = {
    copy: PropTypes.string,
}

CopyTest.defaultProps = {
    copy: 'asd',
}