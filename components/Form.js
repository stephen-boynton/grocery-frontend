import t from 'tcomb-form-native';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const Form = t.form.Form;

export default class MealForm extends Component {
  render() {
    return (
      <View>
        <Form type={this.props.type} />
      </View>
    )
  }
}