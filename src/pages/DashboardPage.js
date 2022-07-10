export default function DashboardPage() {
	return (
		<div className="mx-2 my-4 grid max-w-7xl gap-4 text-center text-white md:grid-cols-3 lg:grid-cols-4 xl:mx-auto">
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-yellow-600">
				<div className="my-8 text-center text-3xl font-bold">45</div>
				<div className="bg-yellow-700 p-2 text-center">Total Category</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-green-600">
				<div className="my-8 text-center text-3xl font-bold">67</div>
				<div className="bg-green-700 p-2 text-center">Total Products</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-gray-600">
				<div className="my-8 text-center text-3xl font-bold">765</div>
				<div className="bg-gray-700 p-2 text-center">Total User</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-red-600">
				<div className="my-8 text-center text-3xl font-bold">45</div>
				<div className="bg-red-700 p-2 text-center">Total Order</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-indigo-600">
				<div className="my-8 text-center text-3xl font-bold">67</div>
				<div className="bg-indigo-700 p-2 text-center">Pending Order</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-fuchsia-600">
				<div className="my-8 text-center text-3xl font-bold">45</div>
				<div className="bg-fuchsia-700 p-2 text-center">Delivered Order</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-rose-600">
				<div className="my-8 text-center text-3xl font-bold">45</div>
				<div className="bg-rose-700 p-2 text-center">Rejected Order</div>
			</div>
			<div className="mx-auto w-full max-w-xs overflow-hidden rounded bg-teal-600">
				<div className="my-8 text-center text-3xl font-bold">45</div>
				<div className="bg-teal-700 p-2 text-center">Shipped Order</div>
			</div>
		</div>
	)
}
