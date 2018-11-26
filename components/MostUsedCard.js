import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default class MealForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.header}>Meal: {this.props.name}</Text>
        <Text>Times Used: {this.props.uses}</Text>
        <Text>Description: {this.props.description}</Text>
        <Text>ingredients:</Text>
        {(() => this.props.ingredients.map(i => <Text key={i}>{i}</Text>))()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    display: 'flex'
  },
  header: {
    fontSize: 18
  },
  meta: {

  },
  list: {
    textAlign: 'center'
  }
})