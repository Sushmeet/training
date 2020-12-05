import React from "react";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    if (!this.props.user) {
      return null;
    }
    return <div>Username: {this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state;
  const user = users.find((user) => user.id === ownProps.userId);

  return {
    user,
  };
};

export default connect(mapStateToProps)(User);
