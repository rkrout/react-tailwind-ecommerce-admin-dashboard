import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import CategoriesPage from "./pages/CategoriesPage"
import ChangeEmailPage from "./pages/ChangeEmailPage"
import ChangePasswordPage from "./pages/ChangePasswordPage"
import CreateCategoryPage from "./pages/CreateCategoryPage"
import CreateProductPage from "./pages/CreateProductPage"
import DashboardPage from "./pages/DashboardPage"
import EditAccountPage from "./pages/EditAccountPage"
import EditCategoryPage from "./pages/EditCategoryPage"
import EditProductPage from "./pages/EditProductPage"
import EditSettingPage from "./pages/EditSettingPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import LoginPage from "./pages/LoginPage"
import OrderDetailsPage from "./pages/OrderDetailsPage"
import OrdersPage from "./pages/OrdersPage"
import ProductsPage from "./pages/ProductsPage"
import ResetEmailPage from "./pages/ResetEmailPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import ReviewsPage from "./pages/ReviewsPage"
import SettingsPage from "./pages/SettingsPage"
import UsersPage from "./pages/UsersPage"

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					path="/"
					element={<DashboardPage />}
				/>

				<Route
					path="/category"
					element={<CategoriesPage />}
				/>
				<Route
					path="/create-category"
					element={<CreateCategoryPage />}
				/>
				<Route
					path="/edit-category/:categoryId"
					element={<EditCategoryPage />}
				/>

				<Route
					path="/product"
					element={<ProductsPage />}
				/>
				<Route
					path="/create-product"
					element={<CreateProductPage />}
				/>
				<Route
					path="/edit-product/:productId"
					element={<EditProductPage />}
				/>

				<Route
					path="/order"
					element={<OrdersPage />}
				/>
				<Route
					path="/order/:orderId"
					element={<OrderDetailsPage />}
				/>

				<Route
					path="/user"
					element={<UsersPage />}
				/>
				<Route
					path="/review"
					element={<ReviewsPage />}
				/>

				<Route
					path="/setting"
					element={<SettingsPage />}
				/>
				<Route
					path="edit-setting"
					element={<EditSettingPage />}
				/>

				<Route
					path="edit-account"
					element={<EditAccountPage />}
				/>
				<Route
					path="change-email"
					element={<ChangeEmailPage />}
				/>
				<Route
					path="reset-email/:token"
					element={<ResetEmailPage />}
				/>
				<Route
					path="change-password"
					element={<ChangePasswordPage />}
				/>
			</Route>

			<Route
				path="/login"
				element={<LoginPage />}
			/>
			<Route
				path="/forgot-password"
				element={<ForgotPasswordPage />}
			/>
			<Route
				path="/reset-password/:token"
				element={<ResetPasswordPage />}
			/>
		</Routes>
	)
}
