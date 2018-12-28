import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  AsyncStorage
} from 'react-native';
import t from 'tcomb-form-native';
import { Mutation } from 'react-apollo';
import { mutations } from '../apollo';

const Form = t.form.Form;

const loginForm = t.struct({
  name: t.String,
  password: t.String
})

export default class AuthScreen extends React.Component {
  constructor(props) {
    super(props)
    this._onSubmit = this._onSubmit.bind(this);
    this.state = {
      displayModal: false
    }
  }

  static navigationOptions = {
    header: null
  }

  _onSubmit = (login) => async (e) => {
    var { name, password } = this._formRef.getValue();
    if (name && password) { // if validation fails, value will be null
      try {
        const jwt = await login({ variables: { name, password } });
        if (!jwt) return;
        await AsyncStorage.setItem('userToken', jwt.data.login.jwt);
        console.log(jwt);
      } catch (e) {
        console.error(e);
      }
    }
  }

  _buildLoginView = (login, { data }) => {
    const withLogin = this._onSubmit(login);
    return (<ScrollView style={styles.view}>
      <Text style={styles.texter}>MEALINATOR</Text>
      <View>
        <Form
          ref={ref => { this._formRef = ref }}
          type={loginForm}
        />
        <Button title="Log In" style={styles.buttons} onPress={withLogin} />
      </View>
    </ScrollView>)
  };

  render() {
    return (<Mutation mutation={mutations.LOG_IN}>
      {this._buildLoginView.bind(this)}
    </Mutation>)
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 50,
    backgroundColor: '#74b9ff',
    flex: 1
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-around',
  },
  texter: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  }
});
