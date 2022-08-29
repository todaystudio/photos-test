import './App.css'
import { MainPage } from './pages/MainPage/MainPage'
import { ModalState } from './context/modal/modalState'

function App() {
	return (
		<ModalState>
			<div className='App'>
				<MainPage />
			</div>
		</ModalState>
	)
}

export default App
