import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Here's Your Grocery List</Text>
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
