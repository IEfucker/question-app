import { ANSWER } from "../actions"
// test 的length固定是10，如何可配置
const answer = (state = new Array(10).fill(undefined), action) => {

	switch (action.type) {
	case ANSWER:
		return state.map((a, index) => {
			return (index === action.qIndex) ? action.optIndex : a
		})
	default:
		return state
	}
}

export default answer
