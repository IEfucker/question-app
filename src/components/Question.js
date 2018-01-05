import React, { Component } from "react"
import "./Question.css"
import { Carousel, Radio } from "element-react"

class Question extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let { answer,q,index } = this.props
		return (
			<div className="question-contain">
				<div className="question">{index + 1}. {q.question}</div>
				<ul className="option-list">
					{q.options.map((opt, oIndex) => (
						<li
							key={oIndex}
						>
							<Radio value={oIndex} checked={answer[index] === oIndex} onChange={
								this.onChange.bind(this)
							}>{opt}</Radio>
						</li>
					))}
				</ul>
			</div>
		)
	}

	onChange(value) {
		const { chooseAnswer, cIndex } = this.props
		chooseAnswer(cIndex, value)
	}
}

export default Question
