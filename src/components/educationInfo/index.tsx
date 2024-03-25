import { EduInfoType } from '../../types/index'

type EducationInfoProps = {
	submittedEduInfo: boolean
	eduInfo: EduInfoType
	handleEdit: (section: string) => void
	handleDelete: (section: string) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleChange: (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
		section: string
	) => void
}

const EducationInfo = ({
	submittedEduInfo,
	eduInfo,
	handleEdit,
	handleDelete,
	handleSubmit,
	handleChange,
}: EducationInfoProps) => {
	return (
		<div>
			<h2 className="header">Education</h2>
			{submittedEduInfo ? (
				<div className="info">
					<p>School: {eduInfo.school}</p>
					<p>Degree: {eduInfo.degree}</p>
					<p>Date: {eduInfo.date}</p>
					<button
						className="button edit-button"
						onClick={() => handleEdit('edu')}
					>
						Edit
					</button>
					<button
						className="button delete-button"
						onClick={() => handleDelete('edu')}
					>
						Delete
					</button>
				</div>
			) : (
				<form id="eduForm" className="form" onSubmit={handleSubmit}>
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
					<button className="button submit-button" type="submit">
						Submit
					</button>
				</form>
			)}
		</div>
	)
}
export default EducationInfo
