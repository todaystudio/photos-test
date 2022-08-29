import React, { useEffect } from 'react'
import s from './gallery.module.scss'
import GalleryItem from './components/GalleryItem/GalleryItem'
import { useGallery } from './hooks/useGallery'
import { Loader } from '../../ui/Loader/Loader'

const Gallery = () => {
	const { photos, loading, getPhotos } = useGallery()
	useEffect(() => {
		Promise.all([getPhotos()])
		// eslint-disable-next-line
	}, [])

	return (
		<>
			{loading && <Loader />}
			<div className={s.gallery}>
				{photos.map((i) => (
					<GalleryItem info={i} key={i.id} />
				))}
			</div>
		</>
	)
}

export { Gallery }
