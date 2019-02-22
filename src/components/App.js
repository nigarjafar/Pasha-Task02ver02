import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UsersTable from "./UsersTable";
import PostsTable from "./PostsTable";
import PostsList from "./PostsList";
import Menu from "./Menu";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="ui container" style={{ marginTop: "20px" }}>
					<Menu />
					<Route path="/" exact component={PostsList} />
					<Route path="/posts" component={PostsTable} />
					<Route path="/users" exact component={UsersTable} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
