import React from "react";
import { Redirect } from "react-router";

class StrictAcess extends React.Component {
  render() {
    const { user } = this.props
    return(
      <div>
        {user.password !== '1234' || user.username !== 'João' ? <Redirect to="/" /> : <p>Welcome {user.username} </p>} 
      </div>
    )
  }
}

export default StrictAcess