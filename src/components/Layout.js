import Navigation from "./Navigation"
import { Outlet } from "react-router-dom"

export default function Layout() {
	return (
		<>
			<Navigation />
			<div className="h-screen overflow-y-auto bg-gray-200 pt-16">
				<Outlet />
			</div>
		</>
	)
}
