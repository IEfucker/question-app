import { fetchTestService } from "../service"

export const REQUEST_START = "REQUEST_START"

export const requestStart = (id, dType) => ({
	type: REQUEST_START,
	dType,
	id
})

export const REQUEST_END = "REQUEST_END"

export const requestEnd = (id, dType) => ({
	type: REQUEST_END,
	dType,
	id
})

export const QUESTION_FETCHED = "QUESTION_FETCHED"

export const questionFetched = (id, test) => ({
	type: QUESTION_FETCHED,
	id,
	test,
	receivedAt: Date.now()
})

export const fetchTest = (id) => {
	const dType = "test"
	return (dispatch,getState) => {
		let state = getState()
		if(state.questions&&state.questions.length) return
		dispatch(requestStart(id, dType))
		return fetchTestService(id).then(test => {
			dispatch(requestEnd(id, dType))
			dispatch(questionFetched(id, test))
		})
	}
}

export const ANSWER = "ANSWER"

export const answer = (qIndex, optIndex) => ({
	type: ANSWER,
	qIndex,
	optIndex
})
