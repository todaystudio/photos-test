import React, { useContext, useState } from 'react'
import s from './modal.module.scss'
import { GlobalSVGGenerator } from '../../assets/GlobalSVGGenerator/GlobalSVGGenerator'
import { ModalContext } from '../../context/modal/modalContext'

const Modal = () => {
	const { closeModal, loading, imageInfo, sendComment, isSentComment } =
		useContext(ModalContext)
	const [textArea, setTextArea] = useState('')

	const sendHandler = () => {
		sendComment(imageInfo.id, textArea)
		setTextArea('')
	}

	if (loading) <div className='loading'>Loading...</div>

	return (
		<div className={s.overlay} onClick={closeModal}>
			<div className={s.modal} onClick={(e) => e.stopPropagation()}>
				<div onClick={closeModal} className={s.cross}>
					<GlobalSVGGenerator icon={'cross'} />{' '}
				</div>

				<img className={s.image} src={imageInfo.url} alt='' />

				<div className={s.comment}>
					<div className={s.title}>Comment</div>
					<textarea
						value={textArea}
						onChange={(e) => setTextArea(e.target.value)}
						className={s.textarea}
						rows='7'
					></textarea>
					<div className={s.subTitle}>
						Write a few sentences about the photo.
					</div>
					<button
						onClick={sendHandler}
						disabled={!textArea.length}
						className={s.button}
					>
						{isSentComment ? 'Sent!' : 'Save'}
					</button>
				</div>
			</div>
		</div>
	)
}

export { Modal }
