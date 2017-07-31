import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 53 }}>
      <Scene key='auth'>
        <Scene key='login' component={LoginForm} title='Login' />
      </Scene>

      <Scene key='main'>
        <Scene
          key='employeeList'
          leftTitle='Logout'
          onLeft={() => Actions.auth({direction: 'leftToRight'})}
          rightTitle='Add'
          onRight={() => Actions.employeeCreate()}
          component={EmployeeList}
          title='Employees'
        />
        <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
        <Scene key='employeeEdit' component={EmployeeEdit} title='Edit Employee' />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
