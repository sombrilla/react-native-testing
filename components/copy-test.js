import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export default class CopyTest extends React.Component {
  render() {
    const {copy} = this.props;
    
    return (
      <View style={styles.container}>
        <Text>{copy}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
