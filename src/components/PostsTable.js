import React, { Component } from "react";
import { connect } from "react-redux";
import { postsLoad } from "../actions";

class PostsTable extends Component {
	componentDidMount() {
		this.props.postsLoad();
	}

	render() {
		return (
			<div className="ui segment">
				<h3> Posts </h3>
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						{this.props.posts.map(post => {
							return (
								<tr key={post.id}>
									<td>{post.title}</td>
									<td>{post.body}</td>
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
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ postsLoad }
)(PostsTable);
