import { connect } from "react-redux"
import Slider from "../components/Slider"
import { fetchTest, answer } from "../actions"

const mapStateToProps = (state) => ({
	test: state.questions,
	answer:state.answer,
	length:state.questions.length
})

const mapDispatchToProps = (dispatch) => ({
	getTest: (id) => {
		dispatch(fetchTest(id))
	},
	chooseAnswer: (qIndex, optIndex) => {
		dispatch(answer(+qIndex, +optIndex))
	}
})

const SliderList = connect(
	mapStateToProps,
	mapDispatchToProps
)(Slider)

export default SliderList
