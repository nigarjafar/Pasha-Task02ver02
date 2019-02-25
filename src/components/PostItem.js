import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class PostItem extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.post.userId);
  }

  renderUser() {
    if (!this.props.user) return null;
    return this.props.user.name;
  }

  render() {
    const { title, body } = this.props.post;
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">
            <p>{body}</p>
          </div>
        </div>
        <div className="extra content">
          <i className="user icon" />
          {this.renderUser()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === props.post.userId),
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(PostItem);
