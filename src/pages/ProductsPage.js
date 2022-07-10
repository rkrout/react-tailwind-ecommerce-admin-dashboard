import { Link } from "react-router-dom"

export default function ProductsPage() {
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
				<table className="min-w-1280 w-full text-center">
					<thead>
						<tr className="bg-gray-100">
							<th
								width="5%"
								className="relative cursor-pointer border-2 border-solid border-gray-300 p-2">
								ID
								<span className="material-icons absolute">arrow_drop_down</span>
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								NAME
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								PRICE
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								IMAGE
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								STOCK
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								CATEGORY
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								FEATURED
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								ACTIVE
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								CREATED AT
							</th>
							<th className="cursor-pointer border-2 border-solid border-gray-200 p-2">
								ACTION
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Striped Men Round Neck Light Green T-Shirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								₹ 455
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<img
									src="https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078__340.png"
									alt=""
									className="mx-auto h-16 w-16 rounded object-cover"
								/>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Tshirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-green-600">
									check_circle_outline
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-red-600">
									highlight_off
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<Link
									to="/edit-product/1"
									className="material-icons rounded bg-yellow-600 p-1 text-white transition-colors 
                                	duration-300 hover:bg-yellow-800">
									edit
								</Link>
								<button
									className="material-icons ml-1 rounded bg-red-600 p-1 text-white 
                                	transition-colors duration-300 hover:bg-red-800">
									delete
								</button>
							</td>
						</tr>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Striped Men Round Neck Light Green T-Shirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								₹ 455
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<img
									src="https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078__340.png"
									alt=""
									className="mx-auto h-16 w-16 rounded object-cover"
								/>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Tshirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-green-600">
									check_circle_outline
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-red-600">
									highlight_off
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<button
									className="material-icons rounded bg-yellow-600 p-1 text-white transition-colors 
                                	duration-300 hover:bg-yellow-800">
									edit
								</button>
								<button
									className="material-icons ml-1 rounded bg-red-600 p-1 text-white 
                                	transition-colors duration-300 hover:bg-red-800">
									delete
								</button>
							</td>
						</tr>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Striped Men Round Neck Light Green T-Shirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								₹ 455
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<img
									src="https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078__340.png"
									alt=""
									className="mx-auto h-16 w-16 rounded object-cover"
								/>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Tshirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-green-600">
									check_circle_outline
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-red-600">
									highlight_off
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<button
									className="material-icons rounded bg-yellow-600 p-1 text-white transition-colors 
                                	duration-300 hover:bg-yellow-800">
									edit
								</button>
								<button
									className="material-icons ml-1 rounded bg-red-600 p-1 text-white 
                                	transition-colors duration-300 hover:bg-red-800">
									delete
								</button>
							</td>
						</tr>
						<tr className="striped hover:bg-gray-100">
							<td className="border-2 border-solid border-gray-200 p-2">1</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Striped Men Round Neck Light Green T-Shirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								₹ 455
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<img
									src="https://cdn.pixabay.com/photo/2014/03/24/13/42/t-shirt-294078__340.png"
									alt=""
									className="mx-auto h-16 w-16 rounded object-cover"
								/>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">15</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Tshirt
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-green-600">
									check_circle_outline
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<span className="material-icons text-red-600">
									highlight_off
								</span>
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								Jan 12, 2022
							</td>
							<td className="border-2 border-solid border-gray-200 p-2">
								<button
									className="material-icons rounded bg-yellow-600 p-1 text-white transition-colors 
                                	duration-300 hover:bg-yellow-800">
									edit
								</button>
								<button
									className="material-icons ml-1 rounded bg-red-600 p-1 text-white 
                                	transition-colors duration-300 hover:bg-red-800">
									delete
								</button>
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
