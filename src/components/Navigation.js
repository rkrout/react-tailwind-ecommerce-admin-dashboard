import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navigation() {
	const [isSidebarOpened, setIsSidebarOpened] = useState(false)

	return (
		<>
			<div className="fixed left-0 right-0 top-0 z-10 flex h-16 items-center gap-4 bg-indigo-700 px-6 text-white shadow">
				<div
					className="material-icons cursor-pointer text-2xl"
					onClick={() => setIsSidebarOpened(!isSidebarOpened)}>
					menu
				</div>
				<div className="text-xl font-bold">SHOPPINGLYX ADMIN</div>
			</div>

			<div
				className={`fixed top-16 bottom-0 z-10 overflow-y-auto bg-indigo-600 text-white shadow transition-all duration-500 ease-in-out ${
					isSidebarOpened ? "left-0" : "-left-64"
				} w-64`}>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">home</div>
					<div>Dashboard</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/category"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">menu</div>
					<div>Category</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/create-category"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">add_circle</div>
					<div>Add Category</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/product"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">inventory</div>
					<div>Product</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/create-product"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">add_circle</div>
					<div>Add Product</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/order"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">menu</div>
					<div>Order</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/user"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">people</div>
					<div>User</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/review"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">remove_red_eye</div>
					<div>Review</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/setting"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">settings</div>
					<div>Setting</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="edit-account"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">edit</div>
					<div>Edit Account</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/change-email"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">email</div>
					<div>Change Email</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/change-password"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">lock</div>
					<div>Change Password</div>
				</NavLink>
				<NavLink
					onClick={() => setIsSidebarOpened(false)}
					to="/logout"
					className={({ isActive }) =>
						`flex cursor-pointer items-center gap-6 border-l-4 p-4 hover:border-l-indigo-800 hover:bg-indigo-500 ${
							isActive
								? "border-l-indigo-800 bg-indigo-500"
								: "border-l-transparent"
						}`
					}>
					<div className="material-icons">logout</div>
					<div>Logout</div>
				</NavLink>
			</div>
		</>
	)
}
