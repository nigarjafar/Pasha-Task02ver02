import React, { Component } from "react";
import { connect } from "react-redux";
import { usersLoad } from "../actions";

class UsersTable extends Component {
	componentDidMount() {
		this.props.usersLoad();
	}

	render() {
		return (
			<div className="ui segment">
				<h3> Users </h3>
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map(user => {
							return (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { users: state.users };
};

export default connect(
	mapStateToProps,
	{ usersLoad }
)(UsersTable);
