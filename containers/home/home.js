import React from "react";
// import PropTypes from 'prop-types';
import { StyleSheet, View, Button } from "react-native";
import CopyTest from "../../components/copy-test/copy-test.js";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CopyTest copy="HENLO" />
        <Button
          title="Go to page"
          // onPress={() =>
          //   this.props.navigation.navigate('Nba')
          // }
        />
      </View>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
