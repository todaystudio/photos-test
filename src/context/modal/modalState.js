import React, { useReducer } from 'react'
import { ModalContext } from './modalContext'
import { modalReducer } from './modalReducer'
import { CLOSE_MODAL, SENT_COMMENT, SET_LOADING, SHOW_MODAL } from '../types'
import axios from 'axios'

const domainUrl = 'https://boiling-refuge-66454.herokuapp.com'

export const ModalState = ({ children }) => {
	const initialState = {
		isShow: false,
		imageInfo: [],
		isSentComment: false,
		loading: false
	}
	const [state, dispatch] = useReducer(modalReducer, initialState)

	const openModal = async (id) => {
		dispatch({ type: SET_LOADING, payload: true })
		try {
			const res = await axios.get(`${domainUrl}/images/${id}`)
			dispatch({ type: SHOW_MODAL, payload: res.data })
		} catch (e) {
			console.log(e)
			dispatch({ type: SET_LOADING, payload: false })
		}
	}

	const closeModal = () => dispatch({ type: CLOSE_MODAL })

	const sendComment = async (id, text) => {
		try {
			await axios.post(`${domainUrl}/images/${id}/?comments=${text}`)
		} finally {
			dispatch({ type: SENT_COMMENT })
		}
		console.log(isSentComment)
	}

	const { isShow, loading, imageInfo, isSentComment } = state
	return (
		<ModalContext.Provider
			value={{
				isShow,
				loading,
				openModal,
				closeModal,
				sendComment,
				isSentComment,
				imageInfo
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
