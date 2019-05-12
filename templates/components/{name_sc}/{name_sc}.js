import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import main from './styles';

export default class {{name_pc}} extends React.Component {
  render() {
    const { copy } = this.props;
    
    return (
      <View style={main.container}>
        <Text>{ copy }</Text>
      </View>
    );
  }
}

{{name_pc}}.propTypes = {
    copy: PropTypes.string,
}

{{name_pc}}.defaultProps = {
    copy: '',
}


