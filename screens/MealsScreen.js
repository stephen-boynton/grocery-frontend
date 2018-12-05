import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/HomePageCards'
import global from '../styles/global';
import MealFealModal from "../components/Form"

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayModal: false
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
      <View style={styles.view}>
        <MealFealModal isVisible={this.state.displayModal} close={this._closeModal} />
        <Text style={global.pageHeader}>Meals</Text>
        <View style={styles.buttons}>
          <Button style={styles.button} onPress={this._onPress('addMeal')} title='Add New' />
          <Button onPress={this._onPress('browse')} title='Browse' />
        </View>
        <View style={styles.cards}>
          <Card style={styles.card}
            title='Most Used'
            name='Ham and Swiss'
            additionalInfo='Times Used: 5'
            navigation={this.props.navigation}
          />
          <Card style={styles.card}
            title='Random Favorite'
            name='Lemon Chicken'
            additionalInfo='Zesty, delicious chicken.'
            navigation={this.props.navigation}
          />
        </View>
      </View>
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
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-around',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    height: 280
  }
});
