import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import PostItem from "./PostItem";

class PostsList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderTableBody() {
		return this.props.posts.map(post => {
			return (
				<tr key={post.id}>
					<td>{post.title}</td>
					<td>{post.body}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div className="ui segment">
				<h3> Posts </h3>
				<div className="ui cards">
					{this.props.posts.map(post => (
						<PostItem key={post.id} post={post} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostsList);
