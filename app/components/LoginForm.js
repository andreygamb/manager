import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Keyboard } from 'react-native';

import { Card, CardItem, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    Keyboard.dismiss();
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  renderError() {
    if (this.props.error.length > 0) {
      return (
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
      );
    }

    return;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Card>
          <CardItem>
            <Input
              label='Email'
              placeholder='email@email.com'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardItem>

          <CardItem>
            <Input
              label='Password'
              placeholder='password'
              secureTextEntry
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardItem>

          {this.renderError()}

          <CardItem>
            {this.renderButton()}
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center',
    padding: 5
  },
  containerStyle: {
     flex: 1,
     backgroundColor: '#fff'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
