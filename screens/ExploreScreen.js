import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native';
import global from '../styles/global';
import SearchForm from "../components/SearchComponent";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayModal: false,
      mealsInPlan: [
        { name: 'Lasanga' },
        { name: 'Buffalo Chicken' },
        { name: 'turkey burgers' },
        { name: 'rogan josh' }
      ]
    }
  }

  static navigationOptions = {
    header: null,
  };

  _onPress = which => () => {
    if (which === 'addMeal') {
      this.setState({
        displayModal: !this.state.displayModal
      })
    }

    if (which === 'browse') {
      return 'goodby'
    }
    return null;
  }

  _closeModal = () => {
    this.setState({
      displayModal: !this.state.displayModal
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          <Text style={global.pageHeader}>Explore</Text>
          <SearchForm />
        </View>

      </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#74b9ff',
    flex: 1
  }
});
