import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import global from '../styles/global';
import t from 'tcomb-form-native';


const Form = t.form.Form;
const enums = t.enums({
  measl: 'Meals',
  groceries: 'Groceries',
  tags: 'Tags',
  plans: 'Plans'
})

const Search = t.struct({
  Search: t.String,
  Category: enums
})

const options = {
  style: {
    background: 'white'
  }
}


export default class SearchComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Form type={Search} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: 'white',
    width: 300
  }
})