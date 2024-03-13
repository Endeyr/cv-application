import { useState } from 'react'
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
		return <div>Loading...</div>
	}
	return (
		<>
			<h2>CV Builder</h2>
			<div>
				<h2>General</h2>
				{/* Form shows when submitted is false, info when true */}
				{submittedGenInfo ? (
					<div>
						<p>Name: {genInfo.name}</p>
						<p>Email: {genInfo.email}</p>
						<p>Phone Number: {genInfo.phone}</p>
						{/* Edit button will switch submitted to false */}
						<button onClick={() => handleEdit('gen')}>Edit</button>
						<button onClick={() => handleDelete('gen')}>Delete</button>
					</div>
				) : (
					<form id="genForm" onSubmit={handleSubmit}>
						<label htmlFor="name">Name:</label>
						<input
							id="name"
							name="name"
							type="text"
							value={genInfo.name}
							onChange={(e) => handleChange(e, 'gen')}
							autoComplete="name"
						/>
						<label htmlFor="email">Email:</label>
						<input
							id="email"
							name="email"
							type="email"
							value={genInfo.email}
							onChange={(e) => handleChange(e, 'gen')}
							autoComplete="email"
						/>
						<label htmlFor="phone">Phone Number:</label>
						<input
							id="phone"
							name="phone"
							type="tel"
							value={genInfo.phone}
							onChange={(e) => handleChange(e, 'gen')}
							autoComplete="tel"
							maxLength={11}
						/>
						<button type="submit">Submit</button>
					</form>
				)}
			</div>
			<div>
				<h2>Educational</h2>
				{submittedEduInfo ? (
					<div>
						<p>School: {eduInfo.school}</p>
						<p>Degree: {eduInfo.degree}</p>
						<p>Date: {eduInfo.date}</p>
						<button onClick={() => handleEdit('edu')}>Edit</button>
						<button onClick={() => handleDelete('edu')}>Delete</button>
					</div>
				) : (
					<form id="eduForm" onSubmit={handleSubmit}>
						<label htmlFor="school">School:</label>
						<input
							id="school"
							name="school"
							type="text"
							value={eduInfo.school}
							onChange={(e) => handleChange(e, 'edu')}
						/>
						<label htmlFor="degree">Degree:</label>
						<input
							id="degree"
							name="degree"
							type="text"
							value={eduInfo.degree}
							onChange={(e) => handleChange(e, 'edu')}
						/>
						<label htmlFor="gradDate">Date:</label>
						<input
							id="gradDate"
							name="date"
							type="date"
							value={eduInfo.date}
							onChange={(e) => handleChange(e, 'edu')}
						/>
						<button type="submit">Submit</button>
					</form>
				)}
			</div>
			<div>
				<h2>Practical</h2>
				{submittedPracInfo ? (
					<div>
						<p>Company: {pracInfo.company}</p>
						<p>Position: {pracInfo.position}</p>
						<p>Responsibilities: {pracInfo.responsibilities}</p>
						<p>Start Date: {pracInfo.startDate}</p>
						<p>End Date: {pracInfo.endDate}</p>
						<button onClick={() => handleEdit('prac')}>Edit</button>
						<button onClick={() => handleDelete('prac')}>Delete</button>
					</div>
				) : (
					<form id="pracForm" onSubmit={handleSubmit}>
						<label htmlFor="company">Company:</label>
						<input
							id="company"
							name="company"
							type="text"
							value={pracInfo.company}
							onChange={(e) => handleChange(e, 'prac')}
						/>
						<label htmlFor="position">Position:</label>
						<input
							id="position"
							name="position"
							type="text"
							value={pracInfo.position}
							onChange={(e) => handleChange(e, 'prac')}
						/>
						<label htmlFor="responsibilities">Responsibilities:</label>
						<input
							id="responsibilities"
							name="responsibilities"
							type="text"
							value={pracInfo.responsibilities}
							onChange={(e) => handleChange(e, 'prac')}
						/>
						<label htmlFor="startDate">Start Date:</label>
						<input
							id="startDate"
							name="startDate"
							type="date"
							value={pracInfo.startDate}
							onChange={(e) => handleChange(e, 'prac')}
						/>
						<label htmlFor="endDate">End Date:</label>
						<input
							id="endDate"
							name="endDate"
							type="date"
							value={pracInfo.endDate}
							onChange={(e) => handleChange(e, 'prac')}
						/>
						<button type="submit">Submit</button>
					</form>
				)}
			</div>
		</>
	)
}
export default App
