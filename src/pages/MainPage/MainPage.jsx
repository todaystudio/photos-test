import React, { useContext } from 'react'
import { Gallery } from '../../components/gallery/Gallery'
import { Header } from '../../components/header/Header'
import { ModalContext } from '../../context/modal/modalContext'
import { Modal } from '../../components/modal/Modal'

const MainPage = () => {
	const { isShow } = useContext(ModalContext)

	return (
		<>
			{isShow && <Modal />}
			<Header />
			<Gallery />
		</>
	)
}

export { MainPage }
