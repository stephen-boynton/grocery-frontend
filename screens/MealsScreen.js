import React from 'react';
import t from 'tcomb-form-native';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Form from '../components/Form';
import MostUsedCard from '../components/MostUsedCard'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  mealForm = t.struct({
    'Meal Name': t.String,
    'Description': t.String,
    Ingredients: t.String,
    Favorite: t.Boolean
  })

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.header}>Meals</Text>
        <TouchableHighlight style={styles.button}>
          <Text>Add New</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text>Browse</Text>
        </TouchableHighlight>
        <View style={styles.mostUsed}>
          <Text style={styles.subHeader}>Most Used</Text>
          <MostUsedCard style={styles.card}
            name='Ham and Swiss'
            description='A tasty treat of both ham AND swiss :D'
            ingredients={['ham', 'swiss', 'love', 'heat']}
            uses='5'
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
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#74b9ff',
    flex: 1
  },
  button: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
  },
  header: {
    paddingTop: 50,
    fontSize: 30,
    color: 'white'
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  mostUsed: {
    padding: 5,
    backgroundColor: 'white'
  }
});
