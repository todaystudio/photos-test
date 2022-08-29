import { CLOSE_MODAL, SENT_COMMENT, SET_LOADING, SHOW_MODAL } from '../types'

const handlers = {
	[SHOW_MODAL]: (state, { payload }) => ({
		...state,
		isShow: true,
		imageInfo: payload
	}),
	[CLOSE_MODAL]: (state) => ({
		...state,
		loading: false,
		isShow: false,
		isSentComment: false,
		imageIngo: []
	}),
	[SENT_COMMENT]: (state) => ({ ...state, isSentComment: true }),
	[SET_LOADING]: (state, { payload }) => ({ ...state, loading: payload }),
	DEFAULT: (state) => state
}

export const modalReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.DEFAULT
	return handle(state, action)
}
