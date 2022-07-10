export default function ChangeEmailPage() {
	return (
		<form className="my-4 mx-2 max-w-xl rounded border-2 border-solid border-gray-300 bg-white sm:mx-auto">
			<div
				className="border-b-solid border-b-2 border-b-gray-300 bg-gray-100 p-3 text-center text-xl
                font-bold text-indigo-600">
				CHANGE EMAIL
			</div>

			<div className="p-6">
				<div className="mb-6">
					<label className="mb-2 block font-semibold">Password</label>
					<div className="relative">
						<input
							className="w-full rounded border-2 border-red-600 p-2 outline-none 
                          focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
						/>
						<div className="material-icons absolute top-1/2 right-2 -translate-y-1/2 text-red-600">
							info_outline
						</div>
					</div>
					<div className="mt-1 text-sm text-red-600">Password is required</div>
				</div>

				<div className="mb-6">
					<label className="mb-2 block font-semibold">New Email</label>
					<input
						className="w-full rounded border-2 border-gray-300 p-2 outline-none 
                      focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
					/>
					<div className="mt-1 text-sm text-gray-600">
						We'll send a email reset link to this email
					</div>
				</div>

				<button
					className="rounded bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-800
                    focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-indigo-400">
					Send Link
				</button>
			</div>
		</form>
	)
}
