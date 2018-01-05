import React, { Component } from "react"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom"
import "./App.css"

import WelcomeToTest from "../containers/WelcomeToTest"
import SliderList from "../containers/SliderList"
import PageNotFound from "./PageNotFound"

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						{/* 测试使用固定test id */}
						{/* 未设计首页直接跳到欢迎页 */}
						<Redirect exact from='/' to='/welcome/59142002e30f813544c277fb' />
						<Route exact path='/welcome/:id' component={WelcomeToTest} />

						<Route exact path="/test/:id/:index" component={SliderList} />
						<Route path="**" component={PageNotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
