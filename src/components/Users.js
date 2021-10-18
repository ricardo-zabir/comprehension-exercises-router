import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const id  = this.props.location.pathname !== '/users' ? this.props.match.params.id : 0
    return (
      <div>
        <h2>Users</h2>
        <p>{ greetingsMessage}, my awesome Users component </p>
        <p> Id do usuário: {id}</p>
      </div>
    );
  }
};

export default Users;
