export default function ChangePasswordPage() {
	return (
		<form className="my-4 mx-2 max-w-xl rounded border-2 border-solid border-gray-300 bg-white sm:mx-auto">
			<div
				className="border-b-solid border-b-2 border-b-gray-300 bg-gray-100 p-3 text-center text-xl
                font-bold text-indigo-600">
				CHANGE PASSWORD
			</div>
			<div className="p-6">
				<div className="mb-6">
					<label className="mb-2 block font-semibold">Old Password</label>
					<input
						className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
					/>
				</div>
				<div className="mb-6">
					<label className="mb-2 block font-semibold">New Password</label>
					<input
						className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                      focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
					/>
				</div>
				<div className="mb-6">
					<label className="mb-2 block font-semibold">
						Confirm New Password
					</label>
					<input
						className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                      focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
					/>
				</div>
				<button
					className="rounded bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-800
                    focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-indigo-400">
					Save
				</button>
			</div>
		</form>
	)
}
