import { Link } from "react-router-dom"

export default function UsersPage() {
	return (
		<div>
			<div className="mx-4 mt-3 flex items-center gap-2 border-b-2 border-gray-400 pb-3 md:mx-6">
				<Link
					to="/order"
					className="text-indigo-800 hover:underline">
					Order
				</Link>
				<div className="text-lg">{">"}</div>
				<div className="text-gray-600">Details</div>
			</div>

			<div className="mx-4 mt-4 rounded border-2 border-solid border-gray-300 bg-white md:mx-6">
				<div
					className="border-b-solid border-b-2 border-b-gray-300 bg-gray-100 p-3 text-center text-xl font-bold
                  text-indigo-600">
					PRODUCTS OF ORDER NO 2034
				</div>
				<div className="p-4 md:p-6">
					<div className="overflow-x-auto">
						<table className="min-w-1280 w-full text-center">
							<thead>
								<tr className="bg-gray-100">
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
										QUANTITY
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="striped hover:bg-gray-100">
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
									<td className="border-2 border-solid border-gray-200 p-2">
										15
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className="my-4 flex flex-col gap-4 lg:mx-6 lg:flex-row">
				<div className="lg:w-600 w-full max-w-xl rounded border-2 border-solid border-gray-300 bg-white">
					<div
						className="border-b-solid border-b-2 border-b-gray-300 bg-gray-100 p-3 text-center text-xl font-bold
                	  text-indigo-600">
						SHIPPING ADDRESS
					</div>
					<div className="p-4 md:p-6">
						<div className="overflow-x-auto">
							<table className="w-full text-left">
								<tbody>
									<tr className="striped hover:bg-gray-100">
										<td className="border-2 border-solid border-gray-200 p-2">
											Name
										</td>
										<td className="border-2 border-solid border-gray-200 p-2">
											Rajesh Kumar Rout
										</td>
									</tr>
									<tr className="striped hover:bg-gray-100">
										<td className="border-2 border-solid border-gray-200 p-2">
											Mobile
										</td>
										<td className="border-2 border-solid border-gray-200 p-2">
											56876656655
										</td>
									</tr>
									<tr className="striped hover:bg-gray-100">
										<td className="border-2 border-solid border-gray-200 p-2">
											Locality
										</td>
										<td className="border-2 border-solid border-gray-200 p-2">
											Jajpur, Odisha
										</td>
									</tr>
									<tr className="striped hover:bg-gray-100">
										<td className="border-2 border-solid border-gray-200 p-2">
											City
										</td>
										<td className="border-2 border-solid border-gray-200 p-2">
											Banglore
										</td>
									</tr>
									<tr className="striped hover:bg-gray-100">
										<td className="border-2 border-solid border-gray-200 p-2">
											State
										</td>
										<td className="border-2 border-solid border-gray-200 p-2">
											Odisha
										</td>
									</tr>
									<tr className="striped hover:bg-gray-100">
										<td className="border-2 border-solid border-gray-200 p-2">
											Pincode
										</td>
										<td className="border-2 border-solid border-gray-200 p-2">
											4555555
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div
					className="rounded border-2 border-solid border-gray-300 bg-white"
					style={{ maxWidth: 300, height: "fit-content" }}>
					<label className="block border-b-2 border-b-gray-300 bg-gray-100 p-3 pl-6 text-xl font-bold text-indigo-600">
						STATUS
					</label>
					<div className="p-6">
						<select
							className="w-full rounded border-2 border-solid border-gray-300 p-2 outline-none 
                        focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600">
							<option>----</option>
							<option>Pending</option>
							<option>Delivered</option>
							<option>Rejected</option>
							<option>Shipped</option>
						</select>
						<button
							className="mt-6 rounded bg-indigo-600 px-4 py-2 text-white transition-colors duration-300
                 			focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
