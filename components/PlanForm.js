import t from 'tcomb-form-native';
import React, { Component } from 'react';
import { View, StyleSheet, Modal, Button, ScrollView } from 'react-native';

const Form = t.form.Form;

const newPlanForm = enums => t.struct({
  Meals: t.list(enums)
})

const options = {
  fields: {
    Meals: {
      disableOrder: true,
      item: {
        label: 'Meal'
      }
    }
  }
}

export default class PlanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealList: t.enums({
        place: 'holder'
      })
    }
  }
  close() {
    this.props.close()
  }

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={this.props.close}
      >
        <ScrollView style={styles.modal}>
          <View style={styles.formwrap}>
            <Form type={this.props.mealList} options={options} />
          </View>
          <View style={styles.buttons}>
            <Button onPress={this.props.close} title='Cancel' />
            <Button onPress={this.props.close} title='Submit' />
          </View>
        </ScrollView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    padding: 15,
    backgroundColor: '#74b9ff'
  },
  buttons: {
    paddingTop: 50,
    paddingBottom: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1
  },
  formwrap: {
    padding: 10,
    backgroundColor: 'white'
  }
})