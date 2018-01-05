import React, { Component } from "react"
import "./Slider.css"
import SliderControlContainer from "../containers/SliderControlContainer"
import { Carousel, Progress } from "element-react"
import Counter from "./Counter"
import Question from "./Question"
import PropTypes from "prop-types"

class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cIndex: 0,
		}
	}

	render() {
		let { test, answer, match, length, chooseAnswer } = this.props,
			{ index } = match.params,
			percent = +index / +length * 100
		// test是异步取到，没获取到数据什么也不显示
		if (!length) return null
		if (+index > +length || +index < 1) {
			return "index error"
		}
		return (
			<div className="slider-wrap">
				<div className="state-contain">
					<Progress percentage={percent} showText={false} status="success" />
					<Counter />
				</div>

				<div className="slider">
					<Carousel
						ref={carousel => { this.carousel = carousel }}
						autoplay={false}
						arrow="never" indicatorPosition='none'>
						{test.map((q, index) => (
							<Carousel.Item
								key={index}
							>
								<Question q={q} index={index} answer={answer} chooseAnswer={chooseAnswer} cIndex={this.state.cIndex} />
							</Carousel.Item>
						))}
					</Carousel>
				</div>
				<SliderControlContainer />
			</div>
		)
	}

	componentWillMount() {
		let { getTest, match } = this.props,
			{ id } = match.params
		getTest(id)
	}

	componentWillReceiveProps(nextProps) {
		// will be true
		// const locationChanged = nextProps.location !== this.props.location

		// INCORRECT, will *always* be false because history is mutable.
		// const locationChanged = nextProps.history.location !== this.props.history.location
		let { match } = nextProps,
			{ index } = match.params
		this.setState({
			cIndex: +index - 1
		})
	}

	// Invoked immediately after the component's updates are flushed to the DOM
	componentDidUpdate() {
		this.carousel && this.carousel.setActiveItem(+this.state.cIndex)
	}

	next() {
		this.carousel.next()
	}

	prev() {
		this.carousel.prev()
	}

	setActiveItem(index) {
		this.carousel.setActiveItem(index)
	}

}

Slider.propTypes = {
	test: PropTypes.arrayOf(PropTypes.object).isRequired,
	answer: PropTypes.array.isRequired,
	match: PropTypes.object.isRequired,
	length: PropTypes.number.isRequired,
	getTest: PropTypes.func.isRequired,
	chooseAnswer: PropTypes.func.isRequired
}

export default Slider
