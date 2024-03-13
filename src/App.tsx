import { useState } from 'react'
import './styles/App.css'
import { EduInfoType, GenInfoType, PracInfoType } from './types'

function App() {
	const [loading, setLoading] = useState<boolean>(true)
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [genInfo, setGenInfo] = useState<GenInfoType>({
		name: '',
		email: '',
		phone: '',
	})
	const [eduInfo, setEduInfo] = useState<EduInfoType>({
		school: '',
		study: '',
		date: '',
	})
	const [pracInfo, setPracInfo] = useState<PracInfoType>({
		company: '',
		position: '',
		responsibilities: [],
		startDate: '',
		endDate: '',
	})

	const handleGenSubmit = () => {
		console.log('Gen Submit')
	}
	const handleInfoSubmit = () => {
		console.log('Info Submit')
	}
	const handlePracSubmit = () => {
		console.log('Prac Submit')
	}

	const handleEdit = () => {
		console.log('Edit Click')
	}
	const handleDelete = () => {
		console.log('Delete Click')
	}

	return (
		<>
			{/* {loading && <div>Loading...</div>} */}
			<h2>CV Builder</h2>
			<div>
				<h2>General</h2>
				{/* Form shows when submitting is false, info when true */}
				<div>
					<p>Name: {genInfo.name}</p>
					<p>Email: {genInfo.email}</p>
					<p>Phone Number: {genInfo.phone}</p>
					{/* Edit button will switch submitting to false */}
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
				<form onSubmit={handleGenSubmit}>
					<label>Name:</label>
					<input />
					<label>Email:</label>
					<input />
					<label>Phone Number:</label>
					<input />
					<button type="submit">Submit</button>
				</form>
			</div>
			<div>
				<h2>Educational</h2>
				<div>
					<p>School: {eduInfo.school}</p>
					<p>Study: {eduInfo.study}</p>
					<p>Date: {eduInfo.date}</p>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
				<form onSubmit={handleInfoSubmit}>
					<label>School:</label>
					<input />
					<label>Study:</label>
					<input />
					<label>Date:</label>
					<input />
					<button type="submit">Submit</button>
				</form>
			</div>
			<div>
				<h2>Practical</h2>
				<div>
					<p>Company: {pracInfo.company}</p>
					<p>Position: {pracInfo.position}</p>
					<p>Responsibilities: {pracInfo.responsibilities}</p>
					<p>Start Date: {pracInfo.startDate}</p>
					<p>End Date: {pracInfo.endDate}</p>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
				<form onSubmit={handlePracSubmit}>
					<label>Company:</label>
					<input />
					<label>Position:</label>
					<input />
					<label>Responsibilities:</label>
					<input />
					<label>Start Date:</label>
					<input />
					<label>End Date:</label>
					<input />
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	)
}

export default App
