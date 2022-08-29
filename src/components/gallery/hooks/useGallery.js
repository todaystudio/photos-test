import { useState } from 'react'
import axios from 'axios'

const useGallery = () => {
	const [photos, setPhotos] = useState([])
	const [loading, setLoading] = useState(false)

	const getPhotos = async () => {
		try {
			setLoading(true)
			const res = await axios.get(
				'https://boiling-refuge-66454.herokuapp.com/images'
			)
			setLoading(false)
			setPhotos(res.data)
		} catch (e) {
			console.log(e)
			setLoading(false)
		}
	}

	return { photos, loading, getPhotos }
}

export { useGallery }
