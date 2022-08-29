import React, { useContext } from 'react'
import s from './galleryItem.module.scss'
import { ModalContext } from '../../../../context/modal/modalContext'

const GalleryItem = ({ info }) => {
	const { openModal } = useContext(ModalContext)
	return (
		<div onClick={() => openModal(info.id)} className={s.wrap}>
			<img className={s.image} src={info.url} alt='galleryPhoto' />
			<div className={s.description}>id: {info.id}</div>
		</div>
	)
}

export default React.memo(GalleryItem)
