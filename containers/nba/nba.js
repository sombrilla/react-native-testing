import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import main from './styles';
import EventCard from '../../components/event-card/event-card.js';

export default class Nba extends React.Component {
  render() {
    
    return (
      <View style={main.container}>
        <EventCard copy="Watch Blazers @ Nuggets" />
        <EventCard copy="Watch Blazers @ Nuggets" />
        <EventCard copy="Watch Blazers @ Nuggets" />
      </View>
    );
  }
}

// Nba.propTypes = {}

// Nba.defaultProps = {}


