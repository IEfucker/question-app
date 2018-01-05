import React, { Component } from "react"
import "./SliderControl.css"
import { Button, MessageBox, Message } from "element-react"
import PropTypes from "prop-types"

import "element-theme-default"

class SliderControl extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		let { hasBeenAnswered, match, length } = this.props,
			{ index } = match.params
		// percent = +index/+length*100
		return (
			<div className="slider-control">
				<div className="control-contain">
					{+index > 1 ? (
						<Button className="prev" type="success" size='large' onClick={
							this.prev.bind(this)
						}>上一题</Button>
					) : ("")}
					{+index < +length ? (
						<Button className="next" type="success" size='large' onClick={
							this.next.bind(this)
						} disabled={!hasBeenAnswered}>下一题</Button>
					) : ("")}
					{+index === +length ? (
						<Button className="next" type="success" size='large' onClick={
							this.submit.bind(this)
						} disabled={!hasBeenAnswered}>提交</Button>
					) : ("")}
				</div>


			</div>
		)
	}

	next() {
		let { match } = this.props,
			index = match.params.index
		this.goto(+index + 1)
	}

	prev() {
		let { match } = this.props,
			index = match.params.index
		this.goto(+index - 1)
	}

	submit() {
		let { submit, answer } = this.props
		if (answer.includes(undefined)) {
			MessageBox.confirm("存在未回答的题目，是否仍然提交?", "提示", {
				type: "warning"
			}).then(() => {
				// Message({
				//   type: 'success',
				//   message: '提交成功!'
				// });
			}).catch(() => {
				Message({
					type: "info",
					message: "请填写完整后提交"
				})
			})
		}
		submit()
	}

	goto(index) {
		let { match, history, testPath } = this.props
		history.push(`${testPath}${match.params.id}/${index}`)
	}
}

SliderControl.propTypes = {
	hasBeenAnswered: PropTypes.bool.isRequired,
	match: PropTypes.object.isRequired,
	length: PropTypes.number.isRequired,
	history:PropTypes.object.isRequired,
	testPath:PropTypes.string.isRequired
}

export default SliderControl
