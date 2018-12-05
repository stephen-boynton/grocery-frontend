import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableHighlight } from 'react-native';
import global from '../styles/global';
export default class MealForm extends Component {
  constructor(props) {
    super(props)
  }

  navigateToExplore = () => {
    console.log(this.props)
    return this.props.navigation.navigate({ routeName: 'Explore' })
  }

  render() {
    return (
      <TouchableHighlight onPress={this.navigateToExplore}>
        <View style={styles.view}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={global.header}>{this.props.name}</Text>
          <Text>{this.props.additionalInfo}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: '#dfe6e9',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5
  },
})