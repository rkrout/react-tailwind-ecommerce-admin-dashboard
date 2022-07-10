export default function UsersPage() {
	return (
		<div
			className="relative m-4 flex flex-col gap-4 overflow-hidden rounded border-2 border-solid border-gray-300 bg-white 
        	p-6">
			<div className="flex justify-end">
				<input
					type="search"
					placeholder="Search..."
					className="rounded-l border-2 border-solid border-gray-300 p-2 
                	outline-none"
				/>
				<button
					className="material-icons rounded-r border-y-2 border-r-2 border-gray-300 bg-gray-200 px-2 
                  text-gray-600 transition-colors duration-300 hover:bg-gray-300">
					search
				</button>
			</div>

			<div className="overflow-x-auto">
				<table className="min-w-1024 w-full text-center">
					<thead>
						<tr className="bg-gray-100">
							<th className="relative cursor-pointer border-2 border-solid border-gray-300 p-2">
								ID
								<span className="material-icons absolute">arrow_drop_down</span>
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								NAME
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								EMAIL
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								TOTAL PURCHED
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								JOINED AT
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Rajesh Kumar Rout
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								rajesh@rajesh.com
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
						</tr>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Rajesh Kumar Rout
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								rajesh@rajesh.com
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
						</tr>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Rajesh Kumar Rout
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								rajesh@rajesh.com
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
						</tr>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Rajesh Kumar Rout
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								rajesh@rajesh.com
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="flex items-center justify-end gap-2">
				<div className="mr-2 text-gray-600">1 of 10 pages</div>
				<button
					className="material-icons rounded border-2 border-solid border-gray-300 bg-gray-200 p-1 
                  hover:bg-gray-300">
					arrow_left
				</button>
				<button
					className="material-icons rounded border-2 border-solid border-gray-300 bg-gray-200 p-1 
                  hover:bg-gray-300">
					arrow_right
				</button>
			</div>

			<div className="absolute inset-0 flex hidden items-center justify-center bg-black bg-opacity-20">
				<div className="rounded bg-white p-6">
					<div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-black border-b-transparent"></div>
				</div>
			</div>
		</div>
	)
}
