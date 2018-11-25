import t from 'tcomb-form-native';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


const Form = t.form.Form;

const Meal = t.struct({
  'Meal Name': t.String,
  'Description': t.String,
  Ingredient: t.String
})

export default class MealForm extends Component {
  render() {
    return (
      <View>
        <Form type={Meal} />
      </View>
    )
  }
}