export default function ResetEmailPage() {
	return (
		<>
			<div className="my-4 mx-auto flex max-w-lg items-center gap-4 rounded bg-green-600 p-4 text-white shadow">
				<div className="material-icons">check</div>
				<div>Your email changed successfully !</div>
			</div>
			<div className="my-4 mx-auto flex max-w-lg items-center gap-4 rounded bg-red-600 p-4 text-white shadow">
				<div className="material-icons">info</div>
				<div>Sorry, An unknown error occur</div>
			</div>
		</>
	)
}
