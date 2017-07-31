import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardItem, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }

  componentWillMount() {
      _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ value, prop });
      });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    Keyboard.dismiss();

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onFireButtonPress() {
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal : false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardItem>

        <CardItem>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardItem>

        <CardItem>
          <Button onPress={this.onFireButtonPress.bind(this)}>
            Fire Employee
          </Button>
        </CardItem>

        <Confirm
          visible={this.state.showModal}
          animation='fade'
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you wanna delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
