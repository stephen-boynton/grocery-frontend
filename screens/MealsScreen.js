import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import MealForm from '../components/MealForm';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Create New Meals Here</Text>
        <MealForm />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  title: {
    paddingTop: 50,
    textAlign: 'center',
    fontSize: 30
  }
});
