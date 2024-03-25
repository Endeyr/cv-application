import { GenInfoType } from '../../types/index'

type GeneralInfoProps = {
	submittedGenInfo: boolean
	genInfo: GenInfoType
	handleEdit: (section: string) => void
	handleDelete: (section: string) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	handleChange: (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
		section: string
	) => void
}

const GeneralInfo = ({
	submittedGenInfo,
	genInfo,
	handleEdit,
	handleDelete,
	handleSubmit,
	handleChange,
}: GeneralInfoProps) => {
	return (
		<div>
			<h2 className="header">General</h2>
			{/* Form shows when submitted is false, info when true */}
			{submittedGenInfo ? (
				<div className="info">
					<p>Name: {genInfo.name}</p>
					<p>Email: {genInfo.email}</p>
					<p>Phone Number: {genInfo.phone}</p>
					{/* Edit button will switch submitted to false */}
					<button
						className="button edit-button"
						onClick={() => handleEdit('gen')}
					>
						Edit
					</button>
					<button
						className="button delete-button"
						onClick={() => handleDelete('gen')}
					>
						Delete
					</button>
				</div>
			) : (
				<form id="genForm" className="form" onSubmit={handleSubmit}>
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
					<button className="button submit-button" type="submit">
						Submit
					</button>
				</form>
			)}
		</div>
	)
}
export default GeneralInfo
