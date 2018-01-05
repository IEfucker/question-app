import { QUESTION_FETCHED } from "../actions"

const questions = (state = [], action) => {
	// console.log(action)
	switch (action.type) {
	case QUESTION_FETCHED:
		return [
			...state,
			// id:action['id'],
			...action["test"]
			// [action['id']]: action['test']
		]
	default:
		return state
	}
}

export default questions
