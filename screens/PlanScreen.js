import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../components/HomePageCards'
import global from '../styles/global';
import PlanForm from "../components/PlanForm"
import t from 'tcomb-form-native';

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
      ],
      mealList: t.struct({
        Meals: t.list(t.enums({
          lasanga: 'Lasanga',
          buffufol: 'Buffalo Chicken',
          tburger: 'Turkey Burgers',
          hm: 'Ham Sandwiches',
          mbs: 'Motzah Ball Soup',
          cp: 'Christmas Pudding',
          che: 'Cheerios',
          che1: 'Cheerios',
          che2: 'Cheerios',
          che3: 'Cheerios',
          che4: 'Cheerios',
          che5: 'Cheerios',
          che6: 'Cheerios',
          che7: 'Cheerios',
          che8: 'Cheerios',
          che9: 'Cheerios',
          che10: 'Cheerios',
          che11: 'Cheerios',
          che12: 'Cheerios',
          che13: 'Cheerios',
        }))
      })
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
        <PlanForm
          isVisible={this.state.displayModal}
          close={this._closeModal}
          mealList={this.state.mealList}
        />
        <Text style={global.pageHeader}>Plans</Text>
        <View style={styles.buttons}>
          <Button style={styles.button} onPress={this._onPress('addMeal')} title='Add New' />
          <Button onPress={this._onPress('browse')} title='Browse' />
        </View>
        <View>
          <Text style={{ ...global.header, ...styles.headerAdd }}>Current Plan: 12/2/2018</Text>
          <View style={styles.cards}>
            {this.state.mealsInPlan.map((meal, ind) => <Card
              title={ind + 1}
              key={ind}
              name={meal.name}
              navigation={this.props.navigation}
            />)}
          </View>
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
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 280
  },
  headerAdd: {
    color: 'white',
    margin: 0
  }
});
