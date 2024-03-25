import { useState } from 'react'
import Container from './components/container'
import EducationInfo from './components/educationInfo'
import GeneralInfo from './components/generalInfo'
import Loading from './components/loading'
import PracticalInfo from './components/practicalInfo'
import './styles/App.css'
import { EduInfoType, GenInfoType, PracInfoType } from './types'

function App() {
	const [loading, setLoading] = useState<boolean>(false)
	const [submittedGenInfo, setSubmittedGenInfo] = useState<boolean>(false)
	const [submittedEduInfo, setSubmittedEduInfo] = useState<boolean>(false)
	const [submittedPracInfo, setSubmittedPracInfo] = useState<boolean>(false)
	const [genInfo, setGenInfo] = useState<GenInfoType>({
		name: '',
		email: '',
		phone: '',
	})
	const [eduInfo, setEduInfo] = useState<EduInfoType>({
		school: '',
		degree: '',
		date: '',
	})
	const [pracInfo, setPracInfo] = useState<PracInfoType>({
		company: '',
		position: '',
		responsibilities: '',
		startDate: '',
		endDate: '',
	})

	const handleChange = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
		section: string
	) => {
		const { name, value } = e.currentTarget
		switch (section) {
			case 'gen':
				setGenInfo((prevGenInfo) => ({ ...prevGenInfo, [name]: value }))
				break
			case 'edu':
				setEduInfo((prevEduInfo) => ({ ...prevEduInfo, [name]: value }))
				break
			case 'prac':
				setPracInfo((prevPracInfo) => ({ ...prevPracInfo, [name]: value }))
				break
			default:
				break
		}
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		if (e.currentTarget.id === 'genForm') {
			setSubmittedGenInfo(true)
		} else if (e.currentTarget.id === 'eduForm') {
			setSubmittedEduInfo(true)
		} else if (e.currentTarget.id === 'pracForm') {
			setSubmittedPracInfo(true)
		}
		setLoading(false)
	}
	const handleEdit = (section: string) => {
		switch (section) {
			case 'gen':
				setSubmittedGenInfo(false)
				break
			case 'edu':
				setSubmittedEduInfo(false)
				break
			case 'prac':
				setSubmittedPracInfo(false)
				break
			default:
				break
		}
	}
	const handleDelete = (section: string) => {
		switch (section) {
			case 'gen':
				setGenInfo({
					name: '',
					email: '',
					phone: '',
				})
				setSubmittedGenInfo(false)
				break
			case 'edu':
				setEduInfo({
					school: '',
					degree: '',
					date: '',
				})
				setSubmittedEduInfo(false)
				break
			case 'prac':
				setPracInfo({
					company: '',
					position: '',
					responsibilities: '',
					startDate: '',
					endDate: '',
				})
				setSubmittedPracInfo(false)
				break
			default:
				break
		}
	}
	if (loading) {
		return (
			<Container>
				<Loading />
			</Container>
		)
	}
	return (
		<>
			<h2 className="title">CV Builder</h2>
			<Container>
				<GeneralInfo
					submittedGenInfo={submittedGenInfo}
					genInfo={genInfo}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<EducationInfo
					submittedEduInfo={submittedEduInfo}
					eduInfo={eduInfo}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				<PracticalInfo
					submittedPracInfo={submittedPracInfo}
					pracInfo={pracInfo}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			</Container>
		</>
	)
}
export default App
