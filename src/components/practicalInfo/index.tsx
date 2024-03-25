import { PracInfoType } from '../../types/index'

type PracticalInfoProps = {
	submittedPracInfo: boolean
	pracInfo: PracInfoType
	handleEdit: (section: string) => void
	handleDelete: (section: string) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleChange: (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
		section: string
	) => void
}

const PracticalInfo = ({
	submittedPracInfo,
	pracInfo,
	handleEdit,
	handleDelete,
	handleSubmit,
	handleChange,
}: PracticalInfoProps) => {
	return (
		<div>
			<h2 className="header">Practical</h2>
			{submittedPracInfo ? (
				<div className="info">
					<p>Company: {pracInfo.company}</p>
					<p>Position: {pracInfo.position}</p>
					<p>Responsibilities: {pracInfo.responsibilities}</p>
					<p>Start Date: {pracInfo.startDate}</p>
					<p>End Date: {pracInfo.endDate}</p>
					<button
						className="button edit-button"
						onClick={() => handleEdit('prac')}
					>
						Edit
					</button>
					<button
						className="button delete-button"
						onClick={() => handleDelete('prac')}
					>
						Delete
					</button>
				</div>
			) : (
				<form id="pracForm" className="form" onSubmit={handleSubmit}>
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
					<button className="button submit-button" type="submit">
						Submit
					</button>
				</form>
			)}
		</div>
	)
}
export default PracticalInfo
