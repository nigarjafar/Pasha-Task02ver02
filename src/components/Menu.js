import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
	render() {
		return (
			<div className="ui three item menu">
				<Link to="/" className="item">
					Home
				</Link>
				<Link to="/posts" className="item">
					Posts
				</Link>
				<Link to="/users" className="item">
					Users
				</Link>
			</div>
		);
	}
}

export default Menu;
